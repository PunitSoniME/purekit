import createPredicate from '../util/createPredicate';

const sortedUniqBy = <T>(
	collection: T[],
	predicate: (item: T) => number | boolean = x => !!x
): T[] => {
	const fn = createPredicate(predicate);
	let mappedValues = new Map();

	collection.forEach(element => {
		const updatedElement = (fn as any)(element);
		if (updatedElement && !mappedValues.has(updatedElement)) {
			mappedValues.set(updatedElement, element);
		}
	});

	collection = Array.from(new Set([...mappedValues.values()]));
	return collection;
};
export default sortedUniqBy;
