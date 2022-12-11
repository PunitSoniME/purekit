const slice = <T>(
	collection: T[],
	start: number = 0,
	end: number = collection.length
): T[] => collection.slice(start, end);
export default slice;
