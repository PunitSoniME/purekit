import { identity } from '../util';

/**
 * Transforms a collection by iterating over its elements and applying a transformation function.
 *
 * @param {Array|Object} collection - The collection to be transformed. Can be an array or an object with string keys.
 * @param {function} [iteratee=identity] - The transformation function to be applied to each element in the collection. Takes four parameters: the current `result`, the current `value`, the current `key`, and the entire `collection`.
 * @param {*} [accumulator] - The initial value for the result. Defaults to `undefined`.
 * @returns {*} The transformed collection of the same type as the `accumulator` parameter.
 */
function transform<T, U>(
	collection: Record<string, T> | T[],
	iteratee: Function = identity,
	accumulator?: U
): U {
	const keys = Array.isArray(collection) ? undefined : Object.keys(collection);
	const length = (keys || collection).length;
	let index = -1;
	let result: any =
		accumulator === undefined
			? Array.isArray(collection)
				? []
				: {}
			: accumulator;

	while (++index < length) {
		const key = keys ? keys[index] : index;
		const value = (collection as any)[key];
		const transformedValue = iteratee(result, value, key, collection as any);
		if (transformedValue === false) {
			break;
		}
	}

	return result;
}

export default transform;
