import { API_READ_ACCESS_TOKEN } from '@/constants/token';
import { API_BASE_URL } from '@/constants/url';

import type { APIListResponse } from "@/types/api";
import type { TVSeries } from "@/types/tvSeries";

const getTopRatedSeries = async (): Promise<APIListResponse<TVSeries[]>> => {
	const res = await fetch(`${API_BASE_URL}/tv/top_rated`, {
		method: 'GET',
		headers: {
			authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
		}
	});

	return res.json();
}

export default getTopRatedSeries;
