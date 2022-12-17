import applyArrayFn from '../util/applyArrayFn';

const filter = <T>(collection: T, fn: any): Boolean => {
	return applyArrayFn({ collection: collection, fnName: 'filter', fn: fn });
};

export default filter;
