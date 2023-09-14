# YZ admin 🚀

## 介绍 💥

一个基于 React18、vite4、router6 后台管理模板，旨在让开发者快速搭建后台管理系统，不需要进行基础搭建便可以进行业务功能开发

## 技术栈 🔥🔥

- react18
- react-router6
- redux
- RTK
- redux-persist
- vite4
- antd

## 功能 💖

- 数据持久化存储
- 路由鉴权
- 动态主题
- axios 请求封装
- 封装 svg 图标组件
- Prettier 统一格式化代码，集成 ESLint、Stylelint 代码校验规范
- husky、lint-staged、commitlint、czg、cz-git 规范提交信息

## 目录 📃

```text
YZ-Admin
├─ .vscode                # vscode推荐配置
├─ public                 # 静态资源文件（忽略打包）
├─ src
│  ├─ api                 # API 接口管理
│  ├─ assets              # 静态资源文件
│  ├─ components          # 全局组件
│  ├─ config              # 全局配置项
│  ├─ enums               # 项目枚举
│  ├─ hooks               # 常用 Hooks
│  ├─ routers             # 路由管理
│  ├─ store               # redux store
│  ├─ style               # 全局样式
│  ├─ utils               # 工具库
│  ├─ views               # 项目所有页面
│  ├─ App.tsx             # 入口页面
│  ├─ main.tsx            # 入口文件
│  └─ vite.env.d.ts       # vite 声明文件
├─ .editorconfig          # 编辑器配置（格式化）
├─ .env                   # vite 常用配置
├─ .env.development       # 开发环境配置
├─ .env.production        # 生产环境配置
├─ .env.test              # 测试环境配置
├─ .eslintignore          # 忽略 Eslint 校验
├─ .eslintrc.js           # Eslint 校验配置
├─ .gitignore             # git 提交忽略
├─ .prettierignore        # 忽略 prettier 格式化
├─ .prettierrc.js         # prettier 配置
├─ .stylelintignore       # 忽略 stylelint 格式化
├─ .stylelintrc.js        # stylelint 样式格式化配置
├─ CHANGELOG.md           # 项目更新日志
├─ commitlint.config.js   # git 提交规范配置
├─ index.html             # 入口 html
├─ LICENSE                # 开源协议文件
├─ lint-staged.config     # lint-staged 配置文件
├─ pnpm-lock.yaml         # 依赖包包版本锁
├─ package.json           # 依赖包管理
├─ postcss.config.js      # postcss 配置
├─ README.md              # README 介绍
├─ tsconfig.json          # typescript 全局配置
├─ tsconfig.node.json     # 用于 vite.config.ts 的 TypeScript 配置文件
└─ vite.config.ts         # vite 配置
```

## 安装及使用 🎈

```shell
# 克隆项目
git clone https://github.com/coder-czy/YZ-admin.git

# 进入项目目录
cd YZ-admin

# 安装依赖
pnpm install(推荐使用pnpm)

# 启动
pnpm start

# 构建
pnpm build

# 预览
pnpm preview
```

## 最后 🔚

目前还有很多不足的地方，如果你觉得有不错的想法及更好的实现欢迎提 pr，大家一起学习进步~</br>
如果你觉得这个项目还不错，点个 star ⭐️ 支持一下 thanks~
