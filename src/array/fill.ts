const fill = <T>(
  array: T[],
  value: any,
  start: number = 0,
  end: number = array.length
): T[] => {
  array.fill(value, start, end);
  return array;
};

export default fill;
