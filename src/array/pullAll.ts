const pullAll = <T>(collection: T[], elementsToRemove: T[]): T[] => {
	collection = collection.filter((f) => !elementsToRemove.includes(f));
	return collection;
};

export default pullAll;
