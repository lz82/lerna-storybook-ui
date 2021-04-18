# bud-vue-console-ui

## 项目框架

`vue create bud-vue-console-ui`创建基于 vue 2.x 的项目

## 使用 lerna 管理 mono repo

`npx lerna init --independent`
注意`--independent`表示每个 package 单独管理版本，而不是统一使用一个版本

## 创建 package

创建 storybook 的 package
`npx lerna create storybook`

创建第一个测试组件的 package
`npx lerna create bud-panel`

## 使用 yarn workspaces 来管理包

1. 在根目录的`package.json`中添加

```json
"workspaces": [
    "packages/*"
  ]
```

在`lernamjson`中添加

```json
  "npmClient": "yarn",
  "useWorkspaces": true

```

同时注意，只有根目录的`package.json`中的`private`设为`true`,`workspaces`才会生效(未测试)

## 安装 sb

进入`packages/storybook`目录下，执行`npx sb init`安装`sb`
期间会提示说不知道项目是什么类型，需要手动选择 vue

## 在根目录启动 sb

在根目录的`package.json`中的`scripts`中添加`"sb": "lerna run storybook --scope=storybook"`,这样在根目录执行`npm run sb`就能启动 storybook 了

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
