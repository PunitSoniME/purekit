const compact = (array: any[]): any[] => {
  return array.filter(Boolean);
};

export default compact;
