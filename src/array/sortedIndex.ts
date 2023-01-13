import baseSortedIndex from '../helpers/baseSortedIndex';

/**
 *
 * @param array
 * @param value
 * @returns
 */
const sortedIndex = <T>(array: T[], value: T): number =>
	baseSortedIndex(array, value);

export default sortedIndex;
