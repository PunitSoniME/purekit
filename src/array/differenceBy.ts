const differenceBy = <T>(
	collection1: T[],
	collection2: T[],
	dependent: any
): T[] => {
	switch (typeof dependent) {
		case 'string':
			return [...collection1].filter(
				//	@ts-ignore
				(x) => !collection2.some((y) => x[dependent] === y[dependent])
			);

		case 'function':
			const dependentArray2 = [...collection2].map((m) => dependent(m));

			return [...collection1].filter((x) => {
				const dependentX = dependent(x);
				return !dependentArray2.some((y) => dependentX === y);
			});
	}

	return [];
};

export default differenceBy;
