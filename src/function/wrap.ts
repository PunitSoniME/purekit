//  @ts-nocheck
/**
 *
 * @param value
 * @param func
 * @returns
 */
const wrap =
	(value: any, func: Function) =>
	(...args) =>
		func(value, ...args);

export default wrap;
