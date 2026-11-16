---
title: C++ 变量、运算与顺序结构
date: 2024-08-08 15:07:23
tags:
  - C++ 基础语法
categories:
  - CPP
cover: https://bu.dusays.com/2025/11/03/690830ecb274a.png
---

# 前言

{% note warning flat%}

本文记录 C++ 相关的**变量、运算**与**输入输出**的相关知识。

{% endnote %}

{% note warning flat%}

在阅读过程中有任何问题都可以发布到评论区，有价值的问题将会放到文章末尾Q&A之中！

{% endnote %}

# 什么是编程

{% note success no-icon %}

**编程**是编写程序代码的中文简称，就是**让计算机代码解决某个问题**，对某个计算体系规定一定的运算方式，使计算体系按照该计算方式运行，并最终得到相应结果的过程。

通俗来讲，编程就是**人类和计算机沟通的一种方式**。

{% endnote%}

# C++语言基本框架

``` cpp
#include <iostream>		// 头文件

using namespace std;		// 使用 std 命名空间

int main(){			// 函数入口【主函数】
    ……;				// 程序编写区
    return 0;			// 返回值
}
```

## 头文件

{% note success no-icon %}

C++ 语言中定义了一部分**头文件**，在这些头文件之中包含一部分已有的**函数【功能】**，可以在编写程序的过程中**直接调用**即可。

{% endnote%}

### 程序内片段

{% note success no-icon %}

在上述代码片段中，首行代码就是调用头文件的过程，格式为：<b>#include <头文件名></b>

``` cpp
#include <iostream>
```

**&lt;iostream&gt;** 头文件中内置了基本的**输入、输出、换行**函数：**cin、cout、endl**

{% endnote%}

{% note danger no-icon %}

学过 **Python** 的同学，在 **Python** 学习的过程中也需要**调用库**，**C++ 中头文件**的作用是和 **Python 中库**的作用是类似的。

{% endnote%}

### 常用头文件

{% note success no-icon %}

在 C++ 中，**常用的头文件**有如下一些：

``` cpp
#include <iostream>		// 内置输入输出流函数：cin、cout、endl等等
#include <cstdio>		// 内置格式化输入输出函数：scanf，printf等等
#include <math>			// 内置一些常用的数学符号：根号 sqrt、幂 pow、绝对值 abs 等等
#include <algorithm>		// 内置一些简单算法：排序 sort、取最大值 max、最小值 min 等等	
```



{% endnote%}

## 命名空间

{% note success no-icon %}

**命名空间**是 C++ 中一个相对新的概念。其主要作用是为了**避免命名冲突**。

在 C++ 运行的过程中，为了**避免变量的命名与关键词冲突**，会调用命名空间来**限制冲突**，可以更好的编写和维护代码。

{% endnote%}

### 程序内片段

{% note success no-icon %}

在上述代码片段中，第二行代码就是调用头文件的过程，格式为：<b>using namespace 命名空间名;</b>

``` cpp
using namespace std;
```

std 命名空间中包含基本的 **cin cout endl** 等等函数名。

{% endnote%}

{% note danger no-icon %}

可以尝试运行**缺少调用命名空间**的程序。

``` cpp
#include <iostream>		// 头文件

int main(){			// 函数入口【主函数】
    cout << "Hello World!" << endl;
    return 0;			// 返回值
}
```

运行之后会发现 **cout** 和 **endl** 函数**未被定义**，同时**提示调用命名空间**。

{% endnote%}

### 调用方法

{% note success no-icon %}

调用命名空间有**两种常用的方法**。

第一种就是像上述代码片段中，直接在头文件之后使用 **using namespace XXX;** 进行调用。

``` cpp
#include <iostream>

using namespace std;	// 使用 std 命名空间

int main(){
    cout << "Hello World!" << endl;
    return 0;
}
```



第二种方法就是在使用函数时，在**函数前加上该命名空间名**，并且用 **::** 链接。

``` cpp
#include <iostream>

int main(){
    std::cout << "Hello World!" << std::endl;	// 直接程序内调用
    return 0;
}
```



