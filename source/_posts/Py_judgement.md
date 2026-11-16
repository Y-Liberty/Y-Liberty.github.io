---
title: Python 判断结构 - 让程序学会思考
date: 2025-03-15 10:30:00
tags:
  - Python 基础语法
categories:
  - Python
cover: https://bu.dusays.com/2025/11/03/69084bd62b88f.png
---

# 前言

{% note warning no-icon %}

本文将带你学习 Python 中的**判断结构**，让你的程序能够像人一样**思考和做决定**！

{% endnote %}

{% note warning no-icon %}

在阅读过程中有任何问题都可以发布到评论区，有价值的问题将会放到文章末尾Q&A之中！

{% endnote %}

{% note success no-icon %}

**本文导航：**
- 📚 判断结构基础：比较运算符
- 🎯 三种判断结构：`if`、`if-else`、`if-elif-else`
- 🔗 逻辑运算符：`and`、`or`、`not`
- 🎮 实战练习：三个难度等级
- ⚠️ 常见错误：6大易错点
- 💡 编程技巧：代码优化建议

{% endnote %}

# 判断结构基础

## 什么是判断结构

{% note info no-icon %}

**判断结构**也叫**选择结构**或**条件结构**，是编程中非常重要的概念。它让程序能够根据不同的**条件**做出不同的**选择**。

想象一下，你早上起床要决定穿什么衣服：
- 如果**下雨了**，就带雨伞 ☔
- 如果**天气冷**，就穿厚衣服 🧥
- 如果**天气热**，就穿短袖 👕

这就是生活中的判断！编程中的判断结构也是一样的道理。

{% endnote %}

{% note info no-icon %}

在 Python 中，判断结构主要使用 **if 关键字** 来实现。通过判断某个条件是否成立，程序可以选择执行不同的代码。

{% endnote %}

## 比较运算符

{% note info no-icon %}

在学习判断结构之前，我们先来认识一下**比较运算符**。比较运算符用来比较两个值的关系，返回结果是 **True（真）** 或 **False（假）**。

{% endnote %}

| 运算符 | 含义 | 示例 | 结果 |
| :---: | :---: | :---: | :---: |
| == | 等于 | 5 == 5 | True |
| != | 不等于 | 5 != 3 | True |
| > | 大于 | 5 > 3 | True |
| < | 小于 | 5 < 3 | False |
| >= | 大于等于 | 5 >= 5 | True |
| <= | 小于等于 | 3 <= 5 | True |

{% note danger no-icon %}

⚠️ **特别注意**：
- **等于** 是 两个等号 `==`，不是一个等号！
- **一个等号 =** 是赋值，表示把右边的值赋给左边的变量
- **两个等号 ==** 是比较，表示判断两边是否相等

```python
x = 5      # 这是赋值，把 5 赋值给 x
x == 5     # 这是比较，判断 x 是否等于 5
```

{% endnote %}

```python
# 比较运算符示例
print(5 == 5)    # 输出：True
print(5 != 3)    # 输出：True
print(5 > 3)     # 输出：True
print(5 < 3)     # 输出：False

# 也可以比较变量
age = 15
print(age >= 18)  # 输出：False
print(age < 18)   # 输出：True
```

# 判断结构详解

## if 单分支判断

{% note info no-icon %}

**if 单分支判断**是最简单的判断结构，格式如下：

```python
if 条件:
    代码块
```

如果条件为 **True（真）**，就执行代码块；如果条件为 **False（假）**，就跳过代码块。

{% endnote %}

{% note warning no-icon %}

**重要知识点：缩进**

Python 使用**缩进**（空格或Tab键）来表示代码块，这是 Python 的特色！

- if 语句后面要加**冒号 :**
- if 下面的代码块必须**缩进**（通常是 4 个空格或 1 个 Tab）
- 所有缩进的代码都属于这个 if 判断

{% endnote %}

### 示例1：判断成绩是否及格

```python
# 判断成绩是否及格
score = 85

if score >= 60:
    print("恭喜你，考试及格了！")
    print("继续加油！")

print("程序结束")
```

**运行结果：**
```
恭喜你,考试及格了！
继续加油！
程序结束
```

