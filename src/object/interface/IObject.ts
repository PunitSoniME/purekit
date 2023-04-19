export default interface IDefaults {
	<TObject, TSource>(object: TObject, source: TSource): NonNullable<
		TSource & TObject
	>;
	<TObject, TSource1, TSource2>(
		object: TObject,
		source1: TSource1,
		source2: TSource2
	): NonNullable<TSource2 & TSource1 & TObject>;
	<TObject, TSource1, TSource2, TSource3>(
		object: TObject,
		source1: TSource1,
		source2: TSource2,
		source3: TSource3
	): NonNullable<TSource3 & TSource2 & TSource1 & TObject>;
	<TObject, TSource1, TSource2, TSource3, TSource4>(
		object: TObject,
		source1: TSource1,
		source2: TSource2,
		source3: TSource3,
		source4: TSource4
	): NonNullable<TSource4 & TSource3 & TSource2 & TSource1 & TObject>;
	<TObject>(object: TObject): NonNullable<TObject>;
	(object: any, ...sources: any[]): any;
}
