import get from '../object/get';

/**
 *
 * @param path
 * @param args
 * @returns
 */
const method =
	(path: string | any[], ...args: any): any =>
	(object: any) =>
		get(object, path)(args);
export default method;
