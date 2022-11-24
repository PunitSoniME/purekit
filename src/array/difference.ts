const difference = (array1: any[], array2: any[]): any[] => {
    return array1.filter(x => !array2.includes(x));
}

export default difference;