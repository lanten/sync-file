<div align="center">
  <img src="./assets/app-icon/app-icon@256.png"/>
</div>

## 这是什么玩意儿？

基于 electron 实现的 shadowsocks 用户PAC规则管理工具

![gui](/static/image/gui.png)

## 平台支持

- windows 7+
- mac os 10.8+ [release-v0.0.1-beta](https://github.com/lanten/sync-pac/releases/tag/0.0.1-beta)

## Quick start

```bash
npm i
```

and

```bash
npm run dev
```

## Overview

- webpack 4
- electron
- electron-package
- react 16
- reach-router
- ant-design
- less

## DevTools

Toggle DevTools:

* OSX: <kbd>Cmd</kbd> <kbd>Alt</kbd> <kbd>I</kbd> or <kbd>F12</kbd>
* Linux: <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd> or <kbd>F12</kbd>
* Windows: <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd> or <kbd>F12</kbd>

## Packaging

Modify [package.config.js](./config/package.config.js) to edit package info.

For a full list of options see: https://github.com/electron-userland/electron-packager/blob/master/docs/api.md.

Create a package for OSX, Windows and Linux

```
npm run pack
```

Or target a specific platform

```bash
npm run pack:mac
npm run pack:win
npm run pack:linux
```
