// @ts-nocheck
/**
 *
 * @param fn
 * @param ctx
 * @param boundArgs
 * @returns
 */
const bind = (fn: Function, ctx: any, ...boundArgs: any) =>
	fn.bind(ctx, ...boundArgs);

export default bind;
