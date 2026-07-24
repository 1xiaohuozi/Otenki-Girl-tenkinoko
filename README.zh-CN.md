# Otenki Girl——《天气之子》主题网站

[English](README.md) | [日本語](README.ja.md) | 简体中文

![天气之子主题首页](assets/cover.png)

这是一个以《天气之子》为主题的前端粉丝网站，通过视频背景、图片、音乐、导航菜单和交互弹窗展示故事及角色内容。

## 项目截图

| 主题页面 | 内容区域 |
| --- | --- |
| ![主题页面](assets/screenshot-01.png) | ![内容区域](assets/screenshot-02.png) |

## 主要功能

- 全屏循环视频背景
- 故事与人物介绍页面
- 响应式导航和新海诚系列页面
- 背景音乐播放与暂停
- 图片面板和动态视觉内容
- “关于我们”弹窗
- 用于展示晴天服务概念的`OtenkiGirl-master`子项目

## 技术栈

- HTML5
- CSS3
- 原生JavaScript
- 图片、GIF、MP4视频和MP3音频
- 根据原项目说明，`OtenkiGirl-master`实现使用了GUN

## 项目结构

```text
.
├── assets/                 # README截图
├── css/                    # 主网站样式
├── img/                    # 图片和视频
├── js/                     # 主网站脚本
├── music/                  # 背景音乐
├── OtenkiGirl-master/      # 晴天服务子项目
├── index.html              # 主入口
├── 2.html
├── 3.html
├── 5.html
└── 6.html
```

## 本地运行

项目不需要构建。

1. 克隆仓库：

   ```bash
   git clone https://github.com/1xiaohuozi/Otenki-Girl-tenkinoko.git
   cd Otenki-Girl-tenkinoko
   ```

2. 使用现代浏览器打开`index.html`。

也可以使用任意静态服务器，例如：

```bash
python -m http.server 8000
```

然后访问`http://localhost:8000/`。

## 使用方法

- 通过导航菜单切换不同主题页面。
- 使用音乐按钮播放或暂停背景音乐。
- 打开新海诚系列页面浏览图片面板。
- 点击“关于我们”打开成员信息弹窗。

由于浏览器自动播放限制，背景音乐可能需要用户点击后才能播放。

## 致谢

原中文说明提到，晴天服务部分使用了[IvanLuLyf/OtenkiGirl](https://github.com/IvanLuLyf/OtenkiGirl)整合的成果。修改或分发该部分时请保留上游署名。

## 免责声明

本项目是用于学习的非官方粉丝作品。《天气之子》相关名称、图片、视频、音乐及其他素材的权利归各自权利人所有。仓库目前没有独立的许可证文件。
