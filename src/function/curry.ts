/**
 * Creates a curried function from the original function.
 *
 * @since 1.0.0
 *
 * @param {Function} func - The function to curry.
 *
 * @returns {Function} - Returns the curried function.
 *
 * @example
 *
 * const sum = (a, b, c) => a + b + c;
 *
 * const curriedSum = curry(sum);
 *
 * curriedSum(1)(2)(3); // 6
 *
 * const curriedSum1 = curriedSum(1);
 * const curriedSum12 = curriedSum1(2);
 *
 * curriedSum12(3); // 6
 */
const curry = (func: Function) => {
	// define the number of expected arguments
	const expectedArgs = func.length;
	const curried = (...args: any) => {
		// if enough arugments has been passed return the
		// result of the function execution, otherwise
		// continue adding arguments to the list
		return args.length >= expectedArgs
			? func(...args)
			: (...args2: any) => curried(...args.concat(args2));
	};
	return curried;
};

export default curry;
