/**
 *
 * @param miliseconds
 * @returns
 */
const sleep = (miliseconds: number = 1000) =>
	new Promise(resolve => setTimeout(resolve, miliseconds));
export default sleep;
