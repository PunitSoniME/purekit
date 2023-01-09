import baseMathPrecesion from '../helpers/baseMathPrecesion';

const floor = (value: number, precision: number = 0): number => {
	return baseMathPrecesion(value, precision, 'floor');
};

export default floor;
