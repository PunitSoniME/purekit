const lastIndexOf = <T>(
	collection: T[],
	element: T,
	fromIndex: number = collection.length - 1
): number => collection.lastIndexOf(element, fromIndex);
export default lastIndexOf;
