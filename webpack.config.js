const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        dom: './src/dom.js',
        notes: './src/notes.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
    },
};