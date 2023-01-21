/**
 *
 * @param times
 * @param fn
 * @returns
 */
const after = (times: number, fn: Function): any => {
	let counter = 0;
	times = times || 0;

	return (...args: any) => {
		counter++;

		if (counter >= times) {
			return fn(...args);
		}
	};
};

export default after;
