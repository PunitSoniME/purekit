/* TODO: Covert below code to array's .at method */
const nth = <T>(collection: T[], index: number): T | undefined =>
	index >= 0 ? collection[index] : collection[collection.length + index];
// collection.slice(index, index + 1)[0];

export default nth;
