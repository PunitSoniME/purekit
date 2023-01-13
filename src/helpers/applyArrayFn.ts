import IApplyArrayFN from '../interface/IApplyArrayFN';
import createPredicate from './createPredicate';
import reverseCollection from './reverseCollection';

const applyArrayFn = <T>({
	collection,
	fnName,
	iteratee,
	checkFromEnd = false,
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

		const collectionInReverse = checkFromEnd
			? reverseCollection([...collectionToTest])
			: [...collectionToTest];

		if (fnName === 'reduce')
			return (collectionInReverse as any)[fnName](iteratee, initialValue);

		return (collectionInReverse as any)[fnName](iteratee);
	}

	if (collection && typeof collection === 'object') {
		const collectionInReverse = checkFromEnd
			? reverseCollection({ ...collection })
			: { ...collection };

		if (fnName === 'reduce') {
			return (Object.entries(collectionInReverse)[fnName] as any)(
				(result: any, [key, value]: any[], index: number) =>
					iteratee(result, value, key, collectionInReverse, index),
				initialValue
			);
		}

		return (Object.entries(collectionInReverse)[fnName] as any)(
			([key, value]: any[], index: number) =>
				iteratee(value, key, collectionInReverse, index)
		);
	}

	if (fnName === 'reduce')
		return (collection as any)[fnName](iteratee, initialValue);

	return (collection as any)[fnName](iteratee);
};

export default applyArrayFn;
