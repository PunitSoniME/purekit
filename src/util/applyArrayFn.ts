import createPredicate from './createPredicate';
import reverseCollection from './reverseCollection';

interface IApplyArrayFN<T> {
	collection: T;
	fnName: any;
	iteratee: any;
	makeItReverse?: boolean;
	fromIndex?: number;
	toIndex?: number;
	equalyCompare?: boolean;
}

const applyArrayFn = <T>({
	collection,
	fnName,
	iteratee,
	makeItReverse = false,
	fromIndex = 0,
	toIndex = -1,
	equalyCompare = true,
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

		const collectionInReverse = makeItReverse
			? reverseCollection([...collectionToTest])
			: [...collectionToTest];
		return (collectionInReverse as any)[fnName](iteratee);
	}

	if (collection && typeof collection === 'object') {
		const collectionInReverse = makeItReverse
			? reverseCollection({ ...collection })
			: { ...collection };

		return (Object.entries(collectionInReverse)[fnName] as any)(
			([key, value]: any[], index: string) =>
				iteratee(value, key, collectionInReverse, index)
		);
	}

	return (collection as any)[fnName](iteratee);
};

export default applyArrayFn;
