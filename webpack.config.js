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
};