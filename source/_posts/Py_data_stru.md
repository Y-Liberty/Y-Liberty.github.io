---
title: Python 数据结构 - 高效管理和组织数据
date: 2025-05-15 10:30:00
tags:
  - Python 基础语法
categories:
  - Python
cover: https://bu.dusays.com/2025/11/03/69084cb1de4d6.png
---

# 前言

{% note warning no-icon %}

本文将带你学习 Python 中的**数据结构**，包括**列表**、**元组**、**字典**和**集合**，让你能够**高效地存储和管理数据**！

{% endnote %}

{% note warning no-icon %}

在阅读过程中有任何问题都可以发布到评论区，有价值的问题将会放到文章末尾Q&A之中！

{% endnote %}

{% note success no-icon %}

**本文导航：**

- 📦 数据结构概述：为什么需要数据结构
- 📋 列表 list：有序可变的数据集合
- 📌 元组 tuple：有序不可变的数据集合
- 📖 字典 dict：键值对映射的数据结构
- 🎯 集合 set：无序不重复的数据集合
- 🔄 数据结构对比：如何选择合适的数据结构
- 💡 实战练习：三个难度等级
- ⚠️ 常见错误：6大易错点
- 🚀 编程技巧：代码优化建议

{% endnote %}

# 数据结构概述

## 什么是数据结构

{% note info no-icon %}

**数据结构**是计算机中存储和组织数据的方式，就像现实生活中的各种容器：

- 📋 **列表（list）** - 像购物清单，有顺序，可以修改
- 📌 **元组（tuple）** - 像身份证号，有顺序，不能修改
- 📖 **字典（dict）** - 像通讯录，通过姓名查电话
- 🎯 **集合（set）** - 像抽奖箱，没有重复，没有顺序

{% endnote %}

## 为什么需要数据结构

{% note info no-icon %}

**没有数据结构时：** 存储 5 个学生的成绩

```python
student1_score = 85
student2_score = 92
student3_score = 78
student4_score = 90
student5_score = 88
```

如果有 100 个学生，就要定义 100 个变量！😱

**有了数据结构后：** 使用列表存储

```python
scores = [85, 92, 78, 90, 88]
# 或者 100 个学生也只需要一个列表！
```

{% endnote %}

## 四种数据结构对比

{% note warning no-icon %}

|  数据结构  | 符号 | 是否有序 | 是否可变 |  是否重复  |      使用场景      |
| :--------: | :--: | :------: | :------: | :--------: | :----------------: |
| 列表 list  | `[]` |  ✅ 有序  |  ✅ 可变  |  ✅ 可重复  |  存储一组相关数据  |
| 元组 tuple | `()` |  ✅ 有序  | ❌ 不可变 |  ✅ 可重复  | 存储不应修改的数据 |
| 字典 dict  | `{}` | ❌ 无序*  |  ✅ 可变  | ❌ 键不重复 |     键值对映射     |
|  集合 set  | `{}` |  ❌ 无序  |  ✅ 可变  |  ❌ 不重复  |   去重、集合运算   |

*注：Python 3.7+ 字典保持插入顺序

{% endnote %}

# 列表 list

## 列表基础

{% note info no-icon %}

**列表（list）** 是 Python 中最常用的数据结构，用于存储一组有序的数据。

**列表的特点：**

- 📝 **有序**：元素有固定的顺序，可以通过索引访问
- ✏️ **可变**：可以修改、添加、删除元素
- 🔄 **可重复**：可以包含重复的元素
- 🎨 **类型灵活**：可以存储不同类型的数据

{% endnote %}

{% note warning no-icon %}

**列表就像一个收纳盒：**

- 盒子里可以放不同的东西（不同类型的数据）
- 每个东西都有固定的位置（索引）
- 可以随时添加或取出东西（可变）
- 可以放相同的东西（可重复）

{% endnote %}

## 创建列表

### 方式1：使用方括号 []

```python
# 创建空列表
empty_list = []
print(empty_list)  # 输出：[]

# 创建包含元素的列表
numbers = [1, 2, 3, 4, 5]
print(numbers)  # 输出：[1, 2, 3, 4, 5]

# 列表可以包含不同类型的数据
mixed_list = [1, "hello", 3.14, True]
print(mixed_list)  # 输出：[1, 'hello', 3.14, True]

# 列表可以包含列表（嵌套列表）
nested_list = [[1, 2], [3, 4], [5, 6]]
print(nested_list)  # 输出：[[1, 2], [3, 4], [5, 6]]
```

### 方式2：使用 list() 函数

```python
# 将字符串转换为列表
char_list = list("Python")
print(char_list)  # 输出：['P', 'y', 't', 'h', 'o', 'n']

# 将 range 转换为列表
num_list = list(range(1, 6))
print(num_list)  # 输出：[1, 2, 3, 4, 5]
```

### 方式3：使用循环创建列表

```python
# 创建 1 到 10 的平方列表
squares = []
for i in range(1, 11):
    squares.append(i ** 2)

print(squares)  # 输出：[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```

## 访问列表元素

### 通过索引访问

{% note info no-icon %}

列表的索引从 **0** 开始：

- 第 1 个元素的索引是 0
- 第 2 个元素的索引是 1
- 第 n 个元素的索引是 n-1

{% endnote %}

```python
fruits = ["苹果", "香蕉", "橙子", "葡萄", "西瓜"]

# 访问第一个元素（索引为0）
print(fruits[0])  # 输出：苹果

# 访问第三个元素（索引为2）
print(fruits[2])  # 输出：橙子

# 访问最后一个元素
print(fruits[4])  # 输出：西瓜
```

### 负索引访问

{% note info no-icon %}

Python 支持**负索引**，从列表末尾开始计数：

- -1 表示最后一个元素
- -2 表示倒数第二个元素
- -n 表示倒数第 n 个元素

{% endnote %}

```python
fruits = ["苹果", "香蕉", "橙子", "葡萄", "西瓜"]

# 访问最后一个元素
print(fruits[-1])  # 输出：西瓜

# 访问倒数第二个元素
print(fruits[-2])  # 输出：葡萄

# 访问倒数第五个元素（第一个）
print(fruits[-5])  # 输出：苹果
```

### 索引示意图

{% note warning no-icon %}

```
列表：  ["苹果", "香蕉", "橙子", "葡萄", "西瓜"]
正索引：   0      1      2      3      4
负索引：  -5     -4     -3     -2     -1
```

{% endnote %}

### 获取列表长度

```python
fruits = ["苹果", "香蕉", "橙子", "葡萄", "西瓜"]

# 使用 len() 函数获取列表长度
length = len(fruits)
print(f"列表有 {length} 个元素")  # 输出：列表有 5 个元素

# 访问最后一个元素的另一种方式
last_index = len(fruits) - 1
print(fruits[last_index])  # 输出：西瓜
```

## 修改列表元素

### 修改单个元素

```python
numbers = [10, 20, 30, 40, 50]
print("修改前：", numbers)

# 修改第一个元素
numbers[0] = 100
print("修改后：", numbers)  # 输出：[100, 20, 30, 40, 50]

# 修改最后一个元素
numbers[-1] = 500
print("修改后：", numbers)  # 输出：[100, 20, 30, 40, 500]
```

### 添加元素

#### append() - 在末尾添加单个元素

```python
fruits = ["苹果", "香蕉"]
print("添加前：", fruits)

# 在末尾添加元素
fruits.append("橙子")
print("添加后：", fruits)  # 输出：['苹果', '香蕉', '橙子']

fruits.append("葡萄")
print("添加后：", fruits)  # 输出：['苹果', '香蕉', '橙子', '葡萄']
```

#### insert() - 在指定位置插入元素

```python
fruits = ["苹果", "香蕉", "橙子"]
print("插入前：", fruits)

# 在索引 1 的位置插入"西瓜"
fruits.insert(1, "西瓜")
print("插入后：", fruits)  # 输出：['苹果', '西瓜', '香蕉', '橙子']

# 在开头插入元素
fruits.insert(0, "草莓")
print("插入后：", fruits)  # 输出：['草莓', '苹果', '西瓜', '香蕉', '橙子']
```

#### extend() - 添加多个元素

```python
list1 = [1, 2, 3]
list2 = [4, 5, 6]

# 将 list2 的所有元素添加到 list1
list1.extend(list2)
print(list1)  # 输出：[1, 2, 3, 4, 5, 6]

# 也可以使用 + 运算符
list3 = [7, 8]
list4 = list1 + list3
print(list4)  # 输出：[1, 2, 3, 4, 5, 6, 7, 8]
```

### 删除元素

#### remove() - 删除指定值的元素

```python
fruits = ["苹果", "香蕉", "橙子", "香蕉", "葡萄"]
print("删除前：", fruits)

# 删除第一个"香蕉"
fruits.remove("香蕉")
print("删除后：", fruits)  # 输出：['苹果', '橙子', '香蕉', '葡萄']
```

{% note warning no-icon %}

**注意**：`remove()` 只删除**第一个**匹配的元素！

{% endnote %}

#### pop() - 删除指定索引的元素

```python
fruits = ["苹果", "香蕉", "橙子", "葡萄"]
print("删除前：", fruits)

# 删除最后一个元素（默认）
last_fruit = fruits.pop()
print("删除的元素：", last_fruit)  # 输出：葡萄
print("删除后：", fruits)  # 输出：['苹果', '香蕉', '橙子']

# 删除指定索引的元素
second_fruit = fruits.pop(1)
print("删除的元素：", second_fruit)  # 输出：香蕉
print("删除后：", fruits)  # 输出：['苹果', '橙子']
```

#### del - 删除元素或整个列表

```python
numbers = [10, 20, 30, 40, 50]

# 删除指定索引的元素
del numbers[2]
print(numbers)  # 输出：[10, 20, 40, 50]

# 删除整个列表
del numbers
# print(numbers)  # 报错：NameError（列表已被删除）
```

#### clear() - 清空列表

```python
numbers = [1, 2, 3, 4, 5]
print("清空前：", numbers)

numbers.clear()
print("清空后：", numbers)  # 输出：[]
```

## 列表常用方法

### 查找元素

#### index() - 查找元素的索引

```python
fruits = ["苹果", "香蕉", "橙子", "葡萄", "香蕉"]

# 查找"橙子"的索引
index = fruits.index("橙子")
print(f"橙子的索引是：{index}")  # 输出：橙子的索引是：2

# 查找"香蕉"的索引（返回第一个匹配的）
index = fruits.index("香蕉")
print(f"香蕉的索引是：{index}")  # 输出：香蕉的索引是：1
```

