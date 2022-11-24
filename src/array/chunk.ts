const chunk = (array: any[], chunkSize: number = 1): any[] => {
  return Array(Math.ceil(array.length / chunkSize))
    .fill(null)
    .map((_, index) => index * chunkSize)
    .map((begin) => array.slice(begin, begin + chunkSize));
};

export default chunk;
