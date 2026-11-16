---
title: C++ 函数
date: 2024-10-05 15:00:00
tags:
  - C++ 基础语法
categories:
  - CPP	
cover: https://bu.dusays.com/2025/11/03/69083e5de538c.png
---



# 前言

{% note warning flat%}

本文记录 C++ 相关的**函数**的相关知识。

{% endnote %}

{% note warning flat%}

在阅读过程中有任何问题都可以发布到评论区，有价值的问题将会放到文章末尾Q&A之中！

{% endnote %}

# 函数示例

## 函数实现Hello World

``` cpp
#include <iostream>

using namespace std;

void fun(){
    cout << "Hello World!" << "\n"; 
}

int main(){
    fun();
    return 0;
}
```



## 函数实现阶乘

``` cpp
#include <iostream>

using namespace std;

int fun1(int n){
    int res = 1;
    for(int i = 1; i <= n; i ++ ){
        res *= i;
    }
    return res;
}

int main(){
   	int num = 5;
    
    int ans = fun1(num);
    
    cout << ans << endl;
    return 0;
}
```

# 函数的定义

## 函数的类型

{% note success no-icon%}

首先需要声明**函数类型**，其次需要写明**函数名**【任意起名】。

{% endnote %}

{% note info no-icon%}

​      函数的类型声明了该函数需要**返回的值是什么类型**。

​      注意函数的类型和变量的类型相比多一个**void类型**，即**空类型**，当函数定义为void类型，**不需要返回值**。

​      当函数类型**不为 void 类型**时，必须要有**和函数类型相同的返回值**。在函数内部**使用 return** 返回。

{% endnote %}

## 函数的参数

{% note success no-icon%}

在函数名之后需要加一个`()`，括号内写明**函数所需参数**。

{% endnote %}

{% note info no-icon%}

​      注意不是所有的函数都需要参数，也就是说，函数的声明的括号内的参数**可以为空。**

​      参数就是各种类型的变量，但是声明参数的过程和变量定义的过程有一些不同。

​      **变量定义**时，**多个同类型变量**可以用逗号 `,` 隔开定义即可。

​      **函数的参数**的声明**即使是同类型的参数**，也必须**多次声明参数类型**，每次声明用`,`隔开。

{% endnote %}

## 函数体

{% note success no-icon%}

之后需要将函数的具体内容【函数体】 用 `{}` 括起来。

{% endnote %}

{% note info no-icon%}

​     与判断和循环不同的是，判断和循环内部如果只有一行代码，可以省略 {} 

​     但是**函数就算只有一行代码也必须写 {}**

{% endnote %}

## 返回值

{% note success no-icon%}

最后在函数体内部**如果不是空类型，必须有返回值**。如果不写返回值，返回的有可能是一个随机数。

{% endnote %}

## 示例

``` cpp
#include <iostream>

using namespace std;

// 定义一个返回类型为空类型的函数
// 函数名：fun1，没有参数
void fun1(){
    ...; 
    // 空类型函数无需 return
}

// 定义一个返回类型为双精度浮点数类型的【double】的函数
// 函数名：fun2，有两个参数，均为 char 类型，每个参数的定义都需要写明类型并且用 , 隔开
double fun2(char a, char b){
    double ans;
    ...;
    // 函数类型是 double 类型，需要返回一个 double 类型的值
    return ans;
}

int main(){
    
    return 0;
}
```

# 函数的调用

{% note success no-icon%}

**空类型无参函数**调用时**直接写明函数名，后面加上 ()** 即可。

**如果函数有参数**的话，需要在 () 内部**给定同类型的参数**，该参数可以是**同类型的变量**，或者**直接赋值**都可以。

其次看函数的**类型是什么**，如果**不是空类型**，那么则需要定义一个**同类型的变量来接受返回值**，也可以直接进行输出。

{% endnote %}

``` cpp
#include <iostream>

using namespace std;

void fun1(){
    cout << "Hello World!" << endl;
}

void fun2(int n){
    cout << "n = " << n << endl;
}

int fun3(int n, int m){
    int res = n * m;
    return res;
}

int main(){
    
    cout << "调用 fun1(): " << endl;
    // fun1 为空类型，同时没有参数，调用直接写明函数名和()即可
    fun1();
    
    cout << "调用 fun2(): " << endl;
    // fun2 为空类型，没有返回值。
    // 同时有一个int类型的参数，需要在()传递一个 int 类型的变量或者 int 类型的值
    int a = 1;
    fun2(a);
    fun2(2);
    
    cout << "调用 fun3(): " << endl;
    // fun3 为 int 类型，需要一个 int 类型的变量来接收返回值
    // 同时有两个 int 类型，需要在()内传递两个 int 类型的变量或者 int 类型的值
    int c = 3, d = 4;
    int e = fun3(c, 5);
    cout << "e = " << e << "\nf = " << fun3(6, d) << endl;
    return 0;
}
```

