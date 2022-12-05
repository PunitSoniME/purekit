const flattenDeep = <T>(collection: T[]): any[] => collection.flat(Infinity);

export default flattenDeep;
