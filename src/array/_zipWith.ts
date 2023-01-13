//	@ts-nocheck

import identity from '../util/identity';

/**
 *
 * @param arrays
 * @param predicate
 */
const zipWith = <T>(arrays: T[], ...predicate: any): T[] => {
	//	TODO: zipWith
	let iteratee = predicate.pop() ?? identity;
	return [];
};

export default zipWith;
