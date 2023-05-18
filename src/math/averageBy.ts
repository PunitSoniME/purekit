/**
 * Calculates the average value of an array by applying a transformation function to each element.
 *
 * @since 1.0.3
 *
 * @template T, U
 * @param {T[]} array - The array of elements to calculate the average from.
 * @param {((value: T) => U) | keyof T} fn - The transformation function or property key to be applied to each element.
 *     If a function is provided, it will be applied to each element to generate the value used for averaging.
 *     If a property key is provided, the corresponding property value will be used for averaging.
 * @returns {number} - The average value of the transformed elements.
 *
 * @example
 * const numbers = [1, 2, 3];
 * averageBy(numbers, x => x * 2);
 * // => 4
 *
 * const students = [
 *   { name: 'Alice', score: 80 },
 *   { name: 'Bob', score: 90 },
 *   { name: 'Charlie', score: 75 }
 * ];
 * averageBy(students, 'score');
 * // => 81.66666666666667
 */
function averageBy<T, U>(array: T[], fn: ((value: T) => U) | keyof T): number {
	const transformFn = typeof fn === 'function' ? fn : (val: T) => val[fn];
	const transformedValues: U[] = array.map(transformFn as (value: T) => U);
	const sum: number = transformedValues.reduce(
		(acc, val) => acc + Number(val),
		0
	);
	return sum / array.length;
}
export default averageBy;
