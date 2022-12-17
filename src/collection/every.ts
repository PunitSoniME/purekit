import applyArrayFn from '../util/applyArrayFn';

const every = <T>(collection: T, fn: any): Boolean => {
	return applyArrayFn({ collection: collection, fnName: 'every', fn: fn });
};

export default every;
