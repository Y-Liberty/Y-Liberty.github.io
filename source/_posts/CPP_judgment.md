---
title: C++ 判断结构
date: 2024-08-21 16:07:23
tags:
  - C++ 基础语法
categories:
  - CPP
cover: https://bu.dusays.com/2025/11/03/69083216d5355.png
---

# 前言

{% note warning flat%}

本文记录 C++ 相关的**判断结构**的相关知识。

{% endnote %}

{% note warning flat%}

在阅读过程中有任何问题都可以发布到评论区，有价值的问题将会放到文章末尾Q&A之中！

{% endnote %}

# 判断结构

{% note success no-icon %}

在 C++ 中，程序运行的过程会通常会指定一个或者多个要评估的**条件**，以及指定满足该条件的情况下**【条件为真】**要执行的语句，与不满足该条件时**【条件为假】**要执行的语句。

{% endnote%}

## 程序结构图

{% note success no-icon %}

大部分的**判断语句**均满足下面这个**程序结构图**。

{% endnote%}

![1759395668549.png](https://bu.dusays.com/2025/10/02/68de3f5968f6a.png)

## 判断语句

{% note success no-icon %}

C++ 中提供了 **if …… else 语句**来实现判断功能。

{% endnote%}

### if 语句

{% note success no-icon %}

单个 if 语句常用来实现**只有一种判断条件**的情况，具体的格式如下。

{% endnote%}

``` cpp
if(判断条件){
    ……;  		// 如果判断条件为真将执行的语句
}
```

#### 实例

```cpp
#include <iostream>

using namespace std;
 
int main ()
{
   // 局部变量声明
   int a = 10;
 
   // 使用 if 语句检查布尔条件
   if( a < 20 )
   {
       // 如果条件为真，则输出下面的语句
       cout << "a 小于 20" << endl;
   }
   cout << "a 的值是 " << a << endl;
 
   return 0;
}

```

### if……else 语句

{% note success no-icon %}

当有**两个判断条件**的情况下，一般使用 **if …… else 语言**来实现。

其中，仍然在 **if 后面的 ()** 内写明判断条件，而 **else 后面不写任何判断条件**，默认为 if 后面的条件的反面情况。

{% endnote%}

``` cpp
if(判断条件)
{
   // 如果判断条件为真将执行的语句
}
else
{
   // 如果判断条件为假将执行的语句
}

```

#### 实例

{% note success no-icon %}

在下面这个例子中

if 后面的条件为 a < 20 

else 默认表示 a >= 20 的情况

{% endnote%}

``` cpp
#include <iostream>
using namespace std;
 
int main ()
{
   // 局部变量声明
   int a = 100;
 
   // 检查布尔条件
   if( a < 20 )
   {
       // 如果条件为真，则输出下面的语句
       cout << "a 小于 20" << endl;
   }
   else
   {
       // 如果条件为假，则输出下面的语句
       cout << "a 大于等于 20" << endl;
   }
   cout << "a 的值是 " << a << endl;
 
   return 0;
}
```

### if、else if、else语句

{% note success no-icon %}

当有**三个以上判断条件**的情况下，一般使用 **if …else if… else 语言**来实现。

其中，在 **if 和 else if** 后面的 () 内写明判断条件

**else 后面不写任何判断条件**，默认为所有判断条件的反面情况。

{% endnote%}

``` cpp
if(判断条件 1)
{
   // 当判断条件 1 为真时执行
}
else if(判断条件 2)
{
   // 当判断条件 2 为真时执行
}
else if(判断条件 3)
{
   // 当判断条件 3 为真时执行
}
else 
{
   // 当上面条件都不为真时执行
}
```

#### 实例

``` cpp
#include <iostream>
using namespace std;
 
int main ()
{
   // 局部变量声明
   int a = 100;
 
   // 检查布尔条件
   if( a == 10 )
   {
       // 如果 if 条件为真，则输出下面的语句
       cout << "a 的值是 10" << endl;
   }
   else if( a == 20 )
   {
       // 如果 else if 条件为真，则输出下面的语句
       cout << "a 的值是 20" << endl;
   }
   else if( a == 30 )
   {
       // 如果 else if 条件为真，则输出下面的语句
       cout << "a 的值是 30" << endl;
   }
   else
   {
       // 如果上面条件都不为真，则输出下面的语句
       cout << "没有匹配的值" << endl;
   }
   cout << "a 的准确值是 " << a << endl;
 
   return 0;
}

```

## 条件运算符【?:】

{% note success no-icon %}

在 C++ 中，可以用**条件运算符【?】**来代替 **if else 语句**。

该运算符被称为**三元运算符**，其需要**三个操作数**。具体格式如下。

{% endnote%}

``` cpp
Exp1 ? Exp2 : Exp3;
```

{% note success no-icon %}

其中，**Exp1 为条件语句**。

- 当 Exp1 为**真**时，计算 **Exp2** 的结果。
- 当 Exp1 为**假**时，计算 **Exp3** 的结果。

{% endnote%}

### 实例

**if-else 语句**

``` cpp
if(y < 10){ 
   var = 30;
}
else{
   var = 40;
}
```

**条件运算符**

``` cpp
var = (y < 10) ? 30 : 40;
```

## switch

{% note success no-icon %}

在 C++ 中，switch 语句用于基于不同的条件执行不同的代码块，它通常用来替代一系列的 if-else 语句，使代码更清晰和易读。

一个 **switch** 语句允许测试一个变量等于多个值时的情况。具体格式如下

{% endnote%}

```cpp
switch(变量名称){
    case 表达式1 :
       内部语句1;
       break;
    case 表达式2 :
       内部语句2;
       break;
    default : // 相当于if-else逻辑中最后的一个else
       内部语句3;
}
```

{% note danger no-icon %}

**switch** 语句必须遵循下面的规则：

- **switch** 语句中的 **变量名称** 必须是一个整型或枚举类型，或者是一个 class 类型，其中 class 有一个单一的转换函数将其转换为整型或枚举类型。

- 在一个 switch 中可以有任意数量的 case 语句。每个 case 后跟一个要比较的值和一个冒号。

- case 的 **表达式** 必须与 switch 中的变量具有相同的数据类型，且必须是一个常量或字面量。

- 当被测试的变量等于 case 中的常量时，case 后跟的语句将被执行，直到遇到 **break** 语句为止。

- 当遇到 **break** 语句时，switch 终止，控制流将跳转到 switch 语句后的下一行。

- 不是每一个 case 都需要包含 **break**。如果 case 语句不包含 **break**，控制流将会 *继续* 后续的 case，直到遇到 break 为止。

- 一个 **switch** 语句可以有一个可选的 **default** case，出现在 switch 的结尾。default case 可用于在上面所有 case 都不为真时执行一个任务。default case 中的 **break** 语句不是必需的。

  {% endnote%}

  ### 实例

  ```cpp
  #include <iostream>
  
  using namespace std;
  
  int main() {
      int day = 4;
  
      switch (day) {
          case 1:
              cout << "Monday" << endl;
              break;
          case 2:
              cout << "Tuesday" << endl;
              break;
          case 3:
              cout << "Wednesday" << endl;
              break;
          case 4:
              cout << "Thursday" << endl;
              break;
          case 5:
              cout << "Friday" << endl;
              break;
          case 6:
              cout << "Saturday" << endl;
              break;
          case 7:
              cout << "Sunday" << endl;
              break;
          default:
              cout << "Invalid day" << endl;
      }
  
      return 0;
  }
  ```



# Q&A