#### count() - 统计元素出现次数

```python
numbers = [1, 2, 3, 2, 4, 2, 5]

# 统计 2 出现的次数
count = numbers.count(2)
print(f"2 出现了 {count} 次")  # 输出：2 出现了 3 次

count = numbers.count(10)
print(f"10 出现了 {count} 次")  # 输出：10 出现了 0 次
```

#### in - 判断元素是否存在

```python
fruits = ["苹果", "香蕉", "橙子"]

# 判断元素是否在列表中
if "香蕉" in fruits:
    print("香蕉在列表中")  # 会执行

if "葡萄" not in fruits:
    print("葡萄不在列表中")  # 会执行
```

### 排序和反转

#### sort() - 列表排序（修改原列表）

```python
# 数字排序
numbers = [3, 1, 4, 1, 5, 9, 2, 6]
print("排序前：", numbers)

numbers.sort()  # 默认升序
print("升序：", numbers)  # 输出：[1, 1, 2, 3, 4, 5, 6, 9]

numbers.sort(reverse=True)  # 降序
print("降序：", numbers)  # 输出：[9, 6, 5, 4, 3, 2, 1, 1]

# 字符串排序（按字母顺序）
fruits = ["橙子", "苹果", "香蕉", "葡萄"]
fruits.sort()
print(fruits)  # 输出：['orange', 'apple', 'banana', 'grape']（按Unicode排序）
```

#### sorted() - 返回新列表（不修改原列表）

```python
numbers = [3, 1, 4, 1, 5, 9, 2, 6]
print("原列表：", numbers)

# 返回排序后的新列表
sorted_numbers = sorted(numbers)
print("排序后：", sorted_numbers)  # 输出：[1, 1, 2, 3, 4, 5, 6, 9]
print("原列表：", numbers)  # 输出：[3, 1, 4, 1, 5, 9, 2, 6]（未改变）
```

#### reverse() - 反转列表

```python
fruits = ["苹果", "香蕉", "橙子", "葡萄"]
print("反转前：", fruits)

fruits.reverse()
print("反转后：", fruits)  # 输出：['葡萄', '橙子', '香蕉', '苹果']
```

### 复制列表

```python
# 方式1：使用 copy() 方法
list1 = [1, 2, 3]
list2 = list1.copy()
list2[0] = 100

print("list1:", list1)  # 输出：[1, 2, 3]
print("list2:", list2)  # 输出：[100, 2, 3]

# 方式2：使用切片
list3 = list1[:]
list3[0] = 200

print("list1:", list1)  # 输出：[1, 2, 3]
print("list3:", list3)  # 输出：[200, 2, 3]
```

{% note danger no-icon %}

**注意**：直接赋值不会复制列表，而是创建引用！

```python
list1 = [1, 2, 3]
list2 = list1  # 这不是复制，是引用！

list2[0] = 100
print("list1:", list1)  # 输出：[100, 2, 3]（也被改变了！）
print("list2:", list2)  # 输出：[100, 2, 3]
```

{% endnote %}

## 列表切片

{% note info no-icon %}

**切片（Slicing）** 是获取列表的一部分元素的操作。

**语法格式：** `列表[开始:结束:步长]`

- **开始**：起始索引（包含），默认为 0
- **结束**：结束索引（不包含），默认为列表末尾
- **步长**：间隔，默认为 1

{% endnote %}

### 基本切片

```python
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# 获取索引 2 到 5 的元素（不包含5）
print(numbers[2:5])  # 输出：[2, 3, 4]

# 从开头到索引 5
print(numbers[:5])   # 输出：[0, 1, 2, 3, 4]

# 从索引 5 到末尾
print(numbers[5:])   # 输出：[5, 6, 7, 8, 9]

# 获取所有元素（复制列表）
print(numbers[:])    # 输出：[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### 带步长的切片

```python
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# 每隔一个取一个（步长为2）
print(numbers[::2])   # 输出：[0, 2, 4, 6, 8]

# 从索引 1 开始，每隔两个取一个
print(numbers[1::2])  # 输出：[1, 3, 5, 7, 9]

# 倒序输出（步长为-1）
print(numbers[::-1])  # 输出：[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
```

### 负索引切片

```python
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# 获取最后3个元素
print(numbers[-3:])   # 输出：[7, 8, 9]

# 获取倒数第5个到倒数第2个
print(numbers[-5:-1]) # 输出：[5, 6, 7, 8]

# 去掉第一个和最后一个
print(numbers[1:-1])  # 输出：[1, 2, 3, 4, 5, 6, 7, 8]
```

### 切片应用示例

```python
# 示例：获取列表的前一半和后一半
numbers = [1, 2, 3, 4, 5, 6, 7, 8]

mid = len(numbers) // 2
first_half = numbers[:mid]
second_half = numbers[mid:]

print("前一半：", first_half)   # 输出：[1, 2, 3, 4]
print("后一半：", second_half)  # 输出：[5, 6, 7, 8]
```

## 列表推导式

{% note info no-icon %}

**列表推导式（List Comprehension）** 是一种简洁的创建列表的方式。

**基本语法：** `[表达式 for 变量 in 序列]`

**带条件：** `[表达式 for 变量 in 序列 if 条件]`

{% endnote %}

### 基本列表推导式

```python
# 传统方式：创建 1-10 的平方列表
squares = []
for i in range(1, 11):
    squares.append(i ** 2)
print(squares)

# 列表推导式（一行搞定！）
squares = [i ** 2 for i in range(1, 11)]
print(squares)  # 输出：[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```

### 带条件的列表推导式

```python
# 获取 1-20 中的偶数
evens = [i for i in range(1, 21) if i % 2 == 0]
print(evens)  # 输出：[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

# 获取 1-10 中能被 3 整除的数的平方
result = [i ** 2 for i in range(1, 11) if i % 3 == 0]
print(result)  # 输出：[9, 36, 81]
```

### 字符串处理

```python
# 将字符串列表转换为大写
fruits = ["apple", "banana", "orange"]
upper_fruits = [fruit.upper() for fruit in fruits]
print(upper_fruits)  # 输出：['APPLE', 'BANANA', 'ORANGE']

# 获取每个单词的长度
words = ["hello", "world", "python"]
lengths = [len(word) for word in words]
print(lengths)  # 输出：[5, 5, 6]
```

### 嵌套列表推导式

```python
# 创建 3x3 的矩阵
matrix = [[i * 3 + j for j in range(1, 4)] for i in range(3)]
print(matrix)
# 输出：[[1, 2, 3], [4, 5, 6], [7, 8, 9]]

# 展平嵌套列表
nested = [[1, 2], [3, 4], [5, 6]]
flat = [num for sublist in nested for num in sublist]
print(flat)  # 输出：[1, 2, 3, 4, 5, 6]
```

## 列表实战应用

### 示例：成绩处理

```python
# 学生成绩管理
print("=== 成绩统计系统 ===")

# 成绩列表
scores = [85, 92, 78, 90, 88, 76, 95, 82, 89, 91]

# 统计信息
print(f"总人数：{len(scores)} 人")
print(f"最高分：{max(scores)} 分")
print(f"最低分：{min(scores)} 分")
print(f"平均分：{sum(scores) / len(scores):.2f} 分")

# 统计各分数段人数
excellent = len([s for s in scores if s >= 90])
good = len([s for s in scores if 80 <= s < 90])
pass_count = len([s for s in scores if 60 <= s < 80])

print(f"\n优秀（90+）：{excellent} 人")
print(f"良好（80-89）：{good} 人")
print(f"及格（60-79）：{pass_count} 人")
```

**运行结果：**

```
=== 成绩统计系统 ===
总人数：10 人
最高分：95 分
最低分：76 分
平均分：86.60 分

优秀（90+）：4 人
良好（80-89）：4 人
及格（60-79）：2 人
```

# 元组 tuple

## 元组基础

{% note info no-icon %}

**元组（tuple）** 是 Python 中的另一种序列类型，与列表类似，但有一个重要区别：**元组是不可变的**。

**元组的特点：**

- 📝 **有序**：元素有固定的顺序，可以通过索引访问
- 🔒 **不可变**：创建后不能修改、添加、删除元素
- 🔄 **可重复**：可以包含重复的元素
- 🎨 **类型灵活**：可以存储不同类型的数据

{% endnote %}

{% note warning no-icon %}

**元组就像一个密封的盒子：**

- 盒子里装好东西后就被密封了（不可变）
- 可以看里面有什么（可访问）
- 但不能修改、添加或删除东西（不可变）
- 比普通盒子（列表）更安全、更高效

{% endnote %}

## 列表 vs 元组

{% note warning no-icon %}

|   特性   |   列表 list    |    元组 tuple    |
| :------: | :------------: | :--------------: |
|   符号   |      `[]`      |       `()`       |
|  可变性  |     ✅ 可变     |     ❌ 不可变     |
| 修改元素 |     ✅ 可以     |     ❌ 不可以     |
| 添加元素 |     ✅ 可以     |     ❌ 不可以     |
| 删除元素 |     ✅ 可以     |     ❌ 不可以     |
|   性能   |      稍慢      |       更快       |
| 占用空间 |      稍大      |       更小       |
| 使用场景 | 需要修改的数据 | 不需要修改的数据 |

**选择建议：**

- 需要修改数据 → 使用**列表**
- 数据不需要修改 → 使用**元组**（更安全、更快）

{% endnote %}

## 创建元组

### 方式1：使用圆括号 ()

```python
# 创建空元组
empty_tuple = ()
print(empty_tuple)  # 输出：()
print(type(empty_tuple))  # 输出：<class 'tuple'>

# 创建包含元素的元组
numbers = (1, 2, 3, 4, 5)
print(numbers)  # 输出：(1, 2, 3, 4, 5)

# 元组可以包含不同类型的数据
mixed_tuple = (1, "hello", 3.14, True)
print(mixed_tuple)  # 输出：(1, 'hello', 3.14, True)

# 元组可以包含元组（嵌套元组）
nested_tuple = ((1, 2), (3, 4), (5, 6))
print(nested_tuple)  # 输出：((1, 2), (3, 4), (5, 6))
```

### 方式2：不使用括号（逗号分隔）

```python
# Python 识别元组的关键是逗号，不是括号！
coordinates = 10, 20, 30
print(coordinates)  # 输出：(10, 20, 30)
print(type(coordinates))  # 输出：<class 'tuple'>

# 实际应用
x, y = 100, 200  # 这也是元组！
print(x, y)  # 输出：100 200
```

### 方式3：单个元素的元组

{% note danger no-icon %}

