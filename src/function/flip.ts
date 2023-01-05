//  @ts-nocheck
/**
 *
 * @param func
 * @returns
 */
const flip =
	(func: any) =>
	(...args) =>
		func(...args.reverse());

export default flip;
