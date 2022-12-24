import getRandomElementFromCollection from '../util/getRandomElement';

const sample = <T>(collection: T): any => {
	if (typeof collection === 'object')
		return Object.values(getRandomElementFromCollection(collection).element)[0];

	return getRandomElementFromCollection(collection as any[]).element;
};
export default sample;
