//	@ts-nocheck
/**
 *
 * @param obj
 * @param method
 * @param args
 * @returns
 */
const bindKey =
	(obj: any, method: any, ...args: any) =>
	(...bound) =>
		obj[method](...args, ...bound);

export default bindKey;
