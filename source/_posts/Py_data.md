---
title: Python 变量、运算与顺序结构
date: 2025-03-08 15:07:23
tags:
  - Python 基础语法
categories:
  - Python
cover: https://bu.dusays.com/2025/11/03/69084bd62b810.png
---

# 前言

{% note warning flat%}

本文记录 Python 相关的**变量、运算**与**输入输出**的相关知识。

{% endnote %}

{% note warning flat%}

在阅读过程中有任何问题都可以发布到评论区，有价值的问题将会放到文章末尾Q&A之中！

{% endnote %}

# 什么是编程

{% note success no-icon %}

**编程**是编写程序代码的中文简称，就是**让计算机代码解决某个问题**，对某个计算体系规定一定的运算方式，使计算体系按照该计算方式运行，并最终得到相应结果的过程。

通俗来讲，编程就是**人类和计算机沟通的一种方式**。

{% endnote%}

# Python语言基本框架

``` python
# 调用库
import math

# 可以直接写代码
print("Hello, World!")

# 也可以写在函数中
def main():
    print("Hello from main!")

# 常用入口判断
if __name__ == "__main__":
    main()
```

**输出结果：**

``` bash
Hello, World!
Hello from main!
```



## 库

{% note success no-icon %}

Python 中有一个独特的概念叫做 **“库”**

**库（Library）** 是 Python 中预先编写好的**代码集合**，包含了一系列**函数、类、变量**等，用于解决特定领域的问题。

可以将库理解为**工具箱**，每个工具箱里都有专门解决某类问题的工具。

{% endnote%}

### 分类

{% note success no-icon %}

一般来说，Python中的**库**大致可以分为两类。

- 一类是 Python **自带**的库，无需额外安装，**直接调用**即可，被称为**标准库**（Standard Library）。

- 另一类是 由**社区开发者创建**，需要通过**包管理工具 `pip` 安装**所使用的库，被称为**第三方库**（Third-party Libraries）。

{% endnote%}

#### 标准库

{% note success no-icon %}

常用的一些**标准库**如下：

``` python
import math
import random
import datetime
import os
```

{% endnote%}

#### 第三方库

{% note success no-icon %}

常用的一些**第三方库**如下：

``` python
import numpy
import pandas
import requests
import matplotlib
```

{% endnote%}

### 调用

{% note success no-icon %}

在 python 中，**调用库**时需要使用 **`import` 关键字**。

在调用时，可以调用**完整的库**，也可以调用某些**特定的功能**。

同时为了简化，也可以在调用的过程中给库进行**重命名**。

{% endnote%}

#### 导入整个库

``` python
# 调用 math 库，内置一些有关于数学计算的函数
# 比如 根号: sqrt 圆周率: pi 对数: log
import math

# 使用 math 库中的 sqrt 计算根号 16
print(math.sqrt(16))      # 4.0

# 使用 math 库中的 pi 获取圆周率
print(math.pi)            # 3.141592653589793

# 使用 math 库中的 log 计算对数
print(math.log(100, 10))  # 2.0
```

#### 导入特定功能

{% note success no-icon %}

在导入特定功能时，需要使用 **`from` 关键字**来读取被调用的库，再使用 **`import` 调用特定的功能**。

同时导入特定功能后，在使用时就**无需再写库名**，直接使用功能即可。

{% endnote%}

```python
# 从 math 库中调用 sqrt 和 pi 功能
from math import sqrt, pi

# 在使用的过程中，无需再写库名，直接使用功能即可
print(sqrt(16))           # 4.0
print(pi)                 # 3.141592653589793

# log 未从 math 中调用，会报错
print(log(100, 10))  # 2.0
```

#### 给库重命名

{% note success no-icon %}

在调用库的过程中，可以使用 **`as` 关键字**来对库进行**重命名**，重命名之后在编写代码时会简洁一些。

{% endnote%}

```python
# 调用 numpy 库 并且重命名为 np
import numpy as np
# 调用 pandas 库 并且重命名为 pd
import pandas as pd
# 调用 matplotlib.pyplot 库 并且重命名为 plt
import matplotlib.pyplot as plt

# 在使用 numpy 库中的功能时，直接写 np 即可
arr = np.array([1, 2, 3])
```

