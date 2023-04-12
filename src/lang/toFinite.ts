const MAX_VALUE = 1.7976931348623157e308;
const INFINITY_ARRAY = [Infinity, -Infinity];

/**
 * Converts value to a finite number.
 *
 * @since 1.0.1
 *
 * @param {*} value - The value to convert
 * @returns {number} - Returns the converted number.
 *
 * @example
 *
 * toFinite(3.2);
 * // => 3.2
 *
 * toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * toFinite('3.2');
 * // => 3.2
 */
const toFinite = <T>(value: T): number => {
	if (isNaN(value as any)) return 0;

	const parsed = Number(value);

	if (INFINITY_ARRAY.some(item => item === parsed)) {
		return (parsed > 0 ? 1 : -1) * MAX_VALUE;
	} else if (Number(value) === value && (value as number) % 1 !== 0) {
		return value as number;
	}

	return ~~parsed;
};

export default toFinite;
