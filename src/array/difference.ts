import concat from './concat';

const difference = <T>(
	collection: T[] | null | undefined,
	...restCollections: T[]
): T[] => {
	if (collection === null || collection === undefined) return [];

	const concatedArray = concat(restCollections);
	return collection.filter(x => !concatedArray.includes(x));
};

export default difference;