### 安装第三方库

#### 什么是 pip？

{% note success no-icon %}

**pip** 是 Python 的官方包管理工具，可以轻松地**安装、卸载**和**管理**第三方库。

{% endnote%}

#### 基本安装方法

```bash
# 使用 pip 安装单个库
pip install requests

# 一次性安装多个库（用空格分隔）
pip install numpy pandas matplotlib

# 指定特定版本安装（避免兼容性问题）
pip install requests==2.25.1

# 安装最新版本（不推荐在生产环境使用）
pip install --upgrade requests
```

#### 国内镜像加速安装

{% note info flat %}

由于网络原因，直接从国外源下载可能很慢，建议使用国内镜像源：

{% endnote%}

```bash
# 使用清华镜像源
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple requests

# 使用阿里云镜像源
pip install -i https://mirrors.aliyun.com/pypi/simple/ numpy

# 设置永久镜像源（推荐）
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```



## 主函数【程序入口】

{% note success no-icon %}

对于 python 来说，实际上**并没有一个明确的主函数**。

也就是说，在编写python代码时，可以**直接进行编写**，不需要写道特定的某个函数内部。

但是没有一个明确的主函数的情况下，如果当前文件被其他文件**导入使用**的话，就有可能会**产生错误**。

所以，在编写 python 代码的过程中，通常要**写明一个函数作为程序的入口**，该函数被称为**主函数**。

{% endnote%}

{% note danger no-icon %}

对于**函数类型**的知识点，在之后的**函数篇章**内具体讲解。

{% endnote%}

### 定义主函数

{% note success no-icon %}

在 python 代码中，需要通过一个**特殊变量 ``__name__``** 来获取当前**模块的名称**。

一般我们会将**主函数命名为 `main`** ，然后再**定义一个 `main` 函数**来编写我们的代码内容。

{% endnote%}

{% note success no-icon %}

在上述代码中，**主函数**片段如下：

``` cpp
# 主函数入口
def main():
    print("Hello from main!")

# 常用入口判断
if __name__ == "__main__":
    main()
```

**输出结果：**

```bash
Hello from main!
```

{% endnote%}

{% note danger no-icon %}

但是要注意的是，在 python 中，程序**不会去自动读取**main 函数作为程序的入口。

也就是说，如果在上述代码片段上面还有未放入任何函数的代码时，会**先去执行该代码片段**。

{% endnote%}

## 其他

### 缩进

{% note success no-icon %}

在 **python** 代码的编写过程中，需要**严格控制缩进格数**。

在 **Python** 中函数内容是通过**缩进**来规定**函数、判断、循环**等等的范围的，处于**同一缩进长度**下的代码片段为**同一片程序片段**。

{% endnote%}

```python
import math

# 主函数入口
def main():
    # 该 print 输出内容为 main 函数下的程序片段
    print("Hello from main!")

# 常用入口判断
if __name__ == "__main__":
    # 调用main函数的程序为 if 判断下的内容
    main()
    for i in range(10):
        # print 输出 i 这个片段为 for 循环结构下的内容
        print(i)
```

### 英文输入

{% note success no-icon %}

在 Python 程序编写的过程中，**除注释外**，所有的内容都要用**英文输入**，包括所有的符号。

{% endnote%}

### 注释

{% note success no-icon %}

在 python 中，注释使用 `#` 来说明，注释内容，**不参与编译**，相当于**学习笔记**。

{% endnote%}

# 变量

{% note success no-icon %}

不管使用编程语言进行编程时，都需要用到**各种变量**来**存储各种信息**。变量保留的是它**所存储的值的内存位置**。

这意味着，当您**创建一个变量**时，就会在内存中**保留一些空间**。

{% endnote%}

## 数据类型

{% note success no-icon %}

在 python 中，**常用的数据类型**有如下几种：

{% endnote%}

### 基本数据类型

| 类型   | 关键字     | 示例               | 描述                      |
| ------ | ---------- | ------------------ | ------------------------- |
| 整型   | `int`      | `age = 25`         | 整数，无大小限制          |
| 浮点型 | `float`    | `price = 19.99`    | 带小数点的数字            |
| 字符串 | `str`      | `name = "Alice"`   | 文本数据，用单/双引号     |
| 布尔型 | `bool`     | `is_active = True` | 逻辑值：`True` 或 `False` |
| 空类型 | `NoneType` | `result = None`    | 表示空值或无值            |

