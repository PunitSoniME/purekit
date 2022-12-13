const tail = <T>(collection: T[]): T[] => {
	const [, ...rest] = collection;
	return rest;
};
export default tail;
