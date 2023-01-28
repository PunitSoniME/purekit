/**
 *
 * @param item
 * @returns
 */
const isArguments = (item: any): Boolean =>
	Object.prototype.toString.call(item) === '[object Arguments]';
export default isArguments;
