---
title: Python 循环结构 - 让程序高效重复工作
date: 2025-04-15 10:30:00
tags:
  - Python 基础语法
categories:
  - Python
cover: https://bu.dusays.com/2025/11/03/69084bd62c60e.png
---

# 前言

{% note warning no-icon %}

本文将带你学习 Python 中的**循环结构**，让你的程序能够**自动执行重复任务**，告别手动重复劳动！

{% endnote %}

{% note warning no-icon %}

在阅读过程中有任何问题都可以发布到评论区，有价值的问题将会放到文章末尾Q&A之中！

{% endnote %}

{% note success no-icon %}

**本文导航：**
- 🔄 循环结构基础：什么是循环
- 🎯 while循环：条件循环
- 🌟 for循环：计数循环  
- 📦 range()函数：生成数字序列
- 🎮 循环控制：break、continue、else
- 🔗 嵌套循环：循环中的循环
- 💡 实战练习：三个难度等级
- ⚠️ 常见错误：6大易错点
- 🚀 编程技巧：代码优化建议

{% endnote %}

# 循环结构基础

## 什么是循环结构

{% note info no-icon %}

**循环结构**是编程中非常重要的控制结构，它可以让程序**重复执行某段代码**，大大提高编程效率。

想象一下这些场景：
- 打印 1 到 100 的所有数字 🔢
- 让用户重复输入密码直到正确 🔐
- 计算 1+2+3+...+100 的和 ➕
- 打印 99 乘法表 📊

如果没有循环，我们就要写成百上千行重复的代码！有了循环，几行代码就能搞定。

{% endnote %}

{% note info no-icon %}

在 Python 中，主要有两种循环结构：
- **while 循环**：在条件为真时重复执行（条件循环）
- **for 循环**：重复执行指定次数（计数循环）

{% endnote %}

## 为什么需要循环

{% note info no-icon %}

**没有循环时：** 打印 1 到 5

```python
print(1)
print(2)
print(3)
print(4)
print(5)
```

如果要打印 1 到 100，就要写 100 行代码！😱

**有了循环后：** 打印 1 到 5

```python
i = 1
while i <= 5:
    print(i)
    i += 1
```

打印 1 到 100？只需要改一个数字！✨

{% endnote %}

# while 循环

## while 循环基础

{% note info no-icon %}

**while 循环**会在条件为 True 时持续执行代码块，直到条件变为 False。

**基本语法：**
```python
while 条件:
    循环体代码
```

只要条件为 True，循环体就会一直执行！

{% endnote %}

{% note warning no-icon %}

**重要提醒：**
- while 后面要加**冒号 :**
- 循环体代码必须**缩进**（4个空格或1个Tab）
- 要确保循环条件最终会变成 False，否则会**死循环**！

{% endnote %}

### 示例1：打印数字 1-5

```python
# 使用 while 循环打印 1 到 5
count = 1  # 初始化计数器

while count <= 5:  # 当 count 小于等于 5 时继续循环
    print(count)
    count += 1  # 每次循环后 count 加 1

print("循环结束！")
```

**运行结果：**
```
1
2
3
4
5
循环结束！
```

{% note info no-icon %}

**代码执行流程：**
1. count = 1，条件 `count <= 5` 为 True，打印 1，count 变成 2
2. count = 2，条件 `count <= 5` 为 True，打印 2，count 变成 3
3. count = 3，条件 `count <= 5` 为 True，打印 3，count 变成 4
4. count = 4，条件 `count <= 5` 为 True，打印 4，count 变成 5
5. count = 5，条件 `count <= 5` 为 True，打印 5，count 变成 6
6. count = 6，条件 `count <= 5` 为 False，退出循环

{% endnote %}

### 示例2：计算1到100的和

```python
# 计算 1 + 2 + 3 + ... + 100
num = 1
total = 0

while num <= 100:
    total += num  # 累加到 total
    num += 1

print(f"1到100的和是：{total}")
```

**运行结果：**
```
1到100的和是：5050
```

{% note info no-icon %}

**逐步分析：**
- 第1次循环：total = 0 + 1 = 1，num = 2
- 第2次循环：total = 1 + 2 = 3，num = 3
- 第3次循环：total = 3 + 3 = 6，num = 4
- ...
- 第100次循环：total = 4950 + 100 = 5050，num = 101
- num = 101 > 100，退出循环

{% endnote %}

### 示例3：用户登录验证

```python
# 密码验证，最多尝试3次
password = "python123"
attempts = 0
max_attempts = 3

while attempts < max_attempts:
    user_input = input("请输入密码：")
    
    if user_input == password:
        print("✅ 密码正确！登录成功！")
        break  # 密码正确，跳出循环
    else:
        attempts += 1
        remaining = max_attempts - attempts
        if remaining > 0:
            print(f"❌ 密码错误！还有 {remaining} 次机会")
        else:
            print("❌ 密码错误次数过多，账号已锁定！")
```