{% endnote%}

## 主函数【程序入口】

{% note success no-icon %}

**主函数**是 C++ 中必须要有的部分，必须以 **main()** 进行命名。

主函数是**所有程序内容的入口**，一段 C++ 程序就是从 **main 函数** 开始运行的。

{% endnote%}

{% note danger no-icon %}

主函数必须定义为 **int 类型**，同时在程序结束是**返回值为 0【return 0;】**。

对于**函数类型**的知识点，在之后的**函数篇章**内具体讲解。

{% endnote%}

### 程序内片段

{% note success no-icon %}

在上述代码中，**主函数**片段如下：

``` cpp
int main(){
    ……;
    return 0;
}
```



{% endnote%}

{% note danger no-icon %}

任何函数都是通过<b>大括号 { }</b>来规定函数范围的。

学习过 Python 的同学，在 **Python** 中函数内容是通过**缩进**来规定函数范围的，在 **C++** 中所有的函数都是通过**大括号**来规定的。

{% endnote%}

### 返回值

{% note success no-icon %}

在 C++ 的函数运行过程中，**返回值**是标记程序**是否正常结束**的标志。

当**返回值为 0** 时，表示程序**正常结束**。

否则，当其**为非 0 值**时，表示程序**出现错误**。

{% endnote%}

## 其他

### 括号

{% note success no-icon %}

在 C++ 程序编写的过程中，要区分**各种括号**的区别。

> **< >** 一般用于**头文件的调用**等等。
>
> **{ }** 一般用于判断、循环、函数的**范围限制**等等。
>
> **[ ]** 一般用于**数组的定义**等等。
>
> **( )** 一般用于**运算**、函数**参数的传递**等等。

{% endnote%}

### 分号

{% note success no-icon %}

在 C++ 程序编写的过程中，要注意 <b> ; </b>	的使用。

具体的使用规则在后续**每个模块**学习的过程中会详解。

{% endnote%}

### 英文输入

{% note success no-icon %}

在 C++ 程序编写的过程中，**除注释外**，所有的内容都要用**英文输入**，包括所有的符号。

{% endnote%}

### 注释

{% note success no-icon %}

在 C++ 中，注释有两种写法。

- 单行注释：使用 `//` 表明注释范围，`//` 后的内容为注释内容，不参与编译。
- 多行注释：使用`/* ... */`表明注释范围。

{% endnote%}

# 变量

{% note success no-icon %}

不管使用编程语言进行编程时，都需要用到**各种变量**来**存储各种信息**。变量保留的是它**所存储的值的内存位置**。

这意味着，当您**创建一个变量**时，就会在内存中**保留一些空间**。

{% endnote%}

## 数据类型

{% note success no-icon %}

在 C++ 中，**常用的数据类型**有如下几种：

{% endnote%}

| 类型     | 关键字 | 示例                 |
| :------- | :----- | -------------------- |
| 布尔型   | bool   | true, false          |
| 字符型   | char   | 'a', 'A', ' ', '\n'  |
| 整型     | int    | 1, 3, 1231231,123    |
| 浮点型   | float  | 1.2, 231.45, 1.235e2 |
| 双浮点型 | double | 1.2, 231.45, 1.235e2 |
| 无类型   | void   | -                    |

### 数据范围

{% note success no-icon %}

在 C++ 中，**不同的数据类型**所能表示的**数据范围也是不同**的，这具体取决于不同的数据类型**在内存中所占的位数**。

{% endnote%}

{% note danger no-icon %}

在这里注意内存中单位的转化。

**1 位 = 1 字节 = 8 比特**

**【1 Byte = 8 bit】**

{% endnote%}

| 类型   | 位       | 范围                                                         |
| :----- | :------- | :----------------------------------------------------------- |
| char   | 1 个字节 | -128 到 127 或者 0 到 255                                    |
| int    | 4 个字节 | -2147483648 到 2147483647 【-2^31 ~ 2^31 - 1】               |
| float  | 4 个字节 | 精度型占4个字节（32位）内存空间，+/- 3.4e +/- 38 (~7 个数字) |
| double | 8 个字节 | 双精度型占8 个字节（64位）内存空间，+/- 1.7e +/- 308 (~15 个数字) |

