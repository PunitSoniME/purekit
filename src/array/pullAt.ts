import nth from './nth';

const pullAt = <T>(collection: T[], indexes: number | number[]): T[] => {
	let pulledElements: T[] = [];

	const pullRecord = (index: number) => {
		const nthRecord = nth(collection, index) as T;

		if (nthRecord) {
			pulledElements.push(nthRecord);
		}
		collection = collection.filter((_, i) => indexes !== i);
	};

	if (Array.isArray(indexes)) {
		const positiveIndexes = new Set([
			...indexes.map((index) =>
				index >= 0 ? index : collection.length + index
			),
		]);

		positiveIndexes.forEach((index) => {
			pullRecord(index);
		});
	} else {
		pullRecord(indexes);
	}

	return pulledElements;
};

export default pullAt;
