/**
 *
 * @param fn
 * @param arity
 * @returns
 */
const ary =
	(fn: Function, arity?: number) =>
	(...args: any) =>
		fn(...args.slice(0, arity));

export default ary;
