/**
 *
 * @param func
 * @param delay
 * @param param2
 * @returns
 */
const debounce = (func: Function, delay: number, { leading }: any = {}) => {
	console.info('alt-lodash - debounce is still under work, it might not give 100% result as you expected');
	
	let timerId: any;

	return (...args: any) => {
		if (!timerId && leading) {
			func(...args);
		}
		clearTimeout(timerId);

		timerId = setTimeout(() => func(...args), delay);
	};
};

export default debounce;
