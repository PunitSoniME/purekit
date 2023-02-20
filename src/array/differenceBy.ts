import identity from '../util/identity';
import IDifferenceBy from './interface/IDifferenceBy';

/**
 * Returns a new array containing all values from the first array that do not exist in any of the other arrays, using a predicate function to determine their equality.
 *
 * @template T
 * @param {T[]} array - The array to inspect.
 * @param {...any[]} args - The arrays to exclude.
 * @param {string | ((item: any) => any)} [predicate=identity] - The function invoked per iteration to determine equality.
 * @returns {T[]} The new array of filtered values.
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
