/**
 *
 * @param func
 * @param args
 * @returns
 */
const attempt = (func: Function, ...args: any): any => {
	try {
		return func(...args);
	} catch (e) {
		return e;
	}
};
export default attempt;
