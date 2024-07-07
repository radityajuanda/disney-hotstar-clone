export interface Episode {
	air_date: string,
	crew: {
		job: string,
		department: string,
		credit_id: string,
		adult: false,
		gender: number,
		id: number,
		known_for_department: string,
		name: string,
		original_name: string,
		popularity: number,
		profile_path: string,
	}[],
	episode_number: number,
	episode_type: string,
	guest_stars: {
		character: string,
		credit_id: string,
		order: number,
		adult: boolean,
		gender: number,
		id: number,
		known_for_department: string,
		name: string,
		original_name: string,
		popularity: number,
		profile_path: string,
	}[],
	id: number,
	name: string,
	overview: string,
	production_code: string,
	runtime: number,
	season_number: number,
	show_id: number,
	still_path: string,
	vote_average: number,
	vote_count: number,
}