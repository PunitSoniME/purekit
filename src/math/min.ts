const min = (collection: number[]): number | undefined => {
	return collection.length === 0 ? undefined : Math.min(...collection);
};

export default min;
