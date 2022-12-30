/**
 * Checks if value is a pristine native function.
 * @param value The value to check.
 * @returns Returns true if value is a native function, else false.
 */
const isNative = (value: any): boolean =>
	!!value &&
	(typeof value).toLowerCase() === 'function' &&
	(value === Function.prototype ||
		/^\s*function\s*(\b[a-z$_][a-z0-9$_]*\b)*\s*\((|([a-z$_][a-z0-9$_]*)(\s*,[a-z$_][a-z0-9$_]*)*)\)\s*{\s*\[native code\]\s*}\s*$/i.test(
			String(value)
		));
export default isNative;
