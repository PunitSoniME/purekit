/**
 *
 * @param prototype
 * @param properties
 * @returns
 */
const create = <T>(prototype: T, properties: T): T =>
	Object.assign(Object.create(prototype as object), { ...properties });
export default create;
