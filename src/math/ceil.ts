import baseMathPrecesion from '../helpers/baseMathPrecesion';

const ceil = (value: number, precision: number = 0): number => {
	return baseMathPrecesion(value, precision, 'ceil');
};

export default ceil;
