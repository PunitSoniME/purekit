import createPredicate from '../helpers/createPredicate';
import predicateType from '../helpers/predicateType';

const takeRightWhile = <T>(
	collection: T[],
	predicate: predicateType<T>
): T[] => {
	if (collection.length === 0) return collection;

	const fn = createPredicate(predicate);
	let collectionToReturn: T[] = [];

	for (let i = collection.length - 1; i >= 0; i--) {
		if ((fn as any)(collection[i])) {
			collectionToReturn.push(collection[i]);
		} else {
			return collectionToReturn.reverse();
		}
	}

	return [];
};
export default takeRightWhile;
