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
			scss: {
				additionalData: `@import "~@/styles/setup";`,
			},
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
