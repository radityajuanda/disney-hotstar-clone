'use client';

import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';

import getTopRatedMovies from '@/api/getTopRatedMovies';
import getTopRatedSeries from '@/api/getTopRatedSeries';
import getWeeklyTrendingMovies from '@/api/getWeeklyTrendingMovies';
import getWeeklyTrendingSeries from '@/api/getWeeklyTrendingSeries';

import type { Show } from '@/types/show';

import PosterCarousel from '@/modules/PosterCarousel';

import styles from './Content.module.css';

const HomeContent = () => {
  const { data: topRatedMovies } = useQuery({
    queryKey: ['getTopRatedMovies'],
    queryFn: getTopRatedMovies,
  });

  const { data: topRatedSeries } = useQuery({
    queryKey: ['getTopRatedSeries'],
    queryFn: getTopRatedSeries,
  });

  const { data: weeklyTrendingMovies } = useQuery({
    queryKey: ['getWeeklyTrendingMovies'],
    queryFn: getWeeklyTrendingMovies,
  });

  const { data: weeklyTrendingSeries } = useQuery({
    queryKey: ['getWeeklyTrendingSeries'],
    queryFn: getWeeklyTrendingSeries,
  });

  const combinedTopRatedShows = useMemo(() => {
    const combinedShows: Show[] = [];

    topRatedMovies?.results.forEach((movie, index) => {
      combinedShows.push({ ...movie, media_type: 'movie' });

      if (topRatedSeries?.results[index]) {
        combinedShows.push({
          ...topRatedSeries?.results[index],
          media_type: 'tv',
        });
      }
    });

    return combinedShows;
  }, [topRatedMovies, topRatedSeries]);

  return (
    <div className={styles.homeContent}>
      <PosterCarousel
        shows={combinedTopRatedShows}
        title="Top Rated Movies & TV Series"
      />
      <PosterCarousel
        shows={weeklyTrendingMovies?.results ?? []}
        title="Top Rated Movie of the week"
      />
      <PosterCarousel
        shows={weeklyTrendingSeries?.results ?? []}
        title="Top Rated TV Series of the week"
      />
    </div>
  );
};

export default HomeContent;
