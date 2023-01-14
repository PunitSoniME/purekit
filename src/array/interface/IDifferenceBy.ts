export default interface IDifferenceBy {
	<T>(array1: T[], array2: T[], iteratee: any): T[];
	<T>(array1: T[], array2: T[], array3: T[], iteratee: any): T[];
	<T>(array1: T[], array2: T[], array3: T[], array4: T[], iteratee: any): T[];
	<T>(
		array1: T[],
		array2: T[],
		array3: T[],
		array4: T[],
		array5: T[],
		iteratee: any
	): T[];
	<T>(
		array1: T[],
		array2: T[],
		array3: T[],
		array4: T[],
		array5: T[],
		...iteratee: any
	): T[];
}