{% note info no-icon %}

**代码解析：**
- 因为 score = 85，条件 `score >= 60` 为 True
- 所以会执行缩进的两行 print 语句
- 最后一行 print 没有缩进，无论条件是否成立都会执行

{% endnote %}

### 示例2：判断是否成年

```python
# 判断是否成年
age = int(input("请输入你的年龄："))

if age >= 18:
    print("你已经成年了，可以独立做很多事情啦！")

print("感谢使用年龄判断系统")
```

**运行示例：**
```
请输入你的年龄：20
你已经成年了，可以独立做很多事情啦！
感谢使用年龄判断系统
```

## if-else 双分支判断

{% note info no-icon %}

**if-else 双分支判断**可以处理两种情况：条件成立时执行一段代码，条件不成立时执行另一段代码。

```python
if 条件:
    代码块1    # 条件为 True 时执行
else:
    代码块2    # 条件为 False 时执行
```

{% endnote %}

### 示例1：判断奇偶数

```python
# 判断一个数是奇数还是偶数
num = int(input("请输入一个整数："))

if num % 2 == 0:
    print(f"{num} 是偶数")
else:
    print(f"{num} 是奇数")
```

**运行示例：**
```
请输入一个整数：7
7 是奇数
```

{% note info no-icon %}

**知识补充：**
- `%` 是取余运算符，`num % 2` 表示 num 除以 2 的余数
- 如果余数是 0，说明能被 2 整除，是偶数
- 如果余数不是 0（余数是 1），说明是奇数

{% endnote %}

### 示例2：判断年龄段

```python
# 判断是否成年
age = int(input("请输入你的年龄："))

if age >= 18:
    print("你已经是成年人了！")
    print("要对自己的行为负责哦！")
else:
    print("你还是未成年人")
    print("要听爸爸妈妈的话哦！")

print("程序结束")
```

**运行示例1：**
```
请输入你的年龄：20
你已经是成年人了！
要对自己的行为负责哦！
程序结束
```

**运行示例2：**
```
请输入你的年龄：15
你还是未成年人
要听爸爸妈妈的话哦！
程序结束
```

## if-elif-else 多分支判断

{% note info no-icon %}

**if-elif-else 多分支判断**可以处理多种情况，按顺序判断条件，找到第一个为 True 的条件就执行对应代码，然后结束判断。

```python
if 条件1:
    代码块1
elif 条件2:
    代码块2
elif 条件3:
    代码块3
else:
    代码块4
```

{% endnote %}

{% note warning no-icon %}

**重要特点：**
- **elif** 是 **else if** 的缩写
- 可以有**多个 elif**，根据需要添加
- **else** 可以省略
- 一旦某个条件成立，执行完对应代码后，**后面的条件都不再判断**

{% endnote %}

### 示例1：成绩等级划分

```python
# 根据分数判断成绩等级
score = int(input("请输入你的分数（0-100）："))

if score >= 90:
    print("优秀！你真棒！🌟")
elif score >= 80:
    print("良好！继续保持！👍")
elif score >= 70:
    print("中等，还需努力！💪")
elif score >= 60:
    print("及格，不要放弃！✊")
else:
    print("不及格，加油加油！📚")
```

**运行示例：**
```
请输入你的分数（0-100）：85
良好！继续保持！👍
```

{% note info no-icon %}

**执行流程分析（假设输入 85）：**
1. 判断 `score >= 90`？85 >= 90 为 False，继续判断
2. 判断 `score >= 80`？85 >= 80 为 True，执行这个分支的代码
3. 输出"良好！继续保持！👍"
4. **结束判断**，后面的 elif 和 else 都不再执行

{% endnote %}

### 示例2：判断季节

```python
# 根据月份判断季节
month = int(input("请输入月份（1-12）："))

if month >= 3 and month <= 5:
    print("现在是春天 🌸")
elif month >= 6 and month <= 8:
    print("现在是夏天 ☀️")
elif month >= 9 and month <= 11:
    print("现在是秋天 🍂")
elif month == 12 or month == 1 or month == 2:
    print("现在是冬天 ❄️")
else:
    print("输入的月份不正确！")
```

