//	@ts-nocheck
/**
 *
 * @param func
 * @param args
 * @returns
 */
const partial =
	(func: Function, ...args: any) =>
	(...furtherArgs) =>
		func(...args, ...furtherArgs);

export default partial;
