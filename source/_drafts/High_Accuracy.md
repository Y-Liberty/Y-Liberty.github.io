---
title: 高精度运算
tags:
  - C++ 算法与数据结构
categories:
  - 信奥赛
  - C++
abbrlink: 1234
cover: https://pic.imgdb.cn/item/669646fad9c307b7e9e633ed.png
date: 2024/7/1 09:00:00
---

# 前言

{% note warning flat%}

本文记录各种**高精度运算**的相关实现思路以及 C++ 代码描述。

{% endnote %}

{% note warning flat%}

在阅读过程中有任何问题都可以发布到评论区，有价值的问题将会放到文章末尾Q&A之中！

{% endnote %}

# 高精度运算

{% note success no-icon %}

**高精度算法**（**High Accuracy Algorithm**）是处理 **大数字【数字长度大于10^6】** 的数学计算方法。在一般的科学计算中，会经常算到小数点后几百位或者更多，当然也可能是几千亿几百亿的大数字。一般这类数字统称为**高精度数**，高精度算法是用计算机对于超大数据的一种模拟**加，减，乘，除，乘方**等运算。对于非常庞大无法在计算机中正常存储的数字，将这个数字拆开，拆成一位一位或者是四位四位的**存储到一个数组**中， 用一个数组去表示一个数字，这样这个数字就被称为是高精度数。

高精度运算的基本思想就是通过将数字**逐位拆分到数组之中**后，模拟人工计算时**列竖式**的过程来完成对高精度数字的运算。

{% endnote%}

# 高精度加法

## 实现思路详解

### 数据存储

{% note success no-icon %}

在加法计算的过程中，将加数的每一位都放到一个数组之中，注意在存储的过程中要**逆序存储**

{% endnote%}

```cpp
// 首先将两个加数都用字符串来表示，因为精度过大，所以使用常规的整型无法存储
// 字符串每个字符占用一个字节，可以存储高精度大数
// 定义A，B两个数组来记录两个加数的每一位
string a, b;
vector<int> A, B;
cin >> a >> b;
    
// 将两个加数逆向存储到数组之中，用数组来模拟加法的过程
for (int i = a.size() - 1; i >= 0; i -- ) A.push_back(a[i] - '0');
for (int i = b.size() - 1; i >= 0; i -- ) B.push_back(b[i] - '0');
```

{% note info flat %}

逆序存储是为了保证**低位对齐**，如果**正序存储可以会导致对应位错位**

{% endnote %}

{% note danger no-icon %}

例如：123 + 89

逆序存储：A数组：[3, 2, 1]、B数组：[9, 8]，在相加的过程中个位 3 和 9 对应，十位 2 和 8 对应

正序存储：A数组：[1, 2, 3]、B数组：[8, 9]，在相加的过程中百位 1 和十位 8 对应，十位 2 和 个位 9 对应，导致计算结果错位

{% endnote %}

{% note primary flat %}
img【123 + 89 逆序存储和正序存储示例图片】
{% endnote %}

### 模拟计算过程

{% note success no-icon %}

高精度加法计算的过程就是两个数组的**对应位置**的数进行相加

在计算的过程中要注意**进位**，如果两个数相加结果大于等于 10，则需要进位

{% endnote %}

``` cpp
// t 变量复用，同时记录进位情况和每一次对应位相加所计算得到的结果
// 最开始没有进位，初始化为 0 
int t = 0;
    
// 模拟加法列竖式计算过程
for (int i = 0; i < A.size() || i < B.size(); i ++ )
{
    if (i < A.size()) t += A[i];
    if (i < B.size()) t += B[i];
        
    // C 数组存取的为计算结果模10的余数，如：5 + 7 = 12，则 C 数组存取的为 2 【12 % 10 = 2】 
    C.push_back(t % 10);
    // t 变量记录进位，如果计算结果大于等于 10，则 t /= 10 为 1，否则为 0
    t /= 10;
}
```

{% note danger flat %}

在记录计算结果时，存储的是对应位相加**模10**所得的**余数**，如：5 + 7 = 12，则结果数组该位存储的**余数**为 2 