### 容器数据类型

| 类型 | 关键字  | 示例                         | 描述                   |
| ---- | ------- | ---------------------------- | ---------------------- |
| 列表 | `list`  | `numbers = [1, 2, 3]`        | 有序、可变的元素集合   |
| 元组 | `tuple` | `coordinates = (10, 20)`     | 有序、不可变的元素集合 |
| 字典 | `dict`  | `person = {"name": "Bob"}`   | 键值对集合             |
| 集合 | `set`   | `unique_numbers = {1, 2, 3}` | 无序、不重复元素集合   |

## 变量定义

{% note success no-icon %}

python中定义变量时无需说明变量是什么类型的，直接写变量名同时用 `=` 进行赋值或者输入即可。

**浮点数**的赋值可以用**科学计数法**。

{% endnote%}

``` cpp
# 定义字符串变量 - 用于存储文本信息
name = "张三"
print(f"姓名: {name}")

# 定义整数变量 - 用于存储整数值 - 使用输入的方式进行定义
age = int(input("请输入你的年龄："))
print(f"年龄: {age}")

# 定义浮点数变量 - 用于存储带小数的数值
height = 1.75
print(f"身高: {height} 米")

# 定义布尔变量 - 用于存储真/假值
is_student = True
print(f"是否学生: {is_student}")

# 定义空值变量 - 表示变量尚未赋值或值为空
address = None
print(f"地址: {address}")
```

### 规则

## 变量命名规则

###  允许的字符

{% note success no-icon %}

- 变量名只能包含**字母**（a-z, A-Z）、**数字**（0-9）和**下划线**（_）
- 变量名不能以数字开头
- 变量名是**大小写敏感**的（age, Age, AGE 是三个不同的变量）

{% endnote%}

```python
# ✅ 允许使用的字符：字母、数字、下划线
username = "张三"        # 字母
user_name = "李四"      # 字母 + 下划线
user2 = "王五"          # 字母 + 数字
_user = "赵六"          # 下划线开头
user_ = "钱七"          # 下划线结尾

print("合法的变量名示例：")
print(f"username: {username}")
print(f"user_name: {user_name}")
print(f"user2: {user2}")
print(f"_user: {_user}")
print(f"user_: {user_}")

# ❌ 不允许使用的字符
# 2user = "错误"        # 数字开头 - 不允许！
# user-name = "错误"    # 连字符 - 不允许！
# user name = "错误"    # 空格 - 不允许！
# user@name = "错误"    # 特殊符号 - 不允许！
```



### 命名惯例[非强制要求]

{% note success no-icon %}

- 使用有意义的变量名

```python
# ❌ 不推荐的命名方式
n = 10                    # 含义不明确
d = "2024-01-01"          # 不知道是什么日期
lst = [1, 2, 3]           # 过于简写
tmp = calculate_value()    # 临时变量但长期使用

# ✅ 推荐的命名方式
student_count = 10                    # 明确表示学生数量
registration_date = "2024-01-01"      # 明确表示注册日期
student_scores = [95, 88, 92]         # 明确表示学生分数列表
calculated_average = calculate_value() # 明确表示计算得到的平均值

print("有意义的变量名示例：")
print(f"学生人数: {student_count}")
print(f"注册日期: {registration_date}")
print(f"学生分数: {student_scores}")
print(f"计算平均值: {calculated_average}")

# 更多好的示例
def process_user_order(user_id, order_items):
    """处理用户订单"""
    total_amount = calculate_total(order_items)
    order_status = "processing"
    return order_status, total_amount

def validate_email_format(email_address):
    """验证邮箱格式"""
    if "@" in email_address and "." in email_address:
        return True
    return False
```



- 使用小写字母，单词之间用下划线连接（蛇形命名法）

