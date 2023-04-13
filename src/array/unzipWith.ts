import createPredicate from '../helpers/createPredicate';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';
import unzip from './unzip';

/**
 * This method is like `unzip` except that it accepts `iteratee` to specify how regrouped values should be combined.
 *
 * @template T
 * @param {any[][]} array - The array of grouped elements to process.
 * @param {Function} [predicate=identity] - The iteratee to combine regrouped values.
 * @returns {any[]} - Returns the new array of regrouped elements.
 *
 * @example
 * const zipped = zip(['a', 'b'], [1, 2], [true, false]);
 * // => [['a', 1, true], ['b', 2, false]]
 *
 * const unzipped = unzipWith(zipped, (str: string, num: number, bool: boolean) => `${str}${num}${bool}`; );
 * // => ['a1true', 'b2false']
 */
const unzipWith = (
	array: any[][],
	predicate: predicateType = identity
): any[] => {
	const fn = createPredicate(predicate);
	const unzipped = unzip(array);

	return unzipped.map(m => {
		return (fn as any)(...m);
	});
};

export default unzipWith;
