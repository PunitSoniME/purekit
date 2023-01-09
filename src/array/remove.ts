import createPredicate from '../helpers/createPredicate';

const remove = <T>(
	collection: T[],
	predicate: (item: T) => boolean = x => !!x
): T[] => {
	const fn = createPredicate(predicate);

	let removedArray: T[] = [];
	let updatedCollection: T[] = [];

	collection.forEach((element, index) => {
		if ((fn as any)(collection[index])) {
			removedArray.push(element);
		} else {
			updatedCollection.push(element);
		}
	});

	collection = [...updatedCollection];
	return removedArray;
};

export default remove;
