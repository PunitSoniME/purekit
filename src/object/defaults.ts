/**
 *
 * @param args
 * @returns
 */
const defaults = (...args: any) =>
	args.reverse().reduce((acc: any, obj: any) => ({ ...acc, ...obj }), {});
export default defaults;