```python
# ✅ 蛇形命名法：所有字母小写，单词间用下划线连接
student_name = "张三"
total_score = 95.5
is_registered = True
max_connection_count = 100

print("蛇形命名法示例：")
print(f"学生姓名: {student_name}")
print(f"总分: {total_score}")
print(f"是否注册: {is_registered}")
print(f"最大连接数: {max_connection_count}")

# 在函数名中的应用
def calculate_total_price():
    return 100

def get_user_info_by_id(user_id):
    return f"用户{user_id}的信息"

# 在变量名中的应用
user_list = ["张三", "李四", "王五"]
config_file_path = "/etc/app/config.ini"
database_connection_pool = "连接池对象"
```

- 避免使用单个字符（除非在循环计数器等简单场景）

```python
# ✅ 简单的循环计数器可以使用 i, j, k
for i in range(5):
    print(f"外层循环: {i}")
    for j in range(3):
        print(f"  内层循环: {j}")
```



- 类名使用驼峰命名法（每个单词首字母大写，不使用下划线）

```python
# ✅ 小驼峰命名法：第一个单词小写，后续单词首字母大写
studentName = "张三"
totalScore = 95.5
isRegistered = True
maxConnectionCount = 100

print("小驼峰命名法示例：")
print(f"学生姓名: {studentName}")
print(f"总分: {totalScore}")
print(f"是否注册: {isRegistered}")
print(f"最大连接数: {maxConnectionCount}")

# ✅ 大驼峰命名法：所有单词首字母大写（用于类名）
class StudentInfo:
    def __init__(self):
        self.name = "学生"

class DatabaseConnection:
    def __init__(self):
        self.connected = False

class UserManagementSystem:
    def __init__(self):
        self.users = []

print("类名使用大驼峰命名法：")
student = StudentInfo()
db_conn = DatabaseConnection()
ums = UserManagementSystem()
```

{% endnote%}

### 关键字

{% note success no-icon %}

**不能使用**Python的**保留字（关键字）**作为变量名。

Python的保留字包括：

```python
False, None, True, and, as, assert, async, await, break, class, continue, def, del, elif, else, except, finally, for, from, global, if, import, in, is, lambda, nonlocal, not, or, pass, raise, return, try, while, with, yield
```

{% endnote%}

```python
# Python 的关键字列表
import keyword

print("Python 关键字列表：")
print(keyword.kwlist)

# ❌ 以下都是错误示例（取消注释会报错）
# if = 10              # if 是关键字
# for = "循环"         # for 是关键字
# class = "类"         # class 是关键字
# def = "函数"         # def 是关键字

# ✅ 合法的替代命名
if_condition = 10      # 添加下划线
for_loop = "循环"      # 添加下划线
class_name = "类"      # 使用有意义的名称
function_def = "函数"  # 使用完整单词
```



## 作用域

{% note success no-icon %}

**作用域**指的是变量在程序中的**可访问范围**，决定了在程序的哪个部分可以访问哪个变量。

Python中有四种作用域，按照从内到外的顺序：

- **局部作用域（Local）**：当前函数内部
- **闭包作用域（Enclosing）**：包含当前函数的外部函数的作用域
- **全局作用域（Global）**：当前模块（文件）的作用域
- **内置作用域（Built-in）**：Python内置函数和异常等

这就是所谓的**LEGB规则**。

{% endnote%}

### 局部变量

{% note success no-icon %}

✅ **局部变量**在函数内部定义，只能在**定义它的函数内部**访问。

{% endnote%}

#### 基本局部变量

```python
def calculate_area():
    # 这些都是局部变量，只能在函数内部使用
    length = 10
    width = 5
    area = length * width
    print(f"面积是: {area}")  # 在函数内部可以正常使用

calculate_area()

# ❌ 下面的代码会报错，因为局部变量在函数外部不可用
# print(length)  # 错误！
# print(width)   # 错误！
# print(area)    # 错误！
```

#### 不同函数的局部变量

```python
def function1():
    number = 100  # function1的局部变量
    print(f"function1中的number: {number}")

def function2():
    number = 200  # function2的局部变量（和function1的无关）
    print(f"function2中的number: {number}")

function1()  # 输出: function1中的number: 100
function2()  # 输出: function2中的number: 200
```

### 全局变量

{% note success no-icon %}

**全局变量**在函数外部定义，可以在**整个模块中**访问。

{% endnote%}

#### 基本全局变量

