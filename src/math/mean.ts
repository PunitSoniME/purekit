import add from './add';

const mean = (collection: number[]): number => {
	return add(...collection) / collection.length;
};

export default mean;
