/**
 *
 * @param str
 * @param radix
 * @returns
 */
const parseInt = (str: string = '', radix: number = 10): number =>
	Number.parseInt(str, radix);
export default parseInt;
