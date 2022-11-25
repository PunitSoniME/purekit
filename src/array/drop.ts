const drop = (array: any[], length = 1) => {
    const lengthToCheck = length - 1;

    return array.filter((_, index) => {
        return index > lengthToCheck;
    });
};

export default drop;
