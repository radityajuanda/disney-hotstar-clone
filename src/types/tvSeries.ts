import type { Genre } from '@/types/genre';
import type { Affiliate } from '@/types/affiliate';
import type { Season } from '@/types/season';

export interface TVSeries {
	adult: boolean,
	backdrop_path: string,
	first_air_date: string,
	id: number,
	genre_ids: number[],
	media_type: string,
	name: string,
	origin_country: string[],
	original_name: string,
	original_language: string,
	overview: string,
	popularity: number,
	poster_path: string,
	release_date: string,
	title: never;
	video: boolean,
	vote_average: number,
	vote_count: number
}

export interface TVSeriesDetail extends TVSeries {
	created_by: [],
	episode_run_time: number[],
	genres: Genre[],
	homepage: string,
	in_production: boolean,
	languages: string[],
	last_air_date: string,
	last_episode_to_air: {
		id: number,
		name: string,
		overview: string,
		vote_average: number,
		vote_count: number,
		air_date: string,
		episode_number: number,
		episode_type: string,
		production_code: string,
		runtime: number,
		season_number: number,
		show_id: number,
		still_path: string,
	},
	next_episode_to_air: string | null,
	networks: Affiliate[],
	number_of_episodes: number,
	number_of_seasons: number,
	production_companies: Affiliate[],
	production_countries:
	{
		iso_3166_1: string,
		name: string,
	}[],
	runtime: never;
	seasons: Season[],
	spoken_languages: {
		english_name: string,
		iso_639_1: string,
		name: string,
	}[],
	status: string,
	tagline: string,
	type: string,
}