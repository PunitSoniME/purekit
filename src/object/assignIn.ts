/**
 *
 * @param object
 * @param sources
 * @returns
 */
const assignIn = <T>(object: T, ...sources: any[]): T => {
	const length = sources.length;

	if (length < 1 || object == null) return object;
	for (let i = 0; i < length; i++) {
		const source = sources[i];

		for (const key in source) {
			//  @ts-ignore
			object[key] = source[key];
		}
	}
	return object;
};

export default assignIn;
