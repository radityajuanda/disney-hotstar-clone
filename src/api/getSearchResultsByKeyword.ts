import { API_READ_ACCESS_TOKEN } from '@/constants/token';
import { API_BASE_URL } from '@/constants/url';

import type { APIListResponse } from "@/types/api";
import type { Show } from '@/types/show';

const getSearchResultsByKeyword = async (keyword?: string): Promise<APIListResponse<Show[]>> => {
	const res = await fetch(`${API_BASE_URL}/search/multi?query=${keyword}`, {
		method: 'GET',
		headers: {
			authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
		}
	});

	return res.json();
}

export default getSearchResultsByKeyword;
