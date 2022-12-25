//  @ts-nocheck
const conformsTo = (obj: any, source: any): boolean => {
	const entries = Object.entries(source);
	for (let i = 0; i < entries.length; i++) {
		const valueInMainObject = obj[entries[i][0]];
		if (entries[i][1](valueInMainObject) !== true) return false;
	}
	return true;
};

export default conformsTo;
