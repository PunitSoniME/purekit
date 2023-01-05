//  @ts-nocheck
/**
 *
 * @param func
 * @returns
 */
const negate =
	(func: any) =>
	(...args) =>
		!func(...args);

export default negate;
