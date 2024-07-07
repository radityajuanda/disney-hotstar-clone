'use client';

import { useCallback, useMemo, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';

import { useWatchlistState } from '@/contexts/WatchlistContext';

import Input from '@/components/Input';
import PosterSection from '@/modules/PosterSection';

import styles from './page.module.css';

export default function Watchlist() {
  const { watchlist } = useWatchlistState();
  const [search, setSearch] = useState('');

  const handleInputChange = useCallback((value: string) => {
    setSearch(value);
  }, []);

  const filteredShows = useMemo(() => {
    if (!search) return watchlist;

    return watchlist.filter((show) => {
      const lowerCaseSearched = search.toLowerCase();

      if (show.title) return show.title.toLowerCase().includes(lowerCaseSearched);
      if (show.name) return show.name.toLowerCase().includes(lowerCaseSearched);

      return false;
    });
  }, [search, watchlist]);

  return (
    <div className={styles.watchlistPage}>
      <Input
        height="64px"
        icon={<SearchOutlined />}
        onChange={handleInputChange}
        placeholder="Search your saved movies, shows, and more..."
        value={search}
      />
      <PosterSection shows={filteredShows} title="Watchlist" />
    </div>
  );
}