**特别注意**：创建只有一个元素的元组时，必须在元素后面加逗号！

```python
# ❌ 错误：这不是元组，是整数
not_tuple = (5)
print(type(not_tuple))  # 输出：<class 'int'>

# ✅ 正确：单元素元组必须加逗号
single_tuple = (5,)
print(type(single_tuple))  # 输出：<class 'tuple'>
print(single_tuple)  # 输出：(5,)

# 也可以不用括号
single_tuple2 = 5,
print(type(single_tuple2))  # 输出：<class 'tuple'>
```

{% endnote %}

### 方式4：使用 tuple() 函数

```python
# 将列表转换为元组
list_data = [1, 2, 3, 4, 5]
tuple_data = tuple(list_data)
print(tuple_data)  # 输出：(1, 2, 3, 4, 5)

# 将字符串转换为元组
char_tuple = tuple("Python")
print(char_tuple)  # 输出：('P', 'y', 't', 'h', 'o', 'n')

# 将 range 转换为元组
num_tuple = tuple(range(1, 6))
print(num_tuple)  # 输出：(1, 2, 3, 4, 5)
```

## 访问元组元素

### 通过索引访问

```python
fruits = ("苹果", "香蕉", "橙子", "葡萄", "西瓜")

# 访问第一个元素（索引为0）
print(fruits[0])  # 输出：苹果

# 访问第三个元素（索引为2）
print(fruits[2])  # 输出：橙子

# 访问最后一个元素
print(fruits[4])  # 输出：西瓜
print(fruits[-1])  # 输出：西瓜（负索引）
```

### 元组切片

```python
numbers = (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)

# 获取索引 2 到 5 的元素（不包含5）
print(numbers[2:5])  # 输出：(2, 3, 4)

# 从开头到索引 5
print(numbers[:5])   # 输出：(0, 1, 2, 3, 4)

# 从索引 5 到末尾
print(numbers[5:])   # 输出：(5, 6, 7, 8, 9)

# 倒序输出
print(numbers[::-1])  # 输出：(9, 8, 7, 6, 5, 4, 3, 2, 1, 0)

# 每隔一个取一个
print(numbers[::2])   # 输出：(0, 2, 4, 6, 8)
```

### 获取元组长度

```python
fruits = ("苹果", "香蕉", "橙子", "葡萄")

# 使用 len() 函数
length = len(fruits)
print(f"元组有 {length} 个元素")  # 输出：元组有 4 个元素
```

## 元组的不可变性

{% note danger no-icon %}

**元组创建后不能修改！** 这是元组最重要的特性。

{% endnote %}

### 不能修改元素

```python
numbers = (1, 2, 3, 4, 5)

# ❌ 尝试修改元素会报错
try:
    numbers[0] = 100
except TypeError as e:
    print(f"错误：{e}")
    # 输出：错误：'tuple' object does not support item assignment
```

### 不能添加元素

```python
fruits = ("苹果", "香蕉")

# ❌ 元组没有 append() 方法
# fruits.append("橙子")  # 报错：AttributeError

# ❌ 元组没有 insert() 方法
# fruits.insert(0, "草莓")  # 报错：AttributeError
```

### 不能删除元素

```python
numbers = (1, 2, 3, 4, 5)

# ❌ 不能删除单个元素
# del numbers[0]  # 报错：TypeError

# ✅ 但可以删除整个元组
del numbers
# print(numbers)  # 报错：NameError（元组已被删除）
```

### 元组拼接（创建新元组）

{% note info no-icon %}

虽然不能修改元组，但可以**拼接元组创建新元组**：

{% endnote %}

```python
tuple1 = (1, 2, 3)
tuple2 = (4, 5, 6)

# 使用 + 运算符拼接
tuple3 = tuple1 + tuple2
print(tuple3)  # 输出：(1, 2, 3, 4, 5, 6)

# 使用 * 运算符重复
tuple4 = tuple1 * 3
print(tuple4)  # 输出：(1, 2, 3, 1, 2, 3, 1, 2, 3)

# 注意：原元组不变
print(tuple1)  # 输出：(1, 2, 3)
print(tuple2)  # 输出：(4, 5, 6)
```

### 特殊情况：元组包含可变对象

{% note warning no-icon %}

**重要**：元组本身不可变，但如果元组包含可变对象（如列表），可变对象的内容可以修改！

{% endnote %}

```python
# 元组包含列表
tuple_with_list = (1, 2, [3, 4, 5])
print("原元组：", tuple_with_list)

# ❌ 不能修改元组元素
# tuple_with_list[0] = 100  # 报错

# ✅ 但可以修改列表的内容
tuple_with_list[2][0] = 300
print("修改后：", tuple_with_list)  # 输出：(1, 2, [300, 4, 5])

# 可以添加列表元素
tuple_with_list[2].append(6)
print("添加后：", tuple_with_list)  # 输出：(1, 2, [300, 4, 5, 6])
```

## 元组常用方法

{% note warning no-icon %}

元组只有**两个**方法：`count()` 和 `index()`

因为元组不可变，所以没有增删改的方法！

{% endnote %}

### count() - 统计元素出现次数

```python
numbers = (1, 2, 3, 2, 4, 2, 5, 2)

# 统计 2 出现的次数
count = numbers.count(2)
print(f"2 出现了 {count} 次")  # 输出：2 出现了 4 次

# 统计不存在的元素
count = numbers.count(10)
print(f"10 出现了 {count} 次")  # 输出：10 出现了 0 次
```

### index() - 查找元素的索引

```python
fruits = ("苹果", "香蕉", "橙子", "葡萄", "香蕉")

# 查找"橙子"的索引
index = fruits.index("橙子")
print(f"橙子的索引是：{index}")  # 输出：橙子的索引是：2

# 查找"香蕉"的索引（返回第一个匹配的）
index = fruits.index("香蕉")
print(f"香蕉的索引是：{index}")  # 输出：香蕉的索引是：1
```

### in - 判断元素是否存在

```python
fruits = ("苹果", "香蕉", "橙子")

# 判断元素是否在元组中
if "香蕉" in fruits:
    print("香蕉在元组中")  # 会执行

if "葡萄" not in fruits:
    print("葡萄不在元组中")  # 会执行
```

### 其他操作

```python
numbers = (3, 1, 4, 1, 5, 9, 2, 6)

# 最大值、最小值、求和
print(f"最大值：{max(numbers)}")  # 输出：最大值：9
print(f"最小值：{min(numbers)}")  # 输出：最小值：1
print(f"总和：{sum(numbers)}")    # 输出：总和：31

# 排序（返回列表，不是元组）
sorted_list = sorted(numbers)
print(f"排序结果：{sorted_list}")  # 输出：[1, 1, 2, 3, 4, 5, 6, 9]
print(f"类型：{type(sorted_list)}")  # 输出：<class 'list'>

# 如果需要排序后的元组
sorted_tuple = tuple(sorted(numbers))
print(sorted_tuple)  # 输出：(1, 1, 2, 3, 4, 5, 6, 9)
```

## 元组解包

{% note info no-icon %}

**元组解包（Unpacking）** 是一种将元组中的值分配给多个变量的操作。

{% endnote %}

### 基本解包

```python
# 创建元组
coordinates = (10, 20)

# 解包到变量
x, y = coordinates
print(f"x = {x}, y = {y}")  # 输出：x = 10, y = 20

# 直接解包
name, age, city = ("小明", 18, "北京")
print(f"{name}，{age}岁，来自{city}")
# 输出：小明，18岁，来自北京
```

### 交换变量值

```python
# 传统方法（使用临时变量）
a = 10
b = 20
temp = a
a = b
b = temp
print(f"a = {a}, b = {b}")  # 输出：a = 20, b = 10

# Python 的优雅方法（元组解包）
a = 10
b = 20
a, b = b, a  # 神奇！
print(f"a = {a}, b = {b}")  # 输出：a = 20, b = 10
```

### 忽略某些值

```python
# 使用 _ 忽略不需要的值
person = ("小明", 18, "北京", "学生")

name, _, city, _ = person
print(f"{name} 来自 {city}")  # 输出：小明 来自 北京

# 只要前两个值
name, age, *_ = person
print(f"{name}, {age}岁")  # 输出：小明, 18岁
```

### 使用 * 收集剩余值

```python
# * 号可以收集多个值到列表
numbers = (1, 2, 3, 4, 5, 6, 7, 8)

# 取第一个和最后一个，中间的放到列表
first, *middle, last = numbers
print(f"第一个：{first}")  # 输出：第一个：1
print(f"中间：{middle}")    # 输出：中间：[2, 3, 4, 5, 6, 7]
print(f"最后一个：{last}")  # 输出：最后一个：8

# 取前两个，剩余的放到列表
a, b, *rest = numbers
print(f"a = {a}, b = {b}")  # 输出：a = 1, b = 2
print(f"rest = {rest}")      # 输出：rest = [3, 4, 5, 6, 7, 8]
```

### 函数返回多个值

```python
# 函数返回多个值（实际上是返回元组）
def get_student_info():
    name = "小明"
    age = 18
    score = 95
    return name, age, score  # 返回元组

# 解包接收
student_name, student_age, student_score = get_student_info()
print(f"{student_name}，{student_age}岁，成绩{student_score}分")

# 或者作为元组接收
student_info = get_student_info()
print(student_info)  # 输出：('小明', 18, 95)
```

### 遍历时解包

```python
# 包含坐标的元组列表
points = [(1, 2), (3, 4), (5, 6)]

# 遍历时解包
for x, y in points:
    print(f"坐标：({x}, {y})")

# 输出：
# 坐标：(1, 2)
# 坐标：(3, 4)
# 坐标：(5, 6)
```

## 元组实战应用

### 示例：存储不可变的配置信息

```python
# 数据库配置（不应该被修改）
DB_CONFIG = ("localhost", 3306, "mydb", "root", "password")

# 解包使用
host, port, database, username, password = DB_CONFIG
print(f"连接数据库：{host}:{port}/{database}")
# 输出：连接数据库：localhost:3306/mydb

# 尝试修改会报错（保护配置不被意外修改）
# DB_CONFIG[0] = "192.168.1.1"  # TypeError
```

## 元组的优势

{% note success no-icon %}

**为什么要使用元组？**

1. **安全性** 🔒
   - 数据不会被意外修改
   - 适合存储常量和配置

2. **性能** ⚡
   - 比列表更快
   - 占用内存更小

3. **可哈希** 🔑
   - 可以作为字典的键
   - 可以放入集合中

4. **语义明确** 📝
   - 使用元组表示"这个数据不应该改变"
   - 代码意图更清晰