**运行示例：**
```
请输入密码：123456
❌ 密码错误！还有 2 次机会
请输入密码：python
❌ 密码错误！还有 1 次机会
请输入密码：python123
✅ 密码正确！登录成功！
```

### 示例4：倒计时程序

```python
# 倒计时
print("新年倒计时开始！")
countdown = 10

while countdown > 0:
    print(countdown)
    countdown -= 1

print("🎉 新年快乐！")
```

**运行结果：**
```
新年倒计时开始！
10
9
8
7
6
5
4
3
2
1
🎉 新年快乐！
```

## 死循环

{% note danger no-icon %}

**死循环**是指循环条件永远为 True，导致程序无法停止！

**❌ 死循环示例：**
```python
count = 1
while count <= 5:
    print(count)
    # 忘记更新 count，count 永远是 1！
```

这个循环会一直打印 1，永远不会停止！😱

**如何避免死循环：**
1. 确保循环条件会在某个时刻变成 False
2. 在循环体内正确更新控制变量
3. 可以使用 break 语句在必要时跳出循环
4. 如果程序卡住了，按 **Ctrl + C** 强制停止

{% endnote %}

## while True 无限循环

{% note info no-icon %}

有时候我们确实需要**无限循环**，这时可以使用 `while True`，但要配合 `break` 使用：

```python
# 计算器程序（输入0退出）
print("简易计算器（输入0退出）")

while True:
    num = int(input("请输入一个数字："))
    
    if num == 0:
        print("程序退出，再见！")
        break  # 跳出无限循环
    
    square = num * num
    print(f"{num} 的平方是 {square}")
```

**运行示例：**
```
简易计算器（输入0退出）
请输入一个数字：5
5 的平方是 25
请输入一个数字：8
8 的平方是 64
请输入一个数字：0
程序退出，再见！
```

这种模式常用于**菜单系统**、**游戏主循环**等场景。

{% endnote %}

# for 循环与 range()

## range() 函数基础

{% note info no-icon %}

**range()** 函数用于生成一个数字序列，经常与 for 循环配合使用。

**三种常用格式：**
1. `range(n)`：生成 0 到 n-1 的整数
2. `range(start, stop)`：生成 start 到 stop-1 的整数
3. `range(start, stop, step)`：生成从 start 到 stop-1，步长为 step 的数字

{% endnote %}

{% note warning no-icon %}

**重要特点：**
- range() 生成的序列**不包含结束值**（左闭右开区间）
- range(5) 生成的是 0, 1, 2, 3, 4，不包含 5
- step 可以是负数，表示倒序

{% endnote %}

### 格式1：range(n)

```python
# 演示 range(5)
print("range(5) 生成的数字：")
print(0)
print(1)
print(2)
print(3)
print(4)
# 不包含 5！
```

## for 循环基础

{% note info no-icon %}

**for 循环**用于重复执行代码指定的次数，配合 range() 函数使用。

**基本语法：**
```python
for 变量 in range(次数):
    循环体代码
```

for 循环会自动让变量从 0 开始递增，每次执行一遍循环体。

{% endnote %}

### 示例1：打印 0 到 4

```python
# 使用 for 循环打印 0 到 4
for i in range(5):
    print(i)
```

**运行结果：**
```
0
1
2
3
4
```

### 示例2：打印 1 到 5

```python
# 打印 1 到 5
for i in range(1, 6):  # 从 1 开始，到 6-1=5 结束
    print(i)
```

**运行结果：**
```
1
2
3
4
5
```

### 示例3：打印 1 到 10 的奇数

```python
# 打印奇数：1, 3, 5, 7, 9
for i in range(1, 11, 2):  # 从1开始，步长为2
    print(i)
```

**运行结果：**
```
1
3
5
7
9
```

### 示例4：倒序打印 10 到 1

```python
# 倒序打印
for i in range(10, 0, -1):  # 从10到1，步长为-1
    print(i)

print("发射！🚀")
```

**运行结果：**
```
10
9
8
7
6
5
4
3
2
1
发射！🚀
```

## for 循环实战应用

### 示例1：计算 1 到 100 的和

```python
# 使用 for 循环计算 1 到 100 的和
total = 0

for i in range(1, 101):
    total += i

print(f"1到100的和是：{total}")
```

**运行结果：**
```
1到100的和是：5050
```

### 示例2：计算阶乘

```python
# 计算 5 的阶乘（5! = 5×4×3×2×1）
n = 5
factorial = 1

for i in range(1, n + 1):
    factorial *= i

print(f"{n}的阶乘是：{factorial}")
```

**运行结果：**
```
5的阶乘是：120
```

### 示例3：打印平方表

