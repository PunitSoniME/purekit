import createPredicate from '../util/createPredicate';
import predicateType from '../util/predicateType';
import unzip from './unzip';

const unzipWith = <T>(
	collection: any[][],
	predicate: predicateType<T>
): any[][] => {
	const fn = createPredicate(predicate);
	// const fn = createPredicate(predicate);
	const unzipped = unzip(collection);

	return unzipped.map((m) => {
		return (fn as any)(...m);
	});
};

export default unzipWith;
