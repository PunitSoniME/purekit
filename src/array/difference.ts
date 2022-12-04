const difference = <T>(array1: T[], array2: T[]): T[] => {
  return array1.filter(x => !array2.includes(x));
};

export default difference;