{% note danger no-icon%}

一般来说**主函数只能调用其他函数**，不能被其他函数调用。

除主函数外，**任何一个函数都可以调用任何一个函数**，包括自己。

{% endnote %}

# 函数的声明

## 声明

{% note success no-icon%}

在程序中，也可以**先对函数进行声明**，之后在**写明具体的函数体内容**。

如同在定义变量的过程中，我们可以先**定义变量**，再进行**赋值**。

{% endnote %}

{% note success no-icon%}

在函数声明的过程中，函数的参数的**参数名不是必须的**，但是**参数类型是必须的**。

也就是说，**参数名可以不写**，但是**类型必须声明**。

在函数声明的最后，需要用 `;` 结束声明

{% endnote %}

``` cpp
#include <iostream>

using namespace std;

// 函数的声明
int fun1(int ,int );

// 函数的定义
int fun1(int n, int m){
    ...;
}

int main(){
    ...;
    return 0;
}
```

## 用法

{% note danger no-icon%}

如果**不进行函数声明**，那么**被调用的函数一定要定义在调用函数的上面**。

即如果 A 函数中要调用 B 函数，那么 B 函数必须定义在 A 函数之上。

**错误写法：这种写法会导致 fun1 找不到 fun2 函数。**

{% endnote %}

``` cpp
#include <iostream>

using namespace std;

void fun1(){
    ...;
    // 在 fun1 函数中调用 fun2 函数失败
    fun2();
}

void fun2(){
    ...;
}

int main(){
    ...;
    fun1();
    return 0;
}
```

**正确写法：**

``` cpp
#include <iostream>

using namespace std;

// 被调用的 fun2 要写在调用 fun2 的 fun1 之上
void fun2(){
    ...;
}

void fun1(){
    ...;
    fun2();
}

int main(){
    ...;
    fun1();
    return 0;
}
```

{% note info no-icon%}

如果进行了函数的**声明**，那么函数的**位置就没有要求**。

{% endnote %}

``` cpp
#include <iostream>

using namespace std;

void fun1();
void fun2();

void fun1(){
    ...;
    fun2();
}

void fun2(){
    ...;
}

int main(){
    ...;
    fun1();
    return 0;
}
```

# 函数的执行顺序

## 执行顺序

{% note success no-icon%}

所有的C++代码都是以主函数**【main函数】**为**程序的入口**的。

函数的调用都是**从主函数中开始调用**的。

在程序执行的过程中，当调用了一个函数，则必须**完成该函数的内容之后**才可以**继续执行调用语句之后**的内容。

{% endnote %}

``` cpp
#include <iostream>

using namespace std;

int fun2(int n){
    cout << "进入fun2():" << endl;
    int m = n * n;
    cout << "fun2 执行结束" << endl;
    return m;
}

void fun1(){
    cout << "进入fun1()：" << endl;
    int res = fun2(5);
    cout << "res = " << res << endl;
    cout << "fun1 执行结束" << endl;
}

int main(){
    cout << "调用fun1():" << endl;
    fun1();
    cout << "完成调用fun1()" << endl;
    return 0;
}
```

## 栈

{% note success no-icon%}

在计算机内部，有一种常用的**数据结构**叫做**栈**。

栈的特点是**从一端实现数据的出入**，先入栈的数据后出栈，后入栈的数据先进栈。**【先进后出】**

{% endnote %}

{% note info no-icon%}

函数的调用过程就是一个**入栈出栈**的过程。

每次**调用一个函数**都会将该函数**入栈**，在该函数**执行完成**之后该函数**出栈**。

之后调用这个函数的函数才会继续执行。

栈中**最底层的是 main  函数**。

{% endnote %}

# 参数的类型

## 传值参数

{% note success no-icon%}

当函数内初始化一个**非引用类型的变量**时， 调用时所传递的值会**拷贝到该变量**上。

此时，在函数内部**改变该参数**的值**不会影响**到调用时原变量的**初始值**。

{% endnote %}