**运行示例：**
```
请输入月份（1-12）：7
现在是夏天 ☀️
```

### 示例3：简易计算器

```python
# 简易计算器
num1 = float(input("请输入第一个数："))
operator = input("请输入运算符（+、-、*、/）：")
num2 = float(input("请输入第二个数："))

if operator == '+':
    result = num1 + num2
    print(f"{num1} + {num2} = {result}")
elif operator == '-':
    result = num1 - num2
    print(f"{num1} - {num2} = {result}")
elif operator == '*':
    result = num1 * num2
    print(f"{num1} * {num2} = {result}")
elif operator == '/':
    if num2 != 0:
        result = num1 / num2
        print(f"{num1} / {num2} = {result}")
    else:
        print("错误：除数不能为0！")
else:
    print("错误：运算符输入不正确！")
```

**运行示例：**
```
请输入第一个数：10
请输入运算符（+、-、*、/）：*
请输入第二个数：5
10.0 * 5.0 = 50.0
```

# 逻辑运算符

{% note info no-icon %}

**逻辑运算符**用于组合多个条件，让判断更加灵活。Python 中有三个逻辑运算符：`and`、`or`、`not`

{% endnote %}

| 运算符 | 含义 | 说明 | 示例 |
| :---: | :---: | :---: | :---: |
| and | 与 | 两个条件都为 True 才返回 True | age >= 18 and age < 60 |
| or | 或 | 只要有一个条件为 True 就返回 True | day == 6 or day == 7 |
| not | 非 | 取反，True 变 False，False 变 True | not is_raining |

## and（与）运算符

{% note info no-icon %}

**and** 表示"并且"，**所有条件都为 True**，结果才为 True。

{% endnote %}

```python
# 判断是否是工作日的成年人
age = 25
day = 3  # 1-5表示周一到周五，6-7表示周六周日

if age >= 18 and day >= 1 and day <= 5:
    print("你是成年人，今天是工作日，该上班啦！")
else:
    print("享受你的时光吧！")
```

**真值表：**
| 条件1 | 条件2 | 条件1 and 条件2 |
| :---: | :---: | :---: |
| True | True | True |
| True | False | False |
| False | True | False |
| False | False | False |

## or（或）运算符

{% note info no-icon %}

**or** 表示"或者"，**至少有一个条件为 True**，结果就为 True。

{% endnote %}

```python
# 判断是否是周末
day = int(input("请输入星期几（1-7）："))

if day == 6 or day == 7:
    print("今天是周末，可以休息啦！🎉")
else:
    print("今天是工作日，要好好学习！📚")
```

**真值表：**
| 条件1 | 条件2 | 条件1 or 条件2 |
| :---: | :---: | :---: |
| True | True | True |
| True | False | True |
| False | True | True |
| False | False | False |

## not（非）运算符

{% note info no-icon %}

**not** 表示"取反"，把 True 变成 False，把 False 变成 True。

{% endnote %}

```python
# 判断是否需要带雨伞
is_raining = False

if not is_raining:
    print("今天不下雨，不用带雨伞！☀️")
else:
    print("今天下雨，记得带雨伞！☔")
```

**真值表：**
| 条件 | not 条件 |
| :---: | :---: |
| True | False |
| False | True |

## 综合示例：会员折扣系统

```python
# 商场会员折扣系统
price = float(input("请输入商品价格："))
is_member = input("是否是会员？(y/n)：")
is_birthday = input("今天是否是您的生日？(y/n)：")

# 将输入转换为布尔值
is_member = (is_member == 'y')
is_birthday = (is_birthday == 'y')

if is_member and is_birthday:
    # 会员且生日：7折
    final_price = price * 0.7
    print(f"会员生日特惠！享受7折优惠")
    print(f"原价：{price}元，实付：{final_price}元")
elif is_member:
    # 仅会员：8折
    final_price = price * 0.8
    print(f"会员优惠！享受8折优惠")
    print(f"原价：{price}元，实付：{final_price}元")
elif is_birthday:
    # 仅生日：9折
    final_price = price * 0.9
    print(f"生日快乐！享受9折优惠")
    print(f"原价：{price}元，实付：{final_price}元")
else:
    # 都不是：原价
    final_price = price
    print(f"原价购买：{final_price}元")
```

