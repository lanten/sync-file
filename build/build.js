process.env.NODE_ENV = 'production'
const path = require('path')
const packager = require('electron-packager')

const { default: buildCommon } = require('./build-common')
const webpackConfig = require('./webpack.config')
const packageConfig = require('./package-config')

const { clearDir } = require('./utils')


clearDir(path.join(__dirname, '../dist'), false, true)

buildCommon(webpackConfig).then(() => {
  console.log('编译完成!')
  bundleApp()
}).catch(err => {
  console.error(err)
})


function bundleApp() {
  packageConfig.mode = 'production'
  packager(packageConfig, (err, appPaths) => {
    if (err) {
      console.error(err)
    } else {
      console.log('打包完成!')
    }
  })
}