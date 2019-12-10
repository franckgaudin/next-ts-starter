const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withTM = require('next-transpile-modules');
const withPlugins = require('next-compose-plugins');

const tmConfig = { transpileModules: [] };
const sassConfig = {};
const cssConfig = {};

const nextConfig = {
    webpack(config) {
      return config;
    },
  };

module.exports = compose(
  [[withSass, sassConfig],[withCSS, cssConfig],[withTM, tmConfig]], 
  nextConfig,
);