# 嵌套判断

{% note info no-icon %}

**嵌套判断**就是在一个判断结构里面再包含另一个判断结构，像俄罗斯套娃一样。

{% endnote %}

{% note warning no-icon %}

**注意事项：**
- 嵌套判断要特别注意**缩进层级**
- 内层判断要比外层判断多缩进一级
- 不要嵌套太多层（一般不超过3层），否则代码难以理解

{% endnote %}

## 示例1：考试通过判断

```python
# 判断是否通过考试（需要笔试和面试都合格）
written_score = int(input("请输入笔试成绩："))
interview_score = int(input("请输入面试成绩："))

if written_score >= 60:
    print("笔试合格！")
    # 笔试合格后，再判断面试
    if interview_score >= 60:
        print("面试也合格！")
        print("🎉 恭喜你，考试通过！")
    else:
        print("面试不合格")
        print("❌ 很遗憾，考试未通过")
else:
    print("笔试不合格")
    print("❌ 很遗憾，考试未通过")
```

**运行示例1：**
```
请输入笔试成绩：75
请输入面试成绩：80
笔试合格！
面试也合格！
🎉 恭喜你，考试通过！
```

**运行示例2：**
```
请输入笔试成绩：75
请输入面试成绩：50
笔试合格！
面试不合格
❌ 很遗憾，考试未通过
```

## 示例2：会员等级折扣系统

```python
# 根据会员等级和消费金额计算折扣
member_level = input("请输入会员等级（普通/黄金/钻石）：")
amount = float(input("请输入消费金额："))

if member_level == "钻石":
    if amount >= 1000:
        discount = 0.6  # 6折
        print("钻石会员，消费满1000元，享受6折优惠！")
    else:
        discount = 0.7  # 7折
        print("钻石会员，享受7折优惠！")
elif member_level == "黄金":
    if amount >= 1000:
        discount = 0.75  # 75折
        print("黄金会员，消费满1000元，享受75折优惠！")
    else:
        discount = 0.8  # 8折
        print("黄金会员，享受8折优惠！")
elif member_level == "普通":
    if amount >= 1000:
        discount = 0.9  # 9折
        print("普通会员，消费满1000元，享受9折优惠！")
    else:
        discount = 0.95  # 95折
        print("普通会员，享受95折优惠！")
else:
    discount = 1.0  # 不打折
    print("非会员，原价购买")

final_amount = amount * discount
print(f"原价：{amount}元")
print(f"实付：{final_amount}元")
print(f"节省：{amount - final_amount}元")
```

{% note danger no-icon %}

**优化建议：**

上面的嵌套判断虽然能实现功能，但是有更简洁的写法。我们可以使用 **and** 来替代嵌套：

```python
if member_level == "钻石" and amount >= 1000:
    discount = 0.6
elif member_level == "钻石":
    discount = 0.7
# ... 其他情况
```

这样代码更清晰，更容易理解！

{% endnote %}

# 实战练习

{% note success no-icon %}

通过实战练习来巩固所学知识！下面提供了三个不同难度的练习题，建议按顺序完成。

{% endnote %}

{% tabs 实战练习 %}

<!-- tab 🌟 初级练习 -->

## 练习1：猜数字游戏

```python
# 猜数字游戏（简化版）
import random

# 生成1-100之间的随机数
secret_number = random.randint(1, 100)
print("我想了一个1-100之间的数字，你能猜中吗？")

# 用户猜测
guess = int(input("请输入你猜的数字："))

if guess == secret_number:
    print("🎉 恭喜你，猜对了！")
elif guess > secret_number:
    print("❌ 猜大了！正确答案是：", secret_number)
else:
    print("❌ 猜小了！正确答案是：", secret_number)
```

<!-- endtab -->

<!-- tab 🌟🌟 中级练习 -->

## 练习2：BMI计算与健康建议

