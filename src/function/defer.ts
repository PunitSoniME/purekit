/**
 * Defers the execution of a function by scheduling it to run after a minimum delay of 1 millisecond.
 *
 * @since 1.0.3
 *
 * @param {Function} fn - The function to be deferred.
 * @param {...any} args - The arguments to be passed to the function.
 * @returns {number} - The timeout identifier that can be used to cancel the deferred execution using `clearTimeout`.
 *
 * @example
 * defer(function(text) {
 * 	console.log(text);
 * }, 'deferred');
 * // => Logs 'deferred' after one millisecond.
 */
const defer = (fn: Function, ...args: any): number =>
	setTimeout(fn, 1, ...args);

export default defer;
