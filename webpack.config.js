const path = require('path');


module.exports = () => ({
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        host: '0.0.0.0',
    },
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        main: './src/app',
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: 'babel-loader',
        }, {
            test: /\.html$/,
            use: [{ loader: 'html-loader' }],
        }],
        
    },
    optimization: {
        splitChunks: { chunks: 'all' },
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
    },
});