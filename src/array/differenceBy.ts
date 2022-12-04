const differenceBy = <T>(array1: any[], array2: any[], dependent: any): T[] => {
	if (Array.isArray(array1) && array1.length === 0) return [];

	switch (typeof dependent) {
		case 'string':
			return [...array1].filter(
				x => !array2.some(y => x[dependent] === y[dependent])
			);

		case 'function':
			const dependentArray2 = [...array2].map(m => dependent(m));

			return [...array1].filter(x => {
				const dependentX = dependent(x);
				return !dependentArray2.some(y => dependentX === y);
			});
	}

	return [];
};

export default differenceBy;
