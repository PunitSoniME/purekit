import baseMathPrecesion from '../util/baseMathPrecesion';

const ceil = (value: number, precision: number = 0): number => {
	return baseMathPrecesion(value, precision, 'ceil');
};

export default ceil;