```python
# 打印 1 到 10 的平方
print("数字\t平方")
print("=" * 20)

for i in range(1, 11):
    square = i * i
    print(f"{i}\t{square}")
```

**运行结果：**
```
数字  平方
====================
1   1
2   4
3   9
4   16
5   25
6   36
7   49
8   64
9   81
10  100
```

### 示例4：统计偶数个数

```python
# 统计 1 到 50 中有多少个偶数
count = 0

for i in range(1, 51):
    if i % 2 == 0:
        count += 1

print(f"1到50中有 {count} 个偶数")
```

**运行结果：**
```
1到50中有 25 个偶数
```

## while 循环 vs for 循环

{% note warning no-icon %}

**如何选择使用 while 还是 for？**

| 场景 | 推荐使用 | 原因 |
| :---: | :---: | :---: |
| 已知循环次数 | for 循环 | 代码简洁，不易出错 |
| 循环次数不确定 | while 循环 | 根据条件灵活控制 |
| 用户输入验证 | while 循环 | 不知道用户何时输入正确 |
| 重复固定次数 | for 循环 | 使用 range() 很方便 |

{% endnote %}

```python
# 同样的功能，两种写法对比

# 方式1：while 循环
print("=== while 循环 ===")
i = 1
while i <= 5:
    print(i)
    i += 1

# 方式2：for 循环（推荐）
print("\n=== for 循环 ===")
for i in range(1, 6):
    print(i)
```

# 循环控制语句

## break 语句

{% note info no-icon %}

**break** 用于**立即终止循环**，跳出整个循环体，不再执行后续的循环。

{% endnote %}

### 示例1：找到第一个能被7整除的数

```python
# 从 1 开始找第一个能被 7 整除的数
for i in range(1, 100):
    if i % 7 == 0:
        print(f"找到第一个能被7整除的数：{i}")
        break  # 找到后立即退出循环

print("循环结束")
```

**运行结果：**
```
找到第一个能被7整除的数：7
循环结束
```

### 示例2：猜数字游戏

```python
# 猜数字游戏（简化版）
secret_number = 42
max_attempts = 5

print(f"猜数字游戏！你有{max_attempts}次机会")

for attempt in range(1, max_attempts + 1):
    guess = int(input(f"第{attempt}次猜测，请输入："))
    
    if guess == secret_number:
        print(f"🎉 恭喜你，猜对了！答案就是 {secret_number}")
        print(f"你用了 {attempt} 次就猜中了！")
        break  # 猜对了，退出循环
    elif guess > secret_number:
        print("太大了！")
    else:
        print("太小了！")
else:
    # 如果循环正常结束（没有被break），执行这里
    print(f"😢 很遗憾，{max_attempts}次机会用完了！答案是 {secret_number}")
```

### 示例3：找质数

```python
# 判断一个数是否是质数
num = int(input("请输入一个大于1的整数："))

if num < 2:
    print(f"{num} 不是质数")
else:
    is_prime = True  # 假设是质数
    
    for i in range(2, num):
        if num % i == 0:
            print(f"{num} 不是质数，因为它能被 {i} 整除")
            is_prime = False
            break  # 找到因数就退出
    
    if is_prime:
        print(f"{num} 是质数！")
```

**运行示例1：**
```
请输入一个大于1的整数：17
17 是质数！
```

**运行示例2：**
```
请输入一个大于1的整数：15
15 不是质数，因为它能被 3 整除
```

## continue 语句

{% note info no-icon %}

**continue** 用于**跳过本次循环**的剩余代码，直接进入下一次循环。

{% endnote %}

### 示例1：只打印奇数

```python
# 打印 1 到 10 的奇数
print("1到10的奇数：")

for i in range(1, 11):
    if i % 2 == 0:  # 如果是偶数
        continue  # 跳过这次循环，不执行下面的 print
    print(i)
```

**运行结果：**
```
1到10的奇数：
1
3
5
7
9
```

### 示例2：跳过特定数字

```python
# 打印 1 到 10，但跳过 5 和 7
for i in range(1, 11):
    if i == 5 or i == 7:
        continue  # 跳过 5 和 7
    print(i, end=" ")

print()  # 换行
```

**运行结果：**
```
1 2 3 4 6 8 9 10
```

### 示例3：只统计正数的和

```python
# 计算正数的和（跳过负数和零）
total = 0

print("请输入5个数字：")
for i in range(5):
    num = int(input(f"第{i+1}个数："))
    
    if num <= 0:
        print("  跳过非正数")
        continue  # 跳过非正数
    
    total += num

print(f"所有正数的和：{total}")
```

**运行示例：**
```
请输入5个数字：
第1个数：10
第2个数：-5
  跳过非正数
第3个数：20
第4个数：0
  跳过非正数
第5个数：15
所有正数的和：45
```

