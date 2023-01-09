/**
 *
 * @param object
 * @returns
 */
const functions = (object: Object): any[] =>
	Object.keys(object).filter(
		(key: any) => typeof (object as any)[key] === 'function'
	) ?? [];
export default functions;
