import createPredicate from './createPredicate';
import reverseCollection from './reverseCollection';

interface IApplyArrayFN<T> {
	collection: T;
	fnName: any;
	fn: any;
	makeItReverse?: boolean;
	fromIndex?: number;
	toIndex?: number;
}

const applyArrayFn = <T>({
	collection,
	fnName,
	fn,
	makeItReverse = false,
	fromIndex = 0,
	toIndex = -1
}: IApplyArrayFN<T>) => {
	fn = createPredicate(fn);
	
	if (Array.isArray(collection)) {
		const collectionToTest = fromIndex > 0 ? [...collection.slice(fromIndex, toIndex === -1 ? collection.length : toIndex)] : [...collection];

		const collectionInReverse = makeItReverse ? reverseCollection([...collectionToTest]) : [...collectionToTest]
		return (collectionInReverse as any)[fnName](fn);
	}

	if (collection && typeof collection === 'object') {
		const collectionInReverse = makeItReverse ? reverseCollection({ ...collection }) : { ...collection };

		return (Object.entries(collectionInReverse)[
			fnName
		] as any)(([key, value]: any[], index: string) =>
			fn(value, key, collectionInReverse, index)
		);
	}
};

export default applyArrayFn;
