'use client';

import { useCallback, useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useDebouncedCallback } from 'use-debounce';
import { SearchOutlined } from '@ant-design/icons';

import getSearchResultsByKeyword from '@/api/getSearchResultsByKeyword';

import Input from '@/components/Input';
import PosterSection from '@/modules/PosterSection';

import styles from './page.module.css';

export default function Explore() {
  const [search, setSearch] = useState('');
  const [tempSearch, setTempSearch] = useState('');

  const { data: searchResults } = useQuery({
    queryKey: ['getSearchResultsByKeyword', search],
    queryFn: () => getSearchResultsByKeyword(search),
    enabled: Boolean(search),
  });

  const debouncedSearch = useDebouncedCallback((value: string) => {
    setSearch(value);
  }, 500);

  const handleInputChange = useCallback(
    (value: string) => {
      setTempSearch(value);

      if (value) {
        debouncedSearch(value);
      } else {
        setSearch('');
      }
    },
    [debouncedSearch]
  );

  const filteredResults = useMemo(() => {
    return {
      movie: searchResults?.results.filter((show) => show.media_type === 'movie') ?? [],
      tv: searchResults?.results.filter((show) => show.media_type === 'tv') ?? [],
    }
  }, [searchResults]);

  return (
    <div className={styles.explore}>
      <Input
        height="64px"
        icon={<SearchOutlined />}
        onChange={handleInputChange}
        placeholder="Movies, shows and more"
        value={tempSearch}
      />
      {Boolean(filteredResults.movie.length) && (
        <PosterSection shows={filteredResults.movie} title="Movie Results" />
      )}
      {Boolean(filteredResults.tv.length) && (
        <PosterSection shows={filteredResults.tv} title="TV Series Results" />
      )}
    </div>
  );
}
