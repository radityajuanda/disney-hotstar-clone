import type { Episode } from '@/types/episode';

export interface Season {
	air_date: string,
	episode_count: number,
	id: number,
	name: string,
	overview: string,
	poster_path: string,
	season_number: number,
	vote_average: number,
}

export interface SeasonDetail {
	_id: string,
	air_date: string,
	episodes: Episode[],
	name: string,
	overview: string,
	id: number,
	poster_path: string,
	season_number: number,
	vote_average: number,
}