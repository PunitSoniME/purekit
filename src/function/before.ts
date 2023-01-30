/**
 *
 * @param times
 * @param fn
 * @returns
 */
const before = (times: number, fn: Function) => {
	let counter = 0;
	let res: any;

	return (...args: any) => {
		counter++;

		if (counter < times) {
			res = fn(...args);
			return res;
		} else {
			return res;
		}
	};
};

export default before;
