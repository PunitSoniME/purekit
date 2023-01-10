/**
 *
 * @param object
 * @param predicate
 */
const pick = (object: Object, paths: string | string[]): Object => {
	return (typeof paths === 'string' ? [paths] : paths).reduce((obj, key) => {
		if (object && object.hasOwnProperty(key)) {
			(obj as any)[key] = (object as any)[key];
		}
		return obj;
	}, {});
};
export default pick;
