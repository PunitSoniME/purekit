import createPredicate from '../helpers/createPredicate';
import predicateType from '../helpers/predicateType';

const sumBy = <T>(numbers: T[], iteratee: predicateType<T>): number => {
	const fn = createPredicate(iteratee);
	return numbers.reduce(
		(oldValue, nextValue) => oldValue + (fn as any)(nextValue),
		0
	);
};

export default sumBy;
