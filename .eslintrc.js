module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
	parserOptions: {
		parser: 'babel-eslint',
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'for-direction': 'error',
		'no-unreachable': 2, // 在return，throw，continue，break语句后不允许出现不可能到达的语句
		'use-isnan': 2, // 要求检查NaN的时候使用isNaN()
		quotes: ['error', 'single', { allowTemplateLiterals: true }], // 单引号 允许模板文字,
	},
}
