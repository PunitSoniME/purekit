import createPredicate from '../helpers/createPredicate';
import predicateType from '../helpers/predicateType';
import unzip from './unzip';

const unzipWith = <T>(
	collection: any[][],
	predicate: predicateType<T>
): any[][] => {
	const fn = createPredicate(predicate);
	const unzipped = unzip(collection);

	return unzipped.map(m => {
		return (fn as any)(...m);
	});
};

export default unzipWith;
