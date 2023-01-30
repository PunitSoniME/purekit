/**
 *
 * @param value
 * @param func
 * @returns
 */
const wrap =
	(value: any, func: Function) =>
	(...args: any) =>
		func(value, ...args);

export default wrap;
