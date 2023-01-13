import nth from './nth';

/**
 *
 * @param array
 * @param indexes
 * @returns
 */
const pullAt = <T>(array: T[], indexes: number | number[]): T[] => {
	if (Array.isArray(indexes)) {
		return indexes
			.reverse()
			.map(indexes => array.splice(indexes, 1)[0])
			.reverse();
	}

	const element = [nth(array, indexes) as T];
	array.splice(indexes, 1);
	return element;
};

export default pullAt;
