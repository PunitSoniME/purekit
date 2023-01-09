/**
 *
 * @param obj
 * @returns
 */
const toPairs = (object: object): Array<[string, any]> =>
	Object.entries(object);
export default toPairs;
