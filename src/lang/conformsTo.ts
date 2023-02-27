/**
 * Checks if the provided object conforms to the source object's properties and values.
 *
 * @since 1.1.0
 *
 * @param {Object} object - The object to check.
 * @param {Object} source - The object of property predicates to conform to.
 * @returns {boolean} - Returns `true` if object conforms, else `false`.
 *
 * @example
 *
 * const object = { 'a': 1, 'b': 2 };
 * conformsTo(object, { 'b': (n) => n > 1 }); // => true
 * conformsTo(object, { 'a': (n) => n > 1 }); // => false
 */

const conformsTo = (object: any, source: any): boolean => {
	const entries = Object.entries(source);
	for (let i = 0; i < entries.length; i++) {
		const valueInMainObject = object[entries[i][0]];
		//	@ts-ignore
		if (entries[i][1](valueInMainObject) !== true) return false;
	}
	return true;
};

export default conformsTo;
