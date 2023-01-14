import identity from '../util/identity';
import IDifferenceBy from './interface/IDifferenceBy';

/**
 *
 * @param array
 * @param iteratee
 * @returns
 */
const differenceBy: IDifferenceBy = <T>(array: T[], ...iteratee: any): T[] => {
	let predicate = iteratee.pop() ?? identity;

	if (typeof predicate === 'string') {
		const prop = predicate;
		predicate = (item: any) => item[prop];
	}
	const flatArray = iteratee.flat(Infinity).map(predicate);
	return array.filter(c => !flatArray.includes(predicate(c)));
};

export default differenceBy;
