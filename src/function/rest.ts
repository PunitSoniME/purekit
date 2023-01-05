//	@ts-nocheck
/**
 *
 * @param func
 * @returns
 */
const rest =
	(func: any) =>
	(first: any, ...args: any) =>
		func(first, args);

export default rest;
