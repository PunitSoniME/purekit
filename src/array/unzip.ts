import zip from './zip';

/**
 *
 * @param param0
 * @returns
 */
//	@ts-ignore
const unzip = ([...array]: any[][]): any[][] => zip(...array);

export default unzip;
