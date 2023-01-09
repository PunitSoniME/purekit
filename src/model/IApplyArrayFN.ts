interface IApplyArrayFN<T> {
	collection: T;
	fnName: any;
	iteratee: any;
	checkFromEnd?: boolean;
	fromIndex?: number;
	toIndex?: number;
	equalyCompare?: boolean;
	initialValue?: any;
}

export default IApplyArrayFN;
