---
title: C++ 字符串
date: 2024-08-12 15:00:00
tags:
  - C++ 基础语法
categories:
  - 信奥赛
  - C++

---

# 前言

{% note warning flat%}

本文记录 C++ 相关的**字符串**的相关知识。

{% endnote %}

{% note warning flat%}

在阅读过程中有任何问题都可以发布到评论区，有价值的问题将会放到文章末尾Q&A之中！

{% endnote %}

# 什么是字符串

{% note success no-icon%}

由**多个字符组成的长序列**叫做字符串。

字符串是计算机和人类进行沟通的手段之一。

人类以字符串形式向计算机输入代码指令，计算机将其转化为 01 代码进行识别，最后将结构再以字符串形式展示给人类。

{% endnote %}

# ACSII码表

{% note success no-icon%}

在计算机内部，每个字符都对应有一个整数进行表示，计算机再将这个整数转化为二进制进行识别。

这个**字符与整数对应的表**为 **ASCII 码表**。

具体对应关系如下图所示。

{% endnote %}

![img](https://i-blog.csdnimg.cn/direct/5770daecc8af4fe687f4c284d155f7b1.jpeg)

{% note danger no-icon%}

在使用的过程中，常用的字符有：`'0'` 对应整数 `48`，`'A'` 对应整数 `65`， `'a'` 对应整数 `97`。

{% endnote %}

{% note success no-icon%}

在使用 ASCII 码表时，无需特殊记忆所有的内容，在做题过程中如果需要用到该表可以**直接打表输出**即可。

{% endnote %}

``` cpp
#include <iostream>

using namespace std;

int main(){
    // 常用的 ASCII 码值范围为 0 ~ 128 ，打表遍历只需遍历该范围即可。
    for(int i = 0; i <= 128; i ++){
        cout << i << " : " << (char)i << endl;
    }
    return 0;
}
```

## 整数与字符转化

{% note success no-icon%}

每个字符都有自己对应的 ASCII 码值，均可以实现**整数与字符的相互转化**。

{% endnote %}



``` cpp
#include <iostream>

using namespace std;

int main(){
    char c = 'a';
    cout << c << " 字符对应整数为： " << (int)c << endl;
    
    int num = 65;
    cout << num << " 整数对应字符为：" << (char)num << endl;
    return 0;
}
```

## 字符运算

{% note success no-icon%}

因为每个字符都对应有一个整数表示，所有**字符**也可以**直接进行运算**，参与运算时**使用该字符对应的整数**进行运算。

{% endnote %}

``` cpp
#include <iostream>

using namespace std;

int main(){
    int a = 'a' - 'A';
    int b = 'A' * 'B';
    char c = 'A' + 2;
    cout << "a - A = " << a << endl;
    cout << "A * B = " << b << endl;
    cout << "A + 2 = " << c << endl;
    return 0;
}
```

## 做题技巧

{% note success no-icon%}

在做题的过程中，如果涉及到字符的判断，可以**直接对字符**进行判断，也可以**使用其对应的 ASCII 码**进行判断。

{% endnote %}

{% note info no-icon%}

例题：输入一行字符，统计出其中数字字符的个数，以及字母字符的个数。

{% endnote %}

``` cpp
#include <iostream>

using namespace std;

int main(){
    char c;
    int nums = 0, chars = 0;
    while(cin >> c){
        // 直接对字符进行判断
        if(c >= '0' && c <= '9') nums ++;
        
        // 使用 a 和 z 对应的 ASCII 码值进行判断
        else if(c >= 97 && c <= 122) chars ++;
        
        // A 对应 ASCII 码值为 65
        else if(c >= 65 && c <= 'Z') chars ++;
        else break;
    } 
    cout << nums << " " << chars << endl; 
    return 0;
}
```

# 字符串

## 字符数组

{% note success no-icon%}

定义一个 **char 类型的数组**就是一个**字符数组**。

字符数组和字符串是极其类似的，**字符串**就是在**字符数组的末尾再加上一个结束符 '\0'**。

该结束符的意义是指明该**字符串是在哪里结束**。

可以使用字符串来初始化字符数组，但此时要注意，每个字符串结尾会**暗含一个’\0’字符**，因此**字符数组的长度至少要比字符串的长度多1**！同时，如果数组范围**没有预留结束符的位置**，使用字符串初始化的方式是**错误的**。

{% endnote %}

``` cpp
#include <iostream>

using namespace std;

int main(){
    // a1 a2 使用数组初始化的方式进行初始化
    char a1[] = {'C', '+', '+'};		// 末尾没有'\0'，a1 为字符数组
    char a2[] = {'C', '+', '+','\0'};	// 末尾有'\0'，a2 为字符串
    
    // a3 a4 使用字符串的方式进行初始化
    char a3[] = "C++";					// 末尾自动添加表示字符串的结束符
    char a4[6] = "ABCDEF";				// 没有空间可以存放结束符，错误
    
    cout << "a1 长度为：" << sizeof a1 << endl; 
    cout << "a2 长度为：" << sizeof a2 << endl;
    cout << "a3 长度为：" << sizeof a3 << endl;
    cout << "a4 长度为：" << sizeof a4 << endl;
    
    return 0;
}
```

## 输入

{% note success no-icon%}

可以直接使用 `cin 字符串名` 进行输入。

但是使用 cin 进行输入时，**不会将空格识别为字符**。

即当输入的字符串包含空格时，只会识别到空格之前的字符串。

{% endnote %}

``` cpp
#include <iostream>

using namespace std;

int main(){
    char str[100];
    // 输入测试1 ： “ABCDEF”
    // 输入测试2 ： “ABC DEF“
    cin >> str;
    cout << str << endl;  
    return 0;
}
```

{% note success no-icon%}

想要输入包含空格的字符串时，需要用到 `fgets()` 函数.

fgets() 函数当遇到回车才表示输入结束，当遇到空格时，会将其识别为字符。

fgets() 函数默认三个参数，第一个参数填写 `字符串名`，第二个参数填写 `字符串长度`【表示最多读入到哪个字符】，第三个参数默认填写 `stdin`

{% endnote %}

``` cpp
#include <iostream>

using namespace std;

int main(){
    char str[100];
    // 输入测试1 ： “ABCDEF”
    // 输入测试2 ： “ABC DEF“
    fgets(str, 100, stdin);
    cout << str << endl;
    return 0;
}
```

{% note danger no-icon%}

注意在某些课程中会提供一个 `gets()` 函数，在最新的 C++ 标准中**已经将其删除**，目前使用的话有可能不会报错，但是**在竞赛中是属于错误的语法!!!**

{% endnote %}

{% note success no-icon%}

使用 `scanf` 也可以输入字符串，对应的标准格式类型为 `%s` 。

但是要注意和其他类型变量不同的是，在输入字符串时，scanf **不需要添加** `&`。

因为**数组名会自动指向数组首元素的地址**，无需再次引用。

同时，与 cin 相同，**scanf 也不能识别空格**，需要使用 `fgets` 函数进行输入。

{% endnote %}

``` cpp
#include <iostream>

using namespace std;

int main(){
    char str[100];
    scanf("%s", str);
    cout << str << endl;  
    return 0;
}
```

### 做题技巧

{% note success no-icon%}

输入**默认的下标是从 0 开始**的。

想要输入的下标从非 0 位置开始，可以输入时，输入 `字符串名 + 长度` 来改变起始下标。

{% endnote %}

``` cpp
#include <iostream>

using namespace std;

int main(){
    char str[100];
    cin >> str + 1;
    // scanf("%s", str + 1);     // 同样效果
    cout << str + 1 << endl;  
    return 0;
}
```

## 输出

{% note success no-icon%}

输出可以直接用 `cout / printf` 进行输出

此外，想要从第几个字符开始进行输出，可以使用输出 **字符串名 + 数量** 的方式进行输出.

{% endnote %}

``` cpp
#include <iostream>

using namespace std;

int main(){
    char a1[100] = "ABCDEFG";
    cout << a1 << endl;
    cout << a1 + 1 << endl;
    cout << a1 + 2 << endl;
    cout << a1 + 3 << endl;
//    printf("%s\n", a1);
//    printf("%s\n", a1 + 1);
//    printf("%s\n", a1 + 2);
//    printf("%s\n", a1 + 3);
    return 0;
}
```

{% note success no-icon%}

字符串的输出还有一个常用的函数 `puts()`。

可以**直接输出字符串**或者在括号内**填写字符串名输出该字符串**并且**换行**。

{% endnote %}

``` cpp
#include <iostream>

using namespace std;

int main(){
    // 直接输出字符串并且换行
    puts("Hello World!!");
    // 效果等价于下述代码
    // printf("Hello World!!\n");
    
    // 输出定义的字符串
    char a[100] = "ABCDEFG";
    puts(a);
    // 效果等价于下述代码
    // cout << a << endl;
	return 0;
}
```

## 常用函数

{% note success no-icon%}

在 C++ 中，字符串有一些常用的函数方便程序的编写。

在使用字符串的函数时，需要引入头文件 `#include <cstring>`.

常用的函数有如下几个：

- `strlen(字符串名)`，求字符串的**长度**.
- `strcmp(字符串a, 字符串b)`，**比较两个字符串**的大小，比较的方式是使用**字典序[ASCII 码小的就小]**进行比较。
  - a < b 返回 -1
  - a == b 返回 0
  - a > b 返回 1
- `strcpy(字符串a, 字符串b)`，将字符串b**复制**给从a开始的字符串。

{% endnote %}

``` cpp
#include <iostream>
#include <cstring>

using namespace std;

int main(){
    char a[100] = "Hello World!";
    cout << "strlen(a) = " << strlen(a) << endl;
    
    // 逐位比较，如果对应位置字符相同则比较下一个字符。
    char b[100] = "abc";
    char c[100] = "aaa";
    cout << "strcmp(b, c) = " << strcmp(b, c) << endl;
    
    char d[100];
    strcpy(d, a);
    cout << "d = " << d << endl;
    return 0;
}
```

## 遍历

{% note success no-icon%}

字符串本质是字符数组，所以**和数组的遍历方式相似**。

在读取**长度**时，用 `strlen` 函数读取。

在做题过程中，防止每次循环都计算一次长度，一般使用额外一个变量提前计算长度。

{% endnote %}

``` cpp
#include <iostream>
#include <cstring>

using namespace std;

int main(){
    char a[100] = "Hello World!";
    
    // 提前计算长度，防止每次循环重复计算，增加代码运行时间。
    int len = strlen(a);
    for(int i = 0; i < len; i ++ ){
        cout << a[i] << endl;
    }
    return 0;
}    
```

{% note info no-icon%}

例题：给定一个只包含小写字母的字符串，请你找到第一个仅出现一次的字符。如果没有，输出“no”。

{% endnote %}

{% note success no-icon%}

解题思路：输入的字符串只包含小写字母，共 26 个，可以额外使用一个数组来记录每个字符出现的次数，最后在重新遍历字符串，判断其对应数组值是否为 1 即可。

{% endnote %}

{% note danger no-icon%}

注意在最后遍历时要**遍历原字符串**，**不可遍历计数数组**，因为题目要求时输出第一个只出现一次的字符，不是字典序中最小的只出现一次的字符。

如果遍历计数数组的话，假如输入`za`，按照题目要求应该输出 `z`，但是遍历计数数组会输出 `a`

{% endnote %}

 ``` cpp
#include <iostream>
#include <cstring>

using namespace std;

// str 记录字符串
char str[100010];
// cnt 作为计数数组，记录每个字符出现的次数
int cnt[30];

int main(){
    cin >> str;
	int len = strlen(str);
    
    // 遍历原字符串，每次访问到一个字符，将其对应到数组中计数累加
    for(int i = 0; i < len; i ++){
        cnt[str[i]  - 'a'] ++;
    }
    
    // 遍历原字符串
    for(int i = 0; i < len; i ++){
        // 判断访问到的字符的出现次数
        if(cnt[str[i] - 'a'] == 1){
            // 题目要求只输出第一个字符，当判断成立，输出之后直接 return 0 结束程序即可。
            cout << str[i] << endl;
            return 0;
        }
    }
    
    // 如果遍历完成之后，程序还没有结束，说明没有满足题目要求的情况
    // 输出 no
    puts("no");
    return 0;
}
 ```

# String

{% note success no-icon%}

在 C++ 中，**C++ 的标准库 (STL)** 是 C++ 的核心组成部分之一，其中提供了大量的数据结构和算法。

`string` 是 **STL** 中用于处理字符串的一个标准库。

在使用该标准库对字符串进行操作时，要调用头文件 `#include <string>`

{% endnote %}

## 定义和初始化

{% note success no-icon%}

string 定义字符串的方式和变量定义的方式是相同的，直接 `string 变量名;` 即可。

{% endnote %}

{% note success no-icon%}

在初始化 string 类型字符串时有三种方法。

- 直接定义为一个字符串。
- 直接定义等于另一个 string 类型字符串。
- 定义为重复的单个字符。

{% endnote %}

``` cpp
#include <iostream>
#include <string>

using namespace std;

int main(){
    // 定义一个空字符串 s1
    string s1;
    
    // 初始化
    // 直接初始化为字符串
    string s2 = "Hello World!";
    
    // 初始化一个字符串与 s2 相同
    // 等价于数组方式定义字符串中的 strcpy 函数
    string s3 = s2;
    
    // 初始化字符串为连续的单个字符，s4 = "cccccccccc"
    string s4(10, 'c');
    return 0;
}
```

## 输入输出

{% note success no-icon%}

可以直接使用 `cin/cout` 实现 string 类型字符串的输入输出。

{% endnote %}

``` cpp
#include <iostream>
#include <string>

using namespace std;

int main(){
    string s1, s2;
    cin >> s1 >> s2;
    
    cout << "s1 = " << s1 << " s2 = " << s2 << endl;
	return 0;
}
```

{% note success no-icon%}

但是和数组类型字符串相同，使用 **cin** 输入同样**不识别空格**。

string 类型**读取空格**需要使用 `getline` 函数实现。

**getline语法：getline(cin, 字符串名)**

{% endnote %}

``` cpp
#include <iostream>
#include <string>

using namespace std;

int main(){
    string s;
    
    // 测试输入1：ABCDEF
    // 测试输入2：ABC DEF
	getline(cin, s);
    
    cout << s << endl;
    return 0;
}
```

## 常用操作

### 拼接字符串

{% note success no-icon%}

string 字符串可以直接进行拼接，**直接相加**即可。

{% endnote %}

``` cpp
#include <iostream>
#include <string>

using namespace std;

int main(){
    string s1 = "Hello";
    string s2 = " World!";
    
    cout << "s1 = " << s1 << " s2 = " << s2 << endl;
    
    // 直接相加进行拼接
    string s = s1 + s2;
    cout << "拼接后字符串为：" << s << endl;
    return 0;
}
```

{% note success no-icon%}

如果使用**数组形式字符串进行拼接**时，需要进行**两次遍历**。

{% endnote %}

``` cpp
#include <iostream>
#include <cstring>

using namespace std;

int main(){
    char s1[] = "Hello";
    char s2[] = " World!";
    char s3[110];
    
    // len1 记录 s1 长度， len2 记录 s2 长度
    int len1 = strlen(s1), len2 = strlen(s2);
    // cnt 作为下标向 s3 内逐位复制字符
    int cnt = 0;
    
    // 遍历第一个字符串，将其复制到 s3 中
    for(int i = 0; i < len1; i ++ ){
        s3[cnt] = s1[i];
        cnt ++;
    }
    
    // 遍历第二个字符串，将其复制到 s3 中
    for(int i = 0; i < len2; i ++ ){
        s3[cnt] = s2[i];
        cnt ++;
    }

    for(int i = 0; i < strlen(s3); i ++ ){
        cout << s3[i];
    }
    cout << endl;
    
    return 0;
}
```

### 常用函数

{% note success no-icon%}

- `size()`：返回字符串的**长度**。
- `empty()`：检查字符串**是否为空**。
- `operator[]`：通过索引**访问**字符串中的**字符**。
- `substr()`：**获取子字符串**。
- `find()`：**查找子字符串**在主字符串中的**位置**。

{% endnote %}

``` cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    // 声明并初始化字符串
    string s1 = "Hello, World!";
    cout << "原字符串： " << s1 << endl;

    // 使用 size() 获取字符串长度
    cout << "s1 的长度为: " << s1.size() << endl;

    // 使用 empty() 检查字符串是否为空
    cout << "该字符串是否为空？" << (s1.empty() ? "Yes" : "No") << endl;

    // 使用 operator[] 访问特定位置的字符
    cout << "下标为 7 的元素为： " << s1[7] << endl;

    // 使用 substr() 获取子字符串
    string sub = s1.substr(7, 5);
    cout << "从下标为 7 的位置开始获取长度为 5 的字串： " << sub << endl;

    // 使用 find() 查找子字符串
    cout << "字串 “World” 的下标开始位置为： " << s1.find("World") << endl;

    return 0;
}
```

# Q&A

