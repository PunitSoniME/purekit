/**
 * Determines whether the given value is a valid Date object.
 *
 * @since 1.0.0
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - `true` if the value is a valid Date object, `false` otherwise.
 *
 * @example
 * isDate(new Date()); // => true
 * isDate('2021-09-01T00:00:00.000Z'); // => true
 * isDate(1630454400000); // => true
 * isDate(null); // => false
 * isDate(undefined); // => false
 * isDate('hello'); // => false
 */
const isDate = (value: any): boolean => {
	if (Object.prototype.toString.call(value) === '[object Date]') {
		return !isNaN(value.getTime());
	}

	return false;
};
export default isDate;