进位使用计算结果**除以10取整**求得，如果计算结果大于等于 10，则 **结果 / 10** 为 1，否则为 0

{% endnote %}

### 输出

{% note success no-icon%}

注意最终输出时因为在**存储的过程中为逆序存储**，所以在**输出的时候也要逆序输出**

{% endnote %}

``` cpp
// 因为存储时为逆向存储，所以输出的过程也需要逆向输出才可以还原本来的顺序
for (int i = C.size() - 1; i >= 0; i -- ) 
    cout << C[i];
cout << endl;
```

{% note primary flat %}
img【存储结果逆序样例】
{% endnote %}

## C++代码实现

### 详细注释版

```cpp
#include <iostream>
#include <vector>

using namespace std;

// 在传递参数的过程中直接引用A、B两个数组的地址，就不需要额外再开辟新的空间，节省空间复杂度
vector<int> add(vector<int> &A, vector<int> &B)
{
    // 定义 C 数组来存取两个数组每一位相加所得到的和
    vector<int> C;
    
    // t 变量复用，同时记录进位情况和每一次对应位相加所计算得到的结果
    // 最开始没有进位，初始化为 0 
    int t = 0;
    
    // 模拟加法列竖式计算过程
    for (int i = 0; i < A.size() || i < B.size(); i ++ )
    {
        if (i < A.size()) t += A[i];
        if (i < B.size()) t += B[i];
        
        // C 数组存取的为计算结果的余数，如：5 + 7 = 12，则 C 数组存取的为 2 【12 % 10 = 2】 
        C.push_back(t % 10);
        // t 变量记录进位，如果计算结果大于等于 10，则 t /= 10 为 1，否则为 0
        t /= 10;
    }
	
    // 如果上述所有为相加之后还有进位，则直接在 C 数组中再记录一个高位 1
    // 例如： 99 + 1 = 100，上述模拟结束之后 t 为 1，则在 C 数组中再记录高位 1 表示最终的进位
    if (t) C.push_back(1);
    return C;
}

int main()
{
    // 首先将两个加数都用字符串来表示，因为精度过大，所以使用常规的整形无法存储
    // 字符串每个字符占用一个字节，可以存储高精度大数
    // 定义A，B两个数组来记录两个加数的每一位
    string a, b;
    vector<int> A, B;
    cin >> a >> b;
    
    // 将两个加数逆向存储到数组之中，用数组来模拟加法的过程
    for (int i = a.size() - 1; i >= 0; i -- ) A.push_back(a[i] - '0');
    for (int i = b.size() - 1; i >= 0; i -- ) B.push_back(b[i] - '0');

    // auto 可以自动获取变量类型，在此处相当于vector<int>
    auto C = add(A, B);
	
    // 因为存储时为逆向存储，所以输出的过程也需要逆向输出才可以还原本来的顺序
    for (int i = C.size() - 1; i >= 0; i -- ) cout << C[i];
    cout << endl;

    return 0;
}
```

### 无注释版

``` cpp
#include <iostream>
#include <vector>

using namespace std;

vector<int> add(vector<int> &A, vector<int> &B)
{
    vector<int> C;
    int t = 0;
    for (int i = 0; i < A.size() || i < B.size(); i ++ )
    {
        if (i < A.size()) t += A[i];
        if (i < B.size()) t += B[i];
        C.push_back(t % 10);
        t /= 10;
    }
    if (t) C.push_back(1);
    return C;
}

int main()
{
    string a, b;
    vector<int> A, B;
    cin >> a >> b;

    for (int i = a.size() - 1; i >= 0; i -- ) A.push_back(a[i] - '0');
    for (int i = b.size() - 1; i >= 0; i -- ) B.push_back(b[i] - '0');

    auto C = add(A, B);

    for (int i = C.size() - 1; i >= 0; i -- ) cout << C[i];
    cout << endl;

    return 0;
}
```

# 高精度减法

## 实现思路详解

### 数据存储

{% note success no-icon%}

同样，与高精度加法相同的是在将被减数和减数存储到数组的过程中时，要**逆序存储**，否则会出现位数不对应的情况

{% endnote %}

### 处理负数情况

{% note success no-icon%}