```python
# 全局变量 - 在所有函数外面定义
school = "阳光小学"
class_name = "三年级二班"

def show_info():
    # 在函数内部可以直接使用全局变量
    print(f"学校: {school}")
    print(f"班级: {class_name}")

def change_class():
    global class_name  # 告诉Python我们要修改全局变量
    class_name = "四年级一班"  # 修改全局变量
    print(f"班级已改为: {class_name}")

# 使用函数
show_info()      # 输出: 学校: 阳光小学, 班级: 三年级二班
change_class()   # 输出: 班级已改为: 四年级一班
show_info()      # 输出: 学校: 阳光小学, 班级: 四年级一班
```

#### 全局变量与局部变量同名

```python
score = 95  # 全局变量

def test_score():
    score = 88  # 局部变量（和全局变量同名）
    print(f"函数内部的score: {score}")  # 输出: 88（使用局部变量）

def test_global():
    global score  # 声明使用全局变量
    score = 100   # 修改全局变量
    print(f"修改后的全局score: {score}")  # 输出: 100

print(f"最初的score: {score}")  # 输出: 95
test_score()                   # 输出: 函数内部的score: 88

print(f"test_score后的score: {score}")  # 输出: 95（全局变量没变）
test_global()                  # 输出: 修改后的全局score: 100

print(f"test_global后的score: {score}")  # 输出: 100（全局变量变了）
```

# 输入、输出

## 输出函数 - print()

### 什么是输出？

{% note success no-icon %}

输出就是把电脑里的信息**显示给我们看**，就像在纸上写字一样。

{% endnote%}

```python
# 最简单的输出 - 显示一句话
print("你好，Python！")
```

```python
# 输出数字
print(123)
print(3.14)
```

```python
# 一次输出多个内容
print("我的名字是：", "小明", "今年", 10, "岁")
```

```python
# 用加号连接文字
print("我" + "喜欢" + "编程")
```

### 格式符基本介绍

{% note success no-icon %}

当使用 print **对变量进行输出**时，可以使用**格式符**来替代语句中的变量，然后再**使用 `%` 进行链接**。

- 如果对应一个变量，则**直接写在 `%` 后面**

- 如果有多个变量，则**用 `()` 将所有变量括起来**，一一**对应**。

{% endnote%}

| 格式符 | 说明                               | 示例          |
| ------ | ---------------------------------- | ------------- |
| `%d`   | 格式化整数，会直接取整             | `%d` → 3      |
| `%f`   | 格式化浮点数，可以设置保留的小数点 | `%.2f` → 3.14 |
| `%s`   | 格式化字符串                       | `%s` → "小明" |

### 基本格式化语法

```python
# 基本格式：在字符串中使用格式符，然后用%连接数据
"格式化字符串" % (数据1, 数据2, 数据3)
```

#### 简单示例
```python
# 单个数据格式化
print("数字：%d" % 10)  # 输出：数字：10

# 多个数据格式化
print("%d + %d = %d" % (3, 5, 8))  # 输出：3 + 5 = 8
```

### 详细用法示例

#### 整数格式化 `%d`
```python
age = 12
height = 150.7  # 浮点数会被取整

print("我今年%d岁" % age)          # 输出：我今年12岁
print("身高大约%d厘米" % height)    # 输出：身高大约150厘米
```

#### 浮点数格式化 `%f`
```python
pi = 3.1415926
weight = 45.5

print("圆周率：%f" % pi)           # 输出：圆周率：3.141593（默认6位小数）
print("体重：%.1f公斤" % weight)   # 输出：体重：45.5公斤（保留1位小数）
print("身高：%.2f米" % 1.75)       # 输出：身高：1.75米（保留2位小数）
```

#### 字符串格式化 `%s`
```python
name = "小明"
hobby = "打篮球"

print("我叫%s" % name)                  # 输出：我叫小明
print("%s喜欢%s" % (name, hobby))       # 输出：小明喜欢打篮球
```

### 综合应用示例

```python
name = "小明"
age = 12
height = 1.4567
weight = 45.123

# 综合使用各种格式符
print("我的名字叫%s，今年%d岁了，身高%.2f米，体重%.1f公斤" % (name, age, height, weight))
# 输出：我的名字叫小明，今年12岁了，身高1.46米，体重45.1公斤
```

### 宽度控制（占位符）

