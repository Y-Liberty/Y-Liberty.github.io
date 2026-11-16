---
title: 从零开始的 C++ 学习之旅
date: 2024-07-20 10:21:57
tags:
  - C++ 算法与数据结构
  - C++ 基础语法
categories:
  - CPP
cover: https://bu.dusays.com/2025/11/03/690846dc211fd.png
top_group_index: 1
sticky: 1
---

# 前言

{% note warning flat%}

本文将介绍 C++ 的**相关历史背景**、**编译环境**、**IDE**以及介绍 C++ 的**学习路线**。

主要介绍有关于**信息学奥赛**所需要的知识点，面向对象所需的类与对象知识不在本文讨论。

{% endnote %}

{% note warning flat%}

在阅读过程中有任何问题都可以发布到评论区，有价值的问题将会放到文章末尾Q&A之中！

{% endnote %}

# Hello, World！

``` cpp
#include <iostream>

using namespace std;

int main()
{
    cout << "Hello, world!" << endl;
    return 0;
}
```

# C++ 的发展经历

{% note success no-icon %}

**C++**（**C Plus Plus**）是一种高级语言，它是由 **Bjarne Stroustrup** 于 **1979** 年在贝尔实验室开始设计开发的。C++ 进一步扩充和完善了 C 语言，是一种**面向对象**的程序设计语言。

{% endnote%}

{% note info flat %}

同时，在**信息学奥林匹克竞赛**【以下简称**信奥赛**】中，C++ 是**唯一可以使用**的语言。

{% endnote%}

# C++ 的标准库

{% note success no-icon %}

标准的 C++ 由**三个重要部分**组成：

- 核心语言，提供了所有构件块，包括**变量、数据类型和常量**，等等。
- C++ 标准库，提供了大量的**函数**，用于操作文件、字符串等。
- 标准模板库**（STL）**，提供了大量的方法，用于操作数据结构等。

{% endnote%}

# IDE(集成开发环境)

## CodeBlocks

{% note success no-icon %}

**Code::Blocks**是一个免费开源的C/C++IDE,最早的版本发布于2005年，一个开源的跨平台集成开发环境（IDE），主要用于 **C、C++ 和 Fortran** 等编程语言的开发。也可以说是专门为C/C++搭建的IDE,它拥有其他IDE的基本功能，更多功能通过下载插件来获得，与其他IDE相比相对简单，对于新手也比较友好。

{% endnote%}

### 下载链接

