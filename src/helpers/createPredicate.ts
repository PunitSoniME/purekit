import get from '../object/get';
import predicateType from './predicateType';

const createPredicate = <T>(
	iteratee: predicateType,
	equalyCompare: boolean = true
) => {
	//	Specially for .includes
	if (equalyCompare === false) {
		return iteratee;
	}

	if (typeof iteratee === 'string') {
		return (item: T) => get(item, iteratee);
	} else if (Array.isArray(iteratee)) {
		return (item: T) => (item as any)[iteratee[0]] === iteratee[1];
	} else if (typeof iteratee === 'object') {
		return (item: T) => {
			return Object.keys(iteratee).every(
				v => !(v in iteratee) || (item as any)[v] === iteratee[v]
			);
		};
	} else if (typeof iteratee === 'function') {
		return iteratee;
		//	return (item: any) => iteratee(item);
	} else if (
		equalyCompare &&
		['number', 'boolean'].some(s => s === typeof iteratee)
	) {
		return (item: T) => (item as any) === iteratee;
	}
	return iteratee;
};

export default createPredicate;