{% note danger flat %}

那这个范围是如何计算的呢？为什么负数范围比正数多一个呢？

{% endnote%}

{% note success no-icon %}

在计算机内部，数据都是以**补码**的形式存储到**内存**中的，每一种类型可以表示的**范围都是不同的**。

{% endnote%}

#### 原码，反码，补码

{% note success no-icon %}

在计算机中，数据都是以**二进制**形式存储的，也就是都是以 **01 序列** 字符串存储的。

在此基础上，对于数据有三种不同的存储方式，也就是**原码、反码和补码**。

在编码过程中，用**首位作为符号位**，首位为 **0 表示正数**、首位为 **1 表示负数**。

{% endnote%}

{% note success no-icon %}

对于**正数**来说，原码、反码和补码的表示形式都是**相同的**。

对于**负数**来说：

反码是在原码的基础上，**符号位不变，其他所有位取反**得到的

补码是**符号位不变，反码+1** 得到的。

{% endnote%}

| 十进制 |   原码   |   反码   |   补码   |
| :----: | :------: | :------: | :------: |
|   90   | 01011010 | 01011010 | 01011010 |
|  -90   | 11011010 | 10100101 | 10100110 |

{% note success no-icon %}

因此，对于负数来说，可以**全部都为 1** 表示最大的负数

但是，对于正数来说，因为**第一位为符号位**，只能为 **0**，最大值仅为 **01111111……**，所以正数范围的最大值要 **-1**

{% endnote%}

## 变量定义

{% note success no-icon %}

在 C++ 中，定义变量时要有固定的格式：**变量数据 类型 变量名 赋值;**

多个同类型变量定义时用 **,** 隔开。

**浮点数**的赋值可以用**科学计数法**。

{% endnote%}

{% note danger no-icon %}

赋值可以省略。

{% endnote%}

``` cpp
// 定义类型为整数型，变量名为 a 的变量，不赋值
int a;
// 定义三个整数型变量，用逗号隔开，同时给 c 变量赋值，d 变量赋值为 c 变量的值
int b, c = 10, d = c;
// 定义三个双精度浮点数的变量
double e, f = 1.2345, g = 1.23e4;
// 定义一个字符型变量
char h;
// 定义一个布尔型变量
bool i;
```

## 作用域

{% note success no-icon %}

变量处于**不同的位置**有着**不同的效果**，可以作用的**范围也不同**。该范围一般称为**作用域**。

在 C++ 中，变量常用的作用域有**局部变量，全局变量，形式变量【形式参数】**

{% endnote%}

### 局部变量

{% note success no-icon %}

在函数或一个代码块内部声明的变量，称为**局部变量**。

通俗来讲，在一个 **{ } 内部定义的变量**就被称为局部变量，其作用域也**仅限于该 { } 内部**。

{% endnote%}

```cpp
#include <iostream>

using namespace std;

int main(){
    // x 作用域为整个 main 函数内部
    int x = 10;
    if(x >= 10){
        // y 作用域为 if 函数内部
        int y = 100;
    }
    for(int i = 0; i < 10; i ++){
        // z 作用域为 for 函数内部
        int z = 1000;
    }
    cout << x << endl;
    cout << y << endl;
    cout << z << endl;
}
```

{% note danger no-icon %}

运行上述代码，x 可以正常输出，y 和 z 会报错。

{% endnote%}

### 全局变量 

{% note success no-icon %}

在所有函数外部声明的变量，称为**全局变量**。

一般来说，全局变量直接**定义到头文件和命名空间下方**。

全局变量在**任何一个函数**中都可以使用。

{% endnote%}

``` cpp
#include <iostream>

using namespace std;
 
// 全局变量声明
int g;
 
int main ()
{
  // 局部变量声明
  int a, b;
 
  // 实际初始化
  a = 10;
  b = 20;
  g = a + b;
 
  cout << g << endl;
 
  return 0;
}
```

