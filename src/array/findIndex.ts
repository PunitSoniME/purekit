import createPredicate from '../util/createPredicate';

const findIndex = <T>(
	collection: T[],
	predicate:
		| string
		//  | [string, any] //  this type is giving lint error of map
		| Record<string, any>
		| ((item: T) => boolean) = x => !!x,
	fromIndex = 0
): number => {
	if (!Array.isArray(collection)) return -1;
	const fn = createPredicate(predicate);
	for (let i = fromIndex; i < collection.length; i++) {
		if ((fn as any)(collection[i], i, collection)) {
			return i;
		}
	}
	return -1;
};

export default findIndex;
