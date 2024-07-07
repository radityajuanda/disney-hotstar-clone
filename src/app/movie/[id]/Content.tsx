'use client';

import { useQuery } from '@tanstack/react-query';

import getMovieDetail from '@/api/getMovieDetail';
import getSimilarMovies from '@/api/getSimilarMovies';

import ShowDetailHero from '@/modules/ShowDetailHero';
import PosterCarousel from '@/modules/PosterCarousel';

import styles from './Content.module.css';

interface MovieDetailContentProps {
  id: number;
}

const MovieDetailContent = ({ id }: MovieDetailContentProps) => {
  const { data: movieDetail } = useQuery({
    queryKey: ['getMovieDetail', id],
    queryFn: () => getMovieDetail(Number(id)),
  });

  const { data: similarMovies } = useQuery({
    queryKey: ['getSimilarMovies', id],
    queryFn: () => getSimilarMovies(Number(id)),
  });

  if (!movieDetail) return null;
  return (
    <div className={styles.movieDetailContent}>
      <ShowDetailHero showDetail={movieDetail} />
      <PosterCarousel
        shows={similarMovies?.results ?? []}
        title="More Like This"
      />
    </div>
  );
};

export default MovieDetailContent;