{% note danger no-icon %}

在程序中，局部变量和全局变量的**名称可以相同**，但是在函数内，**局部变量的值会覆盖全局变量的值**。

{% endnote%}

``` cpp
#include <iostream>
using namespace std;
 
// 全局变量声明
int g = 20;
 
int main ()
{
  // 局部变量声明
  int g = 10;
 
  cout << g << endl;
 
  return 0;
}
```



### 形式变量【形式参数】

{% note success no-icon %}

在函数参数的定义中声明的变量，称为**形式参数**。

具体的使用方法在后续的**函数**课程内容中会讲解。

{% endnote%}

```cpp
#include <iostream>

using namespace std;

// x 和 y 为 add 函数的形式参数
int add(int x, int y){
    return x + y;
}

int main(){
    int n = 10, m = 15;
    int ans = add(n, m);
    cout << ans << endl;
    return 0;
}
```

# 输入/输出

{% note success no-icon %}

C++ 常用的输入输出方式有两种

- 第一种是基于<b> iostream 头文件</b>下的**输入输出流**函数
- 第二种是基于<b> cstdio 头文件</b>下的**标准输入输出**函数

{% endnote%}

## 输入输出流

{% note success no-icon %}

使用输入输出流函数来实现程序的输入输出时，**无需考虑变量类型**，输入输出都是同样的格式。

- 输入：cin >> 变量名1 >> 变量名2;
- 输出：cout << 变量名1 << 变量名2;

{% endnote%}

``` cpp
// 调用 iostream 头文件
#include <iostream>

using namespace std;

int main(){
    int a;
    double b;
    char c;
    
    // 输入函数 cin
    cin >> a >> b >> c;
    
    // 输出函数 cout，换行函数 endl
    cout << a << b << c << endl;
    return 0;
}
```

## 标准输入输出

{% note success no-icon %}

使用标准输入输出来实现程序的输入输出时，**需考虑变量类型**，不同的类型对应的格式不同。

在输入输出的过程中都需要**声明变量类型**。

{% endnote%}

{% note success no-icon %}

在输入的过程中，要注意**标明地址符【&】**

因为在输入的过程中是需要在计算机的内存中**申请一块地址**后将变量存储到该地址的，所以要声明地址符。

**输入格式：scanf("标准格式", &变量名);**

{% endnote%}

{% note success no-icon %}

在输出的过程中，**无需声明地址符**

因为在输出的过程中说明**该变量已经存储到内存**中，**直接读取该变量值**即可。

**输出格式：printf("标准格式", 变量名);**

{% endnote%}

| 变量类型     | 声明      | 标准格式 |
| ------------ | --------- | -------- |
| 整数型       | int       | %d       |
| 单精度浮点数 | float     | %f       |
| 双精度浮点数 | double    | %lf      |
| 字符型       | char      | %c       |
| 长整数型     | long long | %lld     |

```cpp
#include <cstdio>

using namespace std;

int main(){
    // 变量声明
    int a;
    float b;
    double c;
    char d;
    long long e;
    
    // 标准输入
    scanf("%d", &a);
    scanf("%f", &b);
    scanf("%lf", &c);
    scanf("%c", &d);
    scanf("%lld", &e);
    
    // 标准输出, \n 表示换行
    printf("%d\n", a);
    printf("%f\n", b);
    printf("%lf\n", c);
    printf("%c\n", d);
    printf("%lld\n", e);
    
    return 0;
}
```

## 区别

{% note success no-icon %}

在 C++ 中，上述两种方式都可以控制输入输出，那么区别是什么呢。

{% endnote%}

### 保留小数位

{% note success no-icon %}

使用输入输出流函数时，想要保留小数位需要调用函数进行保留。

需要使用 `iomanip` 库中的 `setprecision` 函数和 `fixed` 函数。 `setprecision` 用于设置数字的精度，而 `fixed` 用于保证数字以固定点的方式输出。

{% endnote%}

