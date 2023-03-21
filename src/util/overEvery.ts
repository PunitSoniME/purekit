import identity from './identity';

/**
 * Checks if all of the given predicates return truthy values when invoked with the arguments provided.
 *
 * @since 1.0.0
 *
 * @param {Function[]} [predicates = [identity]] The predicates to check.
 * @return {Function} - Returns the new composite function.
 *
 * @example
 *
 * const isEven = n => n % 2 === 0;
 * const isPositive = n => n > 0;
 * const isEvenAndPositive = overEvery([isEven, isPositive]);
 *
 * isEvenAndPositive(4); // true
 * isEvenAndPositive(5); // false
 */
const overEvery =
	(predicates: any[] = [identity]): Function =>
	(item: any) =>
		predicates.every(check => check(item));
export default overEvery;