## break vs continue 对比

{% note warning no-icon %}

**break 和 continue 的区别：**

| 语句 | 作用 | 效果 |
| :---: | :---: | :---: |
| break | 终止整个循环 | 跳出循环，不再执行任何循环 |
| continue | 跳过本次循环 | 跳过剩余代码，进入下一次循环 |

**记忆口诀：**
- break：打破循环，彻底退出 💔
- continue：继续循环，跳过当前 ⏭️

{% endnote %}

```python
# 对比示例
print("=== break 示例 ===")
for i in range(1, 6):
    if i == 3:
        break  # 遇到3就退出整个循环
    print(i)

print("\n=== continue 示例 ===")
for i in range(1, 6):
    if i == 3:
        continue  # 遇到3就跳过这次，继续下次循环
    print(i)
```

**运行结果：**
```
=== break 示例 ===
1
2

=== continue 示例 ===
1
2
4
5
```

## 循环的 else 子句

{% note info no-icon %}

Python 的循环有一个特殊语法：**else 子句**。

- 如果循环**正常结束**（没有被 break 打断），就会执行 else 代码块
- 如果循环**被 break 打断**，else 代码块**不会执行**

**for 循环和 while 循环都可以使用 else 子句！**

{% endnote %}

### 示例1：for...else 判断质数

```python
# 使用 for...else 判断质数
num = int(input("请输入一个大于1的整数："))

for i in range(2, num):
    if num % i == 0:
        print(f"{num} 不是质数，因为它能被 {i} 整除")
        break  # 找到因数，跳出循环
else:
    # 循环正常结束（没有被 break），说明没找到因数
    print(f"{num} 是质数！")
```

**运行示例1（质数）：**
```
请输入一个大于1的整数：17
17 是质数！
```

**运行示例2（非质数）：**
```
请输入一个大于1的整数：15
15 不是质数，因为它能被 3 整除
```

{% note info no-icon %}

**代码解析：**
- 如果找到因数，执行 break，跳出循环，**不执行 else**
- 如果循环结束都没找到因数，**执行 else**，说明是质数

{% endnote %}

### 示例2：while...else 密码验证

```python
# 使用 while...else 进行密码验证
password = "python123"
attempts = 3

while attempts > 0:
    user_input = input("请输入密码：")
    
    if user_input == password:
        print("✅ 密码正确！登录成功！")
        break  # 密码正确，跳出循环
    else:
        attempts -= 1
        if attempts > 0:
            print(f"❌ 密码错误！还有 {attempts} 次机会")
        else:
            print("❌ 密码错误！")
else:
    # 循环正常结束（用完所有机会），执行这里
    print("🔒 账号已锁定！")
```

**运行示例1（密码正确）：**
```
请输入密码：abc
❌ 密码错误！还有 2 次机会
请输入密码：python123
✅ 密码正确！登录成功！
```

**运行示例2（用完机会）：**
```
请输入密码：abc
❌ 密码错误！还有 2 次机会
请输入密码：123
❌ 密码错误！还有 1 次机会
请输入密码：456
❌ 密码错误！
🔒 账号已锁定！
```

{% note info no-icon %}

**代码解析：**
- 如果密码正确，执行 break，**不执行 else**
- 如果用完所有机会，循环正常结束，**执行 else**

{% endnote %}

### 示例3：对比有无 break 的情况

```python
# 演示 else 子句的执行条件
print("=== 情况1：有 break ===")
for i in range(5):
    if i == 3:
        print(f"找到了 {i}，退出循环")
        break
else:
    print("循环正常结束，执行 else")

print("\n=== 情况2：无 break ===")
for i in range(5):
    print(i)
else:
    print("循环正常结束，执行 else")
```

**运行结果：**
```
=== 情况1：有 break ===
找到了 3，退出循环

=== 情况2：无 break ===
0
1
2
3
4
循环正常结束，执行 else
```

{% note warning no-icon %}

**总结：**
- break 跳出循环 → **不执行** else
- 循环正常结束 → **执行** else

**应用场景：**
- 查找：找到了就 break，没找到就执行 else 提示
- 验证：成功就 break，失败就执行 else 处理

{% endnote %}

# 嵌套循环

## 嵌套循环基础

{% note info no-icon %}

**嵌套循环**就是在一个循环里面再包含另一个循环，外层循环每执行一次，内层循环要完整执行一遍。

{% endnote %}

{% note warning no-icon %}

**执行规律：**
- 外层循环执行 m 次
- 内层循环执行 n 次
- 循环体总共执行 **m × n** 次

{% endnote %}

### 示例1：打印矩形

```python
# 打印 3 行 5 列的星号矩形
for i in range(3):  # 外层循环控制行数
    for j in range(5):  # 内层循环控制列数
        print("*", end=" ")
    print()  # 每行结束后换行
```

