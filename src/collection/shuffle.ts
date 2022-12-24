import { sampleSize } from 'lodash';

const shuffle = <T>(collection: T): T => {
	if (Array.isArray(collection))
		return sampleSize(collection, collection.length) as T;
	else if (typeof collection === 'object')
		return sampleSize(
			collection,
			Object.keys(collection as Object).length
		) as T;

	return collection;
};
export default shuffle;
