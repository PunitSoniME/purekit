//	@ts-nocheck
/**
 *
 * @param func
 * @returns
 */
const curry = (func: any) => {
	// define the number of expected arguments
	const expectedArgs = func.length;
	const curried = (...args) => {
		// if enough arugments has been passed return the
		// result of the function execution, otherwise
		// continue adding arguments to the list
		return args.length >= expectedArgs
			? func(...args)
			: (...args2) => curried(...args.concat(args2));
	};
	return curried;
};

export default curry;
