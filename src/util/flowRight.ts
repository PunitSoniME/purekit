/**
 *
 * @param funcs
 * @returns
 */
const flowRight =
	(funcs: Function | Function[]) =>
	(...args: any) =>
		(funcs as Function[])
			.reverse()
			.reduce((prev, fnc) => [fnc(...prev)], args)[0];
export default flowRight;