在减法的计算过程中，首先要考虑 **被减数 A** 和 **减数 B** 的大小关系

{% endnote %}

{% note info no-icon %}

如果 A >= B ， 则正常计算 **A - B** 即可

否则，则需要计算 **- (B - A)** 来得出结果

{% endnote %}

``` cpp
// 判断 A, B 两个数的大小
// 如果返回 ture，直接计算 A - B 即可
if (cmp(A, B)) C = sub(A, B);
    
// 否则，则需要通过计算 -(B - A) 来得到计算结果
// 代码表示的话就先输出一个负号，然后计算 B — A 的结果输出就好
else C = sub(B, A), cout << '-';

// 因为存储时为逆向存储，所以输出的过程也需要逆向输出才可以还原本来的顺序
for (int i = C.size() - 1; i >= 0; i -- ) 
    cout << C[i];
cout << endl;
```

### 比较两数大小

{% note success no-icon %}

因为被减数和减数是存储到数组中的，所以**不可以直接用大于小于号**进行比较大小

在比较的过程中，首先比较数组的**长度**，长度更长的数组更大

长度相同时，因为是逆序存储，所以最高位在数组的最后一位，所以要逆序**逐位**比较两个数组中的每一个元素

{% endnote %}

``` cpp
// 比较被减数和减数哪个数字更大
// 判断是否 A >= B
// 如果成立，返回 true，否则，返回 false
bool cmp(vector<int> &A, vector<int> &B)
{
    // 首先比较两个数组的长度，长度更长的数组更大，如 123 和 89 ，明显 123 更大
    if (A.size() != B.size()) return A.size() > B.size();

    // 如果两个数组长度相同的话，则比较每一位的大小
    // 因为在存储的时候是逆序存储的，所以高位在数组的末尾，所以此处要从数组的末尾开始比较
    for (int i = A.size() - 1; i >= 0; i -- )
        if (A[i] != B[i])
            return A[i] > B[i];
	
    // 如果上述代码还没有返回结果的话，说明两个数字大小相同
    // 大小相同的话符合 A >= B 的情况，返回 true
    return true;
}
```

### 模拟计算过程

{% note success no-icon %}

高精度减法计算的过程就是两个数组的**对应位置**的数进行相减

在计算减法的过程中，要注意**借位**的情况

在每一位计算的时候，如果**被减数 >= 减数**的时候，则不需要借位，直接计算 **A - B** 即可

如果**被减数 < 减数**，则需要借位，即计算结果为 **A + 10 - B**

{% endnote %}

``` cpp
// t 变量复用，同时记录借位情况和每一次对应位相减的结果
// 最开始没有借位，初始化为 0
int t = 0;
    
// 通过正负数比较可以保证 A 是大于等于 B 的，所以此处循环范围只需要【i < A.size()】 即可
for (int i = 0; i < A.size(); i ++ )
{
    // 如果有借位，首先要将被减数减去借位
    // 此时 t 记录的就是减去借位后的被减数
    t = A[i] - t;
        
    // 模拟被减数减去减数的过程
    if (i < B.size()) 
        t -= B[i];
        
    // 此处 【(t + 10) % 10】 是将被减数大于减数和被减数小于减数的两种情况都合并表示了
    // 如果被减数 >= 减数，则计算得到的 t 为正数，那么通过上式计算仍然为 t 
    // 如果被减数 < 减数，则计算的 t 为负数，则模拟了借位后[t + 10 - B]的过程,通过上式计算的结果为t+10
    C.push_back((t + 10) % 10);
        
    // 记录是否借位，如果此时 t 为负数，则说明被减数小于减数，那么则需要借位
    // 此处将 t 置为 1，在下次循环的过程中可以减去借位
    if (t < 0) 
        t = 1;
        
    // 反之如果此处 t >= 0，那么则说明不需要借位，t 为 0 即可
    else 
        t = 0;
}
```

{% note danger flat %}

在模拟的过程中，要注意 **t 变量的复用**以及**是否需要借位**的两种情况的**综合表示**

{% endnote %}

### 处理前置零

{% note success no-icon %}

在高精度计算中，数字是**按位逆序存储**到数组中的每一位的，而在计算的过程中会出现**高位为 0** 的情况

