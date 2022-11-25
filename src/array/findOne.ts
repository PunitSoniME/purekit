const findOne = (array: any[], callback: Function): any => {
  return array.find(d => {
    return callback(d);
  });
};

export default findOne;
