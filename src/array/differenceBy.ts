import identity from '../util/identity';
import IDifferenceBy from './interface/IDifferenceBy';

/**
 * Returns the difference between the first array and other arrays or values, using a comparator function to compare values.
 *
 * @since 1.0.0
 *
 * @param {Array} array - The array to inspect.
 * @param {...Array|Function|string} args - The values or arrays to exclude.
 * If a string is provided as the last argument, it is used as a property name to extract from each element of the array.
 * If a function is provided as the last argument, it is used to extract a comparison value from each element in the arrays to exclude.
 * @param {Function|string} [iteratee=identity] - The iteratee invoked per element to generate the criterion by which uniqueness is computed.
 * If a string is provided instead, it will be used to create a property accessor function.
 * If iteratee is not provided, it defaults to identity.
 *
 * @returns {Array} - Returns the new array of filtered values.
 *
 * @example
 * const arr1 = [2.1, 1.2, 3.3];
 * const arr2 = [3.4, 2.5];
 * console.log(differenceBy(arr1, arr2, Math.floor)); // [1.2]
 *
 * const arr3 = [ { 'x': 2 }, { 'x': 1 } ];
 * const arr4 = [ { 'x': 1 } ];
 * console.log(differenceBy(arr3, arr4, 'x')); // [ { x: 2 } ]
 *
 * const arr5 = [{ x: 1 }, { x: 2 }, { x: 3 }];
 * console.log(differenceBy(arr5, { x: 2 }, 'x')); // [{ x: 1 }, { x: 3 }]
 */
const differenceBy: IDifferenceBy = <T>(array: T[], ...args: any): T[] => {
	let predicate = args.pop() ?? identity;

	if (typeof predicate === 'string') {
		const prop = predicate;
		predicate = (item: any) => item[prop];
	}
	const flatArray = args.flat(Infinity).map(predicate);
	return array.filter(c => !flatArray.includes(predicate(c)));
};

export default differenceBy;
