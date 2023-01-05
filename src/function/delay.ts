/**
 *
 * @param fn
 * @param timer
 * @param args
 * @returns
 */
const debounce = (fn: Function, timer: number, ...args: any) =>
	setTimeout(() => fn(...args), timer);
export default debounce;