``` cpp
#include <iostream>
#include <iomanip>

using namespace std;
 
int main() {
    double num = 3.14159;
    cout << fixed << setprecision(2) << num << endl;
    return 0;
}
```

{% note success no-icon %}

使用标准输入输出函数时，想要保留小数位只需**在输出函数中表明要保留的位数**即可。

**格式：printf("%.2lf", c);**

{% endnote%}

``` cpp
#include <cstdio>

using namespace std;
 
int main() {
    double num = 3.14159;
    printf("%.2lf\n", num);
    return 0;
}
```

### 格式化输出

{% note success no-icon %}

使用输入输出流函数时，想要格式化输出需要调用函数。

可以使用`iomanip`库中的函数来实现格式化输出。以下是一些常用的格式化操作：

- `setprecision(n)`: 设置浮点数的精度为`n`位。
- `fixed`: 使用定点表示法来表示浮点数。
- `scientific`: 使用科学表示法来表示浮点数。
- `setw(n)`: 设置下一个输出值的宽度为`n`个字符。
- `left`: 输出左对齐。
- `right`: 输出右对齐。
- `setfill(c)`: 在未填充的部分使用字符`c`来填充。

{% endnote%}

``` cpp
#include <iostream>
#include <iomanip>

using namespace std;
 
int main() {
    int width = 10;
    cout << right << setw(width) << "Hello" << endl; // 输出宽度为10的右对齐字符串
 
    char fill_char = '*';
    cout << setfill(fill_char) << setw(width) << "World" << endl; // 使用'*'来填充宽度不足的部分
 
    return 0;
}
```

{% note success no-icon %}

使用标准输入输出函数时，想要保留小数位只需**在输出函数中表明要使用的格式**即可。

{% endnote%}

``` cpp
#include <cstdio>

using namespace std;

int main(){
    int a = 12, b = 123, c = 1234; 
    double d = 1.2345;
    
    // 宽度为 5 右对齐输出
    printf("%5d\n", a);
    printf("%5d\n", b);
    printf("%5d\n", c);
    
    // 宽度为 5 ,不足位补 0 输出
    printf("%05d\n", a);
    printf("%05d\n", b);
    printf("%05d\n", c);
    
    // 宽度为 5 左对齐输出
    printf("%-5d\n", a);
    printf("%-5d\n", b);
    printf("%-5d\n", c);
    
    // 宽度为 5，保留两位输出
    printf("%5.2lf\n", d);
    
    return 0;
}
```

# 运算

{% note success no-icon %}

运算符是一种告诉编译器执行特定的**数学或逻辑操作**的符号。

基本的运算符包括简单的**加【+】减【-】乘【*】除【/】**

在 C++ 语言中，额外的运算还包括**取余数【%】**，**自增1【++】**，**自减1【- -】**

除此之外，C++ 中还有一些特殊的基本运算符，例如 **sizeof** 用来求变量所占字节数。 

{% endnote%}

``` cpp
#include <iostream>

using namespace std;

int main()
{
    int a = 21;
    int b = 10;
    int c;

    c = a + b;
    cout << "Line 1 - c 的值是 " << c << endl ;
    c = a - b;
    cout << "Line 2 - c 的值是 " << c << endl ;
    c = a * b;
    cout << "Line 3 - c 的值是 " << c << endl ;
    c = a / b;
    cout << "Line 4 - c 的值是 " << c << endl ;
    c = a % b;
    cout << "Line 5 - c 的值是 " << c << endl ;

    int d = 10;   //  测试自增、自减
    c = d++;
    cout << "Line 6 - c 的值是 " << c << endl ;

    d = 10;    // 重新赋值
    c = d--;
    cout << "Line 7 - c 的值是 " << c << endl ;

    int e = 10;
    char f = 'a';
    int g[100];
    cout << "e 所占字节长度为：" << sizeof e << endl;
    cout << "f 所占字节长度为：" << sizeof f << endl;
    cout << "g 所占字节长度为：" << sizeof g << endl;

    return 0;
}
```

# Q&A

