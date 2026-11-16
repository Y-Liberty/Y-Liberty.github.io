---
title: C++ 循环结构
date: 2024-09-07 16:07:23
tags:
  - C++ 基础语法
categories:
  - CPP
cover: https://bu.dusays.com/2025/11/03/69083e5de53b4.png
---

# 前言

{% note warning flat%}

本文记录 C++ 相关的**循环结构**的相关知识。

{% endnote %}

{% note warning flat%}

在阅读过程中有任何问题都可以发布到评论区，有价值的问题将会放到文章末尾Q&A之中！

{% endnote %}

# 循环结构

{% note success no-icon %}

在 C++ 中，当程序需要多次执行同一块代码时，一般会用到循环结构

{% endnote%}

## 程序结构图

{% note success no-icon %}

大部分的**循环语句**均满足下面这个程序结构图。

{% endnote%}

![1759393505532.png](https://bu.dusays.com/2025/10/02/68de3705cdfd9.png)

## 循环语句

{% note success no-icon %}

C++ 中有**三种方式**实现循环结构。分别为 **while 循环**、**do-while 循环**、**for 循环**

{% endnote%}

### while 循环

{% note success no-icon %}

while 循环的基本结构与 if 判断语句类似，只需在括号中**写明条件即可**。

区别是 while 循环，当条件满足时，将**一直执行**循环内部语句，**直到条件不满足**。

{% endnote%}

``` cpp
while(判断条件){
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

   // while 循环执行
   while( a < 20 )
   {
       cout << "a 的值：" << a << endl;
       a++;
   }
 
   return 0;
}
```

#### 程序结构图

![1759395406387.png](https://bu.dusays.com/2025/10/02/68de3e510e94b.png)

### do-while 循环

{% note success no-icon %}

与 while 循环不同的是，**while 循环**是在**循环开始时**对条件进行判断。

而 **do-while 循环**是在**循环结束时**对条件进行判断，这样可以**保证循环内部语句至少可以执行一次**。

do-while 具体格式如下。

{% endnote%}

``` cpp
do
{
   内部语句;

}while(判断条件);
```

#### 实例

``` cpp
#include <iostream>
using namespace std;
 
int main ()
{
   // 局部变量声明
   int a = 10;

   // do 循环执行
   do
   {
       cout << "a 的值：" << a << endl;
       a = a + 1;
   }while( a < 20 );
 
   return 0;
}
```

#### 程序结构图

![1759393499722.png](https://bu.dusays.com/2025/10/02/68de37055db72.png)

### for 循环

{% note success no-icon %}

**for 循环**与其他两种循环方式不同的是，**for 循环**将循环**变量的初始化**和**变化**也同时在循环的时候进行了定义，而**while 循环和 do-while 循环**则**需要额外定义**出来。

{% endnote%}

``` cpp
for(变量初始化; 判断条件; 变化情况){
	内部语句;
}
```

#### 实例

``` cpp
#include <iostream>

using namespace std;
 
int main ()
{
    for(int i = 1; i <= 20; i ++ ){
        cout << i << " ";
    }
    cout << endl;
    return 0;
}
```

#### 程序结构图

![1759395400221.png](https://bu.dusays.com/2025/10/02/68de3e42aed32.png)



# Q&A

