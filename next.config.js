const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withTM = require('next-transpile-modules');
const compose = require('next-compose');

const tmConfig = { transpileModules: [] };
const sassConfig = {};
const cssConfig = {};

module.exports = compose([
  [withSass, sassConfig],
  [withCSS, cssConfig],
  [withTM, tmConfig],
  {
    webpack(config) {
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader',
      });
      return config;
    },
  },
]);
