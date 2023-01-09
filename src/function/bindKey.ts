//	@ts-nocheck
/**
 *
 * @param obj
 * @param method
 * @param args
 * @returns
 */
const bindKey =
	(object: any, method: any, ...args: any) =>
	(...bound) =>
		object[method](...args, ...bound);

export default bindKey;
