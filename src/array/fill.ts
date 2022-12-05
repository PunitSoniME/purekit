const fill = <T>(
	collection: T[],
	value: any,
	start: number = 0,
	end: number = collection.length
): T[] => {
	collection.fill(value, start, end);
	return collection;
};

export default fill;
