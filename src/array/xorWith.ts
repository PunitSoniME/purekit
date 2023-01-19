import concat from './concat';

/**
 *
 * @param array
 * @param comparator
 * @returns
 */
const xorWith = <T>(array: T[], ...args: any): T[] => {
	let comparator = args.pop();

	const flatArray = concat(array, ...args);
	const mappedData = new Map();

	for (const elem of flatArray) {
		const savedRecord = [...mappedData.keys()].find(d => comparator(d, elem));

		if (savedRecord) {
			mappedData.set(savedRecord, mappedData.get(savedRecord) + 1);
		} else {
			mappedData.set(elem, 1);
		}
	}

	let difference: T[] = [];

	for (const [key, value] of mappedData) {
		if (value === 1) difference.push(key);
	}

	return difference;
};

export default xorWith;
