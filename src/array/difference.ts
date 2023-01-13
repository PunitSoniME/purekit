import concat from './concat';

/**
 *
 * @param array
 * @param restCollections
 * @returns
 */
const difference = <T>(
	array: T[] | null | undefined,
	...restCollections: T[]
): T[] => {
	if (array === null || array === undefined) return [];

	const concatedArray = concat(restCollections);
	return array.filter(x => !concatedArray.includes(x));
};

export default difference;
