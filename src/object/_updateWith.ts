/**
 *
 * @param object
 * @param path
 * @param updater
 * @param customizer
 */
const updateWith = <T>(
	object: T,
	path: string | any,
	updater: Function,
	customizer?: any
): Object => {
	const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])+/g);

	pathArray.reduce((acc: any, key: string, i: number) => {
		if (acc[key] === undefined) acc[key] = {};
		if (i === pathArray.length - 1) acc[key] = updater(acc[key]);
		return acc[key];
	}, object);

	return object as Object;
};
export default updateWith;
