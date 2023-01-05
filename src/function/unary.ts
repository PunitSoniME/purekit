//  @ts-nocheck
/**
 *
 * @param fn
 * @returns
 */
const unary =
	<T>(fn: Function) =>
	(arg: T) =>
		fn(arg);
export default unary;