#### 浮点数宽度控制
```python
number = 12.345

print("数字：%8.2f" % number)   # 输出：数字：   12.35（总共8个字符宽度）
print("数字：%5.1f" % number)   # 输出：数字： 12.3（总共5个字符宽度）
```

#### 字符串宽度控制
```python
name = "小明"

print("姓名：%10s" % name)      # 输出：姓名：        小明（右对齐）
print("姓名：%-10s" % name)     # 输出：姓名：小明        （左对齐）
```

#### 更多宽度控制示例
```python
# 数字宽度控制
print("|%5d|" % 123)        # 输出：|  123|（右对齐）
print("|%-5d|" % 123)       # 输出：|123  |（左对齐）

# 浮点数宽度控制
print("|%8.2f|" % 3.14159)  # 输出：|    3.14|
print("|%-8.2f|" % 3.14159) # 输出：|3.14    |
```

### 实用小技巧

#### 对齐显示表格
```python
print("%-10s %5s %8s" % ("姓名", "年龄", "身高"))
print("%-10s %5d %8.2f" % ("小明", 12, 1.56))
print("%-10s %5d %8.2f" % ("小红", 11, 1.48))
```

**输出：**

```
姓名         年龄      身高
小明           12     1.56
小红           11     1.48
```

#### 百分比显示
```python
score = 0.8567
print("正确率：%.1f%%" % (score * 100))  # 输出：正确率：85.7%
```

### 注意事项

{% note danger no-icon %}

1. **格式符顺序**：格式符的顺序必须与后面数据的顺序一致
2. **数据类型匹配**：确保格式符与数据类型匹配
3. **转义百分号**：要显示真正的`%`符号，需要写两个`%%`

{% endnote%}

```python
# 正确的写法
print("%s考了%d分，正确率%.1f%%" % ("小明", 95, 95.0))

# 错误的写法（顺序不匹配）
# print("%s考了%d分" % (95, "小明"))  # 会报错
```

{% note warning no-icon %}

这种格式化方法虽然经典，但在Python 3.6+中，更推荐使用**f-string格式化方法**，它更加简洁易读！

{% endnote%}



## 输入函数 - input()

### 什么是输入？

{% note success no-icon %}

输入就是我们通过键盘**给电脑发送信息**，就像**跟电脑说话**一样。

{% endnote%}

```python
# 最简单的输入
input()
```

```python
# 带提示的输入
name = input("请输入你的名字：")
print("你好，", name)
```

```python
# 输入数字进行计算
num1 = input("请输入第一个数字：")
num2 = input("请输入第二个数字：")
print("两个数字相加等于：", num1 + num2)
```

{% note warning no-icon %}

**注意：** 上面这个例子有问题！input()输入的都是文字，不能直接计算。

{% endnote%}

## 输入内容的类型转换

### 为什么需要转换？
{% note success no-icon %}

因为`input()`把所有的输入都当作**文字[字符类型]**处理，数字也需要先变成**真正的数字**才能计算。

{% endnote%}

```python
# 把输入的文字转换成数字
num1 = int(input("请输入第一个数字："))
num2 = int(input("请输入第二个数字："))
print("两个数字相加等于：", num1 + num2)
```

```python
# 转换成小数
price = float(input("请输入商品价格："))
print("价格是：", price)
```

## 实用的输入输出例子

### 例子1：简单的自我介绍
```python
name = input("你叫什么名字？")
age = input("你今年几岁？")
hobby = input("你喜欢做什么？")

print("大家好，我叫", name)
print("我今年", age, "岁")
print("我喜欢", hobby)
```

### 例子2：计算器
```python
print("=== 简单计算器 ===")
a = int(input("请输入第一个数："))
b = int(input("请输入第二个数："))

print(a, "+", b, "=", a + b)
print(a, "-", b, "=", a - b)
print(a, "×", b, "=", a * b)
print(a, "÷", b, "=", a / b)
```

### 例子3：画三角
```python
char = input("你想用什么字符画三角？")
print("  " + char)
print(" " + char*3)
print(char*5)
```

## 小贴士

{% note danger no-icon %}

1. **引号要用英文的**：`"正确"` ✅ `“错误”` ❌
2. **括号也要用英文的**：`print()` ✅ `print（）` ❌
3. **冒号不能少**：`if age > 10:` ✅ `if age > 10` ❌
4. `input()`  输入的都是<b>文字[字符类型]</b>，需要计算时要转换成<b>数字</b>

