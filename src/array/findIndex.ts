import createPredicate from '../util/createPredicate';

const findIndex = <T>(
	collection: T[],
	predicate:
		| string
		| number
		| Record<string, any>
		| ((item: T) => boolean) = x => !!x,
	fromIndex = 0
): number => {
	const fn = createPredicate(predicate);

	if (fn === undefined) return collection.indexOf(predicate as T);

	for (let i = fromIndex; i < collection.length; i++) {
		if ((fn as any)(collection[i], i, collection)) {
			return i;
		}
	}
	return -1;
};

export default findIndex;
