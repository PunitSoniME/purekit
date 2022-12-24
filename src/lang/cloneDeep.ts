const cloneDeep = <T>(value: T): T => {
	if (Array.isArray(value)) {
		return value.slice().map(cloneDeep) as any;
	} else if (value instanceof RegExp) {
		return new RegExp(value.source, value.flags) as any;
	} else if (value instanceof Set) {
		const out = new Set();
		value.forEach(v => out.add(cloneDeep(v)));
		return out as any;
	} else if (value instanceof Map) {
		const out = new Map();
		value.forEach((v, k) => out.set(k, cloneDeep(v)));
		return out as any;
	} else if (value instanceof Date) {
		return new Date(value) as any;
	} else if (typeof value === 'object' && value !== null) {
		const out: Record<string, any> = {};
		for (const k in value) {
			out[k] = cloneDeep(value[k]);
		}
		return out as any;
	}

	return value;
};

export default cloneDeep;
