const flattenDepth = <T>(collection: T[], depth: number): any[] =>
	collection.flat(depth);

export default flattenDepth;
