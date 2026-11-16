---
title: C++ 数组
date: 2024-08-10 15:07:23
tags:
  - C++ 基础语法
categories:
  - 信奥赛
  - C++
password: 7Aw4W1kl6
---

# 前言

{% note warning flat%}

本文记录 C++ 相关的**数组**的相关知识。

{% endnote %}

{% note warning flat%}

在阅读过程中有任何问题都可以发布到评论区，有价值的问题将会放到文章末尾Q&A之中！

{% endnote %}

# 什么是数组

{% note success no-icon%}

想要同时**定义多个同类型**的变量，可以使用数组定义。

{% endnote %}

``` cpp
// 定义三个 int 类型的变量，分别为 a, b, c
int a, b, c;

// 定义三个 int 类型的变量，分别为 a[0], a[1], a[2]
int a[3];
```

# 一维数组

## 定义

{% note success no-icon%}

数组的定义和变量的定义方式是类似的。

只需要在变量名后使用 **[ ] 声明变量的长度**。

具体格式：`数组类型 变量名[长度]`

{% endnote %}

```cpp
// 整型数组，长度为 110
int a[110];

// 字符数组，长度为 30
char s[30];
```

## 初始化

{% note success no-icon%}

数组的初始化有如下几条规则：

- **未初始化**的数组其每个元素值是**不确定的**。
- 初始化的数组可以**不填写数组的长度**，让其**自动识别**长度。
- 当**定义长度大于初始化的元素个数**时，其余**未初始化的元素自动为 0**

{% endnote %}

``` cpp
#include <iostream>

using namespace std;

int main(){
    // 未初始化的数组其每个元素值是不确定的。
    int a[100];
    
    // 自动识别 b 数组长度为 3。
    int b[] = {1, 2, 3};
    
    // 当定义长度大于初始化的元素个数时，其余未初始化的元素自动为 0。
    // c 数组等价于初始化为{1, 2, 3, 0, 0}
    int c[5] = {1, 2, 3};
    
    for(int i = 0; i < 100; i ++ ){
        cout << a[i] << " ";
    }
    cout << endl;
    
    return 0;
}
```

### 全 0 数组

{% note success no-icon%}

根据上述第三条规则，如果想要定义一个**全 0 数组**，可以**只初始化一个元素值为 0** 即可，其余元素自动初始化为 0。

{% endnote %}

``` cpp
#include <iostream>

using namespace std;

int main(){
    // 定义一个全 0 数组
    int a[100] = {0};
    
    for(int i = 0; i < 100; i ++ ){
        cout << a[i] << " ";
    }
    cout << endl;
    return 0;
}
```

## 访问数组元素

{% note success no-icon%}

数组相当于定义了多个同类型的变量，想要访问这些变量可以通过**下标**来进行遍历。

数组**默认下标是从 0 开始**的，即首个数组元素为 **a[0]**

{% endnote %}

``` cpp
#include <iostream>

using namespace std;

int main(){
    int a[3] = {1, 2, 3};
    
    cout << a[0] << " " << a[1] << " " << a[2] << endl;
    
    return 0;
}
```

### 遍历数组

{% note success no-icon%}

因为数组是通过下标访问的，所以我们可以通过**循环**来遍历整个数组。

{% endnote %}

``` cpp
#include <iostream>

using namespace std;

int main(){
    int a[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    
    for(int i = 0; i < 10; i ++ ){
        cout << a[i] << " ";
    }
    cout << endl;
    
    return 0;
}
```

## 做题技巧

{% note danger no-icon%}

在做题的过程中，因为数组是从 0 开始的，所以最大访问范围到 `长度 - 1`。

即 <b> a[100] 只能访问到 a[0], a[1] …… a[99] </b>。

所以在使用数组做题的过程中，经常**多定义几个长度**来**防止数组越界**报错。

即假如题目要求**数组范围为 100**，通常定义**数组范围为 110**。

{% endnote %}

# 多维数组

{% note success no-icon%}

多维数组就是**用数组的方式定义数组**。

{% endnote %}

``` cpp
// 大小为3的数组，每个元素是含有4个整数的数组。
int a[3][4]; 

// 将所有元素初始化为0
// 大小为10的数组，它的每个元素是含有20个元素的数组
// 这些数组的元素是含有30个整数的数组
int arr[10][20][30] = {0}; 
```



## 定义

{% note success no-icon%}

想要定义**几维数组**，就在变量名后写**几个 [ ]**

{% endnote %}

``` cpp
// 二维数组
int a[10][10];

// 三位数组
int b[10][10][10];
```

## 初始化

{% note success no-icon%}

多维数组的初始化的规则和一维数组的**基本没有区别**。

只不过在多维数组的初始化的过程中，为了方便看清楚维度，可以**每个维度**上面**再加一个 {}** 隔开

{% endnote %}

 ``` cpp
 #include <iostream>
 
 using namespace std;
 
 int main(){
     // 定义一个全 0 的二维数组
 	int a[3][3] = {0};
     
     // 定义一个二维数组，初始化为1，2，3，4，5，6，7，8，9
     int b[3][3] = {1, 2, 3, 4, 5, 6, 7, 8, 9};
     
     // 也可以在每个维度上再加一个{}
     int c[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
     
     return 0;
 }
 ```

## 访问数组元素

{% note success no-icon%}

多维数组的元素也可以通过下标访问，注意**首个元素下标是从 0 开始的**。

例如 ：

`a[0][0]`  表示首个元素。

`a[1][1] `  表示第一行第一列的元素。

{% endnote %}

``` cpp
#include <iostream>

using namespace std;

int main(){
    int a[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    
    cout << a[0][0] << " " << a[0][2] << " " << a[1][1] << " " << a[2][1] << endl;
    
    return 0;
}
```

### 遍历多维数组

{% note success no-icon%}

同样，多维数组也可以通过循环来遍历，只不过多维数组需要通过**嵌套循环**来遍历整个数组。

有**几个维度就嵌套几个循环**。

{% endnote %}

``` cpp
#include <iostream>
#include <cstdio>

using namespace std;

int main(){
    int a[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    
    for(int i = 0; i < 3; i ++){
        for(int j = 0; j < 3; j ++){
            printf("a[%d][%d] = %d ", i, j, a[i][j]);
        }
        cout << endl;
    }
    
    return 0;
}
```

# 常用函数

{% note success no-icon%}

C++ 中有一些内置的函数可以帮助我们实现一些简单的功能。

例如：

- 将数组全部定义为 0 ：`memset(数组名, 0, sizeof 数组名)`
- 复制数组：`memcpy(目标数组名, 原数组名, sizeof 数组名)` 

{% endnote %}

## 将数组定义为 0

``` cpp
#include <iostream>
#include <cstdio>

using namespace std;

int main(){
	int a[10] = {1, 2, 3, 4, 5};
    
    // 将 a 数组清零
    memset(a, 0, sizeof a);
    // 等价于如下操作
    for(int i = 0; i < 10; i ++){
        a[i] = 0;
    }
    
    return 0;
}
```

## 复制数组

``` cpp
#include <iostream>
#include <cstdio>

using namespace std;

int main(){
	int a[10] = {1, 2, 3, 4, 5};
    int b[10];
    
    // 复制 a 数组到 b 数组之中
    memcpy(b, a, sizeof a);
    
    // 等价于如下操作
    for(int i = 0; i < 10; i ++){
        b[i] = a[i];
    }
    
    return 0;
}
```



# Q&A

