/**
 *
 * @param object
 * @param sources
 * @returns
 */
const assign = <T>(object: T, ...sources: any[]): T => {
	let data = { ...object };
	sources.map(m => Object.assign(data as object, { ...m }));
	return data;
};

export default assign;
