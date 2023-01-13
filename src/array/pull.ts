import pullAll from './pullAll';

/**
 *
 * @param array
 * @param elementsToRemove
 * @returns
 */
const pull = <T>(array: T[], ...elementsToRemove: T[]): T[] =>
	pullAll(array, elementsToRemove);
export default pull;
