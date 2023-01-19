import set from '../object/set';

/**
 *
 * @param props
 * @param values
 * @returns
 */
const zipObjectDeep = (props: any[] = [], values: any[] = []): Object => {
	const newObject = props.reduce((acc: any, key, idx: number) => {
		set(acc, key, values[idx]);
		return acc;
	}, {});

	return newObject;
};

export default zipObjectDeep;
