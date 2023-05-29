/**
 * Invokes a function only after a certain amount of time has passed since the last time it was called.
 *
 * @since 1.0.0
 *
 * @param {Function} fn - The function to delay.
 * @param {number} timer - The number of milliseconds to wait before invoking the function.
 * @param {...any} args - Additional arguments to pass to the function.
 * @returns {number} - A timer ID that can be used to cancel the delay with `clearTimeout`.
 *
 * @example
 * _.defer(console.log, 'a'), console.log('b');
 * // => logs 'b' then 'a'
 */
const delay = (fn: Function, timer: number, ...args: any) =>
	setTimeout(() => fn(...args), timer);
export default delay;
