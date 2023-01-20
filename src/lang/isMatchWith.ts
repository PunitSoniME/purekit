/**
 * This method is like `isMatch` except that it accepts customizer which is invoked to compare values. If customizer returns undefined, comparisons are handled by the method instead. The customizer is invoked with five arguments: (objValue, srcValue, index | key, object, source).
 * @param object The object to inspect.
 * @param source The object of property values to match.
 * @param customizer The function to customize comparisons.
 * @returns Returns true if object is a match, else false.
 */
const isMatchWith = (
	object: Object,
	source: Object,
	customizer: Function
): boolean => {
	const keys: any[] = Object.keys(object);

	for (let i = 0; i < keys.length; i++) {
		if (
			!customizer(
				(object as any)[keys[i]],
				(object as any)[keys[i]],
				keys[i],
				object,
				source
			)
		) {
			return false;
		}
	}
	return true;
};

export default isMatchWith;
