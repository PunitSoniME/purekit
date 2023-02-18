/**
 *
 * @param func
 * @returns
 */
const negate =
	(func: any) =>
	(...args: any) =>
		!func(...args);

export default negate;
