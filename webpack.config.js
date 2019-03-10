const path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: {
        'wut': './src/index.ts',
        'wut.min': './src/index.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'Wut.js',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin({
            verbose: true
        }),
    ],
    module: {
        rules: [{
            test: /\.ts?$/,
            loader: 'ts-loader',
            exclude: /node_modules/
        }]
    }
};
