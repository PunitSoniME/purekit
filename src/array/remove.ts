import identity from '../util/identity';

/**
 *
 * @param array
 * @param predicate
 * @returns
 */
const remove = <T>(array: T[], predicate: Function = identity): T[] => {
	// in order to not mutate the original array until the very end
	// we want to cache the indexes to remove while preparing the result to return
	const toRemove: any[] = [];
	const result = array.filter((item, i) => predicate(item) && toRemove.push(i));

	// just before returning, we can then remove the items, making sure we start
	// from the higher indexes: otherwise they would shift at each removal
	toRemove.reverse().forEach(i => array.splice(i, 1));
	return result;

	// const fn = createPredicate(predicate);

	// let removedArray: T[] = [];
	// let updatedArray: T[] = [];

	// array.forEach((element, index) => {
	// 	if ((fn as any)(array[index])) {
	// 		removedArray.push(element);
	// 	} else {
	// 		updatedArray.push(element);
	// 	}
	// });

	// array = [...updatedArray];
	// return removedArray;
};

export default remove;
