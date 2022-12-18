const zip = (...collection: any[][]): any[][] =>
	Array(Math.max(...collection.map((a) => a.length)))
		.fill(null)
		.map((_, i) => collection.map((a) => a[i]));
export default zip;
