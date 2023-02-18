import get from '../object/get';

/**
 *
 * @param object
 * @param args
 * @returns
 */
const methodOf =
	(object: any, ...args: any): any =>
	(path: string | any[]) =>
		get(object, path)(args);
export default methodOf;
