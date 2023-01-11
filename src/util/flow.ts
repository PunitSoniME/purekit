/**
 *
 * @param funcs
 * @returns
 */
const flow =
	(funcs: Function | Function[]) =>
	(...args: any) =>
		(funcs as Function[]).reduce((prev, fnc) => [fnc(...prev)], args)[0];
export default flow;
