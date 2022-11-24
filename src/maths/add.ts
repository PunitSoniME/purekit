const add = (numbers: any[]): number => {
    return numbers.reduce((oldValue, nextValue) => { return oldValue + nextValue }, 0);
}

export default add;