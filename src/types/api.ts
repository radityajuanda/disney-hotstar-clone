export interface APIListResponse<T = object> {
	page: number;
	results: T;
	total_pages: number;
	total_results: number;
}