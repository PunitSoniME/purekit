import findLastIndex from '../array/findLastIndex';
import predicateType from '../helpers/predicateType';

/**
 *
 * @param obj
 * @param predicate
 * @returns
 */
const findLastKey = <T>(object: T, predicate: predicateType<T>): any => {
	const dataInArray = Object.entries(object as object).map(m => {
		return { __key__: m[0], ...m[1] };
	});
	const indexOfRecord: number = findLastIndex(dataInArray, predicate);

	if (indexOfRecord > -1) return dataInArray[indexOfRecord].__key__;
	return undefined;
};
export default findLastKey;