当对应位置计算为 0 时**结果数组**同样会存储一个 0 

这就会导致如果输出的时候有**高位 0 的情况同样会输出**

所以在计算完成之后要有一个**去除前置零**的过程

{% endnote %}

``` cpp
// 如果 C 数组的长度为 1，则说明计算结果就为 0，那么就不需要去除 0
// 如果长度大于 1，则从数组的最后一位开始判断，如果是 0 的话，那么则说明高位为 0，需要去除前置 0
// 因为是逆序存储，计算结果的高位对应的下标也是数组的高位，所以要从后开始判断
while (C.size() > 1 && C.back() == 0) 
    C.pop_back();
```

{% note danger no-icon %}

例如：129 - 126 = 3

在存储的过程中 A : [9, 2, 1] 、B : [6, 2, 1]

最终计算的结果为 C : [3, 0, 0]

在输出的过程中，是将结果数组中的每一位都输出，就会输出 **003** 为结果

为此，我们就需要做一个**去除前置 0** 的操作

{% endnote %}

## C++代码实现

### 详细注释版

```cpp
#include <iostream>
#include <vector>

using namespace std;

// 比较被减数和减数哪个数字更大
// 判断是否 A >= B
// 如果成立，返回 true，否则，返回 false
bool cmp(vector<int> &A, vector<int> &B)
{
    // 首先比较两个数组的长度，长度更长的数组更大，如 123 和 89 ，明显 123 更大
    if (A.size() != B.size()) return A.size() > B.size();

    // 如果两个数组长度相同的话，则比较每一位的大小
    // 因为在存储的时候是逆序存储的，所以高位在数组的末尾，所以此处要从数组的末尾开始比较
    for (int i = A.size() - 1; i >= 0; i -- )
        if (A[i] != B[i])
            return A[i] > B[i];
	
    // 如果上述代码还没有返回结果的话，说明两个数字大小相同
    // 大小相同的话符合 A >= B 的情况，返回 true
    return true;
}

vector<int> sub(vector<int> &A, vector<int> &B)
{
    vector<int> C;
    
    // t 变量复用，同时记录借位情况和每一次对应位相减的结果
    // 最开始没有借位，初始化为 0
    int t = 0;
    
    // 通过 cmp 函数可以保证 A 是大于等于 B 的，所以此处循环范围只需要【i < A.size()】 即可
    for (int i = 0; i < A.size(); i ++ )
    {
        // 如果有借位，首先要将被减数减去借位
        // 此时 t 记录的就是减去借位后的被减数
        t = A[i] - t;
        
        // 模拟被减数减去减数的过程
        if (i < B.size()) t -= B[i];
        
        // 此处 【(t + 10) % 10】 是将被减数大于减数和被减数小于减数的两种情况都合并表示了
        // 如果被减数大于等于减数，则计算得到的 t 为正数，那么通过上式计算仍然为 t 
        // 如果被减数小于减数，则计算的 t 为负数，则模拟了借位后 【t + 10 - B】 的过程
        // 通过上式计算的结果为 t + 10
        C.push_back((t + 10) % 10);
        
        // 记录是否借位，如果此时 t 为负数，则说明被减数小于减数，那么则需要借位
        // 此处将 t 置为 1，在下次循环的过程中可以减去借位
        if (t < 0) t = 1;
        
        // 反之如果此处 t >= 0，那么则说明不需要借位，t 为 0 即可
        else t = 0;
    }
	
    // 因为计算得到的结果是存储到数组中的，所以可能会导致某些位结果为 0
    // 如果高位计算为 0 则不需要输出，该操作就是去除前置 0 的过程
    // 如果 C 数组的长度为 1，则说明计算结果就为 0，那么就不需要去除 0
    // 如果长度大于 1，则从数组的最后一位开始判断，如果是 0 的话，那么则说明高位为 0，需要去除前置 0
    // 例如 129 - 126，计算得到的结果在数组中表示为[3, 0, 0]，所以需要从最后一位开始去除前置 0
    // 如果不去除前置 0 的话，那么输出结果会是 003
    while (C.size() > 1 && C.back() == 0) 
        C.pop_back();
    return C;
}

int main()
{
    // 首先将被减数和减数都用字符串来表示，因为精度过大，所以使用常规的整形无法存储
    // 字符串每个字符占用一个字节，可以存储高精度大数
    string a, b;
    vector<int> A, B;
    cin >> a >> b;
    
    // 将被减数和减数逆序存储到数组之中
    for (int i = a.size() - 1; i >= 0; i -- ) A.push_back(a[i] - '0');
    for (int i = b.size() - 1; i >= 0; i -- ) B.push_back(b[i] - '0');

    vector<int> C;

    // 判断 A, B 两个数的大小
    // 如果返回 ture，直接计算 A - B 即可
    if (cmp(A, B)) C = sub(A, B);
    
    // 否则，则需要通过计算 -(B - A) 来得到计算结果
    // 代码表示的话就先输出一个负号，然后计算 B — A 的结果输出就好
    else C = sub(B, A), cout << '-';

    // 因为存储时为逆向存储，所以输出的过程也需要逆向输出才可以还原本来的顺序
    for (int i = C.size() - 1; i >= 0; i -- ) cout << C[i];
    cout << endl;

    return 0;
}
```

