const concat = <T>(params: T[]) => {
	return params.map(m => (Array.isArray(m) ? m[0] : m));
};

export default concat;
