/**
 *
 * @param value
 * @param defaultValue
 * @returns
 */
const defaultTo = (value: any, defaultValue: any) =>
	value == null || Object.is(value, NaN) ? defaultValue : value;
export default defaultTo;
