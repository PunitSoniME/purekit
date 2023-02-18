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

	// const result = {};

	// for (let i = 0; i < props.length; i++) {
	// 	const nestedKeys = props[i].split('.');
	// 	let currentObject: any = result;

	// 	for (let j = 0; j < nestedKeys.length - 1; j++) {
	// 		const key = nestedKeys[j];
	// 		currentObject[key] = currentObject[key] || {};
	// 		currentObject = currentObject[key];
	// 	}

	// 	currentObject[nestedKeys[nestedKeys.length - 1]] = values[i];
	// }

	// return result;
};

export default zipObjectDeep;
