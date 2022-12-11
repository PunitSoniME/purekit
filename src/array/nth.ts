const nth = <T>(collection: T[], index: number): T | undefined => {
	/* TODO: Covert below code to array's .at method */
	return index >= 0 ? collection[index] : collection[collection.length + index];
};

export default nth;
