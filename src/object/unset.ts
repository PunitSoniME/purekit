/**
 *
 * @param object
 * @param path
 */
const unset = <T>(object: T, path: any): boolean => {
	let isKeyRemoved = false;
	const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])+/g);

	pathArray.reduce((acc: any, key: string, i: number) => {
		if (i === pathArray.length - 1) {
			delete acc[key];
			isKeyRemoved = true;
		}
		return acc[key];
	}, object);

	return isKeyRemoved;
};
export default unset;
