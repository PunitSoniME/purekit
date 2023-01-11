/**
 *
 * @param idx
 * @returns
 */
const nthArg =
	(idx: number = 0) =>
	(...args: any) =>
		args.slice(idx, idx + 1)[0];
export default nthArg;
