import concat from './concat';

/**
 *
 * @param collection
 * @param restCollection
 * @returns
 */
const xor = <T>(collection: T[], ...restCollection: T[][]): T[] => {
	const flatArray = concat(collection, ...restCollection);
	const mappedData = new Map();

	for (const elem of flatArray) {
		mappedData.set(elem, mappedData.has(elem) ? mappedData.get(elem) + 1 : 1);
	}

	let difference: T[] = [];

	mappedData.forEach((value, key) => {
		if (value === 1) difference.push(key);
	});

	return difference;
};

export default xor;
