const chunk = <T>(array: T[], chunkSize: number = 1): Array<T>[] => {
  return Array(Math.ceil(array.length / chunkSize))
    .fill(null)
    .map((_, index) => index * chunkSize)
    .map(begin => array.slice(begin, begin + chunkSize));
};

export default chunk;