### 示例

{% note info no-icon%}

在下面这个程序中，函数内定义了一个参数 `n` 

在主函数中调用 fun1 函数时，原函数**传递的** `a` 的值为 `5`.

在 fun1 函数中将接收到的**参数值** `n` 改变为 `100`

但是在 fun1 调用完成之后**原函数中** `a` 的值仍然为 `5`，没有变化。

{% endnote %}

``` cpp
#include <iostream>

using namespace std;

int fun1(int a){
    cout << "接收到的值：" << a << endl; 
    cout << "函数中改变参数值为100" << endl;
    a = 100;
    return a;
}

int main(){
    int a = 5;
    
   	cout << "调用函数：" << endl;
   	
   	int ans = fun1(a);
    cout << "函数返回值：" << ans << endl;
    
    cout << "调用完成" << endl;
    
    cout << "原函数中 a = " << a << endl;
    
    return 0;
}
```

## 引用参数 

{% note success no-icon%}

当函数内初始化一个**引用类型的变量**时。

此时，在函数内部**改变该参数**的值**会影响**到调用时原变量的**初始值**。

引用的方法就是在函数定义时在参数前面加一个地址符`&`

{% endnote %}

### 示例

{% note info no-icon%}

在下面这个程序中，函数内定义了两个参数`n, m`

在主函数中调用 fun1 函数时，**传递**的 `a, b` 的值为 `3, 4`.

在 fun1 函数中将接收到的**参数值** `n, m` 改变为 `10, 20`

但是在 fun1 调用完成之后**原函数**中 `a, b` 的值也变化为了 `10, 20`

{% endnote %}

``` cpp
#include <iostream>

using namespace std;

void fun1(int &n, int &m){
    cout << "接收到的 n = " << n << " m = " << m << endl; 
    cout << "函数中改变参数值为 10，20" << endl;
    n = 10, m = 20;
}

int main(){
    int a = 3, b = 4;
    
   	cout << "调用函数：" << endl;
    fun1(a, b);
    cout << "调用完成" << endl;
    cout << "原函数中：a = " << a << " b = " << b << endl;
    return 0;
}
```

{% note danger no-icon%}

使用引用传参可以改变原函数中的值的原因是元素在**内存中就是存放到一片地址**当中的。

在使用引用传递时，传递的是**该变量的地址**。

所以改变函数中的值时是直接**对该地址进行操作**，所以原函数中也会改变。

而非引用时**只传递了值**，没有传递地址，相当于**复制粘贴了一份**，所以函数中的变化不会影响到原函数。

{% endnote %}

``` cpp
#include <iostream>

using namespace std;

void fun1(int n){
    cout << "fun1 中 n 的地址为: " << &n << endl;
}

void fun2(int &n){
    cout << "fun2 中 n 的地址为: " << &n << endl;
}

int main(){
    int a = 30;
    cout << "a 的值为：" << a << endl;
    cout << "原函数中 a 的地址为：" << &a << endl;
    fun1(a);
    fun2(a);
    return 0;
}
```

## 数组参数

{% note success no-icon%}

当参数为数组时，默认为**引用参数**。

即在函数内部改变数组的值时，会影响到原函数中的数组值。

{% endnote %}

``` cpp
#include <iostream>

using namespace std;

void fun(int a[5]){
    cout << "函数中改变数组值为 1" << endl;
    for(int i = 0; i < 5; i ++){
        a[i] = 1;
    }
}

int main(){
	int a[5] = {1, 2, 3, 4, 5};
	
	cout << "调用函数前 a 数组的值：";
	for(int i = 0; i < 5; i ++ ){
        cout << a[i] << ' ';
    }
    cout << endl;
    
    cout << "调用函数" << endl;
    fun(a);
    cout << "调用结束" << endl;
    
    cout << "调用函数后 a 数组的值：";
    for(int i = 0; i < 5; i ++ ){
        cout << a[i] << ' ';
    }
    cout << endl;
    return 0;
}
```

### 一维数组

{% note success no-icon%}

当函数的参数类型为数组时，有三种定义方法。

- 定义为**确定长度数组**
- 定义为**无长度数组**
- 定义为**指针类型**

在函数调用的过程中**传递数组类型参数**时，**直接传递数组名**即可。

{% endnote %}

