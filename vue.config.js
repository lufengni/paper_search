const CompressionWebpackPlugin = require('compression-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
	chainWebpack: config => {
		config
		.plugin('webpack-bundle-analyzer')
		.use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)

	},

	configureWebpack: config => {
		// 开发环境不需要gzip
		if (process.env.NODE_ENV !== 'production') return
		config.plugins.push(
				new CompressionWebpackPlugin({
						algorithm: 'gzip',
						// 正在匹配需要压缩的文件后缀
						test: /\.(js|css|svg|woff|ttf|json|html)$/,
						filename: '[path].gz[query]', // 压缩后的文件名(保持原文件名，后缀加.gz)
						// 大于10kb的会压缩
						threshold: 10240
								// 其余配置查看compression-webpack-plugin
				})
		)
		// config.optimization.minimizer.push(
		// 	new BundleAnalyzerPlugin({
		// 		analyzerPort: 8089,
		// 		generateStatsFile: false
		// 	})
		// )
	}
}