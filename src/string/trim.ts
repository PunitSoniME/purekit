import trimEnd from './trimEnd';
import trimStart from './trimStart';

/**
 *
 * @param str
 * @returns
 */
const trim = (str: string = '', characters: string = ''): string => {
	const startedTrimmed = trimStart(str, characters);
	return trimEnd(startedTrimmed, characters);
};

export default trim;
