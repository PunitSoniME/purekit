import identity from '../util/identity';
import IDifferenceBy from './interface/IDifferenceBy';

/**
 *
 * @param array
 * @param args
 * @returns
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
