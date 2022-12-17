import applyArrayFn from '../util/applyArrayFn';

const forEach = <T>(collection: T, fn: any): T => {
	applyArrayFn({ collection: collection, fnName: 'forEach', fn: fn });
	return collection;
};

export default forEach;
