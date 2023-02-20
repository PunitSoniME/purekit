import findLastIndex from '../array/findLastIndex';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

const findLast = <T>(
	collection: T,
	iteratee: predicateType<T> = identity,
	fromIndex: number = Array.isArray(collection) ? collection.length - 1 : 0
): T | undefined => {
	const lastIndexOfRecord = findLastIndex(
		collection as T[],
		iteratee,
		0,
		fromIndex
	);
	if (lastIndexOfRecord > -1) return (collection as T[])[lastIndexOfRecord];
	return undefined;
};

export default findLast;
