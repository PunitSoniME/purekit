//	@ts-nocheck
/**
 *
 * @param func
 * @param delay
 * @param param2
 * @returns
 */
const debounce = (func: Function, delay: number, { leading }: any = {}) => {
	let timerId: any;

	return (...args) => {
		if (!timerId && leading) {
			func(...args);
		}
		clearTimeout(timerId);

		timerId = setTimeout(() => func(...args), delay);
	};
};

export default debounce;