**运行结果：**
```
* * * * * 
* * * * * 
* * * * * 
```

{% note info no-icon %}

**执行过程分析：**
- 外层 i=0：内层执行 j=0,1,2,3,4，打印 5 个星号，然后换行
- 外层 i=1：内层执行 j=0,1,2,3,4，打印 5 个星号，然后换行
- 外层 i=2：内层执行 j=0,1,2,3,4，打印 5 个星号，然后换行

{% endnote %}

### 示例2：打印直角三角形

```python
# 打印直角三角形
rows = 5

for i in range(1, rows + 1):
    for j in range(i):
        print("*", end=" ")
    print()
```

**运行结果：**
```
* 
* * 
* * * 
* * * * 
* * * * * 
```

{% note info no-icon %}

**执行过程分析：**
- i=1 时：j 循环 1 次（0），打印 1 个星号
- i=2 时：j 循环 2 次（0,1），打印 2 个星号
- i=3 时：j 循环 3 次（0,1,2），打印 3 个星号
- i=4 时：j 循环 4 次（0,1,2,3），打印 4 个星号
- i=5 时：j 循环 5 次（0,1,2,3,4），打印 5 个星号

{% endnote %}

### 示例3：打印倒三角形

```python
# 打印倒三角形
rows = 5

for i in range(rows, 0, -1):
    for j in range(i):
        print("*", end=" ")
    print()
```

**运行结果：**
```
* * * * * 
* * * * 
* * * 
* * 
* 
```

### 示例4：九九乘法表

```python
# 完整的九九乘法表
print("===== 九九乘法表 =====")

for i in range(1, 10):
    for j in range(1, i + 1):
        product = j * i
        print(f"{j}×{i}={product:2d}", end="  ")
    print()
```

**运行结果：**
```
===== 九九乘法表 =====
1×1= 1  
1×2= 2  2×2= 4  
1×3= 3  2×3= 6  3×3= 9  
1×4= 4  2×4= 8  3×4=12  4×4=16  
1×5= 5  2×5=10  3×5=15  4×5=20  5×5=25  
1×6= 6  2×6=12  3×6=18  4×6=24  5×6=30  6×6=36  
1×7= 7  2×7=14  3×7=21  4×7=28  5×7=35  6×7=42  7×7=49  
1×8= 8  2×8=16  3×8=24  4×8=32  5×8=40  6×8=48  7×8=56  8×8=64  
1×9= 9  2×9=18  3×9=27  4×9=36  5×9=45  6×9=54  7×9=63  8×9=72  9×9=81  
```

### 示例5：打印数字金字塔

```python
# 打印数字金字塔
rows = 5

for i in range(1, rows + 1):
    # 打印空格
    for j in range(rows - i):
        print(" ", end=" ")
    
    # 打印数字
    for k in range(1, i + 1):
        print(k, end=" ")
    
    print()  # 换行
```

**运行结果：**
```
       1 
     1 2 
   1 2 3 
 1 2 3 4 
1 2 3 4 5 
```

### 示例6：找出所有两位数中能被3整除的数

```python
# 找出所有两位数中能被3整除的数
count = 0

for tens in range(1, 10):  # 十位数：1-9
    for ones in range(0, 10):  # 个位数：0-9
        number = tens * 10 + ones  # 组成两位数
        
        if number % 3 == 0:
            print(number, end=" ")
            count += 1
            
            if count % 10 == 0:  # 每10个数换行
                print()

print(f"\n\n共有 {count} 个两位数能被3整除")
```

**运行结果：**
```
12 15 18 21 24 27 30 33 36 39 
42 45 48 51 54 57 60 63 66 69 
72 75 78 81 84 87 90 93 96 99 

共有 30 个两位数能被3整除
```

# 常见错误与最佳实践

## 常见错误

### 错误1：死循环

{% note danger no-icon %}

**❌ 错误代码：**
```python
i = 1
while i <= 10:
    print(i)
    # 忘记更新 i，导致死循环！
```

**✅ 正确代码：**
```python
i = 1
while i <= 10:
    print(i)
    i += 1  # 别忘了更新循环变量！
```

**提示**：如果程序卡住不动，按 **Ctrl + C** 强制停止

{% endnote %}

### 错误2：缩进错误

{% note danger no-icon %}

**❌ 错误代码：**
```python
for i in range(5):
print(i)  # 缺少缩进
```

**✅ 正确代码：**
```python
for i in range(5):
    print(i)  # 必须缩进
```

**建议**：使用 **4个空格** 或 **1个Tab** 进行缩进，不要混用！

{% endnote %}

### 错误3：range() 范围理解错误

{% note danger no-icon %}

**❌ 常见误解：**
```python
# 想打印 1 到 10
for i in range(1, 10):  # 这只会打印到 9！
    print(i)
```

