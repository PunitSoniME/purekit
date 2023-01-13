/**
 *
 * @param array
 * @param elementsToRemove
 * @returns
 */
const pullAll = <T>(array: T[], elementsToRemove: T[]): T[] => {
	array = array.filter(f => !elementsToRemove.includes(f));
	return array;
};

export default pullAll;
