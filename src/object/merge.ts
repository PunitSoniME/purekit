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
 *
 * @param object
 * @param sources
 * @returns
 */
const merge = <T>(object: T, ...sources: any): T => {
	for (let source of sources) {
		mergeValue(object, source);
	}

	return object;
};

export default merge;
