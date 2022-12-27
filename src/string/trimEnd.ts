/**
 *
 * @param str
 * @returns
 */
const trimEnd = (str: string = '', characters: string = ''): string => {
	if (characters.trim() === '') return str.trimEnd();

	return str.replace(new RegExp('[' + characters + ']+$'), '');
};

export default trimEnd;