### 无注释版

``` cpp
#include <iostream>
#include <vector>

using namespace std;

bool cmp(vector<int> &A, vector<int> &B)
{
    if (A.size() != B.size()) return A.size() > B.size();

    for (int i = A.size() - 1; i >= 0; i -- )
        if (A[i] != B[i])
            return A[i] > B[i];
	
    return true;
}

vector<int> sub(vector<int> &A, vector<int> &B)
{
    vector<int> C;
    int t = 0;
    for (int i = 0; i < A.size(); i ++ )
    {
        t = A[i] - t;
        if (i < B.size()) 
            t -= B[i];
        C.push_back((t + 10) % 10);
        if (t < 0) 
            t = 1;
        else 
            t = 0;
    }
	
    while (C.size() > 1 && C.back() == 0) 
        C.pop_back();
    return C;
}

int main()
{
    string a, b;
    vector<int> A, B;
    cin >> a >> b;
    
    for (int i = a.size() - 1; i >= 0; i -- ) A.push_back(a[i] - '0');
    for (int i = b.size() - 1; i >= 0; i -- ) B.push_back(b[i] - '0');

    vector<int> C;
    if (cmp(A, B)) 
        C = sub(A, B);
    else 
        C = sub(B, A), cout << '-';

    for (int i = C.size() - 1; i >= 0; i -- ) 
        cout << C[i];
    cout << endl;

    return 0;
}
```



# 高精度乘法

## 实现思路详解

### 数据存储

{% note success no-icon%}

注意乘法的运算是一个**高精度数**乘以一个**低精度数**

所以在存储的过程中，要将**高精度数**使用**数组**逆序按位存储，**低精度数**直接定义为**整型**即可。

{% endnote %}

```cpp
string a;
int b;

cin >> a >> b;
	
// 用数组来按位逆序存储高精度数
vector<int> A;
for (int i = a.size() - 1; i >= 0; i -- ) A.push_back(a[i] - '0');
```

{% note info flat %}

两个高精度数相乘的模拟过程太过繁琐，感兴趣可以自己研究，noi考试不会涉及。

{% endnote %}

### 模拟计算过程

{% note success no-icon%}

注意乘法的运算是一个**高精度数**乘以一个**低精度数**

在乘法的模拟过程中，与平时手算的过程会有一点点区别

在平时手动列竖式的过程中，是每一位相乘，最后相加求积

而在代码模拟过程中，我们要**将低精度的数看做整体**来进行运算，**不需要逐位相乘**进行计算

{% endnote %}

``` cpp
for (int i = 0; i < A.size() || t; i ++ )
{
 	// 将低精度数 b 看做整体进行计算
    if (i < A.size()) t += A[i] * b;
        
    // 结果数组中存储的是每一次对应为相乘所得的结果 % 10的余数
    C.push_back(t % 10);
        
    // 此处 t 变量记录进位情况，每次的进位是 t / 10 取整得到的结果
    t /= 10;
}
```

