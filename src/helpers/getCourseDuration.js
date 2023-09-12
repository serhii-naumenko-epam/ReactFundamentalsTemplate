export const getCourseDuration = (duration) => {
	const mm = duration % 60;
	const hh = (duration-mm)/60;

	const processedMM = mm < 10 ? `0${mm}` : mm;
	const processedHH = hh < 10 ? `0${hh}` : hh;
	const durationPostfix = hh === 1 ? 'hour' : hh < 1 ? 'minutes' : 'hours';

	return `${processedHH}:${processedMM} ${durationPostfix}`;
};
