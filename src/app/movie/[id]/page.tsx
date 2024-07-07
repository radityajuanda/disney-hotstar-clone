import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import getMovieDetail from '@/api/getMovieDetail';
import getSimilarMovies from '@/api/getSimilarMovies';

import MovieDetailContent from './Content';

interface MovieDetailPageProps {
  params: { id: number };
}

export default async function MovieDetailPage({
  params: { id },
}: MovieDetailPageProps) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['getMovieDetail', id],
    queryFn: () => getMovieDetail(Number(id)),
  });

  await queryClient.prefetchQuery({
    queryKey: ['getSimilarMovies', id],
    queryFn: () => getSimilarMovies(Number(id)),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MovieDetailContent id={id} />
    </HydrationBoundary>
  );
}
