const path = require('path')

/**
 * `electron-packager` options
 * https://github.com/electron-userland/electron-packager/blob/master/docs/api.md
 */
module.exports = {
  arch: 'x64',
  asar: false,
  dir: path.join(__dirname, '../'),
  icon: path.join(__dirname, '../assets/app-icon/icon'),
  ignore: /(^\/(src|test|build|\.[a-z]+|README|yarn|static))|\.gitkeep/,
  out: path.join(__dirname, '../prod'),
  overwrite: true,
  platform: process.env.BUILD_TARGET || 'all'
}