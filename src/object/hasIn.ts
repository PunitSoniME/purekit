import toPlainObject from '../lang/toPlainObject';

/**
 *
 * @param object
 * @param path
 * @returns
 */
const hasIn = <T>(object: T, path: string | any[] | any): boolean => {
	const plainObject = toPlainObject(object);
	if (Object.keys(plainObject as Object).length === 0) return false;

	// it might not work for some edge cases. Test your code!
	const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])+/g);
	return !!pathArray.reduce(
		(prevObj: T, key: string) => prevObj && (prevObj as any)[key],
		plainObject
	);
};

export default hasIn;
