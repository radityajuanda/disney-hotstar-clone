import { API_READ_ACCESS_TOKEN } from '@/constants/token';
import { API_BASE_URL } from '@/constants/url';

import type { MovieDetail } from '@/types/movie';

const getMovieDetail = async (id: number): Promise<MovieDetail> => {
	const res = await fetch(`${API_BASE_URL}/movie/${id}`, {
		method: 'GET',
		headers: {
			authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
		}
	});

	return res.json();
}

export default getMovieDetail;