{% note danger no-icon%}

例如：123*12

我们要将 12 看做一个整体来计算

即第一步要计算3 * 12，下一步计算 2 * 12，最后计算 1 * 12

然后每次计算过程将计算 **结果%10** 作为当前位计算的 **结果** 存储到 C 数组中，将 计算 **结果 / 10** 作为 **进位** 继续下一次计算

{% endnote %}

{% note primary flat %}
img【模拟123 * 12 整体相乘记录余数和除数】
{% endnote %}

### 处理前置零

{% note success no-icon%}

当**低精度数为 0** 时，计算结果为 0

但是在代码实现的过程中，结果是存储到**数组**之中的

所以会导致数组的**每一位都为 0** ，输出时会输出 **len(A) 个 0**

为了避免这种现象，所以要在模拟结束后进行**去除前置零**的操作

{% endnote %}

``` cpp
// 如果 b = 0 的话，那么数组中存储的所有数据均为 0，即结果为 0
// 但是此处我们是使用数组存储，所以输出会输出 len(A) 个 0
// 所以此处应该去除前置 0，只保留一个即可
while (C.size() > 1 && C.back() == 0) 
    C.pop_back();
```

{% note info flat%}

除去上述去除前置零的方法，还有一种更为简便的方法，即在输入之后**直接判断 b 是否为 0** 即可

{% endnote %}

## C++代码实现

### 详细注释版

``` cpp
#include <iostream>
#include <vector>

using namespace std;


vector<int> mul(vector<int> &A, int b)
{
    vector<int> C;

    // t 变量复用
    // 1、记录每一位相乘计算结果
    // 2、记录进位情况
    // 最开始进位为 0 ，所以将 t 初始化为 0
    int t = 0;
    
    // A 为高精度数，所以循环次数以 A 的长度为限制
    // 同时为了保证如果计算结果有 len(A) + 1 位，所以循环次数还要以 t 的存在情况为限制
    // 例如 10 * 10 = 100
    // 计算结果为 3 为，A 为 2 位
    // 如果仅仅以 A 的位数为限制的话，会导致最终的计算结果错误
    for (int i = 0; i < A.size() || t; i ++ )
    {
        // 将低精度数 b 看做整体进行计算
        if (i < A.size()) t += A[i] * b;
        
        // 结果数组中存储的是每一次对应为相乘所得的结果 % 10的余数
        C.push_back(t % 10);
        
        // 此处 t 变量记录进位情况，每次的进位是 t / 10 取整得到的结果
        t /= 10;
    }

    // 如果 b = 0 的话，那么数组中存储的所有数据均为 0，即结果为 0
    // 但是此处我们是使用数组存储，所以输出会输出 len(A) 个 0
    // 所以此处应该去除前置 0，只保留一个即可
    while (C.size() > 1 && C.back() == 0) C.pop_back();

    return C;
}


int main()
{
    // 高精度乘法是高精度数 * 低精度数
    // 所以两个数一个用字符串定义，之后按位逆序存储到数组之中
    // 另一个数直接定义为整型即可
    string a;
    int b;

    cin >> a >> b;
	
    // 用数组来按位逆序存储高精度数
    vector<int> A;
    for (int i = a.size() - 1; i >= 0; i -- ) A.push_back(a[i] - '0');

    auto C = mul(A, b);

    // 起始存储为逆序存储，所以此处要将将结果逆序输出
    for (int i = C.size() - 1; i >= 0; i -- ) printf("%d", C[i]);

    return 0;
}
```

### 无注释版

``` cpp
#include <iostream>
#include <vector>

using namespace std;


vector<int> mul(vector<int> &A, int b)
{
    vector<int> C;
    int t = 0;
    
    for (int i = 0; i < A.size() || t; i ++ )
    {
        if (i < A.size()) 
            t += A[i] * b;
        C.push_back(t % 10);
        t /= 10;
    }

    while (C.size() > 1 && C.back() == 0) 
        C.pop_back();
    return C;
}


int main()
{

    string a;
    int b;
    cin >> a >> b;
    vector<int> A;
    for (int i = a.size() - 1; i >= 0; i -- ) 
        A.push_back(a[i] - '0');

    auto C = mul(A, b);

    for (int i = C.size() - 1; i >= 0; i -- ) 
        printf("%d", C[i]);

    return 0;
}
```

