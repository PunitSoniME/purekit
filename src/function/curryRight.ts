/**
 *
 * @param func
 * @returns
 */
const curryRight = (func: any) => {
	const expectedArgs = func.length;
	const curried = (...args: any) => {
		return args.length >= expectedArgs
			? func(...args)
			: (...args2: any) => curried(...args2.concat(args));
	};
	return curried;
};

export default curryRight;
