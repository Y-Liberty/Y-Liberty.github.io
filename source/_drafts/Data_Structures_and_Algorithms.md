---
title: 23考研-数据结构-绪论
date: 2022-05-02 11:19:11
tags: 
	- 数据结构
categories:
	- 研究生入学考试
---

# 数据结构

## 什么是数据结构 

### **数据**

​		<font color="red">**数据**</font>是信息的载体，是描述客观事物属性的数、字符及所有能输入到计算机中并被计算机程序识别和处理的符号的集合。数据是计算机程序加工的原料。

### **数据元素、数据项**

​	<font color="red">**数据元素**</font>是数据的基本单位，通常作为一个整体进行考虑和处理。
​	一个数据元素可由若干数据项组成，<font color="red">**数据项**</font>是构成数据元素的不可分割的最小单位。

### **数据对象、数据结构**

​	<font color="red">**数据对象**</font>是具有相同性质的数据元素的集合，是数据的一个子集。

​	<font color="red">**数据结构**</font>是相互之间存在一种或多种特定关系的数据元素的集合。

## 数据结构三要素

### 逻辑结构

#### **集合结构**

​	各个元素同属一个集合，别无其他关系。

​	**图示：**

![image.png](https://s2.loli.net/2022/05/02/QFTvUesOY173Ckd.png)

#### **线性结构**

​	数据元素是<font color="red">**一对一**</font>的关系。

​	除了第一个元素，所有元素都有唯一前驱。

​	除了最后一个元素，所有元素都有唯一后继。

**图示：**

![image.png](https://s2.loli.net/2022/05/02/dKv495687RsQcx2.png)

#### **树形结构**

​	数据元素之间是<font color="red">**一对多**</font>的关系

**图示：**

![image.png](https://s2.loli.net/2022/05/02/WXtUdeY4ZNTwmh9.png)

#### **图状结构**

​	数据元素之间是<font color="red">**多对多**</font>的关系

**图示：**

![image.png](https://s2.loli.net/2022/05/02/hkXfTPgsmWS56Zw.png)

### 数据的运算

​	针对于某种逻辑结构，结合实际需求，定义<font color="red">**基本运算**</font>

​	**例如：逻辑结构-线性结构的基本运算**

​	1、查找第 i 个位置元素

​	2、在第 i 个位置插入新的数据元素

​	3、删除第 i 个位置的数据元素

​	......

#### <font color = "red">注意</font>

​	1、<font color="red">**运算的定义**</font>是<font color="red">**针对逻辑结构**</font>的，指出运算的功能。

​	2、<font color="red">**运算的实现**</font>是<font color="red">**针对存储结构**</font>的，指出运算的具体操作步骤。

### 物理结构（存储结构）

#### 顺序存储

​	把<font color="red">**逻辑上相邻的元素存储在物理位置上也相邻的存储单元中**</font>，元素之间的关系由存储单元的邻接关系来表示。

​	**图示：**

![image.png](https://s2.loli.net/2022/05/02/1AKFDmzoa7vIJnX.png)

#### 链式存储

​	<font color="red">**逻辑上相邻的元素在物理位置上可以不相邻**</font>，借助指示元素存储地址的指针来表示元素之间的逻辑关系。

​	**图示：**

![image.png](https://s2.loli.net/2022/05/02/x7Y8vacSoXV3EpT.png)

#### 索引存储

​	在存储元素的信息的同时，还建立附加的<font color="red">**索引表**</font>。索引表中的每项成为<font color= "red">**索引项**</font>，索引项的形式一般是<font color="red">**(关键字,地址)**</font>。

​	**图示：**

![image.png](https://s2.loli.net/2022/05/02/tuGm7KaAQCp46JH.png)

#### 散列存储

​	根据元素的关键字直接计算出该院色的存储地址，又称<font color="red">**哈希（Hash）存储**</font>。

#### <font color = "red">注意</font>

1、链式存储， 索引存储，散列存储称为<font color="red">**非顺序存储**</font>。

2、若采用<font color="red">**顺序存储**</font>，则各个数据元素在物理上必须是<font color="red">**连续的**</font>；若采用<font color="red">**非顺序存储**</font>，则各个数据元素在物理上可以是<font color="red">**离散的**</font>。
2、数据的存储结构会<font color="red">**影响存储空间分配的方便程度**</font>。
3、数据的存储结构会<font color="red">**影响对数据运算的速度**</font>。

## 数据类型、抽象数据类型

### 数据类型

<font color="red">**数据类型**</font>是**一个值的集合**和**定义在此集合上的一组操作**的总称。

1、原子类型。其值不可再分的数据类型。
2、结构类型。其值可以再分解为若干成分（分量）的数据类型。

### 抽象数据类型

<font color="red">**抽象数据类型**（Abstract Data Type, **ADT**）</font>是**抽象数据组织**及**与之相关的操作**。

## 总结

![image.png](https://s2.loli.net/2022/05/02/FJtTVPIbzwhGSmQ.png)

# 算法

## 什么是算法

​	算法（Algorithm）是<font color="red">**对特定问题求解步骤的一种描述**</font>，它是指令的有限序列，其中的每条指令表示一个或多个操作。

**注意**

​	<font color="red">**程序 = 数据结构 + 算法**</font>

​	1、数据结构是要处理的信息

​	2、算法是处理信息的步骤

## 算法的特性

### 有穷性

​	一个算法必须在执行有穷步之后结束，且每一步都可在又穷时间内完成。

​	<font color="red">**注意：算法**</font>必须是<font color="red">**有穷的**</font>，而<font color="red">**程序**</font>可以是<font color="red">**无穷的**</font>。

### 确定性

​	算法的每条指令必须有确切的含义，对于<font color="red">**相同的输入**</font>只能得到<font color="red">**相同的输出**</font>。

### 可行性

​	算法中描述的操作都可以通过已经实现的<font color="red">**基本运算执行有限次来实现**</font>。

### 输入

​	一个算法<font color="red">**有零个或多个输入**</font>，这些输入取自于某个特定的对象的集合。

### 输出

​	一个算法<font color="red">**有一个或多个输出**</font>，这些输出是与输入有着某种特定关系的两。

### 注意

​	算法的特性是一个算法<font color="red">**必须要满足**</font>的性质，缺一不可。

## ”好“算法的特质

### 正确性

​	算法应能够<font color=red>**正确的解决求解问题**</font>。

### 可读性

​	算法应具有<font color=red>**良好的可读性**</font>，以帮助人们理解。

### 健壮性

​	输入非法数据时，算法能<font color=red>**适当的作出反应或进行处理**</font>，而不会产生莫名其妙的输出结果。

### 高效率与低存储量需求

​	高效率：花的时间少，<font color="red">**时间复杂度低**</font>。

​	低存储量：不费内存，<font color=red>**空间复杂度低**</font>。

## 总结

![image.png](https://s2.loli.net/2022/05/02/GouwVmNz7MlpfYB.png)

# 算法的效率

## 时间复杂度

### 什么是算法的时间复杂度

<font color=red>**事先预估**</font>算法<font color=red>**时间开销 T(n)**</font> 与<font color=red>**问题规模 n**</font> 的关系。（T 表示 "Time"）

### 如何计算时间复杂度

​	1、找到一个<font color=red>**基本操作（最深层循环）**</font>。

​	2、分析该基本操作的<font color=red>**执行次数 x**</font>   与 <font color=red>**问题规模 n**</font>的关系 <font color=red>**x = f(n)**</font>。

​	3、x 的数量级 <font color=red>**O(x)**</font>  就是算法的时间复杂度 T(n)。

### 常用技巧

**加法规则：**

​	O(f(n)) + O(g(n)) = O(max(f(n),g(n))

**乘法规则：**

​	O(f(n)) * O(g(n)) = O (f(n)*g(n))

**常见时间复杂度的大小：**

​	O(1) < O(log<sub>2</sub>n) < O(n) < O(n * log<sub>2</sub>n) < O(n<sup>2</sup>) < O(n<sup>3</sup>) < O(2<sup>n</sup>)  < O(n!) < O(n<sup>n</sup>) 

**注意：**

​	常数级别的复杂度可以忽略不计，即：O(4n) = O(n)

### 三种复杂度

#### 最坏时间复杂度

​	考虑输入数据<font color=red>**最坏**</font>的情况.

#### 平均时间复杂度

​	考虑所有输入数据都<font color=red>**等概率出现**</font>的情况.

#### 最好时间复杂度

​	考虑输入数据<font color=red>**最好**</font>的情况.

### 时间复杂度分析

#### 逐步递增型输出

```cpp
void Print(int n){
    int i = 1;
    while(i <= n){
        i ++ ;
        printf("Hello World!\n");
    }
    printf("Hello World!\n");
}
```

**逐行分析**

```
	第 2 行语句共执行 1 次
	第 3 行语句共执行 n + 1
	第 4 和第 5行语句分别执行 n 次
	第 7 行语句共执行 1 次
	故整体时间复杂度为 T(n) = 3n + 3 = O(n)
```

#### 嵌套循环型输出

```cpp
void Print(int n){
    int i = 1;
    while(i <= n){
        i ++ ;
        printf("Hello World!\n");
        for(int j = 1; j <= n; j ++ ){
            printf("Hello code!\n");
        }
    }
    printf("Hello World!\n");
}
```

**分析**

```
第 3 行 while 循环共执行 n 次
第 6 行 for 循环共执行 n^2次
故整体时间复杂度为 T(n) = O(n^2) + O(n) = O(n^2)
```

#### 指数递增型输出

```cpp
void Print(int n){
    int i = 1;
    while(i <= n){
        i *= 2 ;
        printf("Hello World!\n");
    }
    printf("Hello World!\n");
}
```

**分析**

```
第 4 行，i 成指数型增长
循环结束刚好满足 2^x > n
得出 x = log2n + 1
故整体时间复杂度为 T(n) = O(x) = O(log2n)
```

#### 搜索数字型输出

```cpp
void Print(int flag[], int n){
    int i = 1;
    while(i <= n){
        if(flag[i] == n){
            printf("Hello World!\n");
            break;
        }
    }
}
```

**分析**

```
若元素 n 在第一个位置，则第一层循环就可以找到		    —— 最好时间复杂度  T(n) = O(1)
若元素 n 在最后一个位置，则需要遍历整个数组		    —— 最坏时间复杂度  T(n) = O(n)
假设元素 n 在任意一个位置的概率相同为1/n		    —— 平均时间复杂度  T(n) = O(n)
```

## 空间复杂度

### 什么是空间复杂度

​	<font color=red>**空间开销（内存开销）**</font>与<font color=red>**问题规模 n**</font> 之间的关系。

### 如何计算空间复杂度

#### 普通程序

​	1、找到<font color=red>**所占空间大小**</font>与问题规模<font color=red>**相关的变量**</font>。

​	2、分析所占空间x与问题规模n的关系<font color=red>**x=f(n)**</font>。

​	3、×的数量级<font color=red>**O(x)**</font>就是算法空间复杂度<font color=red>**S(x)**</font>。

#### 递归程序

​	1、找到递归调用的深度×与问题规模n的关系×=f(n)

​	2、×的数量级O(x)就是算法空间复杂度S(n)

**注意：有的算法各层函数所需存储空间不同，分析方法略有不同**

### 常用技巧

**加法规则 :** 

​	O(f(n)) + O(g(n)) = O(max(f(n), g(n)))

**乘法规则：**

​	O(f(n)) × O(g(n)) = O(f(n)×g(n))

**常见的空间复杂度的大小：**

O(1) < O(log<sub>2</sub>n) < O(n) < O(nlog<sub>2</sub>n) < O(n) < O(n) < O(2<sup>n</sup>) < O(n!) < O(n<sup>n</sup>)

**注意：**

​	常数级别的复杂度可以忽略不计，即：O(4n) = O(n)

### 空间复杂度分析

#### 一维数组

```cpp
void test(int n){
    int flag[n];
    int i;
}
```

**分析**

```
假设一个 int 类型的变量占 4B 的内存空间
那么 n 占 1 个 int 的空间
flag 占 n 个 int 的空间
i 占 1 个 int 的空间
则所需的内存空间 = 4 + 4n + 4 = 4n + 8
S(n) = O(n)
```

#### **二维数组**

```cpp
void test(int n){
    int flag[n][n];
    int i;
}
```

**分析**

```
那么 n 占 1 个 int 的空间
flag 占 n * n 个 int 的空间
i 占 1 个 int 的空间
则所需的内存空间 = 4 + 4(n*n) + 4 = 4n + 8
S(n) = O(n*n)
```

#### 一维数组 + 二维数组

```cpp
void test(int n){
    int flag[n][n];
    int other[n];
    int i;
}
```

**分析**

```
flag 占 n * n 的空间
other 占 n 的空间
根据加法规则
总的空间复杂度为：S(n) = O(n * n)
```

#### 递归型调用

```cpp
void Print(int n){
    if(n > 1){
        Print(n - 1);
    }
    printf("Hello World!\n");
}
```

**分析**

```
可以看出当 n > 1 时函数调用自身
每次调用一次将会在内存中开辟一块新的内存空间来存储当前的 n
故递归算法的空间复杂度 = 递归调用的深度
S(n) = O(n)
注：[此处的 n 指的是一个函数所占用的总的内存空间]
```

