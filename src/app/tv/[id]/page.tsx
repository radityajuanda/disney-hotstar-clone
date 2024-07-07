import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import getTVSeriesDetail from '@/api/getTVSeriesDetail';
import getSimilarTVSeries from '@/api/getSimilarTVSeries';

import MovieDetailContent from './Content';

interface TVSeriesDetailPageProps {
  params: { id: number };
}

export default async function TVSeriesDetailPage({
  params: { id },
}: TVSeriesDetailPageProps) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['getTVSeriesDetail', id],
    queryFn: () => getTVSeriesDetail(Number(id)),
  });

  await queryClient.prefetchQuery({
    queryKey: ['getSimilarTVSeries', id],
    queryFn: () => getSimilarTVSeries(Number(id)),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MovieDetailContent id={id} />
    </HydrationBoundary>
  );
}
