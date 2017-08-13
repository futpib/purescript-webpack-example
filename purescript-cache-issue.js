
const webpack = require('webpack');

const webpackConfig = require('./webpack.config');

webpack(webpackConfig, err => {
    webpack(webpackConfig, err => {
        process.exit(0);
    });
});
