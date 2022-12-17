import get from './get';
import predicateType from './predicateType';

const createPredicate = <T>(fn: predicateType<T>) => {
	if (typeof fn === 'string') {
		return (item: T) => get(item, fn);
	} else if (Array.isArray(fn)) {
		return (item: T) => (item as any)[fn[0]] === fn[1];
	} else if (typeof fn === 'object') {
		return (item: T) => {
			return Object.keys(fn).every(
				v => !(v in fn) || (item as any)[v] === fn[v]
			);
		};
	} else if (typeof fn === 'function') {
		return fn;
	} else if (['number', 'boolean'].some(s => s === typeof fn)) {
		return (item: T) => (item as any) === fn;
	}
	return fn;
};

export default createPredicate;
