/**
 *
 * @param value
 * @returns
 */
const clone = <T>(value: T): T => {
	if (Array.isArray(value)) return value.slice() as T;
	if (value instanceof RegExp)
		return new RegExp(value.source, value.flags) as T;
	if (value instanceof Map) return new Map(value) as T;
	if (value instanceof Set) return new Set(value) as T;
	if (value instanceof Date) return new Date(value) as T;
	if (typeof value === 'object' && value !== null) return { ...value };
	return value;
};

export default clone;
