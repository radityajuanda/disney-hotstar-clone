import { API_READ_ACCESS_TOKEN } from '@/constants/token';
import { API_BASE_URL } from '@/constants/url';

import type { APIListResponse } from "@/types/api";
import type { Movie } from '@/types/movie';

const getSimilarMovies = async (id: number): Promise<APIListResponse<Movie[]>> => {
	const res = await fetch(`${API_BASE_URL}/movie/${id}/similar`, {
		method: 'GET',
		headers: {
			authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
		}
	});

	return res.json();
}

export default getSimilarMovies;
