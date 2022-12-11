type predicateType<T> =
	| string
	| number
	| Record<string, any>
	| ((item: T) => boolean);

export default predicateType;