{% endnote%}

# 运算

{% note success no-icon %}

运算符是一种告诉计算机执行特定的**数学或逻辑操作**的符号。

基本的运算符包括简单的**加【+】减【-】乘【\*】除【/】**

在 Python 语言中，额外的运算还包括：

- **取余数【%】** - 计算除法后的余数
- <b>幂运算【**】 </b>- 计算一个数的多少次方
- **整除【//】** - 只保留除法结果的整数部分

{% endnote%}

{% note success no-icon %}

除此之外，Python 中还有一些特殊的赋值运算符，例如：

- **累加【+=】** - 给变量自身加上一个值
- **累减【-=】** - 给变量自身减去一个值
- **累乘【\*=】** - 给变量自身乘以一个值
- **累除【/=】** - 给变量自身除以一个值

{% endnote%}

{% note success no-icon %}

Python 还提供了**类型转换函数**来改变数据的类型，比如：

- **int()** - 转换成整数
- **str()** - 转换成字符串
- **float()** - 转换成小数
- **bool()** - 转换成布尔值（True或False）

{% endnote%}

## 简单的算术运算

### 加法运算
```python
# 加法就像把两个数放在一起
a = 5 + 3
print(a)  # 输出：8

# 也可以直接输出
print(10 + 2)  # 输出：12
```

### 减法运算
```python
# 减法就像从一个数中拿走一部分
b = 10 - 4
print(b)  # 输出：6

print(15 - 8)  # 输出：7
```

### 乘法运算
```python
# 乘法就像重复加很多次
c = 3 * 4
print(c)  # 输出：12

# 用*号表示乘法
print(5 * 6)  # 输出：30
```

### 除法运算
```python
# 除法就像把东西平均分
d = 10 / 2
print(d)  # 输出：5.0

print(9 / 3)  # 输出：3.0
```

## 特殊的运算

### 整除运算
```python
# 整除只保留整数部分，去掉小数
e = 10 // 3
print(e)  # 输出：3

print(7 // 2)  # 输出：3
```

### 求余运算
```python
# 求余就是算除法后剩下的部分
f = 10 % 3
print(f)  # 输出：1（因为10÷3=3余1）

print(7 % 2)  # 输出：1
```

### 幂运算
```python
# 幂运算就像连乘
g = 2 ** 3
print(g)  # 输出：8（2×2×2=8）

print(3 ** 2)  # 输出：9（3×3=9）
```

## 变量自运算

### 累加运算
```python
# 累加就是自己加上一个数
x = 5
x += 3  # 相当于 x = x + 3
print(x)  # 输出：8

y = 10
y += 2
print(y)  # 输出：12
```

### 累减运算
```python
# 累减就是自己减去一个数
m = 10
m -= 4  # 相当于 m = m - 4
print(m)  # 输出：6

n = 8
n -= 3
print(n)  # 输出：5
```

## 实际应用例子

### 温度转换器
```python
# 把摄氏度转换成华氏度
celsius = 25  # 摄氏度
fahrenheit = 9 / 5 * celsius + 32  # 华氏度公式
print(fahrenheit)  # 输出：77.0
```

### 购物计算
```python
# 计算买文具的总价
pencil_price = 2  # 铅笔单价
notebook_price = 5  # 笔记本单价

# 买3支铅笔和2个笔记本
total = pencil_price * 3 + notebook_price * 2
print(total)  # 输出：16
```

### 分糖果游戏
```python
# 10个糖果分给3个小朋友
candies = 10
children = 3

# 每个小朋友分几个？还剩几个？
each = candies // children
left = candies % children

print("每个小朋友分到:", each, "个糖果")  # 输出：3
print("还剩下:", left, "个糖果")  # 输出：1
```

## 小贴士 💡

{% note success no-icon %}

1. **运算顺序**：和数学一样，先乘除后加减
2. **括号优先**：有括号先算括号里的
3. **注意符号**：乘号是`*`，不是`×`；除号是`/`，不是`÷`

这些运算就像做数学题一样简单有趣，多练习就能熟练掌握！

{% endnote%}

# Q&A

