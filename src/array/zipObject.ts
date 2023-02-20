/**
 * Creates an object from arrays of property names and values, where property names become object keys and values become object values.
 *
 * @param {Array} [props=[]] - An array of property names.
 * @param {Array} [values=[]] - An array of values.
 * @returns {Object} - The new object.
 *
 * @example
 *
 * zipObject(['a', 'b'], [1, 2]) // {a: 1, b: 2}
 * zipObject(['a', 'b'], [1]) // {a: 1, b: undefined}
 */
const zipObject = (props: any[] = [], values: any[] = []): Object =>
	props.reduce((acc: any, key, idx) => {
		acc[key] = values[idx];
		return acc;
	}, {});
export default zipObject;
