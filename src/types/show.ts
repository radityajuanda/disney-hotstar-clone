import type { Movie, MovieDetail } from '@/types/movie';
import type { TVSeries, TVSeriesDetail } from "@/types/tvSeries";

export type Show = Movie | TVSeries;
export type ShowDetail = MovieDetail | TVSeriesDetail;
