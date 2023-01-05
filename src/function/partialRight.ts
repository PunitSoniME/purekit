//	@ts-nocheck
/**
 *
 * @param func
 * @param args
 * @returns
 */
const partialRight =
	(func: Function, ...cachedArgs: any) =>
	(...args) =>
		func(...args, ...cachedArgs);

export default partialRight;
