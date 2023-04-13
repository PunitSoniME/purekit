interface IDefaults {
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

/**
 * Creates a new object with properties of multiple source objects merged together from left to right.
 * If multiple source objects have the same property, the value from the last source object will be used.
 *
 * @since 1.0.0
 *
 * @param {...Object} args - The source objects to merge.
 * @returns {Object} - A new object with properties of multiple source objects merged together.
 *
 * @example
 * const obj1 = { a: 1 };
 * const obj2 = { b: 2 };
 * const obj3 = { c: 3 };
 *
 * const result1 = defaults(obj1, obj2, obj3);
 * console.log(result1); // { a: 1, b: 2, c: 3 }
 *
 * const obj4 = { a: 10, d: 4 };
 * const obj5 = { b: 20, a: 5 };
 *
 * const result2 = defaults(obj4, obj5);
 * console.log(result2); // { a: 5, d: 4, b: 20 }
 */
const defaults: IDefaults = (...args: any[]) =>
	args.reverse().reduce((acc: any, object: any) => ({ ...acc, ...object }), {});

export default defaults;

export { IDefaults };