**✅ 正确写法：**
```python
# 打印 1 到 10
for i in range(1, 11):  # 结束值要比目标多 1
    print(i)
```

**记住**：range() 是**左闭右开**区间！

| 写法 | 生成的数字 | 说明 |
| :---: | :---: | :---: |
| range(5) | 0, 1, 2, 3, 4 | 不包含5 |
| range(1, 5) | 1, 2, 3, 4 | 不包含5 |
| range(1, 6) | 1, 2, 3, 4, 5 | 想要5就写6 |

{% endnote %}

### 错误4：循环变量命名冲突

{% note danger no-icon %}

**❌ 错误代码：**
```python
for i in range(3):
    for i in range(2):  # 内外层用了同一个变量名！
        print(i)
```

**✅ 正确代码：**
```python
for i in range(3):
    for j in range(2):  # 使用不同的变量名
        print(i, j)
```

**建议**：外层用 i，内层用 j，再内层用 k

{% endnote %}

### 错误5：忘记冒号

{% note danger no-icon %}

**❌ 错误代码：**
```python
for i in range(5)  # 缺少冒号
    print(i)
```

**✅ 正确代码：**
```python
for i in range(5):  # for 和 while 后面都要加冒号
    print(i)
```

{% endnote %}

### 错误6：循环条件写错

{% note danger no-icon %}

**❌ 错误代码：**
```python
i = 1
while i < 10:  # 想循环10次，但只循环了9次
    print(i)
    i += 1
```

**✅ 正确代码：**
```python
i = 1
while i <= 10:  # 使用 <= 才能循环10次
    print(i)
    i += 1
```

{% endnote %}

## 编程技巧

### 技巧1：优先使用 for 循环

{% note info no-icon %}

如果知道循环次数，优先使用 for 循环：

**普通写法（while）：**
```python
i = 1
while i <= 10:
    print(i)
    i += 1
```

**优雅写法（for）：**
```python
for i in range(1, 11):
    print(i)
```

for 循环更简洁，不容易忘记更新循环变量！

{% endnote %}

### 技巧2：使用 break 避免不必要的循环

{% note info no-icon %}

找到结果后立即退出，不要浪费资源：

```python
# 查找第一个能被17整除的数
for i in range(1, 1000):
    if i % 17 == 0:
        print(f"找到了：{i}")
        break  # 找到后立即退出，不继续循环
```

{% endnote %}

### 技巧3：合理使用 continue 简化代码

{% note info no-icon %}

**普通写法：**
```python
for i in range(1, 11):
    if i % 2 != 0:  # 如果是奇数才打印
        print(i)
```

**使用 continue：**
```python
for i in range(1, 11):
    if i % 2 == 0:  # 如果是偶数就跳过
        continue
    print(i)
```

两种写法效果一样，选择更符合思维逻辑的即可。

{% endnote %}

### 技巧4：使用有意义的变量名

{% note info no-icon %}

**不好的命名：**
```python
for x in range(5):
    y = int(input())
    z += y
```

**好的命名：**
```python
for student_num in range(5):
    score = int(input(f"请输入第{student_num+1}个学生的成绩："))
    total_score += score
```

好的变量名让代码更易读！

{% endnote %}

### 技巧5：添加适当的输出提示

{% note info no-icon %}

**不友好的代码：**
```python
for i in range(3):
    x = int(input())
```

**友好的代码：**
```python
print("请输入3个数字：")
for i in range(3):
    num = int(input(f"第{i+1}个数："))
```

给用户清晰的提示，提升程序体验！

{% endnote %}

# 综合案例：成绩管理系统

