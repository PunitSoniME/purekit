const zip = (collection: any[], ...otherCollections: any[][]): any[][] =>
	collection.map((value, idx) => [
		value,
		...otherCollections.map(arr => arr[idx]),
	]);
export default zip;
