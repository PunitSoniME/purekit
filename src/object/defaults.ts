/**
 *
 * @param args
 * @returns
 */
const defaults = (...args: any) =>
	args.reverse().reduce((acc: any, object: any) => ({ ...acc, ...object }), {});
export default defaults;
