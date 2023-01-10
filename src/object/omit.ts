/**
 *
 * @param object
 * @param paths
 * @returns
 */
const omit = (object: Object, paths: any[]): Object =>
	Object.fromEntries(
		Object.entries(object as Object).filter(([key]) => !paths.includes(key))
	);
export default omit;
