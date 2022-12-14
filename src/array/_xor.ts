//	@ts-nocheck
import concat from './concat';

const xor = <T>(
	collection: T[],
	secondCollection: T[],
	...restCollection: T[][]
): T[] => {
	const _difference = new Set(collection);
	const flatArray = new Set([...concat(secondCollection, ...restCollection)]);

	for (const elem of flatArray) {
		if (_difference.has(elem)) {
			_difference.delete(elem);
		} else {
			_difference.add(elem);
		}
	}

	return Array.from(_difference);
};

export default xor;