{% endnote %}

```python
# 元组可以作为字典的键（列表不行）
locations = {
    (0, 0): "原点",
    (1, 0): "右边",
    (0, 1): "上边"
}

print(locations[(0, 0)])  # 输出：原点

# 列表不能作为键
# locations[[0, 0]] = "test"  # TypeError: unhashable type: 'list'
```

# 字典 dict

## 字典基础

{% note info no-icon %}

**字典（dict）** 是 Python 中用于存储键值对（key-value pairs）的数据结构，也称为映射类型。

**字典的特点：**

- 🔑 **键值对**：每个元素由键和值组成
- 📝 **无序***：元素没有固定顺序（Python 3.7+ 保持插入顺序）
- ✏️ **可变**：可以修改、添加、删除键值对
- 🎯 **键唯一**：每个键只能出现一次，值可以重复
- 🚀 **快速查找**：通过键快速访问值，时间复杂度 O(1)

*注：Python 3.7+ 字典保持插入顺序

{% endnote %}

{% note warning no-icon %}

**字典就像一本通讯录：**

- 姓名是键（key），电话是值（value）
- 通过姓名（键）快速找到电话（值）
- 每个人（键）只能有一个电话号码记录
- 可以添加、修改、删除联系人

{% endnote %}

## 为什么需要字典

{% note info no-icon %}

**没有字典时：** 存储学生成绩

```python
# 使用两个列表
names = ["小明", "小红", "小刚"]
scores = [85, 92, 78]

# 查找小红的成绩，需要先找索引
index = names.index("小红")
print(f"小红的成绩：{scores[index]}")
```

**有了字典后：**

```python
# 使用字典
student_scores = {
    "小明": 85,
    "小红": 92,
    "小刚": 78
}

# 直接通过键访问值
print(f"小红的成绩：{student_scores['小红']}")  # 更简单！
```

{% endnote %}

## 创建字典

### 方式1：使用花括号 {}

```python
# 创建空字典
empty_dict = {}
print(empty_dict)  # 输出：{}
print(type(empty_dict))  # 输出：<class 'dict'>

# 创建包含键值对的字典
student = {
    "name": "小明",
    "age": 18,
    "score": 95
}
print(student)
# 输出：{'name': '小明', 'age': 18, 'score': 95}

# 键和值可以是不同类型
mixed_dict = {
    "name": "Python",
    "version": 3.9,
    "is_free": True,
    "features": ["simple", "powerful"]
}
print(mixed_dict)
```

### 方式2：使用 dict() 函数

```python
# 使用关键字参数
person = dict(name="小明", age=18, city="北京")
print(person)
# 输出：{'name': '小明', 'age': 18, 'city': '北京'}

# 从键值对列表创建
pairs = [("a", 1), ("b", 2), ("c", 3)]
dict_from_pairs = dict(pairs)
print(dict_from_pairs)
# 输出：{'a': 1, 'b': 2, 'c': 3}

# 从两个列表创建（使用 zip）
keys = ["name", "age", "city"]
values = ["小红", 20, "上海"]
person2 = dict(zip(keys, values))
print(person2)
# 输出：{'name': '小红', 'age': 20, 'city': '上海'}
```

### 方式3：使用 fromkeys() 创建

```python
# 创建具有相同值的字典
keys = ["a", "b", "c"]
default_dict = dict.fromkeys(keys, 0)
print(default_dict)
# 输出：{'a': 0, 'b': 0, 'c': 0}

# 默认值为 None
subjects = ["语文", "数学", "英语"]
scores = dict.fromkeys(subjects)
print(scores)
# 输出：{'语文': None, '数学': None, '英语': None}
```

## 访问字典元素

### 使用方括号访问

```python
student = {
    "name": "小明",
    "age": 18,
    "score": 95,
    "city": "北京"
}

# 通过键访问值
print(student["name"])   # 输出：小明
print(student["score"])  # 输出：95

# ❌ 访问不存在的键会报错
try:
    print(student["grade"])
except KeyError as e:
    print(f"错误：键 {e} 不存在")
    # 输出：错误：键 'grade' 不存在
```

### 使用 get() 方法（推荐）

```python
student = {
    "name": "小明",
    "age": 18,
    "score": 95
}

# 使用 get() 方法
print(student.get("name"))   # 输出：小明
print(student.get("score"))  # 输出：95

# ✅ 访问不存在的键返回 None，不报错
print(student.get("grade"))  # 输出：None

# 可以设置默认值
print(student.get("grade", "未知"))  # 输出：未知
print(student.get("city", "北京"))   # 输出：北京
```

### 检查键是否存在

```python
student = {
    "name": "小明",
    "age": 18
}

# 使用 in 关键字
if "name" in student:
    print("name 键存在")  # 会执行

if "score" not in student:
    print("score 键不存在")  # 会执行

# 获取所有键
print(student.keys())    # 输出：dict_keys(['name', 'age'])

# 获取所有值
print(student.values())  # 输出：dict_values(['小明', 18])

# 获取所有键值对
print(student.items())   # 输出：dict_items([('name', '小明'), ('age', 18)])
```

## 修改字典元素

### 修改已有键的值

```python
student = {
    "name": "小明",
    "age": 18,
    "score": 85
}

print("修改前：", student)

# 修改值
student["age"] = 19
student["score"] = 95

print("修改后：", student)
# 输出：{'name': '小明', 'age': 19, 'score': 95}
```

### 添加新键值对

```python
student = {
    "name": "小明",
    "age": 18
}

print("添加前：", student)

# 直接赋值添加
student["score"] = 95
student["city"] = "北京"

print("添加后：", student)
# 输出：{'name': '小明', 'age': 18, 'score': 95, 'city': '北京'}
```

### 删除键值对

#### del - 删除指定键

```python
student = {
    "name": "小明",
    "age": 18,
    "score": 95,
    "city": "北京"
}

# 删除指定键
del student["city"]
print(student)
# 输出：{'name': '小明', 'age': 18, 'score': 95}

# 删除不存在的键会报错
# del student["grade"]  # KeyError
```

#### pop() - 删除并返回值

```python
student = {
    "name": "小明",
    "age": 18,
    "score": 95
}

# 删除并返回值
score = student.pop("score")
print(f"删除的成绩：{score}")  # 输出：删除的成绩：95
print(student)  # 输出：{'name': '小明', 'age': 18}

# 删除不存在的键，可以设置默认值
city = student.pop("city", "未知")
print(f"城市：{city}")  # 输出：城市：未知
```

#### popitem() - 删除最后一个键值对

```python
student = {
    "name": "小明",
    "age": 18,
    "score": 95
}

# 删除最后一个键值对（Python 3.7+ 按插入顺序）
last_item = student.popitem()
print(f"删除的项：{last_item}")  # 输出：删除的项：('score', 95)
print(student)  # 输出：{'name': '小明', 'age': 18}
```

#### clear() - 清空字典

```python
student = {
    "name": "小明",
    "age": 18,
    "score": 95
}

student.clear()
print(student)  # 输出：{}
```

## 字典常用方法

### update() - 合并字典

```python
dict1 = {"a": 1, "b": 2}
dict2 = {"c": 3, "d": 4}

# 将 dict2 合并到 dict1
dict1.update(dict2)
print(dict1)
# 输出：{'a': 1, 'b': 2, 'c': 3, 'd': 4}

# 如果有相同的键，会覆盖
dict3 = {"name": "小明", "age": 18}
dict4 = {"age": 19, "city": "北京"}

dict3.update(dict4)
print(dict3)
# 输出：{'name': '小明', 'age': 19, 'city': '北京'}
```

### setdefault() - 获取值或设置默认值

```python
student = {
    "name": "小明",
    "age": 18
}

# 键存在，返回值
name = student.setdefault("name", "未知")
print(name)  # 输出：小明

# 键不存在，设置默认值并返回
score = student.setdefault("score", 0)
print(score)  # 输出：0
print(student)
# 输出：{'name': '小明', 'age': 18, 'score': 0}
```

### copy() - 浅拷贝字典

```python
original = {"a": 1, "b": 2, "c": 3}

# 浅拷贝
copied = original.copy()
copied["a"] = 100

print("原字典：", original)  # 输出：{'a': 1, 'b': 2, 'c': 3}
print("拷贝后：", copied)    # 输出：{'a': 100, 'b': 2, 'c': 3}
```

{% note danger no-icon %}

**注意**：直接赋值不会复制字典，而是创建引用！

```python
dict1 = {"a": 1, "b": 2}
dict2 = dict1  # 这不是复制，是引用！

dict2["a"] = 100
print("dict1:", dict1)  # 输出：{'a': 100, 'b': 2}（也被改变了！）
print("dict2:", dict2)  # 输出：{'a': 100, 'b': 2}
```

{% endnote %}

## 字典遍历

### 遍历键

```python
student = {
    "name": "小明",
    "age": 18,
    "score": 95
}

# 方式1：直接遍历（默认遍历键）
print("=== 方式1 ===")
for key in student:
    print(f"{key}: {student[key]}")

# 方式2：使用 keys() 方法
print("\n=== 方式2 ===")
for key in student.keys():
    print(f"{key}: {student[key]}")

# 输出：
# name: 小明
# age: 18
# score: 95
```

### 遍历值

```python
student = {
    "name": "小明",
    "age": 18,
    "score": 95
}

# 使用 values() 方法
for value in student.values():
    print(value)

# 输出：
# 小明
# 18
# 95
```

### 遍历键值对（推荐）

```python
student = {
    "name": "小明",
    "age": 18,
    "score": 95
}

# 使用 items() 方法（推荐）
for key, value in student.items():
    print(f"{key}: {value}")

# 输出：
# name: 小明
# age: 18
# score: 95
```

### 遍历示例：成绩统计

```python
scores = {
    "小明": 85,
    "小红": 92,
    "小刚": 78,
    "小丽": 95,
    "小华": 88
}

print("=== 学生成绩 ===")
total = 0

for name, score in scores.items():
    print(f"{name}：{score}分", end="")
    
    # 判断等级
    if score >= 90:
        print(" [优秀]")
    elif score >= 80:
        print(" [良好]")
    elif score >= 60:
        print(" [及格]")
    else:
        print(" [不及格]")
    
    total += score

# 计算平均分
average = total / len(scores)
print(f"\n平均分：{average:.2f}")

# 输出：
# === 学生成绩 ===
# 小明：85分 [良好]
# 小红：92分 [优秀]
# 小刚：78分 [及格]
# 小丽：95分 [优秀]
# 小华：88分 [良好]
#
# 平均分：87.60
```

