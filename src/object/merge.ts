function innerMerge(object: any, source: any) {
	for (let [key, value] of Object.entries(source)) {
		object[key] = mergeValue(object[key], value);
	}
}

function mergeValue(objectValue: any, value: any) {
	if (Array.isArray(value)) {
		if (!Array.isArray(objectValue)) {
			return [...value];
		} else {
			for (let i = 0, l = value.length; i < l; i++) {
				objectValue[i] = mergeValue(objectValue[i], value[i]);
			}
			return objectValue;
		}
	} else if (typeof value === 'object') {
		if (objectValue && typeof objectValue === 'object') {
			innerMerge(objectValue, value);
			return objectValue;
		} else {
			return value ? { ...value } : value;
		}
	} else {
		return value ?? objectValue ?? undefined;
	}
}

/**
 * Merges multiple objects into a single object. The resulting object will have the same properties as
 * the input objects, with values from later objects overwriting earlier ones if there are conflicts.
 *
 * @since 1.0.0
 * @template T - The type of the object to merge.
 * @param {T} object - The object to merge other objects into.
 * @param {...any} sources - Additional objects to merge into the first object.
 * @returns {T} - The merged object.
 * @example
 *
 * const object1 = { a: [{ b: 2 }, { d: 4 }] };
 * const object2 = { a: [{ c: 3 }, { e: 5 }] };
 * const result = merge(object1, object2);
 * console.log(result); // { a: [{ b: 2, c: 3 }, { d: 4, e: 5 }] }
 *
 * const object3 = { a: 1, b: 2 };
 * const object4 = { b: 3, c: 4 };
 * const result2 = merge(object3, object4);
 * console.log(result2); // { a: 1, b: 3, c: 4 }
 */
const merge = <T>(object: T, ...sources: any): T => {
	for (let source of sources) {
		mergeValue(object, source);
	}

	return object;
};

export default merge;