```python
# BMI 计算器（Body Mass Index - 身体质量指数）
print("===== BMI健康计算器 =====")
weight = float(input("请输入你的体重（kg）："))
height = float(input("请输入你的身高（m）："))

# 计算BMI
bmi = weight / (height * height)
print(f"你的BMI指数是：{bmi:.2f}")

# 根据BMI给出健康建议
if bmi < 18.5:
    print("体重过轻 ⚠️")
    print("建议：增加营养摄入，适当运动增加体重")
elif bmi >= 18.5 and bmi < 24:
    print("体重正常 ✅")
    print("建议：保持良好的饮食和运动习惯")
elif bmi >= 24 and bmi < 28:
    print("体重过重 ⚠️")
    print("建议：控制饮食，增加运动量")
else:
    print("肥胖 ❌")
    print("建议：需要注意健康，建议咨询医生制定减重计划")
```

**运行示例：**
```
===== BMI健康计算器 =====
请输入你的体重（kg）：65
请输入你的身高（m）：1.75
你的BMI指数是：21.22
体重正常 ✅
建议：保持良好的饮食和运动习惯
```

<!-- endtab -->

<!-- tab 🌟🌟🌟 高级练习 -->

## 练习3：石头剪刀布游戏

```python
# 石头剪刀布游戏
import random

print("===== 石头剪刀布游戏 =====")
print("1. 石头")
print("2. 剪刀")
print("3. 布")

# 玩家选择
player = int(input("请输入你的选择（1-3）："))

# 电脑随机选择
computer = random.randint(1, 3)

# 显示选择
choices = ["", "石头", "剪刀", "布"]
print(f"你选择了：{choices[player]}")
print(f"电脑选择了：{choices[computer]}")

# 判断胜负
if player == computer:
    print("平局！🤝")
elif (player == 1 and computer == 2) or (player == 2 and computer == 3) or (player == 3 and computer == 1):
    print("你赢了！🎉")
else:
    print("你输了！😢")
```

<!-- endtab -->

{% endtabs %}

# 常见错误与最佳实践

## 常见错误

### 错误1：忘记写冒号

{% note danger no-icon %}

**❌ 错误代码：**
```python
if age >= 18  # 缺少冒号
    print("成年人")
```

**✅ 正确代码：**
```python
if age >= 18:  # if、elif、else 后面都要加冒号
    print("成年人")
```

{% endnote %}

### 错误2：缩进不正确

{% note danger no-icon %}

**❌ 错误代码：**
```python
if age >= 18:
print("成年人")  # 缺少缩进
```

**✅ 正确代码：**
```python
if age >= 18:
    print("成年人")  # 必须缩进
```

**提示**：建议使用 **4个空格** 或 **1个Tab** 进行缩进，不要混用！

{% endnote %}

### 错误3：混淆 = 和 ==

{% note danger no-icon %}

**❌ 错误代码：**
```python
if age = 18:  # 这是赋值，不是比较
    print("18岁")
```

**✅ 正确代码：**
```python
if age == 18:  # 这才是比较
    print("18岁")
```

**记住**：
- **一个等号 `=`** 是赋值
- **两个等号 `==`** 是比较

{% endnote %}

### 错误4：条件判断的顺序

{% note danger no-icon %}

在使用 if-elif-else 时，要注意**条件判断的顺序**！

**❌ 错误示例：**
```python
score = 95

if score >= 60:
    print("及格")
elif score >= 90:
    print("优秀")  # 这个条件永远不会执行！
```

上面的代码中，因为先判断了 `score >= 60`，当 score = 95 时，第一个条件就成立了，后面的 elif 就不会再判断了。

**✅ 正确示例：**
```python
score = 95

if score >= 90:
    print("优秀")  # 先判断更严格的条件
elif score >= 60:
    print("及格")
```

**原则**：判断条件要**从严格到宽松**排列！

{% endnote %}

### 错误5：逻辑运算符使用错误

{% note danger no-icon %}

❌ **错误代码：**
```python
# 想表达：x 在 1 到 10 之间
if 1 <= x <= 10:  # 这样写在Python中是正确的
    print("x在1到10之间")

# 但有些同学可能会这样写：
if x >= 1 and <= 10:  # ❌ 错误！
    print("x在1到10之间")
```

