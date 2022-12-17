import pullAll from './pullAll';

const pull = <T>(collection: T[], ...elementsToRemove: T[]): T[] => {
	return pullAll(collection, elementsToRemove);
	// collection = collection.filter(f => !elementsToRemove.includes(f));
	// return collection;
};

export default pull;
