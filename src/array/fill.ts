const fill = (
  array: any[],
  value: any,
  start: number = 0,
  end: number = array.length
): any[] => {
  array.fill(value, start, end);
  return array;
};

export default fill;