``` cpp
#include <iostream>

using namespace std;

// 确定长度数组
void fun1(int a[5]){
    ...;
}

// 无长度数组
void fun2(int a[]){
    ...;
}

// 指针类型
void fun3(int *a){
    ...;
}

int main(){
	int a[5] = {1, 2, 3, 4, 5};
    
    // 函数调用直接传递数组名即可
    fun1(a);
    fun2(a);
    fun3(a);
    
    return 0;
}
```

### 多维数组

{% note success no-icon%}

当函数的参数类型为多维数组时，基本的规则和一维数组相同。

但是在多维数组中，想要**不填写长度**时**只能将第一维长度省略**，**其余维度都必须声明长度**。

同样想要**使用指针定义**参数时，只能**将第一维用指针**表示，同时用`[]`括起来。

{% endnote %}

``` cpp
#include <iostream>

using namespace std;

// 确定长度数组
void fun1(int a[3][4]){
    ...;
}

// 无长度数组，只能省略第一维长度
void fun2(int a[][4]){
    ...;
}

// 指针传递，只能将第一维写为指针形式
void fun3(int (*a)[4]){
    ...;
}

int main(){
	int a[3][4] = {
        {1, 2, 3, 4}, 
        {5, 6, 7, 8}, 
        {9, 10, 11, 12}
    };
    fun1(a);
    fun2(a);
    fun3(a);
    return 0;
}
```

# 返回类型

{% note success no-icon%}

函数中一般使用 return 语句来**结束函数的执行**，其作用**相当于循环中的 break 语句**。

在执行 return 语句之后，程序**会返回到调用函数之后的一句语句**继续执行。

{% endnote %}

## 无返回值函数

{% note success no-icon%}

void 类型函数可以不写 return 语句，因为在 **void 类型**中会在函数**末尾自动执行**一个 return 语句。

但是 void 类型**也可以通过手动写一个 return 语句**直接结束函数的执行。

{% endnote %}

### 示例

{% note info no-icon%}

如果 a > b 交换 a 和 b。

{% endnote %}

``` cpp
#include <iostream>

using namespace std;

// 要实现主函数中的元素值也交换，需要定义为引用参数
void fun(int &n, int &m){
    // 如果 n <= m，则不满足题目要求，无需操作，直接结束函数 return 即可。
    if(n <= m) return ;
    
    cout << "满足题目条件" << endl;
    // 如果上述判断没有执行，说明满足题目要求，按照题目要求交换。
    int t;
    t = n;
    n = m;
    m = t;
    
    // 函数末尾无需 return ，默认函数结束返回
    // return
}

int main(){
    int a, b;
    cin >> a >> b;
    fun(a, b);
    cout << a << " " << b << endl;
    return 0;
}
```

## 有返回值函数

{% note success no-icon%}

有返回值函数**必须写** return 语句，且**返回类型必须和函数类型相同**，同时在**调用函数时**也需要一个**同类型的变量**来**接收返回值**。

如果**不写 return 语句**不会报错，但是**返回的值不确定**，是一个随机值。

{% endnote %}

### 示例

{% note info no-icon%}

函数实现阶乘。

{% endnote %}

``` cpp
#include <iostream>

using namespace std;

// 函数类型为 int 类型，必须返回一个 int 类型的变量
int fun1(int n){
    int res = 1;
    for(int i = 1; i <= n; i ++ ){
        res *= i;
    }
    // 返回值为一个 int 类型的变量，和函数定义类型相同
    return res;
}

int main(){
   	int num = 5;
    
    // 调用函数时也需要定义一个函数定义类型的变量来接收返回值。
    int ans = fun1(num);
    cout << ans << endl;
    return 0;
}
```

# 递归

{% note success no-icon%}

在一个函数内部**调用自己的过程**叫做递归。

但是递归调用自己的过程中要注意**写明终止条件**，否则会一直调用下去。

{% endnote %}

## 示例

{% note info no-icon %}

递归实现阶乘。

解题思路：**n! = n * (n - 1)!**

{% endnote %}

``` cpp
#include <iostream>

using namespace std;

// 递归实现阶乘，从大到小逐个数字相乘
int fun(int n){
    // 因为 1 的阶乘确定为 1，所以使用 1 为终止条件
    // 当参数为 1 时，返回值也为 1
    if(n <= 1) 
        return 1;
    
    // 每次调用都调用比当前数值小 1 作为参数进行传递
    // 解题思路：n! = n * (n - 1)!
    return n * fun(n - 1);
}

int main(){
    int res = fun(5);
    cout << res << endl;
    return 0;
}
```

# Q&A
