# landle
*灵感来源：[https://handle.antfu.me](https://handle.antfu.me)*



## 效果原型

效果原型：[https://modao.cc/app/xlbzgapVrihww5TTiKxf46](https://modao.cc/app/xlbzgapVrihww5TTiKxf46)

# 

## 产品简介

​	源于wordle和handle的根据提示猜测中国景点的游戏。

​	景点范围：每个省排名大约前十的景点。

​	游戏规则：若提示为青色则表示答案景点含有此标签（特点）并且标签的内容正确；如果提示为橙色，则表示答案景点含有此标签（特点），但是标签的内容错误；如果提示为灰色，则表示答案景点不含有此标签。同时每猜测一个景点，外围会将所有与该景点具有相同标签且标签内容相同的景点连接，从而提升景点与景点的联系。



## 文件目录

##### data

+ 景点图鉴
+ 景点标签
+ 景点图片
+ 逻辑流程图

##### project

+ NABCD模型分析

##### web

+ dist 
  + build生成的文件夹，上传到gh-pages分支(可修改)
+ node_modules 
  + 安装的依赖库
+ src
  + 主要code文件夹
    + data.js 导出网页所需要的数据
    + function.js 导出网页所需要的函数
    + App.vue 主要code文件
    + assets 包含字体，图片和图标







This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).



## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```





#### 成员组成

+ 瞿艺飞
+ 李宇达
+ 郑明宇
+ 简楚欣



