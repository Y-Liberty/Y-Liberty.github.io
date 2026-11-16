---
title: Python 环境安装与 PyCharm 安装使用教程
date: 2025-02-08 10:30:00
tags:
  - Python 环境配置
  - PyCharm 教程
categories:
  - Python
cover: https://bu.dusays.com/2025/11/05/690abc7d260ae.png
---

# 前言

{% note warning no-icon %}

本文将详细介绍如何安装 Python 环境以及 PyCharm 开发工具，并带你快速上手 PyCharm 的使用，让你能够顺利开始 Python 编程之旅！

{% endnote %}

{% note warning no-icon %}

在阅读过程中有任何问题都可以发布到评论区，有价值的问题将会放到文章末尾Q&A之中！

{% endnote %}

{% note success no-icon %}

**本文导航：**
- 🐍 Python 环境安装：Windows、Mac、Linux 全平台教程
- 🔧 Python 环境验证：检查安装是否成功
- 💻 PyCharm 安装：专业 Python IDE 安装指南
- ⚙️ PyCharm 配置：解释器配置和基本设置
- 📝 PyCharm 使用：创建项目、运行程序、调试技巧
- 💡 常见问题：安装和使用过程中的问题解决

{% endnote %}

# Python 环境安装

## 什么是 Python

{% note info no-icon %}

**Python**是一种高级编程语言，具有以下特点：

- 🎯 **简单易学**：语法简洁清晰，适合初学者
- 🔧 **功能强大**：可用于Web开发、数据分析、人工智能等多个领域
- 🌍 **跨平台**：支持 Windows、Mac、Linux 等多个操作系统
- 📦 **生态丰富**：拥有大量第三方库，满足各种开发需求

{% endnote %}

## 为什么需要安装 Python

{% note warning no-icon %}

**Python 是解释型语言**，需要安装 Python 解释器才能运行 Python 代码。

- 没有安装 Python 时：无法运行 `.py` 文件
- 安装 Python 后：可以通过解释器执行 Python 代码

{% endnote %}

## Windows 系统安装 Python

### 步骤1：下载 Python 安装包

{% note success no-icon %}

1. 访问 Python 官网：https://www.python.org/downloads/
2. 点击下载最新版本的 Python（推荐 Python 3.11 或更高版本）
3. 下载对应的 Windows 安装包（64位或32位）