{% link Code::Blocks,C/C++ IDE,https://sourceforge.net/projects/codeblocks/ %}

### 使用方法

{% note success no-icon %}

打开软件之后就是如下页面。

{% endnote%}

![1759393514638.png](https://bu.dusays.com/2025/10/02/68de3708a603d.png)

{% note success no-icon %}

点击左上角**新建文件图标**选择 **Empty File** 新建一个空白文件。

{% endnote%}

![1759393517762.png](https://bu.dusays.com/2025/10/02/68de370898fed.png)

{% note success no-icon %}

新建空白文件之后点击`Ctrl + s `保存文件。

{% endnote%}

![1759393525609.png](https://bu.dusays.com/2025/10/02/68de37077e0e3.png)

{% note success no-icon %}

保存文件时要注意**后缀名改为cpp**，即文件保存为 `xxx.cpp`。

{% endnote%}

![1759393521777.png](https://bu.dusays.com/2025/10/02/68de3707c06a0.png)

{% note danger no-icon %}

注意保存路径及文件名**均不可使用中文**。

{% endnote%}

{% note success no-icon %}

保存完成之后即可在该页面进行代码的编写。

{% endnote%}

## DEV C++

{% note success no-icon %}

这是一款免费的，功能齐全的集成IDE,**主要适用于刷题，推荐初学者使用。**占用内存小，轻量级IDE,在C语言初阶**学习和刷题**时是很好用的工具，但不适用于后期的调试和项目开发(没有其他IDE那么明显直观)，前期学习C语言/C++必备神器!

{% endnote%}

### 下载链接

{% link DEVC++,C/C++ IDE,https://bloodshed-dev-c.en.softonic.com/ %}

## Visual Studio Code(VS Code)

{% note success no-icon %}

**Visual Studio Code(VS Code)**是由Microsoft创建的开源，跨平台源代码编辑器。由微软开发，针对 Web 开发人员和前端工程师而设计。这是一款功能强大，**可编译多语言**的IDE,不仅仅是C/C++,Python,Java等编程语言都可以进行编译运行，并且目前不仅支持Windows,还支持于Mac和Linux。VS Code自身足够轻巧强大，并且有一个看满足绝大部分功能的**完全免费版本**，以及有附加功能和支持的企业版本。此外，VS Code中可下载**大量实用插件**，它可能是市面上最好的免费IDE。

{% endnote%}

### 下载链接

{% link Visual Studio Code,C/C++ IDE,https://code.visualstudio.com/ %}

# C++ 学习路线

## C++ 基础语法

{% note success no-icon %}

C++ 的基础语法知识主要包括**数据类型、顺序结构、判断结构、循环结构、数组与字符串、函数、指针**等等。

{% endnote%}

### 基本数据类型与数据结构

{% note info no-icon %}

C++ 的**数据类型与数据结构**主要包括**变量、输入输出、运算**等基本结构。

{% endnote%}

{% link 数据类型与数据结构,C++,https://blog.1024code.top/CPP_data/ %}

### 判断结构

{% note info no-icon %}

C++ 的**判断结构**主要包括 **if 判断** 的基本使用方法。

{% endnote%}

{% link 判断结构,C++,https://blog.1024code.top/CPP_judgment/ %}

### 循环结构

{% note info no-icon %} 

C++ 的**循环结构**相关的知识点主要包括**while 循环、 do-while 循环**与**for 循环**的基本使用方法。

 {% endnote%} 

{% link 循环结构,C++,https://blog.1024code.top/CPP_Loop/ %}

### 数组

{% note info no-icon %} 

C++ 的**数组**相关的知识点主要包括**一维数组、多维数组**与**数组的基本函数**等知识点。

 {% endnote%} 

{% link 数组,C++,https://blog.1024code.top/CPP_array/ %}

### 字符串

{% note info no-icon %} 

C++ 的**字符串**相关的知识点主要包括**数组类型的字符串**与**`string`字符串**等知识点。

 {% endnote%} 

{% link 字符串,C++,https://blog.1024code.top/CPP_String/%}

### 函数

{% note info no-icon %}

C++ 的**函数**相关的知识点主要包括**无参函数、有参函数**与**函数的递归与调用**等知识点。

{% endnote%}

{% link 函数,C++,https://blog.1024code.top/CPP_function/ %}

## C++ 算法与数据结构

{% note warning flat%}

C++ 的**算法与数据结构**是信奥赛**最重要的部分！**

{% endnote%}

{% note success no-icon %}

C++ 的**算法**主要包括**排序、贪心、二分、搜索与图论、数论、动态规划与一系列基础算法**。

{% endnote%}

### 基础数据结构

{% note success no-icon %}

C++ 的**数据结构**主要包括**链表、栈、队列、KMP、堆、Trie树、并查集，HASH表与STL的基础用法**等等。

{% endnote%}

{% note info flat %}

C++ 的 **STL** 主要包括是C++内置的**标准模板库**、集成了大部分的**数据结构的基础操作**。

{% endnote%}

{% link 基础数据结构,C++,https://blog.1024code.top/CPP_data_str/ %}

### 基础算法

{% note info no-icon %}

C++ 的**基础算法**主要包括的**排序、二分、贪心、高精度、前缀与差分**等等基础算法。

{% endnote%}

{% link 基础算法,C++,https://blog.1024code.top/CPP_Ele_algorithm/ %}

### 搜索与图论

{% note info no-icon %}

C++ 的**搜索与图论算法**主要包括的**DFS、BFS、最短路与最小生成树**算法。

{% endnote%}

{% link 搜索与图论,C++,https://blog.1024code.top/CPP_Graph_Theory/ %}

### 数论

{% note info no-icon %}

C++ 的**数论算法**主要包括的**质数、约数、容斥原理与博弈论**等等基础数学算法。

{% endnote%}

{% link 数论,C++,https://blog.1024code.top/CPP_Math_Theory/ %}

### 动态规划【DP】

{% note info no-icon %}

C++ 的**动态规划算法**主要包括的**背包问题、线性DP、区间DP、树形DP与记忆化搜索**等等基础DP算法。

{% endnote%}

{% link 动态规划,C++,https://blog.1024code.top/CPP_DP/ %}
