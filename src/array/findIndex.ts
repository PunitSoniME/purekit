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
	if (typeof predicate === 'number')
		return (collection as number[]).indexOf(predicate);

	const fn = createPredicate(predicate);
	for (let i = fromIndex; i < collection.length; i++) {
		if ((fn as any)(collection[i], i, collection)) {
			return i;
		}
	}
	return -1;
};

export default findIndex;
