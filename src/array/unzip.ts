import zip from './zip';
//	@ts-ignore
const unzip = ([...collection]: any[][]): any[][] => zip(...collection);

export default unzip;