✅ **正确代码：**
```python
# 方式1：Python特有的链式比较（推荐）
if 1 <= x <= 10:
    print("x在1到10之间")

# 方式2：使用 and 连接完整的条件
if x >= 1 and x <= 10:
    print("x在1到10之间")
```

{% endnote %}

### 错误6：空代码块

{% note danger no-icon %}

❌ **错误代码：**
```python
if age >= 18:
    # 暂时不知道写什么
else:
    print("未成年")
```

如果 if 代码块为空，会报错！

✅ **正确代码：**
```python
if age >= 18:
    pass  # pass 表示什么都不做，占位用
else:
    print("未成年")
```

{% endnote %}

## 编程技巧

### 技巧1：简化布尔判断

{% note info no-icon %}

❌ **啰嗦的写法：**
```python
if is_student == True:
    print("是学生")
```

✅ **简洁的写法：**
```python
if is_student:  # 直接判断布尔值
    print("是学生")
```

{% endnote %}

### 技巧2：合理使用 in 运算符

{% note info no-icon %}

❌ **啰嗦的写法：**
```python
if month == 3 or month == 4 or month == 5:
    print("春天")
```

✅ **简洁的写法：**
```python
if month in [3, 4, 5]:
    print("春天")
```

{% endnote %}

### 技巧3：使用三元表达式（简单情况）

{% note info no-icon %}

对于简单的 if-else，可以使用三元表达式：

```python
# 普通写法
if age >= 18:
    status = "成年"
else:
    status = "未成年"

# 三元表达式（一行搞定）
status = "成年" if age >= 18 else "未成年"
```

{% endnote %}

# 综合案例：学生成绩管理系统

```python
# 学生成绩管理系统
print("=" * 40)
print("      学生成绩管理系统")
print("=" * 40)

# 输入学生信息
name = input("请输入学生姓名：")
chinese = float(input("请输入语文成绩："))
math = float(input("请输入数学成绩："))
english = float(input("请输入英语成绩："))

# 计算总分和平均分
total = chinese + math + english
average = total / 3

# 输出基本信息
print("\n" + "=" * 40)
print(f"学生姓名：{name}")
print(f"语文成绩：{chinese}")
print(f"数学成绩：{math}")
print(f"英语成绩：{english}")
print(f"总分：{total}")
print(f"平均分：{average:.2f}")
print("=" * 40)

# 判断是否有不及格科目
fail_count = 0
fail_subjects = []

if chinese < 60:
    fail_count += 1
    fail_subjects.append("语文")

if math < 60:
    fail_count += 1
    fail_subjects.append("数学")

if english < 60:
    fail_count += 1
    fail_subjects.append("英语")

# 根据不及格科目数量给出评价
if fail_count == 0:
    print("✅ 所有科目都及格了！")
    
    # 进一步判断等级
    if average >= 90:
        print("🌟 优秀！你真是太棒了！")
    elif average >= 80:
        print("👍 良好！继续保持！")
    elif average >= 70:
        print("💪 中等，还有进步空间！")
    else:
        print("✊ 及格，要更加努力哦！")
else:
    print(f"❌ 有 {fail_count} 门科目不及格")
    print(f"不及格科目：{', '.join(fail_subjects)}")
    print("📚 需要加强学习，不要气馁！")

# 给出学习建议
print("\n学习建议：")
if chinese < 70:
    print("- 语文：多读书，多积累好词好句")
if math < 70:
    print("- 数学：多做练习题，掌握基础概念")
if english < 70:
    print("- 英语：多背单词，多练习听说读写")

print("\n" + "=" * 40)
print("感谢使用学生成绩管理系统！")
print("=" * 40)
```

**运行示例：**
```
========================================
      学生成绩管理系统
========================================
请输入学生姓名：小明
请输入语文成绩：85
请输入数学成绩：92
请输入英语成绩：78

========================================
学生姓名：小明
语文成绩：85.0
数学成绩：92.0
英语成绩：78.0
总分：255.0
平均分：85.00
========================================
✅ 所有科目都及格了！
👍 良好！继续保持！

学习建议：

========================================
感谢使用学生成绩管理系统！
========================================
```

# 总结

