/**
 * Checks if value is object-like. A value is object-like if it's not null and has a typeof result of "object".
 * @param value The value to check
 * @returns Returns true if value is object-like, else false.
 */
const isObjectLike = (value: any): boolean =>
	value !== null && typeof value === 'object';
export default isObjectLike;
