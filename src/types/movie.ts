import type { Genre } from '@/types/genre';
import type { Affiliate } from '@/types/affiliate';

export interface Movie {
	adult: boolean,
	backdrop_path: string,
	id: number,
	genre_ids: number[],
	media_type: string,
	name: never;
	original_language: string,
	original_title: string,
	overview: string,
	popularity: number,
	poster_path: string,
	release_date: string,
	title: string,
	video: boolean,
	vote_average: number,
	vote_count: number,
}

export interface MovieDetail extends Omit<Movie, 'genre_ids' | 'video' | 'media_type'> {
	belongs_to_collection: number[],
	budget: number,
	first_air_date: never;
	genres: Genre[];
	imdb_id: string,
	production_companies: Affiliate[],
	production_countries: {
		iso_3166_1: string,
		name: string,
	}[],
	revenue: number,
	runtime: number,
	seasons: never;
	spoken_languages: {
		english_name: string,
		iso_639_1: string,
		name: string,
	}[],
	status: string,
	tagline: string,
}
