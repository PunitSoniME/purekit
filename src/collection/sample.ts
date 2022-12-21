const randomElement = (collection: any[]) => {
	return collection[Math.floor(Math.random() * collection.length)];
};

const sample = <T>(collection: T): T => {
	if (typeof collection === 'object')
		return randomElement(Object.values(collection as object));

	return randomElement(collection as T[]);
};
export default sample;
