/**
 *
 * @param object
 * @returns
 */
const matches = (source: Object): any => {
	return (object: any) => {
		for (let key in source) {
			if (source.hasOwnProperty(key)) {
				//	@ts-ignore
				if (typeof source[key] === 'object' && source[key] !== null) {
					//	@ts-ignore
					if (!matches(source[key])(object[key])) {
						return false;
					}
					//	@ts-ignore
				} else if (source[key] !== object[key]) {
					return false;
				}
			}
		}
		return true;
	}
};
export default matches;
