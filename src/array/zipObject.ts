/**
 *
 * @param props
 * @param values
 * @returns
 */
const zipObject = (props: any[] = [], values: any[] = []): Object =>
	props.reduce((acc: any, key, idx) => {
		acc[key] = values[idx];
		return acc;
	}, {});
export default zipObject;
