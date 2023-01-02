/**
 * Converts value to a string. An empty string is returned for null and undefined values. The sign of -0 is preserved.
 * @param value The value to convert.
 * @returns Returns the converted string.
 */
const toString = (value: any): string => {
	if (typeof value === 'string') return value;
	if (value === null || value === undefined) return '';
	if (value === -0) return `-0`;
	if (value === 0) return '0';
	return new String(value).toString();
};
export default toString;
