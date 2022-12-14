//	@ts-nocheck
import createPredicate from '../util/createPredicate';
import predicateType from '../util/predicateType';

const unionBy = <T>(
	collection: T[],
	predicate: predicateType<T> = x => !!x
): T[] => {
	const fn = createPredicate(predicate);

	let mappedValues = new Map();

	collection.forEach((element, index) => {
		const updatedElement = (fn as any)(element);
		if (updatedElement && !mappedValues.has(updatedElement)) {
			mappedValues.set(updatedElement, element);
		}
	});

	return Array.from(new Set([...mappedValues.values()]));
};

export default unionBy;
