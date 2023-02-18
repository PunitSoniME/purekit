import applyArrayFn from '../helpers/applyArrayFn';

/**
 * This method creates a shallow copy of a portion of a given array/object, filtered down to just the elements from the given array/object that pass the test implemented by the provided function.
 * @param collection An array/object to iterate.
 * @param iteratee A function to execute for each element in the array/object. It should return a truthy to keep the element in the resulting array/object, and a falsy value otherwise.
 * @returns A shallow copy of a portion of the given array/object, filtered down to just the elements from the given array/object that pass the test implemented by the provided function. If no elements pass the test, an empty array/object will be returned.
 */
const filter = <T>(collection: T, iteratee: any): T => {
	return applyArrayFn({
		collection: collection,
		fnName: 'filter',
		iteratee: iteratee,
	});
};

export default filter;