# 高精度除法

## 实现思路详解

### 数据存储

{% note success no-icon%}

注意乘法的运算是一个**高精度数**除以一个**低精度数**

所以在存储的过程中，要将**高精度数**使用**数组**逆序按位存储，**低精度数**直接定义为**整型**即可。

{% endnote %}

``` cpp
string a;
vector<int> A;

int b;
cin >> a >> b;
// 用数组来按位逆序存储高精度数
for (int i = a.size() - 1; i >= 0; i -- )  A.push_back(a[i] - '0');
```

### 模拟计算过程

{% note success no-icon%}

与其他几个运算不同的是，**除法**的运算是从**高位**开始计算的，**其他的运算**是从**低位[个位]**开始计算的。

因为**存储到数组中时是逆序存储**的，所以在除法**运算的时候也要逆序读取**进行运算。

{% endnote %}

``` cpp
// 除法与其他运算不同的是除法的运算是从最高位开始运算的
// 其他的运算是从最低位开始进行运算的
// 所以此处要逆序读取数组中的每一个数
for (int i = A.size() - 1; i >= 0; i -- )
{
    ……;
}
```

{% note success no-icon%}

在除法运算中，每一位计算的**被除数**均为**上一位计算所得的余数 * 10 + 当前位**所得。

每一位计算所得的**结果**为运算所得的**被除数 / 除数取整**的结果。

每一位计算的**余数**是运算所得的**被除数 % 除数取余**的结果

{% endnote %}

``` cpp
// 在手动模拟除法竖式的过程中
// 每次计算是通过每一次上一位计算所得的余数 * 10 + 当前位作为下一次运算的被除数
r = r * 10 + A[i];
        
// 每一位要存储的结果是运算所得的被除数 / 除数取整的结果
C.push_back(r / b);
        
// 每一位计算的余数是运算所得的被除数 % 除数取余的结果
r %= b;
```

{% note danger no-icon %}

例如：1234 / 11

**余数初始化为 0**

| 当前位 | 当前位被除数 | 当前位计算结果 | 当前位计算余数 |
| :----: | :----------: | :------------: | :------------: |
|   1    |      1       |       0        |       1        |
|   2    |      12      |       1        |       1        |
|   3    |      13      |       1        |       2        |
|   4    |      14      |       2        |       2        |

**当前位被除数：**  上一位计算所得的余数 * 10 + 当前位

**当前位计算结果：** 当前位被除数 / 除数取整

**当前位计算余数：** 当前位被除数 % 除数取余

{% endnote %}

{% note primary flat %}

img【1234  / 11 的过程】

{% endnote %}

### 处理前置零

{% note success no-icon%}

通过上面的 1234  / 11 的例子，我们可以发现高精度除法同样存在**高位为 0** 的情况。

所以我们同样要在模拟过程结束之后**对前置零进行处理**。

但是与其他运算不同的是，高精度除法的模拟过程是**从高位开始计算**的。

所以结果数组中存储的每一位的**结果是正序的**。

所以在处理前置零之前要**将结果数组翻转之后再进行处理**。

{% endnote %}

``` cpp
// 将结果数组进行翻转，调用 reverse 函数
reverse(C.begin(), C.end());

// 处理前置 0
while (C.size() > 1 && C.back() == 0) 
	C.pop_back();
```

### 输出

{% note info no-icon%}

高精度除法除了最终计算的**结果[商]**，有可能还存在额外的**余数**。

所以在输出时要注意将余数也进行输出。

在函数调用的过程中，余数是**通过地址进行调用**的。

所以在模拟结束之后余数变量记录的就是**最终的余数**，无需再进行传递。

{% endnote %}

``` cpp
// 起始存储为逆序存储，所以此处要将将结果逆序输出。
for (int i = C.size() - 1; i >= 0; i -- ) 
    cout << C[i];

// r 变量记录余数，在调用函数的过程中是将地址作为参数传递的。
// 所以在模拟结束后 r 变量记录的就是最终的余数。
cout << endl << r << endl;
```

