//	@ts-nocheck
/**
 *
 * @param func
 * @returns
 */
const spread = (func: any) => (args: any) => func(...args);
export default spread;
