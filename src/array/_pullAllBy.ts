//	@ts-nocheck

import predicateType from '../helpers/predicateType';
import identity from '../util/identity';

/**
 *
 * @param array
 * @param elementsToRemove
 * @param predicate
 * @returns
 */
const pullAllBy = <T>(
	array: T[],
	elementsToRemove: T[],
	predicate: predicateType<T> = identity
): T[] => {
	//	TODO: pullAllBy
	return [];
};

export default pullAllBy;