## 字典推导式

{% note info no-icon %}

**字典推导式（Dict Comprehension）** 是一种简洁的创建字典的方式。

**基本语法：** `{键表达式: 值表达式 for 变量 in 序列}`

**带条件：** `{键表达式: 值表达式 for 变量 in 序列 if 条件}`

{% endnote %}

### 基本字典推导式

```python
# 创建数字的平方字典
squares = {x: x**2 for x in range(1, 6)}
print(squares)
# 输出：{1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# 从列表创建字典
fruits = ["苹果", "香蕉", "橙子"]
fruit_dict = {fruit: len(fruit) for fruit in fruits}
print(fruit_dict)
# 输出：{'苹果': 2, '香蕉': 2, '橙子': 2}
```

### 带条件的字典推导式

```python
# 只保留偶数
numbers = {x: x**2 for x in range(1, 11) if x % 2 == 0}
print(numbers)
# 输出：{2: 4, 4: 16, 6: 36, 8: 64, 10: 100}

# 筛选成绩大于80的学生
all_scores = {
    "小明": 85,
    "小红": 92,
    "小刚": 78,
    "小丽": 95
}

good_scores = {name: score for name, score in all_scores.items() if score > 80}
print(good_scores)
# 输出：{'小明': 85, '小红': 92, '小丽': 95}
```

### 交换键值

```python
# 原字典
original = {"a": 1, "b": 2, "c": 3}

# 交换键值
swapped = {value: key for key, value in original.items()}
print(swapped)
# 输出：{1: 'a', 2: 'b', 3: 'c'}
```

### 字符串处理

```python
# 统计字符串中每个字符出现的次数
text = "hello"
char_count = {char: text.count(char) for char in text}
print(char_count)
# 输出：{'h': 1, 'e': 1, 'l': 2, 'o': 1}

# 更高效的方法
text = "hello world"
char_count = {}
for char in text:
    char_count[char] = char_count.get(char, 0) + 1
print(char_count)
# 输出：{'h': 1, 'e': 1, 'l': 3, 'o': 2, ' ': 1, 'w': 1, 'r': 1, 'd': 1}
```

## 字典实战应用

### 示例：学生信息管理

```python
# 学生信息字典
students = {
    "S001": {
        "name": "小明",
        "age": 18,
        "score": 85
    },
    "S002": {
        "name": "小红",
        "age": 19,
        "score": 92
    },
    "S003": {
        "name": "小刚",
        "age": 18,
        "score": 78
    }
}

print("=== 学生信息表 ===")
for student_id, info in students.items():
    print(f"\n学号：{student_id}")
    print(f"  姓名：{info['name']}")
    print(f"  年龄：{info['age']}岁")
    print(f"  成绩：{info['score']}分")

# 输出：
# === 学生信息表 ===
# 
# 学号：S001
#   姓名：小明
#   年龄：18岁
#   成绩：85分
# 
# 学号：S002
#   姓名：小红
#   年龄：19岁
#   成绩：92分
# 
# 学号：S003
#   姓名：小刚
#   年龄：18岁
#   成绩：78分
```

# 集合 set

## 集合基础

{% note info no-icon %}

**集合（set）** 是 Python 中用于存储不重复元素的无序数据结构。

**集合的特点：**

- 🎯 **无序**：元素没有固定顺序，不能通过索引访问
- ✨ **唯一**：自动去除重复元素，每个元素只出现一次
- ✏️ **可变**：可以添加、删除元素
- 🚀 **快速查找**：判断元素是否存在的速度很快，时间复杂度 O(1)
- 🔑 **可哈希**：集合本身不可哈希，但元素必须是可哈希的

{% endnote %}

{% note warning no-icon %}

**集合就像抽奖箱：**

- 每个号码（元素）只有一个，不会重复
- 号码之间没有顺序
- 可以随时添加或取出号码
- 快速查找某个号码是否存在

{% endnote %}

## 为什么需要集合

{% note info no-icon %}

**没有集合时：** 去除列表中的重复元素

```python
# 使用列表去重（需要遍历）
numbers = [1, 2, 3, 2, 4, 3, 5, 1]
unique = []

for num in numbers:
    if num not in unique:
        unique.append(num)

print(unique)  # 输出：[1, 2, 3, 4, 5]
```

**有了集合后：**

```python
# 使用集合去重（一行搞定！）
numbers = [1, 2, 3, 2, 4, 3, 5, 1]
unique = list(set(numbers))
print(unique)  # 输出：[1, 2, 3, 4, 5]
```

{% endnote %}

## 创建集合

### 方式1：使用花括号 {}

```python
# 创建包含元素的集合
fruits = {"苹果", "香蕉", "橙子"}
print(fruits)  # 输出：{'苹果', '香蕉', '橙子'}（顺序可能不同）
print(type(fruits))  # 输出：<class 'set'>

# 集合会自动去重
numbers = {1, 2, 3, 2, 4, 3, 5, 1}
print(numbers)  # 输出：{1, 2, 3, 4, 5}

# 集合元素必须是不可变类型
valid_set = {1, "hello", 3.14, True, (1, 2)}
print(valid_set)
```

{% note danger no-icon %}

**注意**：不能用 `{}` 创建空集合，因为 `{}` 会创建空字典！

```python
# ❌ 错误：这是空字典，不是空集合
empty = {}
print(type(empty))  # 输出：<class 'dict'>

# ✅ 正确：使用 set() 创建空集合
empty_set = set()
print(type(empty_set))  # 输出：<class 'set'>
```

{% endnote %}

### 方式2：使用 set() 函数

```python
# 从列表创建集合（自动去重）
list_data = [1, 2, 3, 2, 4, 3, 5]
set_from_list = set(list_data)
print(set_from_list)  # 输出：{1, 2, 3, 4, 5}

# 从字符串创建集合
char_set = set("hello")
print(char_set)  # 输出：{'h', 'e', 'l', 'o'}（自动去重）

# 从元组创建集合
tuple_data = (1, 2, 3, 2, 4)
set_from_tuple = set(tuple_data)
print(set_from_tuple)  # 输出：{1, 2, 3, 4}
```

### 集合不能包含可变元素

```python
# ✅ 可以包含不可变类型
valid_set = {1, 2, "hello", (1, 2), True}
print(valid_set)

# ❌ 不能包含列表（可变类型）
try:
    invalid_set = {1, 2, [3, 4]}
except TypeError as e:
    print(f"错误：{e}")
    # 输出：错误：unhashable type: 'list'

# ❌ 不能包含字典（可变类型）
try:
    invalid_set = {1, 2, {"a": 1}}
except TypeError as e:
    print(f"错误：{e}")
    # 输出：错误：unhashable type: 'dict'
```

## 访问集合元素

{% note warning no-icon %}

**集合是无序的，不能通过索引访问！**

{% endnote %}

```python
fruits = {"苹果", "香蕉", "橙子"}

# ❌ 不能使用索引
# print(fruits[0])  # TypeError: 'set' object is not subscriptable

# ✅ 可以遍历集合
for fruit in fruits:
    print(fruit)

# ✅ 可以判断元素是否存在
if "苹果" in fruits:
    print("苹果在集合中")  # 会执行

if "葡萄" not in fruits:
    print("葡萄不在集合中")  # 会执行

# 获取集合长度
print(f"集合有 {len(fruits)} 个元素")  # 输出：集合有 3 个元素
```

## 集合常用方法

### 添加元素

#### add() - 添加单个元素

```python
fruits = {"苹果", "香蕉"}
print("添加前：", fruits)

# 添加元素
fruits.add("橙子")
print("添加后：", fruits)  # 输出：{'苹果', '香蕉', '橙子'}

# 添加已存在的元素（不会报错，但也不会重复）
fruits.add("苹果")
print("再次添加：", fruits)  # 输出：{'苹果', '香蕉', '橙子'}（没变化）
```

#### update() - 添加多个元素

```python
fruits = {"苹果", "香蕉"}
print("添加前：", fruits)

# 添加多个元素
fruits.update(["橙子", "葡萄", "西瓜"])
print("添加后：", fruits)
# 输出：{'苹果', '香蕉', '橙子', '葡萄', '西瓜'}

# 也可以添加另一个集合
more_fruits = {"猕猴桃", "芒果"}
fruits.update(more_fruits)
print("继续添加：", fruits)
```

### 删除元素

#### remove() - 删除指定元素（不存在会报错）

```python
fruits = {"苹果", "香蕉", "橙子"}
print("删除前：", fruits)

# 删除存在的元素
fruits.remove("香蕉")
print("删除后：", fruits)  # 输出：{'苹果', '橙子'}

# ❌ 删除不存在的元素会报错
try:
    fruits.remove("葡萄")
except KeyError as e:
    print(f"错误：{e}")
    # 输出：错误：'葡萄'
```

#### discard() - 删除指定元素（不存在不报错）

```python
fruits = {"苹果", "香蕉", "橙子"}
print("删除前：", fruits)

# 删除存在的元素
fruits.discard("香蕉")
print("删除后：", fruits)  # 输出：{'苹果', '橙子'}

# ✅ 删除不存在的元素不报错
fruits.discard("葡萄")  # 不会报错
print("再次删除：", fruits)  # 输出：{'苹果', '橙子'}（没变化）
```

#### pop() - 随机删除并返回一个元素

```python
fruits = {"苹果", "香蕉", "橙子"}
print("删除前：", fruits)

# 随机删除一个元素
removed = fruits.pop()
print(f"删除的元素：{removed}")
print("删除后：", fruits)

# 空集合 pop() 会报错
empty_set = set()
try:
    empty_set.pop()
except KeyError:
    print("错误：空集合无法 pop")
```

#### clear() - 清空集合

```python
fruits = {"苹果", "香蕉", "橙子"}
print("清空前：", fruits)

fruits.clear()
print("清空后：", fruits)  # 输出：set()
```

## 集合运算

{% note success no-icon %}

集合支持数学上的集合运算：**并集、交集、差集、对称差集**

{% endnote %}

### 并集 (Union) - 所有元素

```python
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

# 方式1：使用 | 运算符
union1 = set1 | set2
print("并集（|）：", union1)  # 输出：{1, 2, 3, 4, 5, 6}

# 方式2：使用 union() 方法
union2 = set1.union(set2)
print("并集（union）：", union2)  # 输出：{1, 2, 3, 4, 5, 6}

# 多个集合的并集
set3 = {7, 8}
union3 = set1 | set2 | set3
print("多个并集：", union3)  # 输出：{1, 2, 3, 4, 5, 6, 7, 8}
```

### 交集 (Intersection) - 共有元素

