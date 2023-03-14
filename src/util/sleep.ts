/**
 * Pauses the execution for a specified number of milliseconds.
 *
 * @since 1.0.0
 *
 * @param {number} [milliseconds=1000] - The number of milliseconds to wait before resolving the Promise.
 *
 * @returns {Promise} - A Promise that resolves after the specified number of milliseconds have passed.
 *
 * @example
 * await sleep(); // waits for 1000 milliseconds before continuing execution
 * await sleep(5000); // waits for 5000 milliseconds before continuing execution
 *
 */
const sleep = (miliseconds: number = 1000): Promise<any> =>
	new Promise(resolve => setTimeout(resolve, miliseconds));
export default sleep;
