import applyArrayFn from '../helpers/applyArrayFn';

const reduceRight = <T>(collection: T, iteratee: any, initialValue: any): T => {
	return applyArrayFn({
		collection: collection,
		fnName: 'reduceRight',
		iteratee: iteratee,
		initialValue: initialValue,
	});
};

export default reduceRight;
