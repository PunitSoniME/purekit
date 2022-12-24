const size = (collection: any[] | Object | string): number => {
	if (Array.isArray(collection)) return collection.length;
	else if (typeof collection === 'object')
		return Object.keys(collection as Object).length;

	return (collection as 'string').length;
};
export default size;
