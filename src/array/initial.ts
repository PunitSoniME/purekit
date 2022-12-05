const initial = <T>(collection: T[]): T[] => {
	const lastIndex = collection.length - 1;
	return collection.filter((_, index) => index !== lastIndex);
};

export default initial;
