interface IIntersection {
	<T>(array1: T[], array2: T[]): T[];
	<T>(array1: T[], array2: T[], array3: T[]): T[];
	<T>(array1: T[], array2: T[], array3: T[], array4: T[]): T[];
	<T>(array1: T[], array2: T[], array3: T[], array4: T[], array5: T[]): T[];
	<T>(
		array1: T[],
		array2: T[],
		array3: T[],
		array4: T[],
		array5: T[],
		...restArray: T[][]
	): T[];
}
export default IIntersection;
