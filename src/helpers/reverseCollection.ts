const reverseCollection = <T>(collection: T): T | Map<any, any> | any[] => {
	if (Array.isArray(collection)) {
		return collection.reverse();
	} else if (
		(collection && typeof collection === 'object') ||
		!(collection instanceof Map)
	) {
		const mappedEntries = new Map(Object.entries(collection as any));
		const reverseMappedEntries = [...mappedEntries.entries()].reverse();

		return new Map([...reverseMappedEntries]);
	}
	return collection;
};

export default reverseCollection;
