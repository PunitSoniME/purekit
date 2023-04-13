type predicateType =
	| string
	| number
	| Record<string, any>
	| ((item: any) => boolean);

export default predicateType;
