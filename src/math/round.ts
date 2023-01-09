import baseMathPrecesion from '../helpers/baseMathPrecesion';

const round = (value: number, precision: number = 0): number => {
	return baseMathPrecesion(value, precision, 'round');
};

export default round;
