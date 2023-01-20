/**
 * Converts value to a plain object flattening inherited enumerable string keyed properties of value to own properties of the plain object.
 * @param value The value to convert.
 * @returns Returns the converted plain object.
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
