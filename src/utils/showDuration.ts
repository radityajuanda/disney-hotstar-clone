export const convertShowDurationToString = (runtime: number) => {
	const hours = Math.floor(runtime / 60);
	const minutes = runtime % 60;

	return `${hours > 0 ? `${hours}h ` : ''}${minutes}m`;
}