// @ts-nocheck

/**
 *
 * @param fn
 * @param arity
 * @returns
 */
const ary =
	(fn: Function, arity: any) =>
	(...args) =>
		fn(...args.slice(0, arity));

export default ary;
