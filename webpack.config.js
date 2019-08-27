var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/container.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'container.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}