```python
# 简易成绩管理系统
print("=" * 50)
print("         成绩管理系统")
print("=" * 50)

# 输入学生人数
student_count = int(input("\n请输入学生人数："))

# 初始化统计变量
total_score = 0        # 总分
max_score = 0          # 最高分
min_score = 100        # 最低分
excellent_count = 0    # 优秀人数（>=90）
pass_count = 0         # 及格人数（>=60）
fail_count = 0         # 不及格人数（<60）

print(f"\n请输入{student_count}个学生的成绩：")

# 录入成绩并统计
for i in range(1, student_count + 1):
    # 输入验证
    while True:
        score = float(input(f"第{i}个学生的成绩（0-100）："))
        if 0 <= score <= 100:
            break
        else:
            print("⚠️ 分数必须在0-100之间，请重新输入！")
    
    # 累加总分
    total_score += score
    
    # 更新最高分和最低分
    if score > max_score:
        max_score = score
    if score < min_score:
        min_score = score
    
    # 统计各分数段人数
    if score >= 90:
        excellent_count += 1
        print("  ⭐ 优秀！")
    elif score >= 60:
        pass_count += 1
        print("  ✅ 及格")
    else:
        fail_count += 1
        print("  ❌ 不及格")

# 计算平均分
average_score = total_score / student_count

# 输出统计结果
print("\n" + "=" * 50)
print("         统计结果")
print("=" * 50)

print(f"\n总人数：{student_count}人")
print(f"平均分：{average_score:.2f}分")
print(f"最高分：{max_score:.1f}分")
print(f"最低分：{min_score:.1f}分")

print("\n分数段统计：")
print(f"优秀（90-100）：{excellent_count}人（{excellent_count/student_count*100:.1f}%）")
print(f"及格（60-89）：{pass_count}人（{pass_count/student_count*100:.1f}%）")
print(f"不及格（0-59）：{fail_count}人（{fail_count/student_count*100:.1f}%）")

# 总体评价
print("\n总体评价：")
if average_score >= 85:
    print("🌟 班级整体成绩优秀！")
elif average_score >= 70:
    print("👍 班级整体成绩良好！")
elif average_score >= 60:
    print("✊ 班级整体成绩及格，还需努力！")
else:
    print("📚 班级整体成绩需要提高，加油！")

# 及格率
pass_rate = (excellent_count + pass_count) / student_count * 100
print(f"\n及格率：{pass_rate:.1f}%")

if pass_rate >= 90:
    print("✅ 及格率优秀！")
elif pass_rate >= 70:
    print("👍 及格率良好！")
else:
    print("⚠️ 及格率偏低，需要加强！")

print("\n" + "=" * 50)
print("感谢使用成绩管理系统！")
print("=" * 50)
```

**运行示例：**
```
==================================================
         成绩管理系统
==================================================

请输入学生人数：5

请输入5个学生的成绩：
第1个学生的成绩（0-100）：85
  ✅ 及格
第2个学生的成绩（0-100）：92
  ⭐ 优秀！
第3个学生的成绩（0-100）：78
  ✅ 及格
第4个学生的成绩（0-100）：95
  ⭐ 优秀！
第5个学生的成绩（0-100）：88
  ✅ 及格

==================================================
         统计结果
==================================================

总人数：5人
平均分：87.60分
最高分：95.0分
最低分：78.0分

分数段统计：
优秀（90-100）：2人（40.0%）
及格（60-89）：3人（60.0%）
不及格（0-59）：0人（0.0%）

总体评价：
🌟 班级整体成绩优秀！

及格率：100.0%
✅ 及格率优秀！

==================================================
感谢使用成绩管理系统！
==================================================
```

# 总结

{% note warning no-icon %}

## 知识点回顾

1. **while 循环**：条件为真时重复执行
   - 语法：`while 条件: 循环体`
   - 注意避免死循环，确保循环变量会更新
   
2. **for 循环**：重复执行指定次数
   - 语法：`for 变量 in range(次数): 循环体`
   - 更简洁，不容易出错
   
3. **range() 函数**：生成数字序列
   - `range(n)`：0 到 n-1
   - `range(start, stop)`：start 到 stop-1（左闭右开）
   - `range(start, stop, step)`：带步长，可倒序
   
4. **循环控制**：
   - `break`：立即终止循环
   - `continue`：跳过本次循环，进入下一次
   - `else`：循环正常结束时执行
   
5. **嵌套循环**：循环里面套循环
   - 外层循环每执行一次，内层完整执行一遍
   - 总执行次数 = 外层次数 × 内层次数

{% endnote %}

{% note warning no-icon %}

## 重要提醒

1. ⚠️ while 循环要确保条件会变成 False，避免**死循环**
2. ⚠️ 循环体代码必须**缩进**（4个空格或1个Tab）
3. ⚠️ for 和 while 后面要加**冒号**
4. ⚠️ range() 是**左闭右开**区间，不包含结束值
5. ⚠️ break 和 continue 只对**最近的一层**循环有效
6. ⚠️ 嵌套循环的变量名不要冲突（外层i，内层j）

{% endnote %}

{% note info no-icon %}

## 学习建议

1. **多写多练**：循环是需要大量练习才能掌握的
2. **画流程图**：复杂的循环可以先画流程图理清思路
3. **调试技巧**：在循环中添加 print 语句观察变量变化
4. **从简单到复杂**：先掌握单层循环，再学嵌套循环
5. **理解执行次数**：搞清楚循环会执行多少次
6. **实战应用**：尝试用循环解决实际问题

{% endnote %}

{% note success no-icon %}

## 循环的应用场景

- 📊 **统计计算**：求和、求平均值、计数
- 🔢 **数学运算**：阶乘、数列、质数判断
- 🎨 **图案打印**：三角形、菱形、九九表
- 💬 **用户交互**：重复输入直到正确
- 🎮 **游戏开发**：游戏主循环、倒计时
- 🔍 **查找搜索**：在范围内查找符合条件的数

