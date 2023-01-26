/**
 *
 * @param prototype
 * @param properties
 * @returns
 */
const create = <T>(prototype: T, properties: T | null = null): T => {
	if (properties === null)
		return Object.assign(Object.create(prototype as object));
	return Object.assign(Object.create(prototype as object), { ...properties });
};
export default create;
