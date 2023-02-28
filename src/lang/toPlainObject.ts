/**
 * Converts `value` to a plain object with its own enumerable properties.
 *
 * @since 1.0.0
 *
 * @param {*} value - The value to convert.
 * @returns {Object} - The converted plain object.
 *
 * @example
 *
 * toPlainObject({ a: 1, b: 2 }) // { a: 1, b: 2 }
 * toPlainObject(new Map([['a', 1], ['b', 2]])) // { a: 1, b: 2 }
 * toPlainObject([1, 2, 3]) // { '0': 1, '1': 2, '2': 3 }
 */
const toPlainObject = (value: any): object => {
	value = Object(value);
	const result: any = {};
	for (const property in value) {
		result[property] = value[property];
	}
	return result;
};
export default toPlainObject;
