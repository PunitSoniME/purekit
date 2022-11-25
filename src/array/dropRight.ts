const dropRight = (array: any[], length = 1) => {
  const lengthToCheck = array.length - length;

  return array.filter((_, index) => {
    return index < lengthToCheck;
  });
};

export default dropRight;
