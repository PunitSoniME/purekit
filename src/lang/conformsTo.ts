/**
 *
 * @param obj
 * @param source
 * @returns
 */
const conformsTo = (object: any, source: any): boolean => {
	const entries = Object.entries(source);
	for (let i = 0; i < entries.length; i++) {
		const valueInMainObject = object[entries[i][0]];
		//	@ts-ignore
		if (entries[i][1](valueInMainObject) !== true) return false;
	}
	return true;
};

export default conformsTo;
