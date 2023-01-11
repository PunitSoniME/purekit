import conformsTo from '../lang/conformsTo';

/**
 *
 * @param object
 * @returns
 */
const conforms =
	(object: Object): any =>
	(obj: any) =>
		conformsTo(obj, object);
export default conforms;
