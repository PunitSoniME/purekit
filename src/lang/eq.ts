/**
 *
 * @param value
 * @param other
 * @returns
 */
const eq = (value: any, other: any): boolean =>
	value === other || (value !== value && other !== other);
export default eq;
