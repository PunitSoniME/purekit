import createPredicate from '../util/createPredicate';
import predicateType from '../util/predicateType';
import unzip from './unzip';

const unzipWith = (
	collection: any[][],
	predicate: predicateType<any> = x => !!x
): any[][] => {
	const fn = createPredicate(predicate);
	const unzipped = unzip(collection);

	return unzipped.map(m => {
		return (fn as any)(...m);
	});
};

export default unzipWith;
