import nth from './nth';

const pullAt = <T>(collection: T[], indexes: number | number[]): T[] => {
	if (Array.isArray(indexes)) {
		return indexes
			.reverse()
			.map(indexes => collection.splice(indexes, 1)[0])
			.reverse();
	}

	const element = [nth(collection, indexes) as T];
	collection.splice(indexes, 1);
	return element;
};

export default pullAt;
