/**
 *
 * @param func
 * @param args
 * @returns
 */
const partialRight =
	(func: Function, ...cachedArgs: any) =>
	(...args: any) =>
		func(...args, ...cachedArgs);

export default partialRight;
