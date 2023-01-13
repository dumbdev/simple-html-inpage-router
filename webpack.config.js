const path = require('path');

module.exports = {
    context: path.resolve(__dirname),
    // devtool: 'inline-source-map',
    entry: './src/index.ts',
    mode: 'production',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    output: {
        filename: 'simple-html-inpage-router.js',
        path: path.resolve(__dirname, 'dist'),
        library: "SimpleHtmlInPageRouter"
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    },
};