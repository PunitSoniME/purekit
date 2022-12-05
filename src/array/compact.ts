const compact = <T>(collection: T[]): T[] => {
	return collection.filter(Boolean);
};

export default compact;
