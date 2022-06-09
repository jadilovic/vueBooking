const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
	transpileDependencies: true,
	pluginOptions: {
		'style-resources-loader': {
			preProcessor: 'scss',
			patterns: [path.resolve(__dirname, './src/styles/global.scss')],
		},
	},
	css: {
		loaderOptions: {
			// pass options to sass-loader
			// @/ is an alias to src/
			// so this assumes you have a file named `src/variables.sass`
			// Note: this option is named as "prependData" in sass-loader v8
			// sass: {
			// 	additionalData: `@import "~@/variables.sass"`,
			// },
			// by default the `sass` option will apply to both syntaxes
			// because `scss` syntax is also processed by sass-loader underlyingly
			// but when configuring the `prependData` option
			// `scss` syntax requires an semicolon at the end of a statement, while `sass` syntax requires none
			// in that case, we can target the `scss` syntax separately using the `scss` option
			scss: {
				additionalData: `@import "~@/styles/setup";`,
			},
			// pass Less.js Options to less-loader
			less: {
				// http://lesscss.org/usage/#less-options-strict-units `Global Variables`
				// `primary` is global variables fields name
				globalVars: {
					primary: '#fff',
				},
			},
		},
	},
});
