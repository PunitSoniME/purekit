/**
 * Assigns the enumerable own and inherited properties of one or more source objects to a target object.
 * If a customizer function is provided, it will be invoked to produce the assigned values.
 * The customizer is invoked with five arguments: (value, sourceValue, key, object, source).
 * The purpose of the customizer function is to modify the values before they are assigned to the target object.
 *
 * @since 1.0.0
 *
 * @template T
 * @param {T} object - The target object to assign the properties to.
 * @param {...any} args - The source objects containing the properties to assign.
 * @returns {T} - The modified target object.
 *
 * @example
 *
 * const target = { a: 1 };
 * const source1 = { b: 2 };
 * const source2 = { c: 3 };
 *
 * const result = assignWith(target, source1, source2, (objValue, srcValue) => objValue === undefined ? srcValue : objValue);
 *
 * console.log(result);
 * // => { a: 1, b: 2, c: 3 }
 */
const assignWith = <T>(object: T, ...args: any): T => {
	const lastElement = args[args.length - 1];

	if (lastElement instanceof Function && typeof lastElement === 'function') {
		const customizer = args.pop() as any;

		let data = { ...object };
		args.map((source: any) => {
			Object.keys(source).forEach(key => {
				(object as any)[key] = (customizer as any)(
					(data as any)[key],
					source[key],
					key,
					data,
					source
				);
			});
		});
		// Object.assign(data as object, { ...m }));
		// return data;

		// const length = args.length;

		// if (length < 1 || object == null) return object;
		// for (let i = 0; i < length; i++) {
		// 	const source = args[i];

		// 	for (const key in source) {
		// 		(object as any)[key] = (customizer as any)(
		// 			(object as any)[key],
		// 			source[key],
		// 			key,
		// 			object,
		// 			source
		// 		);
		// 	}
		// }
	}

	return object;
};

export default assignWith;
