/**
 * Merges the properties of two or more objects into a single object, using a customizer function to determine
 * how to handle conflicts. The customizer is invoked with six arguments - (objValue, srcValue, key, object, source, stack).
 *
 * @since 1.0.2
 *
 * @param {object} object - The destination object.
 * @param {...object} sources - The source objects.
 * @param {(objValue: any, srcValue: any, key: string, object: object, source: object, stack: any[]) => any} customizer
 *   - The function to customize assigned values.
 *
 * @returns {object} - The merged object.
 *
 * @example
 *
 * // Merge arrays using a customizer function
 * function customizer(objValue, srcValue) {
 *   if (Array.isArray(objValue)) {
 *     return objValue.concat(srcValue);
 *   }
 * }
 *
 * const object = { 'a': [1], 'b': [2] };
 * const other = { 'a': [3], 'b': [4] };
 * const merged = mergeWith(object, other, customizer);
 * console.log(merged);
 * // =>	{ 'a': [1, 3], 'b': [2, 4] }
 *
 * // Merge objects using a customizer function
 * function customizer(objValue, srcValue) {
 *   if (typeof objValue === 'object' && typeof srcValue === 'object' && objValue !== null && srcValue !== null) {
 *     return mergeWith(objValue, srcValue, customizer);
 *   }
 * }
 *
 * const object = { 'a': { 'x': 1 }, 'b': { 'y': 2 } };
 * const other = { 'a': { 'y': 3 }, 'b': { 'z': 4 } };
 * const merged = mergeWith(object, other, customizer);
 * console.log(merged);
 * // =>	{ 'a': { 'x': 1, 'y': 3 }, 'b': { 'y': 2, 'z': 4 } }
 */
function mergeWith(object: object | any, ...args: any): object {
	const customizer = args.length > 1 ? args.pop() : null;

	if (typeof customizer !== 'function' || args.length === 0) {
		return object;
	}
	const source = args.shift();
	if (typeof source !== 'object' || source === null) {
		return mergeWith(object, [...args, customizer]);
	}
	for (const key in source) {
		if (Object.prototype.hasOwnProperty.call(source, key)) {
			const objValue = object[key];
			const srcValue = source[key];
			const mergedValue = customizer(
				objValue,
				srcValue,
				key,
				object,
				source,
				[]
			);
			if (mergedValue !== undefined) {
				object[key] = mergedValue;
			} else if (
				typeof objValue === 'object' &&
				typeof srcValue === 'object' &&
				objValue !== null &&
				srcValue !== null
			) {
				mergeWith(objValue, [srcValue, customizer]);
			} else {
				if (!(key === '__proto__' || key === 'constructor'))
					object[key] = srcValue;
			}
		}
	}
	return mergeWith(object, [...args, customizer]);
}

export default mergeWith;