{% endnote %}

# Q&A

{% note warning no-icon %}

**Q1：for 循环和 while 循环有什么区别？应该用哪个？**

{% endnote %}

{% note info no-icon %}

**A：**
- **for 循环**：知道循环次数时使用
  - 例如：重复10次、打印1到100
  - 代码简洁，不容易出错
  
- **while 循环**：循环次数不确定，根据条件循环时使用
  - 例如：用户输入验证、找到某个值就停止

**简单判断标准：**
- 能用 for 就用 for（更推荐）
- 需要复杂条件控制时用 while

{% endnote %}

{% note warning no-icon %}

**Q2：range(5) 为什么不包括 5？**

{% endnote %}

{% note info no-icon %}

**A：** Python 的 range() 采用"左闭右开"区间，这样设计的好处：
- `range(5)` 生成 5 个数（0,1,2,3,4），**长度刚好是 5**
- `range(0, 10)` 和 `range(10, 20)` 可以无缝衔接
- 符合大多数编程语言的索引习惯（从 0 开始）

**记忆方法**：想要包括某个数，结束值就要 +1
- 想要 1 到 10：写 `range(1, 11)`
- 想要 0 到 4：写 `range(5)`

{% endnote %}

{% note warning no-icon %}

**Q3：什么时候用 break，什么时候用 continue？**

{% endnote %}

{% note info no-icon %}

**A：**
- **使用 break**：找到了想要的结果，不需要继续循环
  - 例如：查找到第一个符合条件的数
  - 例如：密码验证成功
  - 例如：找到质数的因数
  
- **使用 continue**：跳过某些不需要处理的情况
  - 例如：只处理奇数，偶数跳过
  - 例如：跳过无效输入
  - 例如：跳过特定数字

**记忆**：break = 彻底结束，continue = 跳过当前继续

{% endnote %}

{% note warning no-icon %}

**Q4：嵌套循环太复杂，有什么理解技巧吗？**

{% endnote %}

{% note info no-icon %}

**A：** 理解嵌套循环的几个技巧：

1. **一层一层分析**：先看外层循环，再看内层循环

2. **举具体例子**：
   ```python
   for i in range(1, 4):      # i = 1, 2, 3
       for j in range(1, 3):  # j = 1, 2
           print(i, j)
   ```
   - 外层 i=1 时，内层完整执行 j=1,2 → 输出 (1,1) (1,2)
   - 外层 i=2 时，内层完整执行 j=1,2 → 输出 (2,1) (2,2)
   - 外层 i=3 时，内层完整执行 j=1,2 → 输出 (3,1) (3,2)

3. **画表格**：用表格记录每次循环的变量值

4. **单步执行**：在心里或纸上一步步模拟执行过程

{% endnote %}

{% note warning no-icon %}

**Q5：死循环了怎么办？**

{% endnote %}

{% note info no-icon %}

**A：**
- **立即停止**：按 `Ctrl + C` 强制终止程序
- **检查原因**：
  - 循环变量有没有更新？
  - 循环条件会不会变成 False？
  

**预防死循环：**
```python
# 添加安全计数器
count = 0
while 条件:
    count += 1
    if count > 10000:  # 安全保护
        print("循环次数过多，可能是死循环！")
        break
    # 正常代码...
```

{% endnote %}

{% note warning no-icon %}

**Q6：为什么我的循环次数总是不对？**

{% endnote %}

{% note info no-icon %}

**A：** 常见原因：

1. **range() 的左闭右开问题**
   ```python
   # 错误：想循环10次
   for i in range(10):  # i = 0到9，确实是10次 ✅
   for i in range(1, 10):  # i = 1到9，只有9次 ❌
   for i in range(1, 11):  # i = 1到10，正好10次 ✅
   ```

2. **while 循环的边界条件**
   ```python
   # 错误：想打印1到10
   i = 1
   while i < 10:  # 只打印到9 ❌
       print(i)
       i += 1
   
   # 正确
   i = 1
   while i <= 10:  # 打印到10 ✅
       print(i)
       i += 1
   ```

3. **忘记更新循环变量**
   ```python
   # 错误
   i = 0
   while i < 5:
       print(i)
       # 忘记 i += 1，死循环！❌
   ```

{% endnote %}

---

{% note warning no-icon %}

🎉 恭喜你完成了 Python 循环结构的学习！

循环是编程的核心技能之一，掌握好循环，你就能让程序自动处理大量重复任务。

现在你已经学会了**判断结构**和**循环结构**，这是编程的两大基础控制结构！

接下来建议学习**基础数据结构**，让数据在程序中更加标准。

**记住**：编程是一门实践的艺术，多写代码，多思考，多调试，你一定能成为编程高手！💪

{% endnote %}
