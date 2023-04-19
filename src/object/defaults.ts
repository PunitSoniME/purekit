import IDefaults from './interface/IObject';

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
