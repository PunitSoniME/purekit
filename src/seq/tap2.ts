import chain2 from './chain2';

/**
 *
 * @param value (*): The value to provide to interceptor.
 * @param interceptor (Function): The function to invoke.
 * @returns (*): Returns value.
 *
 * @example
 *
 * const data = [1, 2, 3];
 *
 * const tappedData = tap2(data, (array: number[]) => {
 * 	// Mutate input array.
 * 	array.push(100);
 * })
 * .fn(concat, [4])
 * .fn(concat, [5])
 * .value();
 *
 * => [1, 2, 3, 100, 4, 5]
 */
const tap2 = (value: any, interceptor: Function) => {
	interceptor(value);
	return chain2(value);
};

export default tap2;
