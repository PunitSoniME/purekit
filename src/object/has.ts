/**
 *
 * @param object
 * @param path
 * @returns
 */
const has = <T>(object: T, path: string | any[] | any): boolean => {
	if (Object.keys(object as Object).length === 0) return false;
	// it might not work for some edge cases. Test your code!
	const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])+/g);
	return !!pathArray.reduce(
		(prevObj: T, key: string) => prevObj && (prevObj as any)[key],
		object
	);
};

export default has;