```python
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

# 方式1：使用 & 运算符
intersection1 = set1 & set2
print("交集（&）：", intersection1)  # 输出：{3, 4}

# 方式2：使用 intersection() 方法
intersection2 = set1.intersection(set2)
print("交集（intersection）：", intersection2)  # 输出：{3, 4}

# 多个集合的交集
set3 = {3, 4, 7, 8}
intersection3 = set1 & set2 & set3
print("多个交集：", intersection3)  # 输出：{3, 4}
```

### 差集 (Difference) - 在A中但不在B中

```python
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

# 方式1：使用 - 运算符
diff1 = set1 - set2
print("差集（set1 - set2）：", diff1)  # 输出：{1, 2}

diff2 = set2 - set1
print("差集（set2 - set1）：", diff2)  # 输出：{5, 6}

# 方式2：使用 difference() 方法
diff3 = set1.difference(set2)
print("差集（difference）：", diff3)  # 输出：{1, 2}
```

### 对称差集 (Symmetric Difference) - 不共有的元素

```python
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

# 方式1：使用 ^ 运算符
sym_diff1 = set1 ^ set2
print("对称差集（^）：", sym_diff1)  # 输出：{1, 2, 5, 6}

# 方式2：使用 symmetric_difference() 方法
sym_diff2 = set1.symmetric_difference(set2)
print("对称差集（symmetric_difference）：", sym_diff2)  # 输出：{1, 2, 5, 6}

# 等价于：(set1 - set2) | (set2 - set1)
sym_diff3 = (set1 - set2) | (set2 - set1)
print("等价写法：", sym_diff3)  # 输出：{1, 2, 5, 6}
```

### 集合运算总结

{% note warning no-icon %}

|   运算   | 运算符 |           方法           |             说明             |
| :------: | :----: | :----------------------: | :--------------------------: |
|   并集   |  `\|`  |        `union()`         |     A 或 B 中的所有元素      |
|   交集   |  `&`   |     `intersection()`     |      A 和 B 共有的元素       |
|   差集   |  `-`   |      `difference()`      |      在 A 中但不在 B 中      |
| 对称差集 |  `^`   | `symmetric_difference()` | 在 A 或 B 中但不同时在两者中 |

{% endnote %}

### 集合关系判断

#### issubset() - 是否是子集

```python
set1 = {1, 2, 3}
set2 = {1, 2, 3, 4, 5}
set3 = {1, 2, 6}

# 判断 set1 是否是 set2 的子集
print(set1.issubset(set2))  # 输出：True
print(set1 <= set2)  # 输出：True（等价写法）

# 判断 set1 是否是 set3 的子集
print(set1.issubset(set3))  # 输出：False
```

#### issuperset() - 是否是超集

```python
set1 = {1, 2, 3, 4, 5}
set2 = {1, 2, 3}

# 判断 set1 是否是 set2 的超集
print(set1.issuperset(set2))  # 输出：True
print(set1 >= set2)  # 输出：True（等价写法）
```

#### isdisjoint() - 是否没有交集

```python
set1 = {1, 2, 3}
set2 = {4, 5, 6}
set3 = {3, 4, 5}

# 判断 set1 和 set2 是否没有交集
print(set1.isdisjoint(set2))  # 输出：True

# 判断 set1 和 set3 是否没有交集
print(set1.isdisjoint(set3))  # 输出：False（有共同元素3）
```

## 集合推导式

{% note info no-icon %}

**集合推导式（Set Comprehension）** 是一种简洁的创建集合的方式。

**基本语法：** `{表达式 for 变量 in 序列}`

**带条件：** `{表达式 for 变量 in 序列 if 条件}`

{% endnote %}

### 基本集合推导式

```python
# 创建 1-10 的平方集合
squares = {x**2 for x in range(1, 11)}
print(squares)
# 输出：{1, 4, 9, 16, 25, 36, 49, 64, 81, 100}

# 从字符串创建字符集合
chars = {c.upper() for c in "hello"}
print(chars)
# 输出：{'H', 'E', 'L', 'O'}
```

### 带条件的集合推导式

```python
# 1-20 中的偶数
evens = {x for x in range(1, 21) if x % 2 == 0}
print(evens)
# 输出：{2, 4, 6, 8, 10, 12, 14, 16, 18, 20}

# 1-10 中能被3整除的数的平方
multiples_of_3 = {x**2 for x in range(1, 11) if x % 3 == 0}
print(multiples_of_3)
# 输出：{9, 36, 81}
```

### 去重应用

```python
# 提取列表中的唯一值（自动排序）
numbers = [1, 2, 3, 2, 4, 3, 5, 1, 4]
unique_numbers = {x for x in numbers}
print(unique_numbers)
# 输出：{1, 2, 3, 4, 5}

# 提取字符串中的唯一字符
text = "hello world"
unique_chars = {c for c in text if c != ' '}
print(unique_chars)
# 输出：{'h', 'e', 'l', 'o', 'w', 'r', 'd'}
```

## 集合实战应用

### 示例：去除重复数据

```python
# 去除列表中的重复元素
def remove_duplicates(data):
    """去除列表中的重复元素"""
    return list(set(data))

# 测试
numbers = [1, 2, 3, 2, 4, 3, 5, 1, 4, 5]
unique = remove_duplicates(numbers)
print(f"原列表：{numbers}")
print(f"去重后：{unique}")

# 输出：
# 原列表：[1, 2, 3, 2, 4, 3, 5, 1, 4, 5]
# 去重后：[1, 2, 3, 4, 5]

# 保持原顺序的去重
def remove_duplicates_ordered(data):
    """去重但保持原顺序"""
    seen = set()
    result = []
    for item in data:
        if item not in seen:
            seen.add(item)
            result.append(item)
    return result

unique_ordered = remove_duplicates_ordered(numbers)
print(f"保持顺序去重：{unique_ordered}")
# 输出：保持顺序去重：[1, 2, 3, 4, 5]
```

## 集合性能优势

{% note success no-icon %}

**集合在某些操作上比列表更快！**

```python
import time

# 创建大量数据
large_list = list(range(100000))
large_set = set(range(100000))

# 测试查找性能
search_value = 99999

# 列表查找
start = time.time()
result = search_value in large_list
list_time = time.time() - start

# 集合查找
start = time.time()
result = search_value in large_set
set_time = time.time() - start

print(f"列表查找耗时：{list_time:.6f}秒")
print(f"集合查找耗时：{set_time:.6f}秒")
print(f"集合比列表快 {list_time/set_time:.2f} 倍")
```

**性能对比：**

- **查找元素**：集合 O(1) vs 列表 O(n)
- **去重**：集合自动去重
- **集合运算**：集合直接支持，列表需要遍历

**何时使用集合：**

- ✅ 需要去重
- ✅ 需要频繁判断元素是否存在
- ✅ 需要进行集合运算（交集、并集等）
- ✅ 不关心元素顺序

**何时不用集合：**

- ❌ 需要保持元素顺序
- ❌ 需要通过索引访问
- ❌ 元素需要可变（如列表、字典）
- ❌ 需要重复元素

{% endnote %}

# 数据结构选择指南

## 如何选择数据结构

{% note success no-icon %}

**选择数据结构的关键问题：**

1. 📝 **需要保持顺序吗？**
   - 需要 → 列表或元组
   - 不需要 → 字典或集合

2. 🔒 **数据会被修改吗？**
   - 会修改 → 列表、字典或集合
   - 不修改 → 元组

3. 🔑 **需要通过键访问值吗？**
   - 需要 → 字典
   - 不需要 → 列表、元组或集合

4. ✨ **允许重复元素吗？**
   - 允许 → 列表或元组
   - 不允许 → 集合

{% endnote %}

## 四种数据结构对比表

{% note warning no-icon %}

|     特性     |   列表 list    |   元组 tuple   | 字典 dict  |    集合 set    |
| :----------: | :------------: | :------------: | :--------: | :------------: |
|   **符号**   |      `[]`      |      `()`      |    `{}`    | `{}` / `set()` |
|   **有序**   |      ✅ 是      |      ✅ 是      |  ❌ 无序*   |     ❌ 无序     |
|   **可变**   |     ✅ 可变     |    ❌ 不可变    |   ✅ 可变   |     ✅ 可变     |
|   **重复**   |    ✅ 可重复    |    ✅ 可重复    | ❌ 键不重复 |    ❌ 不重复    |
| **索引访问** |     ✅ 支持     |     ✅ 支持     |  ❌ 不支持  |    ❌ 不支持    |
|  **键值对**  |      ❌ 否      |      ❌ 否      |    ✅ 是    |      ❌ 否      |
| **查找速度** |      O(n)      |      O(n)      |    O(1)    |      O(1)      |
| **使用场景** | 需要修改的序列 | 不需修改的序列 |  键值映射  | 去重、集合运算 |

*注：Python 3.7+ 字典保持插入顺序

{% endnote %}

## 选择决策树

```python
# 根据需求选择数据结构的伪代码

if 需要存储键值对:
    使用字典 dict
    
elif 需要去重 or 需要集合运算:
    使用集合 set
    
elif 数据不会改变:
    if 需要作为字典的键:
        使用元组 tuple
    else:
        使用元组 tuple (更安全、更快)
        
else:  # 需要修改数据
    使用列表 list
```

## 实际应用场景

### 列表 (list) 的应用场景

```python
# ✅ 适合使用列表的场景

# 1. 存储一组有序数据
scores = [85, 92, 78, 90, 88]

# 2. 需要频繁添加、修改、删除
shopping_list = ["苹果", "香蕉"]
shopping_list.append("橙子")

# 3. 需要通过索引访问
first_item = shopping_list[0]

# 4. 需要排序
numbers = [3, 1, 4, 1, 5]
numbers.sort()

# 5. 允许重复元素
votes = ["A", "B", "A", "C", "A"]
```

### 元组 (tuple) 的应用场景

```python
# ✅ 适合使用元组的场景

# 1. 函数返回多个值
def get_user_info():
    return ("小明", 18, "北京")

# 2. 作为字典的键
locations = {
    (0, 0): "原点",
    (1, 0): "右边"
}

# 3. 存储不应修改的配置
DATABASE_CONFIG = ("localhost", 3306, "mydb")

# 4. 数据安全（防止意外修改）
WEEK_DAYS = ("周一", "周二", "周三", "周四", "周五", "周六", "周日")

# 5. 性能要求高的场景
coordinates = (10, 20)  # 比列表更快、占用内存更小
```

### 字典 (dict) 的应用场景

