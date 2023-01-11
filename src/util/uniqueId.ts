const uniqueId = (
	(counter: number) =>
	(str = '') =>
		`${str}${++counter}`
)(0);
export default uniqueId;
