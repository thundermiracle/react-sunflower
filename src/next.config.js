const config = require("../config/client");
const PATH_MAP = require("./client/PathMap");
const { EnvironmentPlugin } = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');

process.env.PKG_VERSION = process.env.npm_package_version;
process.env.PKG_NAME = process.env.npm_package_name;

// default: use package_name as sub folder's name
process.env.SUBFOLDER = (config.subfolder && process.env.NODE_ENV === 'production') ? `/${process.env.npm_package_name}` : '';

module.exports = {
  assetPrefix: process.env.SUBFOLDER,
  webpack: (config, { dev }) => {
    config.plugins.push(new EnvironmentPlugin(['PKG_VERSION', 'PKG_NAME', 'SUBFOLDER']));
    config.plugins.push(new CompressionPlugin());
    return config;
  },
  distDir: '../.next',
}