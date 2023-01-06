import get from './../util/get';

const at = <T>(object: T, paths: any[]): any[] => {
	let data: any[] = [];
	paths.forEach(f => {
		const value = get(object, f);
		if (value) data.push(value);
	});
	return data;
};

export default at;
