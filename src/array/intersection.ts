const intersection = <T>(...collections: T[][]): T[] =>
	[...collections].reduce((a, b) => a.filter((c) => b.includes(c)));
export default intersection;
