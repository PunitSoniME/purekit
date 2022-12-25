const lowerCase = (str: string = ''): string =>
	str
		.replace(/[-._\s]+/g, ' ')
		.replace(/[A-Z0-9]/, ' $&')
		.replace(/[-]{2,}/, '')
		.toLowerCase()
		.trim();

export default lowerCase;
