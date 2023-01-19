import createPredicate from '../helpers/createPredicate';
import identity from '../util/identity';
import concat from './concat';

/**
 *
 * @param array
 * @param args
 * @returns
 */
const xorBy = <T>(array: T[], ...args: any): T[] => {
	let iteratee = args.pop() ?? identity;
	const fn = createPredicate(iteratee);

	const flatArray = concat(array, ...args);
	const mappedData = new Map();

	for (const elem of flatArray) {
		const modifiedData = (fn as any)(elem);
		mappedData.set(
			modifiedData,
			mappedData.has(modifiedData)
				? [...mappedData.get(modifiedData), elem]
				: [elem]
		);
	}

	let difference: T[] = [];

	mappedData.forEach(value => {
		if (value.length === 1) difference.push(value[0]);
	});

	return difference;
};

export default xorBy;