```python
# ✅ 适合使用字典的场景

# 1. 存储键值对映射
student_scores = {
    "小明": 85,
    "小红": 92,
    "小刚": 78
}

# 2. 配置管理
config = {
    "host": "localhost",
    "port": 8080,
    "debug": True
}

# 3. 计数统计
word_count = {}
for word in text.split():
    word_count[word] = word_count.get(word, 0) + 1

# 4. 缓存数据
cache = {}
if key in cache:
    return cache[key]

# 5. JSON 数据处理
user_data = {
    "name": "小明",
    "age": 18,
    "hobbies": ["编程", "阅读"]
}
```

### 集合 (set) 的应用场景

```python
# ✅ 适合使用集合的场景

# 1. 去除重复元素
numbers = [1, 2, 3, 2, 4, 3, 5]
unique_numbers = list(set(numbers))

# 2. 判断元素是否存在（快速）
valid_users = {"user1", "user2", "user3"}
if username in valid_users:  # O(1) 时间复杂度
    login()

# 3. 集合运算（交集、并集、差集）
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}
common = set1 & set2  # 交集

# 4. 查找共同元素
xiaoming_friends = {"小红", "小刚", "小丽"}
xiaohong_friends = {"小刚", "小丽", "小华"}
common_friends = xiaoming_friends & xiaohong_friends

# 5. 数据验证
allowed_commands = {"start", "stop", "pause"}
if command in allowed_commands:
    execute(command)
```

## 性能对比

{% note info no-icon %}

**不同操作的时间复杂度：**

|   操作   | 列表  | 元组 | 字典 | 集合 |
| :------: | :---: | :--: | :--: | :--: |
| 访问元素 | O(1)  | O(1) | O(1) |  -   |
| 查找元素 | O(n)  | O(n) | O(1) | O(1) |
| 添加元素 | O(1)* |  -   | O(1) | O(1) |
| 删除元素 | O(n)  |  -   | O(1) | O(1) |
|   遍历   | O(n)  | O(n) | O(n) | O(n) |

*注：append() 是 O(1)，insert(0) 是 O(n)

{% endnote %}

# 常见错误与最佳实践

## 常见错误

### 错误1：混淆列表和元组的可变性

{% note danger no-icon %}

**❌ 错误代码：**

```python
# 尝试修改元组
my_tuple = (1, 2, 3)
my_tuple[0] = 100  # TypeError: 'tuple' object does not support item assignment
```

**✅ 正确理解：**

```python
# 元组不可变，如果需要修改，使用列表
my_list = [1, 2, 3]
my_list[0] = 100  # 正确
print(my_list)  # 输出：[100, 2, 3]

# 或者创建新元组
my_tuple = (1, 2, 3)
my_tuple = (100,) + my_tuple[1:]
print(my_tuple)  # 输出：(100, 2, 3)
```

{% endnote %}

### 错误2：空集合创建错误

{% note danger no-icon %}

**❌ 错误代码：**

```python
# 这是空字典，不是空集合！
empty = {}
print(type(empty))  # <class 'dict'>
```

**✅ 正确代码：**

```python
# 使用 set() 创建空集合
empty_set = set()
print(type(empty_set))  # <class 'set'>

# 非空集合可以用 {}
my_set = {1, 2, 3}
print(type(my_set))  # <class 'set'>
```

{% endnote %}

### 错误3：直接赋值而非复制

{% note danger no-icon %}

**❌ 错误代码：**

```python
list1 = [1, 2, 3]
list2 = list1  # 这不是复制，是引用！

list2[0] = 100
print(list1)  # 输出：[100, 2, 3]（被意外修改！）
```

**✅ 正确代码：**

```python
# 方式1：使用 copy()
list1 = [1, 2, 3]
list2 = list1.copy()

# 方式2：使用切片
list2 = list1[:]

# 方式3：使用 list()
list2 = list(list1)

list2[0] = 100
print(list1)  # 输出：[1, 2, 3]（未被修改）
print(list2)  # 输出：[100, 2, 3]
```

{% endnote %}

### 错误4：在循环中修改列表

{% note danger no-icon %}

**❌ 错误代码：**

```python
numbers = [1, 2, 3, 4, 5]

# 删除偶数（可能跳过元素）
for num in numbers:
    if num % 2 == 0:
        numbers.remove(num)

print(numbers)  # 可能结果不符合预期
```

**✅ 正确代码：**

```python
# 方式1：创建新列表
numbers = [1, 2, 3, 4, 5]
odd_numbers = [num for num in numbers if num % 2 != 0]
print(odd_numbers)  # 输出：[1, 3, 5]

# 方式2：反向遍历删除
numbers = [1, 2, 3, 4, 5]
for i in range(len(numbers) - 1, -1, -1):
    if numbers[i] % 2 == 0:
        numbers.pop(i)
print(numbers)  # 输出：[1, 3, 5]
```

{% endnote %}

### 错误5：字典键的类型错误

{% note danger no-icon %}

**❌ 错误代码：**

```python
# 列表不能作为字典的键（不可哈希）
my_dict = {
    [1, 2]: "value"  # TypeError: unhashable type: 'list'
}
```

**✅ 正确代码：**

```python
# 使用元组作为键
my_dict = {
    (1, 2): "value"  # 正确
}

# 或者使用字符串、数字等不可变类型
my_dict = {
    "key": "value",
    1: "one",
    (1, 2): "tuple_key"
}
```

{% endnote %}

### 错误6：集合包含可变类型

{% note danger no-icon %}

**❌ 错误代码：**

```python
# 集合不能包含列表（不可哈希）
my_set = {1, 2, [3, 4]}  # TypeError: unhashable type: 'list'
```

**✅ 正确代码：**

```python
# 使用元组替代列表
my_set = {1, 2, (3, 4)}  # 正确

# 或者使用 frozenset（不可变集合）
my_set = {1, 2, frozenset([3, 4])}
```

{% endnote %}

## 编程技巧

### 技巧1：使用推导式简化代码

{% note info no-icon %}

**普通写法：**

```python
# 列表
squares = []
for i in range(10):
    squares.append(i ** 2)

# 字典
word_lengths = {}
for word in words:
    word_lengths[word] = len(word)

# 集合
evens = set()
for i in range(20):
    if i % 2 == 0:
        evens.add(i)
```

**推导式（推荐）：**

```python
# 列表推导式
squares = [i ** 2 for i in range(10)]

# 字典推导式
word_lengths = {word: len(word) for word in words}

# 集合推导式
evens = {i for i in range(20) if i % 2 == 0}
```

{% endnote %}

### 技巧2：使用 get() 安全访问字典

{% note info no-icon %}

**不推荐：**

```python
if key in my_dict:
    value = my_dict[key]
else:
    value = default_value
```

**推荐：**

```python
# 使用 get() 方法
value = my_dict.get(key, default_value)

# 或者使用 setdefault()
value = my_dict.setdefault(key, default_value)
```

{% endnote %}

### 技巧3：使用 enumerate() 获取索引

{% note info no-icon %}

**不推荐：**

```python
fruits = ["苹果", "香蕉", "橙子"]

for i in range(len(fruits)):
    print(f"{i}: {fruits[i]}")
```

**推荐：**

```python
fruits = ["苹果", "香蕉", "橙子"]

for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")

# 自定义起始索引
for i, fruit in enumerate(fruits, start=1):
    print(f"{i}: {fruit}")
```

{% endnote %}

### 技巧4：使用 zip() 并行遍历

{% note info no-icon %}

```python
names = ["小明", "小红", "小刚"]
scores = [85, 92, 78]

# 并行遍历
for name, score in zip(names, scores):
    print(f"{name}: {score}分")

# 创建字典
student_scores = dict(zip(names, scores))
```

{% endnote %}

### 技巧5：使用 * 解包

{% note info no-icon %}

```python
# 列表解包
numbers = [1, 2, 3, 4, 5]
first, *middle, last = numbers
print(f"第一个：{first}")    # 1
print(f"中间：{middle}")      # [2, 3, 4]
print(f"最后一个：{last}")    # 5

# 函数参数解包
def add(a, b, c):
    return a + b + c

nums = [1, 2, 3]
result = add(*nums)  # 等价于 add(1, 2, 3)
```

{% endnote %}

### 技巧6：使用集合提高查找效率

{% note info no-icon %}

**不推荐（列表查找慢）：**

```python
valid_users = ["user1", "user2", "user3", ...]  # 很长的列表

if username in valid_users:  # O(n) 时间复杂度
    login()
```

**推荐（集合查找快）：**

```python
valid_users = {"user1", "user2", "user3", ...}  # 转换为集合

if username in valid_users:  # O(1) 时间复杂度
    login()
```

{% endnote %}

# 综合案例：学生管理系统

