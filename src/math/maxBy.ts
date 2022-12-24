import createPredicate from '../util/createPredicate';
import predicateType from '../util/predicateType';

const maxBy = <T>(collection: T[], iteratee: predicateType<T>): {} => {
	const fn = createPredicate(iteratee);
	return collection.reduce((a: any, b: any) => {
		return (fn as any)(a) >= (fn as any)(b) ? a : b;
	}, {});
};

export default maxBy;
