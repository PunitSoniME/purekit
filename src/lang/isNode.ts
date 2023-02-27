/**
 * Checks if a value is a Node object.
 *
 * @since 1.0.0
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - Returns `true` if the value is a Node object, else `false`.
 *
 * @example
 *
 * isNode(document.body); // true
 * isNode(document.createTextNode('Hello')); // true
 * isNode({}); // false
 */
const isNode = (value: any): boolean =>
	typeof Node === 'object'
		? value instanceof Node
		: value &&
		  typeof value === 'object' &&
		  typeof value.nodeType === 'number' &&
		  typeof value.nodeName === 'string';

export default isNode;
