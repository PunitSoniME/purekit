import baseSortedLastIndex from '../helpers/baseSortedLastIndex';

/**
 *
 * @param array
 * @param value
 * @returns
 */
const sortedLastIndex = <T>(array: T[], value: T): number =>
	baseSortedLastIndex(array, value);
export default sortedLastIndex;
