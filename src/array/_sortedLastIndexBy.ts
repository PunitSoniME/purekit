//	@ts-nocheck

import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 *
 * @param array
 * @param value
 * @param predicate
 * @returns
 */
const sortedLastIndexBy = <T>(
	array: T[],
	value: T,
	predicate: predicateType<T> = identity
): number => {
	//	TODO: sortedLastIndex
	return -1;
};

export default sortedLastIndexBy;
