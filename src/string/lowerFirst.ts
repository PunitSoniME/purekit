const lowerFirst = (str: string = ''): string =>
	str.charAt(0).toLocaleLowerCase() + str.slice(1);
export default lowerFirst;