![Python官网下载页面](https://bu.dusays.com/2025/11/05/690aac54716db.png)


{% endnote %}

### 步骤2：运行安装程序

{% note success no-icon %}

1. 双击下载的 `.exe` 安装文件
2. **重要：** 勾选 "Add Python to PATH"（将 Python 添加到环境变量）
3. 选择 "Install Now"（立即安装）或 "Customize installation"（自定义安装/自定义安装选项）

![Python安装程序界面](https://bu.dusays.com/2025/11/05/690aad27133c8.png)

{% endnote %}

### 步骤3：完成安装

{% note success no-icon %}

1. 等待安装完成（通常需要几分钟）
2. 看到 "Setup was successful"（安装成功）表示安装成功
3. 点击 "Close"（关闭）关闭安装程序

![Python安装成功](https://bu.dusays.com/2025/11/05/690aada9ba301.png)

{% endnote %}

## Mac 系统安装 Python

### 方法1：使用 Homebrew 安装（推荐）

{% note success no-icon %}

**Homebrew 是 Mac 上最流行的包管理器**

1. 打开终端（Terminal）
2. 安装 Homebrew（如果还没有安装）：
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
3. 使用 Homebrew 安装 Python：
   ```bash
   brew install python3
   ```

{% endnote %}

### 方法2：从官网下载安装包

{% note success no-icon %}

1. 访问 Python 官网下载页面
2. 下载 macOS 版本的安装包（`.pkg` 文件）
3. 双击安装包，按照提示完成安装

{% endnote %}

## Linux 系统安装 Python

{% note success no-icon %}

**大多数 Linux 系统已经预装了 Python，但可能需要安装 Python 3**

### Ubuntu/Debian 系统：

```bash
sudo apt update
sudo apt install python3 python3-pip
```

### CentOS/RHEL 系统：

```bash
sudo yum install python3 python3-pip
```

### Fedora 系统：

```bash
sudo dnf install python3 python3-pip
```

{% endnote %}

## 验证 Python 安装

{% note warning no-icon %}

**安装完成后，必须验证 Python 是否安装成功！**

{% endnote %}

### Windows 系统验证

{% note success no-icon %}

1. 按 `Win + R` 打开运行窗口
2. 输入 `cmd` 打开命令提示符
3. 输入以下命令：
   ```bash
   python --version
   ```
   或者
   ```bash
   python3 --version
   ```
4. 如果显示 Python 版本号（如 `Python 3.11.5`），说明安装成功

![Windows验证Python](https://bu.dusays.com/2025/11/05/690aae5a21699.png)

{% endnote %}

### Mac/Linux 系统验证

{% note success no-icon %}

1. 打开终端（Terminal）
2. 输入以下命令：
   ```bash
   python3 --version
   ```
3. 如果显示 Python 版本号，说明安装成功


{% endnote %}

## 验证 pip 安装

{% note info no-icon %}

**pip 是 Python 的包管理工具**，用于安装第三方库。

**验证命令：**

Windows:
```bash
pip --version
```

Mac/Linux:
```bash
pip3 --version
```

![验证pip](https://bu.dusays.com/2025/11/05/690aaeca93c70.png)


{% endnote %}

# PyCharm 安装

## 什么是 PyCharm

{% note info no-icon %}

**PyCharm**是 JetBrains 公司开发的 Python 集成开发环境（IDE），具有以下特点：

- 🎯 **功能强大**：代码自动补全、语法高亮、调试功能等
- 🔧 **智能提示**：代码分析和错误检测
- 📦 **插件丰富**：支持多种插件扩展
- 🆓 **免费版可用**：Community 版本免费使用

**PyCharm 版本：**

- **Professional（专业版）**：功能最全，需要付费
- **Community（社区版/免费版）**：免费，功能足够日常开发使用

{% endnote %}

## Windows 系统安装 PyCharm

### 步骤1：下载 PyCharm

{% note success no-icon %}

1. 访问 PyCharm 官网：https://www.jetbrains.com/pycharm/download/
2. 选择 "Community"（社区版/免费版）版本
3. 选择 Windows 平台，点击下载
   ![PyCharm下载页面](https://bu.dusays.com/2025/11/05/690ab23c75fcc.png)

{% endnote %}


### 步骤2：运行安装程序

{% note success no-icon %}

1. 双击下载的 `.exe` 安装文件

2. 点击 "Next"（下一步）开始安装

3. 选择安装路径（建议不要安装到C盘，避免C盘应用过多电脑卡顿）

4. **重要配置：**

   - 勾选 "Create Desktop Shortcut"（创建桌面快捷方式）
   - 勾选 "Add launchers dir to PATH"（添加到环境变量）

5. 点击 "Install"（安装）开始安装
   ![PyCharm安装界面](https://bu.dusays.com/2025/11/05/690ab2b796e84.png)

   ![PyCharm安装界面](https://bu.dusays.com/2025/11/05/690ab2e684e27.png)

{% endnote %}

### 步骤3：完成安装

{% note success no-icon %}

1. 等待安装完成
2. 勾选 "Run PyCharm Community Edition"（立即运行 PyCharm 社区版）
3. 点击 "Finish"（完成）完成安装
   ![PyCharm安装完成](https://bu.dusays.com/2025/11/05/690ab454c6078.png)

{% endnote %}

## Mac 系统安装 PyCharm

{% note success no-icon %}

### 方法1：使用 Homebrew 安装（推荐）

```bash
brew install --cask pycharm-ce
```

### 方法2：从官网下载安装包

1. 访问 PyCharm 官网下载页面
2. 下载 macOS 版本的 `.dmg` 文件
3. 双击 `.dmg` 文件，将 PyCharm 拖拽到 Applications 文件夹

{% endnote %}

## Linux 系统安装 PyCharm

{% note success no-icon %}

### 方法1：使用 Snap 安装

```bash
sudo snap install pycharm-community --classic
```

### 方法2：从官网下载压缩包

1. 访问 PyCharm 官网下载页面

2. 下载 Linux 版本的 `.tar.gz` 压缩包

3. 解压到指定目录：

   ```bash
   tar -xzf pycharm-community-*.tar.gz -C /opt/
   ```

4. 运行 PyCharm：

   ```bash
   /opt/pycharm-community-*/bin/pycharm.sh
   ```

{% endnote %}



# PyCharm 首次配置

## 启动 PyCharm

{% note success no-icon %}

1. 首次启动 PyCharm 会显示欢迎界面
2. 选择 "New Project"（新建项目）或 "Open"（打开项目/打开）
   ![PyCharm欢迎界面](https://bu.dusays.com/2025/11/05/690ab4a1c64c7.png)

{% endnote %}

## 配置 Python 解释器

{% note warning no-icon %}

**这是最重要的一步！** 必须配置 Python 解释器，PyCharm 才能运行 Python 代码。

{% endnote %}

### 创建新项目时配置

{% note success no-icon %}

1. 点击 "New Project"（新建项目）
2. 在 "Location"（位置/项目位置）中设置项目路径和名称
3. 在 "Python Interpreter"（Python 解释器）中：
   - 选择 "New environment using"（使用新环境）
   - 选择 "Virtualenv"（虚拟环境）或 "Conda"（Conda 环境）
   - 选择 Python 解释器路径（通常会自动检测）
4. 点击 "Create"（创建）创建项目
   ![配置Python解释器](https://bu.dusays.com/2025/11/05/690ab562aa998.png)

{% endnote %}

### 在已有项目中配置

{% note success no-icon %}

1. 点击菜单栏 "File"（文件）→ "Settings"（设置）（Windows/Linux）或 "PyCharm" → "Preferences"（偏好设置）（Mac）
2. 选择 "Project: 项目名"（项目：项目名）→ "Python Interpreter"（Python 解释器）
3. 点击齿轮图标，选择 "Add..."（添加.../添加解释器）
4. 选择解释器类型（System Interpreter（系统解释器）、Virtualenv Environment（虚拟环境）等）
5. 选择 Python 解释器路径
6. 点击 "OK"（确定）保存
   ![Settings配置解释器](https://bu.dusays.com/2025/11/05/690ab762cad49.png)

{% endnote %}

# PyCharm 基本使用

## 创建第一个 Python 文件

{% note success no-icon %}

1. 在项目窗口中，右键点击项目文件夹
2. 选择 "New"（新建）→ "Python File"（Python 文件）
3. 输入文件名（如 `hello.py`）
4. 点击 "OK"（确定）创建文件
   <img src="https://bu.dusays.com/2025/11/05/690ab6be75c7f.png" alt="创建Python文件" style="zoom:50%;" />

![Settings配置解释器](https://bu.dusays.com/2025/11/05/690ab6be768b8.png)

![Settings配置解释器](https://bu.dusays.com/2025/11/05/690ab6be768dd.png)

{% endnote %}

## 编写代码

{% note success no-icon %}

在编辑器中输入以下代码：

```python
print("Hello, World!")
print("欢迎使用 PyCharm!")
```

**PyCharm 的智能提示：**

- 输入代码时会有自动补全
- 语法错误会有红色波浪线提示
- 鼠标悬停可以看到函数说明
  ![编写代码](https://bu.dusays.com/2025/11/05/690ab789b0955.png)

{% endnote %}

## 运行程序

{% note success no-icon %}

### 方法1：右键运行

1. 右键点击代码编辑区域
2. 选择 "Run 'hello'"（运行 'hello'）或 "运行 'hello'"

### 方法2：快捷键运行

- **Windows/Linux**：按 `Shift + F10`
- **Mac**：按 `Ctrl + R`

### 方法3：点击运行按钮

点击代码编辑区域右上角的绿色运行按钮 ▶️（Run 运行按钮）
![运行程序](https://bu.dusays.com/2025/11/05/690ab7b93e4cc.png)

{% endnote %}

## 查看运行结果

{% note success no-icon %}

程序运行后，运行结果会显示在底部的 "Run"（运行）窗口中。
![运行结果](https://bu.dusays.com/2025/11/05/690ab7e797ac2.png)

{% endnote %}

## 调试程序

{% note success no-icon %}

**调试是查找和修复代码错误的重要工具**

### 设置断点

1. 在代码行号左侧点击，设置断点（红色圆点）
2. 点击调试按钮（虫子图标 🐛）或按 `Shift + F9`（Windows/Linux）启动调试
3. 程序会在断点处暂停
4. 可以查看变量值、单步执行等

**调试相关按钮说明：**
- 调试按钮：点击 "Debug"（调试）按钮或按快捷键启动调试
- 断点：在代码行号左侧点击设置，红色圆点表示断点
- 变量窗口：调试时可以在 "Variables"（变量）窗口中查看变量值

{% endnote %}

## 常用快捷键

{% note info no-icon %}

**Windows/Linux 快捷键：**

|    功能    |      快捷键      |
| :--------: | :--------------: |
|  运行程序  |  `Shift + F10`   |
|  调试程序  |   `Shift + F9`   |
| 格式化代码 | `Ctrl + Alt + L` |
|  查找替换  |    `Ctrl + R`    |
|  快速修复  |  `Alt + Enter`   |
|  自动补全  |  `Ctrl + Space`  |
|  查看文档  |    `Ctrl + Q`    |

**Mac 快捷键：**

|    功能    |       快捷键       |
| :--------: | :----------------: |
|  运行程序  |     `Ctrl + R`     |
|  调试程序  |     `Ctrl + D`     |
| 格式化代码 | `Cmd + Option + L` |
|  查找替换  |     `Cmd + R`      |
|  快速修复  |  `Option + Enter`  |
|  自动补全  |   `Ctrl + Space`   |

{% endnote %}

# PyCharm 进阶功能

## 安装第三方库

{% note success no-icon %}

### 方法1：使用 PyCharm 内置工具

1. 点击菜单栏 "File"（文件）→ "Settings"（设置）（Windows/Linux）或 "PyCharm" → "Preferences"（偏好设置）（Mac）
2. 选择 "Project: 项目名"（项目：项目名）→ "Python Interpreter"（Python 解释器）
3. 点击 "+" 号（加号）
4. 搜索要安装的库（如 `numpy`）
5. 点击 "Install Package"（安装包）安装
   ![安装第三方库](https://bu.dusays.com/2025/11/05/690ab8bae80e2.png)

![安装numpy](https://bu.dusays.com/2025/11/05/690ab8b3a6383.png)

{% endnote %}

### 方法2：使用终端

{% note success no-icon %}

1. 点击 PyCharm 底部的 "Terminal"（终端）标签

2. 在终端中输入：

   ```bash
   pip install numpy
   ```

   或（Mac/Linux）：

   ```bash
   pip3 install numpy
   ```


<img src="https://bu.dusays.com/2025/11/05/690ab921c5bb2.png" alt="终端安装库" style="zoom: 67%;" />

![终端安装numpy](https://bu.dusays.com/2025/11/05/690ab94bd62d9.png)

{% endnote %}

## 使用虚拟环境

{% note warning no-icon %}

**虚拟环境是 Python 项目的最佳实践！** 每个项目使用独立的虚拟环境，避免库版本冲突。

{% endnote %}

### 创建虚拟环境

{% note success no-icon %}

1. 创建新项目时，选择 "New environment using Virtualenv"（使用 Virtualenv 新建环境）
2. 或在已有项目中：Settings（设置）→ Python Interpreter（Python 解释器）→ Add（添加）→ Virtualenv Environment（虚拟环境）

{% endnote %}

## 代码格式化

{% note success no-icon %}

**PyCharm 可以自动格式化代码，使代码风格统一**

1. 选中要格式化的代码
2. 按 `Ctrl + Alt + L`（Windows/Linux）或 `Cmd + Option + L`（Mac）
3. 或右键选择 "Reformat Code"（格式化代码/重新格式化代码）

{% endnote %}

## 代码重构

{% note success no-icon %}

**PyCharm 提供强大的代码重构功能**

- **重命名**：选中变量，按 `Shift + F6`，可以重命名所有引用
- **提取方法**：选中代码块，按 `Ctrl + Alt + M`，提取为独立方法
- **提取变量**：选中表达式，按 `Ctrl + Alt + V`，提取为变量

{% endnote %}

# 常见问题解决

## 问题1：找不到 Python 解释器

{% note warning no-icon %}

**症状：** PyCharm 提示 "No Python interpreter configured"（未配置 Python 解释器）

**解决方法：**

1. 确认 Python 已正确安装
2. 在 PyCharm Settings（设置）中手动添加解释器路径
3. Windows 默认路径：`C:\Users\用户名\AppData\Local\Programs\Python\Python3XX\python.exe`
4. Mac 路径：`/usr/local/bin/python3` 或 `/opt/homebrew/bin/python3`

{% endnote %}

## 问题2：pip 安装失败

{% note warning no-icon %}

**症状：** 使用 pip 安装库时提示权限错误或网络错误

**解决方法：**

1. **权限错误**：使用管理员权限运行终端

2. **网络错误**：使用国内镜像源

   ```bash
   pip install numpy -i https://pypi.tuna.tsinghua.edu.cn/simple
   ```

3. **更新 pip**：

   ```bash
   python -m pip install --upgrade pip
   ```

{% endnote %}

## 问题3：中文乱码

{% note warning no-icon %}

**症状：** 运行 Python 程序时，中文显示为乱码

**解决方法：**

1. 在代码文件开头添加编码声明：

   ```python
   # -*- coding: utf-8 -*-
   ```

2. 或者在 PyCharm Settings（设置）中设置文件编码为 UTF-8

{% endnote %}

## 问题4：导入模块失败

{% note warning no-icon %}

**症状：** `import` 语句报错，提示找不到模块

**解决方法：**

1. 确认模块已安装：`pip list` 查看已安装的包
2. 确认使用的是正确的 Python 解释器
3. 检查虚拟环境是否正确激活

{% endnote %}

# 总结

{% note warning no-icon %}

## 安装步骤回顾

1. ✅ **安装 Python**：从官网下载并安装 Python 解释器
2. ✅ **验证安装**：使用 `python --version` 或 `python3 --version` 验证
3. ✅ **安装 PyCharm**：下载并安装 PyCharm Community 版本
4. ✅ **配置解释器**：在 PyCharm 中配置 Python 解释器
5. ✅ **创建项目**：创建第一个 Python 项目并运行

{% endnote %}

{% note success no-icon %}

## 重要提示

1. ⚠️ **安装 Python 时务必勾选 "Add Python to PATH"**
2. ⚠️ **首次使用 PyCharm 必须配置 Python 解释器**
3. ⚠️ **建议使用虚拟环境管理项目依赖**
4. ✅ **多使用快捷键，提高开发效率**
5. ✅ **遇到问题先查看错误提示，再搜索解决方案**

{% endnote %}

{% note info no-icon %}

## 下一步学习

安装好 Python 和 PyCharm 后，你可以：

1. 📚 学习 Python 基础语法
2. 📦 学习使用第三方库（如 `numpy`、`pandas`）
3. 🔧 学习 PyCharm 的高级功能
4. 🎯 开始你的第一个 Python 项目

{% endnote %}
