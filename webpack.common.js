const path = require('path');

module.exports = {
    entry: ['./src/index.js','./src/index.scss'],
    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: [/node_modules/],
            query: {
                presets: ['@babel/preset-env', '@babel/react']
            }
        }]
    },
}
