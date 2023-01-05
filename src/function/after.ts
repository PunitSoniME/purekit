/**
 *
 * @param times
 * @param fn
 * @returns
 */
const after = (times: number, fn: Function): any => {
	let counter = 0;

	//  @ts-ignore
	return (...args) => {
		counter++;

		if (counter >= times) {
			return fn(...args);
		}
	};
};

export default after;
