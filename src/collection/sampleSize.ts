import getRandomElementFromCollection from '../helpers/getRandomElement';

/**
 * Returns an array of elements selected randomly from `collection`.
 * The array has `length` elements unless the `collection` doesn't have enough unique elements,
 * then it returns an array of unique elements of `collection`.
 *
 * @since 1.0.0
 *
 * @template T
 * @param {T} collection - The collection to sample from.
 * @param {number} [length=1] The number of elements to randomly select from the `collection`.
 * @returns {T} - Returns the array of random elements.
 *
 * @example
 * const result = sampleSize([1, 2, 3, 4], 2);
 * console.log(result); // => [2, 4]
 *
 * const result = sampleSize({ a: 1, b: 2, c: 3, d: 4 }, 3);
 * console.log(result); // => [2, 4, 1]
 */
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
