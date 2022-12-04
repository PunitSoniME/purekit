const compact = <T>(array: T[]): T[] => {
  return array.filter(Boolean);
};

export default compact;
