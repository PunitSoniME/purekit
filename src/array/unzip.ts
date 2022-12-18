const unzip = (collection: any[][]): any[][] =>
	collection.reduce(
		(acc, c) => (c.forEach((v, i) => acc[i].push(v)), acc),
		Array.from(
			{ length: Math.max(...collection.map((a) => a.length)) },
			(_) => []
		)
	);

export default unzip;
