import { API_READ_ACCESS_TOKEN } from '@/constants/token';
import { API_BASE_URL } from '@/constants/url';

import type { TVSeriesDetail } from '@/types/tvSeries';

const getTVSeriesDetail = async (id: number): Promise<TVSeriesDetail> => {
	const res = await fetch(`${API_BASE_URL}/tv/${id}`, {
		method: 'GET',
		headers: {
			authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
		}
	});

	return res.json();
}

export default getTVSeriesDetail;
