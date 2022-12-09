const last = <T>(collection: T[]): T | undefined => {
	/* TODO: Convert below code to .at method of an array */
	return collection[collection.length - 1];
};
export default last;
