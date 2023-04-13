interface TemplateVariables {
	[key: string]: any;
}

const escapeHtml = (str: string): string => {
	return str.replace(/[&<>"']/g, match => {
		switch (match) {
			case '&':
				return '&amp;';
			case '<':
				return '&lt;';
			case '>':
				return '&gt;';
			case '"':
				return '&quot;';
			case "'":
				return '&#039;';
			default:
				return match;
		}
	});
};

const defaultOptions = {
	escape: /<%-([\s\S]+?)%>/g,
	interpolate: /<%=([\s\S]+?)%>/g,
};

const template = (str: string, options = {}): Function => {
	const mergedOptions = { ...defaultOptions, ...options };

	const fn = (variables: TemplateVariables) => {
		const variableNames = Object.keys(variables);
		const variableValues = Object.values(variables);

		// Replace <%- variableName %> with escaped variable value
		str = str.replace(mergedOptions.escape, (_, variableName) => {
			const index = variableNames.indexOf(variableName.trim());
			return index !== -1 ? escapeHtml(String(variableValues[index])) : '';
		});

		// Replace <%= variableName %> with unescaped variable value
		return str.replace(mergedOptions.interpolate, (_, variableName) => {
			const index = variableNames.indexOf(variableName.trim());
			return index !== -1 ? String(variableValues[index]) : '';
		});
	};

	return fn;
};

export default template;
