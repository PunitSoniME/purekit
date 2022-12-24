import createPredicate from '../util/createPredicate';
import predicateType from '../util/predicateType';

const minBy = <T>(collection: T, iteratee: predicateType<T>): T => {
	const fn = createPredicate(iteratee);
	return (collection as any[]).reduce((a, b) => {
		return (fn as any)(a) <= (fn as any)(b) ? a : b;
	}, {});
};

export default minBy;
