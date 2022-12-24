const max = (collection: number[]): number | undefined => {
	return collection.length === 0 ? undefined : Math.max(...collection);
};

export default max;
