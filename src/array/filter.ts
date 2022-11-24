const filter = (array: any[], callback: Function): any[] => {
  return array.filter((d) => {
    return callback(d);
  });
};

export default filter;
