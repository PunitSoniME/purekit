import createPredicate from '../util/createPredicate';
import predicateType from '../util/predicateType';

const takeWhile = <T>(collection: T[], predicate: predicateType<T>): T[] => {
	if (collection.length === 0) return collection;

	const fn = createPredicate(predicate);
	let collectionToReturn: T[] = [];

	for (let i = 0; i < collection.length; i++) {
		if ((fn as any)(collection[i])) {
			collectionToReturn.push(collection[i]);
		} else {
			return collectionToReturn;
		}
	}

	return [];
};
export default takeWhile;
