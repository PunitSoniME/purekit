/**
 * Determines whether the given value is a DOM element.
 *
 * @since 1.0.0
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - `true` if the value is a DOM element, `false` otherwise.
 *
 * @example
 * isElement(document.createElement('div')); // => true
 * isElement(document.createTextNode('hello')); // => false
 */
const isElement = (value: any): boolean => {
	return typeof HTMLElement === 'object'
		? value instanceof HTMLElement //DOM2
		: value &&
				typeof value === 'object' &&
				value !== null &&
				value.nodeType === 1 &&
				typeof value.nodeName === 'string';
};
export default isElement;
