const path = require('path');

module.exports = {
    mode: 'development',  
    entry: './src/js/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/js'),
    },
    devServer: {
        contentBase: './dist/js',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};