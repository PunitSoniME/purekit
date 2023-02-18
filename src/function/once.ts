/**
 *
 * @param fn
 * @returns
 */
const once = (fn: Function) => {
	let called = false;
	let result: any;
	return (...args: any) => {
		if (!called) {
			result = fn(...args);
			called = true;
		}
		return result;
	};
};

export default once;
