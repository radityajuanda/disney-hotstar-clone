import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import getTopRatedMovies from "@/api/getTopRatedMovies";
import getTopRatedSeries from "@/api/getTopRatedSeries";
import getWeeklyTrendingMovies from "@/api/getWeeklyTrendingMovies";
import getWeeklyTrendingSeries from "@/api/getWeeklyTrendingSeries";

import HomeContent from "./Content";

export default async function HomePage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["getTopRatedMovies"],
    queryFn: getTopRatedMovies,
  });

  await queryClient.prefetchQuery({
    queryKey: ["getTopRatedSeries"],
    queryFn: getTopRatedSeries,
  });

  await queryClient.prefetchQuery({
    queryKey: ["getWeeklyTrendingMovies"],
    queryFn: getWeeklyTrendingMovies,
  });

  await queryClient.prefetchQuery({
    queryKey: ["getWeeklyTrendingSeries"],
    queryFn: getWeeklyTrendingSeries,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HomeContent />
    </HydrationBoundary>
  );
}