{% note warning no-icon %}

## 知识点回顾

1. **比较运算符**：`==` `!=` `>` `<` `>=` `<=`
2. **if 单分支**：满足条件才执行
3. **if-else 双分支**：满足条件执行一种，不满足执行另一种
4. **if-elif-else 多分支**：多种情况，按顺序判断
5. **逻辑运算符**：`and`（与）、`or`（或）、`not`（非）
6. **嵌套判断**：判断里面套判断

{% endnote %}

{% note warning no-icon %}

## 重要提醒

1. ⚠️ if、elif、else 后面要加**冒号**
2. ⚠️ 代码块必须**缩进**（4个空格或1个Tab）
3. ⚠️ **=** 是赋值，<b>==</b> 是比较
4. ⚠️ 条件判断要**从严格到宽松**排列
5. ⚠️ 注意逻辑运算符的优先级：not > and > or

{% endnote %}

{% note info no-icon %}

## 学习建议

1. 多练习，自己动手写代码
2. 尝试修改示例代码，观察运行结果
3. 画流程图帮助理解判断逻辑
4. 遇到复杂问题，先分解成小问题
5. 学会调试代码，找出错误原因

{% endnote %}

# Q&A

{% note warning no-icon %}

**Q1：为什么我的代码总是提示缩进错误？**

{% endnote %}

{% note info no-icon %}

**A：** Python 对缩进要求很严格，要注意：
- 使用 4 个空格或 1 个 Tab（不要混用）
- if 语句下的代码块必须缩进
- 同一层级的代码缩进要一致
- 建议在编辑器中开启"显示空格"功能

{% endnote %}

{% note warning no-icon %}

**Q2：什么时候用 if-elif，什么时候用多个 if？**

{% endnote %}

{% note info no-icon %}

**A：**
- 使用 **if-elif**：多个条件是**互斥**的（只会执行一个分支）
- 使用**多个 if**：多个条件是**独立**的（可能执行多个分支）

例如：
```python
# 互斥条件，用 if-elif
if score >= 90:
    print("优秀")
elif score >= 60:
    print("及格")

# 独立条件，用多个 if
if chinese < 60:
    print("语文不及格")
if math < 60:
    print("数学不及格")
```

{% endnote %}

{% note warning no-icon %}

**Q3：and 和 or 可以一起使用吗？**

{% endnote %}

{% note info no-icon %}

**A：** 可以！但要注意优先级，and 优先级高于 or。建议使用括号明确优先级：

```python
# 不清晰
if a > 0 and b > 0 or c > 0:
    print("...")

# 清晰（推荐）
if (a > 0 and b > 0) or c > 0:
    print("...")
```

{% endnote %}

{% note warning no-icon %}

**Q4：如何判断一个数是否在某个范围内？**

{% endnote %}

{% note info no-icon %}

**A：** Python 支持链式比较，非常方便：

```python
# Python 特有的写法（推荐）
if 0 <= score <= 100:
    print("分数有效")

# 传统写法
if score >= 0 and score <= 100:
    print("分数有效")
```

{% endnote %}

{% note warning no-icon %}

**Q5：为什么我的判断总是执行 else 分支？**

{% endnote %}

{% note info no-icon %}

**A：** 检查以下几点：
- 是否使用了 **==**（比较）而不是 **=**（赋值）
- 变量的类型是否正确（比如用字符串和数字比较）
- 条件表达式是否写对了

{% endnote %}

{% note warning no-icon %}

**Q6：可以省略 else 吗？**

{% endnote %}

{% note info no-icon %}

**A：** 完全可以！如果不需要处理"不满足条件"的情况，就可以省略 else。

```python
# 没有 else 也是合法的
if age >= 18:
    print("成年人")
# 如果不满足条件，什么都不做
```

{% endnote %}

---

{% note warning no-icon %}

🎉 恭喜你完成了 Python 判断结构的学习！

判断结构是编程的基础，掌握好判断结构，你的程序就能像人一样"思考"了！

接下来可以学习**循环结构**，让程序能够重复执行任务。

**记住**：编程能力是练出来的，多写代码，多思考，你一定能成为编程高手！💪

{% endnote %}

