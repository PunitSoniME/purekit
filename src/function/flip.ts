/**
 *
 * @param func
 * @returns
 */
const flip =
	(func: any) =>
	(...args: any) =>
		func(...args.reverse());

export default flip;
