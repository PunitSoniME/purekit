import predicateType from '../helpers/predicateType';

interface IPrepareObjectFN<T> {
	collection: T[];
	predicate: predicateType;
	operation?: string;
	includeConditionFailRecord?: boolean;
}

export default IPrepareObjectFN;
