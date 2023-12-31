const path = require('node:path')

const webpack = require('webpack')
const { merge } = require('webpack-merge')

const nextcloudWebpackConfig = require('@nextcloud/webpack-vue-config')

const commonWebpackConfig = require('./webpack.common.config.js')

// Rules from @nextcloud/webpack-vue-config/rules already added by commonWebpackConfig
nextcloudWebpackConfig.module.rules = []

module.exports = merge(nextcloudWebpackConfig, commonWebpackConfig, {
	entry: {
		'admin-settings': path.join(__dirname, 'src', 'mainAdminSettings.js'),
		collections: path.join(__dirname, 'src', 'collections.js'),
		main: path.join(__dirname, 'src', 'main.js'),
		recording: path.join(__dirname, 'src', 'mainRecording.js'),
		'files-sidebar': [
			path.join(__dirname, 'src', 'mainFilesSidebar.js'),
			path.join(__dirname, 'src', 'mainFilesSidebarLoader.js'),
		],
		'public-share-auth-sidebar': path.join(__dirname, 'src', 'mainPublicShareAuthSidebar.js'),
		'public-share-sidebar': path.join(__dirname, 'src', 'mainPublicShareSidebar.js'),
		flow: path.join(__dirname, 'src', 'flow.js'),
		dashboard: path.join(__dirname, 'src', 'dashboard.js'),
		deck: path.join(__dirname, 'src', 'deck.js'),
		maps: path.join(__dirname, 'src', 'maps.js'),
	},

	output: {
		assetModuleFilename: '[name][ext]?v=[contenthash]',
	},

	plugins: [
		new webpack.DefinePlugin({ IS_DESKTOP: false }),
	],

	cache: true,
})
