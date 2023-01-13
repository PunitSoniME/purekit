/**
 *
 * @param array
 * @returns
 */
const sortedUniq = <T>(array: T[]): T[] => Array.from(new Set([...array]));
export default sortedUniq;
