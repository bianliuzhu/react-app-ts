
module.exports = {
	extends: [
		'eslint-config-ali/typescript/react',
		'prettier',
		'prettier/@typescript-eslint',
		'prettier/react',
	],
	rules: {
		'no-console': ["error", { allow: ["warn", "error"] }],
		'@typescript-eslint/no-empty-interface': 0,
		'no-param-reassign': ["error", { "props": false }]
	}
};
