/**
 *
 * @param array
 * @returns
 */
const flattenDeep = <T>(array: T[]): any[] => array.flat(Infinity);
export default flattenDeep;
