/**
 *
 * @param array
 * @param length
 * @returns
 */
const drop = <T>(array: T[], length: number = 1) => array.slice(length);
export default drop;
