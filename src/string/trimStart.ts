/**
 *
 * @param str
 * @returns
 */
const trimStart = (str: string = '', characters: string = ''): string => {
	if (characters.trim() === '') return str.trimStart();

	return str.replace(new RegExp('^[' + characters + ']+'), '');
};

export default trimStart;