{% note danger no-icon %}

注意在模拟的过程中，不论除数是几位数，每次模拟**都是从被除数的最高位**开始的。

只不过在手动计算的过程中会自动使用**和除数相同位数**的被除数开始计算。

而在计算机模拟的过程中，如果**除数为两位及以上**，那么**必定会存在前置零**的情况。

{% endnote %}

{% note info flat%}

最终的输出结果要视**题目而定**，此处讲解只是为了保证输出的完整性。

{% endnote %}

## C++代码实现

### 详细注释版

``` cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> div(vector<int> &A, int b, int &r)
{
    vector<int> C;
    
    // r 变量用来记录每一位计算之后所得的余数
    r = 0;
    
    // 除法与其他运算不同的是除法的运算是从最高位开始运算的
    // 其他的运算是从最低位开始进行运算的
    // 所以此处要逆序读取数组中的每一个数
    for (int i = A.size() - 1; i >= 0; i -- )
    {
        // 在手动模拟除法竖式的过程中
    	// 每次计算是通过每一次上一位计算所得的余数 * 10 + 当前位作为下一次运算的被除数
        r = r * 10 + A[i];
        
        // 每一位要存储的结果是运算所得的被除数 / 除数取整的结果
        C.push_back(r / b);
        
        // 每一位计算的余数是运算所得的被除数 % 除数取余的结果
        r %= b;
    }
    // 将结果数组进行翻转，调用 reverse 函数
    reverse(C.begin(), C.end());

    // 处理前置 0
    while (C.size() > 1 && C.back() == 0) 
        C.pop_back();
    return C;
}

int main()
{
    // 高精度除法是高精度数 / 低精度数
    // 所以两个数一个用字符串定义，之后按位逆序存储到数组之中
    // 另一个数直接定义为整型即可
    string a;
    vector<int> A;

    int b;
    cin >> a >> b;
    for (int i = a.size() - 1; i >= 0; i -- ) 
        A.push_back(a[i] - '0');

    // 除法与其他运算不同的是除法的返回值除了商还有余数，此处用 r 变量来记录余数。
    int r;
    auto C = div(A, b, r);

    // 起始存储为逆序存储，所以此处要将将结果逆序输出。
    for (int i = C.size() - 1; i >= 0; i -- ) 
        cout << C[i];

    // r 变量记录余数，在调用函数的过程中是将地址作为参数传递的。
    // 所以在模拟结束后 r 变量记录的就是最终的余数。
    cout << endl << r << endl;

    return 0;
}
```

### 无注释版

``` cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> div(vector<int> &A, int b, int &r)
{
    vector<int> C;
    r = 0;
    for (int i = A.size() - 1; i >= 0; i -- )
    {
        r = r * 10 + A[i];
        C.push_back(r / b);
        r %= b;
    }
    reverse(C.begin(), C.end());
    while (C.size() > 1 && C.back() == 0) 
        C.pop_back();
    return C;
}

int main()
{
    string a;
    vector<int> A;

    int B;
    cin >> a >> B;
    for (int i = a.size() - 1; i >= 0; i -- ) 
        A.push_back(a[i] - '0');

    int r;
    auto C = div(A, B, r);

    for (int i = C.size() - 1; i >= 0; i -- ) 
        cout << C[i];

    cout << endl << r << endl;

    return 0;
}
```

# Q&A

{% note warning flat%}

在学习的过程中遇到任何的问题都可以评论到评论区，看到有价值的提问会记录到Q&A之中！

{% endnote %}

{% note danger flat%}

auto 是什么意思？

{% endnote %}

{% note success no-icon%}

auto 关键字可以**自动推导变量的类型**，在使用过程中**必须给定变量一个值**才可以使用 auto



``` cpp
auto x = 10;    	// x的类型将被推导为int
auto y = 3.14;  	// y的类型将被推导为double
auto z = "hello";   	// z的类型将被推导为const char*
```

``` cpp
auto a;			// 不给定初始值会报错。
```



在本文中，auto 所接收的是函数返回值，类型自动识别为 **vector< int >**

{% endnote %}

