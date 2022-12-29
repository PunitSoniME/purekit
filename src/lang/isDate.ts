/**
 *
 * @param value The value to check
 * @returns true if passed value is a valid date or not
 */
const isDate = (value: any): boolean => {
	if (Object.prototype.toString.call(value) === '[object Date]') {
		return !isNaN(value.getTime());
	}

	return false;
};
export default isDate;
