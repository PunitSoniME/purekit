import identity from './identity';

/**
 * Checks if the given item satisfies at least one predicate function from the given array
 *
 * @since 1.0.0
 *
 * @param {Function[]} predicates An array of predicate functions to check the item against
 * @returns {Function} A function that returns true if the item satisfies at least one predicate, false otherwise
 *
 * @example
 *
 * const isString = val => typeof val === 'string';
 * const isNumber = val => typeof val === 'number';
 * const isTruthy = val => !!val;
 *
 * const check = overSome([isString, isNumber, isTruthy]);
 *
 * check('hello'); // true
 * check(42); // true
 * check(false); // true
 * check(undefined); // false
 */
const overSome =
	(predicates: any[] = [identity]): Function =>
	(item: any) =>
		predicates.some(check => check(item));
export default overSome;