```python
# 综合使用四种数据结构的学生管理系统

class StudentManager:
    def __init__(self):
        # 字典：存储学生信息（学号 -> 学生信息）
        self.students = {}
        
        # 集合：存储所有学号（快速查找）
        self.student_ids = set()
        
        # 字典：存储班级信息（班级名 -> 学生列表）
        self.classes = {}
        
        # 元组：科目列表（不可修改）
        self.subjects = ("语文", "数学", "英语")
    
    def add_student(self, student_id, name, class_name, scores):
        """添加学生"""
        if student_id in self.student_ids:
            print(f"❌ 学号 {student_id} 已存在")
            return False
        
        # 添加到学生字典
        self.students[student_id] = {
            "name": name,
            "class": class_name,
            "scores": scores  # 列表：成绩可修改
        }
        
        # 添加到学号集合
        self.student_ids.add(student_id)
        
        # 添加到班级
        if class_name not in self.classes:
            self.classes[class_name] = []
        self.classes[class_name].append(student_id)
        
        print(f"✅ 成功添加学生：{name}")
        return True
    
    def get_student(self, student_id):
        """查询学生信息"""
        if student_id not in self.student_ids:
            print(f"❌ 学号 {student_id} 不存在")
            return None
        
        student = self.students[student_id]
        print(f"\n学号：{student_id}")
        print(f"姓名：{student['name']}")
        print(f"班级：{student['class']}")
        
        # 使用 zip 并行遍历科目和成绩
        for subject, score in zip(self.subjects, student['scores']):
            print(f"{subject}：{score}分")
        
        return student
    
    def get_class_average(self, class_name):
        """计算班级平均分"""
        if class_name not in self.classes:
            print(f"❌ 班级 {class_name} 不存在")
            return None
        
        student_ids = self.classes[class_name]
        if not student_ids:
            print(f"❌ 班级 {class_name} 没有学生")
            return None
        
        # 使用列表推导式获取所有成绩
        all_scores = [
            score
            for sid in student_ids
            for score in self.students[sid]['scores']
        ]
        
        average = sum(all_scores) / len(all_scores)
        print(f"\n{class_name} 班级平均分：{average:.2f}")
        return average
    
    def find_top_students(self, n=3):
        """找出前N名学生"""
        # 计算每个学生的平均分
        student_averages = []
        for sid, info in self.students.items():
            avg = sum(info['scores']) / len(info['scores'])
            student_averages.append((sid, info['name'], avg))
        
        # 按平均分排序
        student_averages.sort(key=lambda x: x[2], reverse=True)
        
        # 获取前N名
        top_n = student_averages[:n]
        
        print(f"\n前 {n} 名学生：")
        for i, (sid, name, avg) in enumerate(top_n, 1):
            print(f"{i}. {name}（{sid}）- 平均分：{avg:.2f}")
        
        return top_n
    
    def get_subject_stats(self, subject_index):
        """统计某科目的成绩"""
        if subject_index >= len(self.subjects):
            print("❌ 科目索引无效")
            return None
        
        subject = self.subjects[subject_index]
        
        # 使用列表推导式获取该科目所有成绩
        scores = [
            student['scores'][subject_index]
            for student in self.students.values()
        ]
        
        if not scores:
            print(f"❌ 没有 {subject} 成绩")
            return None
        
        print(f"\n{subject} 成绩统计：")
        print(f"最高分：{max(scores)}")
        print(f"最低分：{min(scores)}")
        print(f"平均分：{sum(scores) / len(scores):.2f}")
        
        # 使用集合去重，看有多少个不同的分数
        unique_scores = set(scores)
        print(f"不同分数数量：{len(unique_scores)}")
        
        return scores

# 测试系统
def main():
    manager = StudentManager()
    
    # 添加学生
    print("=== 添加学生 ===")
    manager.add_student("S001", "小明", "一班", [85, 90, 88])
    manager.add_student("S002", "小红", "一班", [92, 95, 90])
    manager.add_student("S003", "小刚", "二班", [78, 82, 80])
    manager.add_student("S004", "小丽", "一班", [95, 92, 96])
    manager.add_student("S005", "小华", "二班", [88, 86, 90])
    
    # 查询学生
    print("\n=== 查询学生 ===")
    manager.get_student("S002")
    
    # 计算班级平均分
    print("\n=== 班级平均分 ===")
    manager.get_class_average("一班")
    manager.get_class_average("二班")
    
    # 找出前3名
    print("\n=== 排行榜 ===")
    manager.find_top_students(3)
    
    # 科目统计
    print("\n=== 数学成绩统计 ===")
    manager.get_subject_stats(1)  # 数学是第2科（索引1）
    
    print("\n" + "=" * 50)

if __name__ == "__main__":
    main()
```

**运行结果：**

```
=== 添加学生 ===
✅ 成功添加学生：小明
✅ 成功添加学生：小红
✅ 成功添加学生：小刚
✅ 成功添加学生：小丽
✅ 成功添加学生：小华

=== 查询学生 ===

学号：S002
姓名：小红
班级：一班
语文：92分
数学：95分
英语：90分

=== 班级平均分 ===

一班 班级平均分：90.44

二班 班级平均分：84.00

=== 排行榜 ===

前 3 名学生：
1. 小丽（S004）- 平均分：94.33
2. 小红（S002）- 平均分：92.33
3. 小华（S005）- 平均分：88.00

=== 数学成绩统计 ===

数学 成绩统计：
最高分：95
最低分：82
平均分：89.00
不同分数数量：5

==================================================
```

# 总结

{% note warning no-icon %}

## 知识点回顾

### 1️⃣ 列表 (list)

- **特点**：有序、可变、可重复
- **创建**：`[]` 或 `list()`
- **适用**：需要修改的有序数据
- **方法**：append、insert、remove、pop、sort、reverse

### 2️⃣ 元组 (tuple)

- **特点**：有序、不可变、可重复
- **创建**：`()` 或 `tuple()`
- **适用**：不需修改的数据、函数返回多值
- **特性**：元组解包、可作为字典的键

### 3️⃣ 字典 (dict)

- **特点**：键值对、无序*、键唯一、快速查找
- **创建**：`{}` 或 `dict()`
- **适用**：需要通过键访问值
- **方法**：get、keys、values、items、update、pop

### 4️⃣ 集合 (set)

- **特点**：无序、唯一、快速查找
- **创建**：`{}` 或 `set()`
- **适用**：去重、集合运算、快速查找
- **运算**：并集 `|`、交集 `&`、差集 `-`、对称差集 `^`

{% endnote %}

{% note warning no-icon %}

## 重要提醒

1. ⚠️ **空集合**要用 `set()`，不能用 `{}`（那是空字典）
2. ⚠️ **直接赋值**不会复制数据结构，而是创建引用
3. ⚠️ **元组不可变**，但可以包含可变对象（如列表）
4. ⚠️ **字典的键**和**集合的元素**必须是可哈希的（不可变）
5. ⚠️ **在循环中修改列表**可能导致跳过元素
6. ⚠️ **推导式**是创建数据结构的简洁方式

{% endnote %}

{% note info no-icon %}

## 学习建议

1. **理解特点**：掌握每种数据结构的特点和适用场景
2. **多练习**：通过实际编码加深理解
3. **性能意识**：了解不同操作的时间复杂度
4. **灵活运用**：根据需求选择合适的数据结构
5. **推导式**：熟练使用推导式简化代码
6. **组合使用**：实际项目中常常需要组合使用多种数据结构

{% endnote %}

{% note success no-icon %}

## 数据结构应用场景总结

|       场景       | 推荐数据结构 |       原因       |
| :--------------: | :----------: | :--------------: |
|   存储有序数据   |  列表/元组   |   支持索引访问   |
|   频繁修改数据   |     列表     |       可变       |
| 保护数据不被修改 |     元组     |      不可变      |
|     键值映射     |     字典     | 通过键快速访问值 |
|     去除重复     |     集合     |     自动去重     |
|     快速查找     |  字典/集合   | O(1) 时间复杂度  |
|     集合运算     |     集合     |  支持交并差运算  |
|   函数返回多值   |     元组     |   不可变、安全   |
|     配置信息     |  字典/元组   |  键值对或不可变  |
|     计数统计     |     字典     |    键值对映射    |

{% endnote %}

# Q&A

{% note warning no-icon %}

**Q1：列表和元组有什么区别？应该用哪个？**

{% endnote %}

{% note info no-icon %}

**A：** 

- **列表（可变）**：可以修改、添加、删除元素
- **元组（不可变）**：创建后不能修改

**选择标准：**

- 数据会改变 → 用列表
- 数据不会改变 → 用元组（更安全、更快）
- 作为字典的键 → 必须用元组（列表不可哈希）

{% endnote %}

{% note warning no-icon %}

**Q2：为什么 `{}` 是空字典而不是空集合？**

{% endnote %}

{% note info no-icon %}

**A：** 因为字典在 Python 中出现得更早，`{}` 被用来表示空字典。

**记住：**

- 空字典：`{}`
- 空集合：`set()`
- 非空集合：`{1, 2, 3}`

{% endnote %}

{% note warning no-icon %}

**Q3：字典和集合有什么区别？**

{% endnote %}

{% note info no-icon %}

**A：** 

- **字典**：存储键值对，通过键访问值
- **集合**：只存储元素（相当于只有键没有值）

**相同点：**

- 都使用 `{}` 创建
- 都是无序的
- 查找速度都很快（O(1)）
- 键/元素都必须是可哈希的

**选择：**

- 需要键值映射 → 用字典
- 只需要去重或集合运算 → 用集合

{% endnote %}

{% note warning no-icon %}

**Q4：什么是可哈希（hashable）？**

{% endnote %}

{% note info no-icon %}

**A：** 可哈希是指对象的值在生命周期内不会改变。

**可哈希的类型（可以作为字典的键或集合的元素）：**

- ✅ 数字：int、float
- ✅ 字符串：str
- ✅ 元组：tuple
- ✅ 布尔值：bool
- ✅ None

**不可哈希的类型（不能作为字典的键或集合的元素）：**

- ❌ 列表：list
- ❌ 字典：dict
- ❌ 集合：set

{% endnote %}

{% note warning no-icon %}

**Q5：如何选择合适的数据结构？**

{% endnote %}

{% note info no-icon %}

**A：** 问自己这些问题：

1. **需要顺序吗？** 
   - 需要 → 列表/元组
   - 不需要 → 字典/集合

2. **会修改吗？**
   - 会 → 列表/字典/集合
   - 不会 → 元组

3. **需要键值对吗？**
   - 需要 → 字典
   - 不需要 → 列表/元组/集合

4. **允许重复吗？**
   - 允许 → 列表/元组
   - 不允许 → 集合

{% endnote %}

{% note warning no-icon %}

**Q6：直接赋值和复制有什么区别？**

{% endnote %}

{% note info no-icon %}

**A：** 

- **直接赋值**：创建引用，两个变量指向同一个对象
- **复制**：创建新对象，两个变量独立

```python
# 直接赋值（引用）
list1 = [1, 2, 3]
list2 = list1  # 引用
list2[0] = 100
print(list1)  # [100, 2, 3]（被改变了！）

# 复制
list1 = [1, 2, 3]
list2 = list1.copy()  # 复制
list2[0] = 100
print(list1)  # [1, 2, 3]（未改变）
```

{% endnote %}

{% note warning no-icon %}

**Q7：什么时候用列表推导式？**

{% endnote %}

{% note info no-icon %}

**A：** 当你需要基于现有序列创建新序列时：

```python
# 不用推导式（冗长）
squares = []
for i in range(10):
    squares.append(i ** 2)

# 用推导式（简洁）
squares = [i ** 2 for i in range(10)]

# 带条件
evens = [i for i in range(20) if i % 2 == 0]
```

**建议：**

- 简单的转换 → 用推导式
- 复杂的逻辑 → 用传统循环（更清晰）

{% endnote %}

---

{% note warning no-icon %}

🎉 恭喜你完成了 Python 数据结构的学习！

数据结构是编程的基础，掌握好这四种数据结构，你就能高效地组织和管理数据。

现在你已经学会了：

- ✅ **列表**：存储和操作有序数据
- ✅ **元组**：保护数据不被修改
- ✅ **字典**：键值映射和快速查找
- ✅ **集合**：去重和集合运算

接下来可以学习**函数**，让代码更加模块化和可重用！

**记住**：选择合适的数据结构能让你的代码更高效、更优雅！💪

{% endnote %}

