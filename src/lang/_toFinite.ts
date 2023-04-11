//  @ts-nocheck

const MAX_VALUE = 1.7976931348623157e+308;
const INFINITY_ARRAY = [Infinity, -Infinity];

/**
 * Converts value to a finite number.
 * @param value The value to convert
 * @returns Returns the converted number.
 */
const toFinite = (value: any): number => {
	if (isNaN(value)) return 0;

	const parsed = Number(value);
	
	if (INFINITY_ARRAY.some(item => item === parsed)) {
		return (parsed > 0 ? 1 : -1) * MAX_VALUE;
	} else if (Number(value) === value && value % 1 !== 0) {
		return value;
	}
	
	return ~~parsed;
};

export default toFinite;
