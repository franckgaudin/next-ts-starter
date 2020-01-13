const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withTM = require('next-transpile-modules');
const withPlugins = require('next-compose-plugins');

const tmConfig = { transpileModules: [] };
const sassConfig = {};
const cssConfig = {};

const nextConfig = {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  webpack(config) {
    return config;
  },
};

module.exports = withPlugins(
  [
    [withSass, sassConfig],
    [withCSS, cssConfig],
    [withTM, tmConfig],
  ],
  nextConfig,
);
