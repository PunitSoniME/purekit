import find from '../collection/find';
import predicateType from '../helpers/predicateType';

/**
 *
 * @param obj
 * @param predicate
 * @returns
 */
const findKey = <T>(object: T, predicate: predicateType<T>): any => {
	const dataInArray = Object.entries(object as object).map(m => {
		return { __key__: m[0], ...m[1] };
	});
	const record: any = find(dataInArray, predicate);

	if (record) return record.__key__;
	return undefined;
};
export default findKey;
