/**
 *
 * @param object
 * @param path
 * @param value
 * @param customizer
 */
const setWith = <T>(
	object: T,
	path: any[] | string,
	value: any,
	customizer: Function
): T => {
	const pathArray =
		(Array.isArray(path) ? path : path.match(/([^[.\]])+/g)) ?? [];

	pathArray.reduce((acc: any, key: string, i: number) => {
		if (acc[key] === undefined) acc[key] = {};
		if (i === pathArray.length - 1) acc[key] = customizer(value);
		return acc[key];
	}, object);

	return object;
};
export default setWith;
