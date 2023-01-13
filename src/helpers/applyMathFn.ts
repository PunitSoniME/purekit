import IApplyArrayFN from '../interface/IApplyArrayFN';
import createPredicate from './createPredicate';

const applyMathFn = <T>({
	collection,
	fnName,
	iteratee,
	fromIndex = 0,
	toIndex = -1,
	equalyCompare = true,
	initialValue,
}: IApplyArrayFN<T>) => {
	iteratee = createPredicate(iteratee, equalyCompare);

	if (Array.isArray(collection)) {
		const collectionToTest =
			fromIndex > 0
				? [
						...collection.slice(
							fromIndex,
							toIndex === -1 ? collection.length : toIndex
						),
				  ]
				: [...collection];

		if (fnName === 'reduce')
			return (collectionToTest as any)[fnName](iteratee, initialValue);

		return (collectionToTest as any)[fnName](iteratee);
	}

	if (collection && typeof collection === 'object') {
		if (fnName === 'reduce') {
			return (Object.entries(collection)[fnName] as any)(
				(result: any, [key, value]: any[], index: number) =>
					iteratee(result, value, key, collection, index),
				initialValue
			);
		}

		return (Object.entries(collection)[fnName] as any)(
			([key, value]: any[], index: number) =>
				iteratee(value, key, collection, index)
		);
	}

	if (fnName === 'reduce')
		return (collection as any)[fnName](iteratee, initialValue);

	return (collection as any)[fnName](iteratee);
};

export default applyMathFn;
