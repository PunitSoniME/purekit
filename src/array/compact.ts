const compact = (array: any[]): any[] => {
  return array.filter(f => Boolean(f));
};

export default compact;
