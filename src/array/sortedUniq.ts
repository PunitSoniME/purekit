const sortedUniq = <T>(collection: T[]): T[] =>
	Array.from(new Set([...collection]));
export default sortedUniq;
