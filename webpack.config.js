const path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
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
        new CompressionPlugin()
    ],
    module: {
        rules: [{
            test: /\.ts?$/,
            loader: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                chunkFilter: (chunk) => {
                    return chunk.name === 'wut.min';
                },
                cache: true,
                parallel: true,
                sourceMap: true,
                terserOptions: {
                    parse: {
                        ecma: 8
                    },
                    compress: {
                        ecma: 5,
                        warnings: false,
                        comparisons: false,
                        unsafe: true,
                        drop_console: true,
                        toplevel: true
                    },
                    mangle: {
                        safari10: true
                    },
                    output: {
                        ecma: 5,
                        comments: false,
                        ascii_only: true
                    },
                },
            }),
        ],
    }
};
