import { API_READ_ACCESS_TOKEN } from '@/constants/token';
import { API_BASE_URL } from '@/constants/url';

import type { SeasonDetail } from '@/types/season';

const getTVSeriesSeasonDetail = async (id: number, season: number): Promise<SeasonDetail> => {
	const res = await fetch(`${API_BASE_URL}/tv/${id}/season/${season}`, {
		method: 'GET',
		headers: {
			authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
		}
	});

	return res.json();
}

export default getTVSeriesSeasonDetail;
