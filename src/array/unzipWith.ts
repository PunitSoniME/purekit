import createPredicate from '../helpers/createPredicate';
import predicateType from '../helpers/predicateType';
import identity from '../util/identity';
import unzip from './unzip';

/**
 *
 * @param array
 * @param predicate
 * @returns
 */
const unzipWith = <T>(
	array: any[][],
	predicate: predicateType<T> = identity
): any[] => {
	const fn = createPredicate(predicate);
	const unzipped = unzip(array);

	return unzipped.map(m => {
		return (fn as any)(...m);
	});
};

export default unzipWith;
