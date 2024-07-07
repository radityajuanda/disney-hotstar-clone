import { API_READ_ACCESS_TOKEN } from '@/constants/token';
import { API_BASE_URL } from '@/constants/url';

import type { APIListResponse } from "@/types/api";
import type { TVSeries } from '@/types/tvSeries';

const getSimilarTVSeries = async (id: number): Promise<APIListResponse<TVSeries[]>> => {
	const res = await fetch(`${API_BASE_URL}/tv/${id}/similar`, {
		method: 'GET',
		headers: {
			authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
		}
	});

	return res.json();
}

export default getSimilarTVSeries;
