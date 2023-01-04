const takeRight = <T>(collection: T[], length: number = 1): T[] =>
	[...collection].splice(-length, length);
export default takeRight;
