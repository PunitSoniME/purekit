//	@ts-nocheck
/**
 *
 * @param fn
 * @returns
 */
const once = (fn: function) => {
	let called = false;
	let result: any;
	return (...args) => {
		if (!called) {
			result = fn(...args);
			called = true;
		}
		return result;
	};
};

export default once;
