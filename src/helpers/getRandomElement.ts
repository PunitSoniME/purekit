/**
 * Returns the random elemen from passed Array or Object
 * @param collection Array | Object
 * @returns { element, restElements } -
 */
const getRandomElementFromCollection = (collection: any): any => {
	if (Array.isArray(collection)) {
		const randomIndex = Math.floor(Math.random() * collection.length);

		return {
			element: collection[randomIndex],
			restElements: [
				...collection.filter((_: any, index: number) => randomIndex !== index),
			],
		};
	} else if (collection instanceof Object) {
		const keys = Object.keys(collection);
		const randomIndex = Math.floor(Math.random() * keys.length);

		const property = keys[randomIndex];

		let { [property]: element, ...rest } = collection;

		return {
			element: collection[randomIndex],
			restElements: rest,
		};
	}

	return {
		elemenet: null,
		restElements: [],
	};
};

export default getRandomElementFromCollection;
