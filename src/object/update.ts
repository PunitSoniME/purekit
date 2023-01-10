/**
 *
 * @param object
 * @param path
 * @param updater
 */
const update = <T>(
	object: T,
	path: string | any,
	updater: Function
): Object => {
	const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])+/g);

	pathArray.reduce((acc: any, key: string, i: number) => {
		if (acc[key] === undefined) acc[key] = {};
		if (i === pathArray.length - 1) acc[key] = updater(acc[key]);
		return acc[key];
	}, object);

	return object as Object;
};
export default update;
