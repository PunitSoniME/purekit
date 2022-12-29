/**
 *
 * @param value
 * @returns
 */
const clone = <T>(value: T): T => {
	if (Array.isArray(value)) return value.slice() as any;
	if (value instanceof RegExp)
		return new RegExp(value.source, value.flags) as any;
	if (value instanceof Set) return new Set(value) as any;
	if (value instanceof Map) return new Map(value) as any;
	if (value instanceof Date) return new Date(value) as any;
	if (typeof value === 'object' && value !== null) return { ...value };
	return value;
};

export default clone;
