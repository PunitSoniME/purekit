import getRandomElementFromCollection from '../util/getRandomElement';

const sampleSize = <T>(collection: T, length: number = 1): T => {
	let count = 0;
	let copiedCollection;
	let collectionToReturn: any[] = [];

	if (Array.isArray(collection)) {
		copiedCollection = [...(collection as any[])];

		do {
			const { element, restElements } =
				getRandomElementFromCollection(copiedCollection);
			collectionToReturn.push(element);

			if (restElements.length === 0) count = length;
			else {
				copiedCollection = [...restElements];
				++count;
			}
		} while (count !== length);

		return collectionToReturn as T;
	} else if (typeof collection === 'object') {
		copiedCollection = { ...collection };

		do {
			const { element, restElements } =
				getRandomElementFromCollection(copiedCollection);
			collectionToReturn.push(Object.values(element)[0]);
			copiedCollection = { ...restElements };
			++count;
		} while (count !== length);

		return collectionToReturn as T;
	}
	return collection;
};
export default sampleSize;
