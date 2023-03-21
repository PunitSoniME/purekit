/**
 * Creates a function that iterates over pairs of predicates and functions, returning the result of the first function that returns truthy for the corresponding predicate.
 *
 * @since 1.0.0
 *
 * @param {Array<Array>} pairs - The predicate-function pairs.
 *
 * @return {Function} - The new function.
 *
 * @example
 *
 * const func = cond([
 *   [x => x > 5, x => 'greater than 5'],
 *   [x => x === 5, x => 'equals 5'],
 *   [x => x < 5, x => 'less than 5']
 * ]);
 *
 * func(10);
 * // => 'greater than 5'
 *
 * func(5);
 * // => 'equals 5'
 *
 * func(2);
 * // => 'less than 5'
 */
const cond =
	(pairs: any[]) =>
	(...item: any[]) => {
		for (const [predicate, fn] of pairs) {
			if (predicate(...item)) {
				return fn(...item);
			}
		}
	};

export default cond;
