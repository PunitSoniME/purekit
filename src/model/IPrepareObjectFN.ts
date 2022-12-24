import predicateType from '../util/predicateType';

interface IPrepareObjectFN<T> {
	collection: T[];
	predicate: predicateType<T>;
	operation?: string;
	includeConditionFailRecord?: boolean;
}

export default IPrepareObjectFN;
