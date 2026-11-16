---
title: 23考研-数据结构-线性表
date: 2022-05-02 12:47:41
tags:
	- 数据结构
	- 线性表
categories:
	- 研究生入学考试
---

# 线性表

## 线性表的定义

1、线性表是具有<font color=blue>**相同**</font>数据类型的n（n ＞= 0）个<font color=purple>**数据元素**</font>的<font color=blue>**有限序列**</font>，其中 n 为<font color=red>**表长**</font>。

2、当 n = 0 时，线性表为一个<font color=red>**空表**</font>。

3、若用 L 命名线性表，则其一般表示为：

<font color=red>**L = (a<sub>1</sub>, a<sub>2</sub>, ..., a<sub>i</sub>, a<sub>i + 1</sub>, ..., a<sub>n</sub>)**</font>

**几个概念：**

1、a<sub>i</sub> 是线性表中的“第 i 个”元素线性表中的<font color=red>**位序(位序从 1 开始，下标从 0 开始)**</font>。

2、a<sub>1</sub> 是<font color = red>**表头元素**</font>， a<sub>n</sub>是<font color = red>**表尾元素**</font>。

3、除第一个元素外，每个元素有且仅有一个<font color = red>**直接前驱**</font>；除最后一个元素外，每个元素有且仅有一个<font color = red>**直接后继**</font>。

**图示：**

![image.png](https://s2.loli.net/2022/05/02/dKv495687RsQcx2.png)

## 线性表的基本操作

```cpp
InitList(&L); 		// 初始化表。构造一个空的线性表L，分配内存空间
DestoryList(&L);	// 销毁操作。销毁线性表，并释放线性表L所占空间

ListInsert(&L,i,e);	// 插入操作。在表L中第i个位置插入指定元素 e
ListDelete(&L,i,&e);	// 删除操作。删除表L中第i个位置的元素，并用e返回删除元素的值

LocateElem(L,e);	// 按值查找操作。在表L中查找具有给定关键字值的元素
GetElem(L,i);		// 按位查找操作。获取表L中第i个位置的元素的值 

Length(L);		// 求表长。返回线性表L的长度，即L中元素的个数。
PrintList(L);		// 输出操作。按前后顺序输出线性表L的所有元素值
Empty(L);		// 判空操作。若L为空表，则返回true，否则返回false
```

# 顺序表

## 什么是顺序表

顺序表是用<font color = red>**顺序存储结构**</font>来存储的线性表。

## 顺序表的实现

### 静态分配

通过定义一个<font color = red>**静态数组**</font>来存放顺序表中的元素。

```cpp
#define MaxSize 10			// 定义最大长度
typedef struct{
    ElemType data[MaxSize];		// 用静态的“数组”存放数据元素
    int length;				// 记录顺序表的当前长度
}SqList;				// 顺序表的类型定义
```

**静态分配的基本操作**

**1、初始化一个顺序表**

```cpp
void InitList(SqList &L){
    L.length = 0;			// 顺序表初始长度为 0
}
```

**2、打印整个顺序表**

```cpp
void PrintList(L){
    for(int i = 0; i < L.length; i ++ ){
        printf("data[%d] = %d\n", i, L.data[i]);
    }
}
```

**静态分配的缺点**

静态分配使用数组存放数据，表长是<font color=red>**确定的**</font>，如果数组存满了就无法继续存放数据。

如果一开始就声明一个很大的内存空间，有可能会<font color=red>**造成空间的浪费**</font>。

### 动态分配

通过<font color = red>**malloc函数**</font>动态申请内存空间

```cpp
#define InitSize 10		// 默认的最大长度
typedef struct{
    int *data;			// 指示动态分配数组的指针
    int MaxSize;		// 顺序表的最大容量
    int length;			// 顺序表的当前长度
}SeqList;
```

**动态分配的基本操作**

**1、初始化一个顺序表**

```cpp
void InitList(SeqList &L){
   // 使用 malloc 函数申请一片连续的内存空间
    L.data = (int *)malloc(InitSize * sizeof(int));
    L.length = 0;		// 初始化当前顺序表长度为 0
    L.MaxSize = InitSize;	// 初始化顺序表的最大长度为InitSize
}
```

**2、增加动态数组的长度**

```cpp
void IncreaseSize(SeqList &L, int len){
    int *p = L.data;			// 定义一个临时变量 p 来记录原表所指向的起始地址
    // 重新申请一片长度为L.MaxSize + len的内存空间
    L.data = (int *)malloc((L.MaxSize + len)*sizeof(int));
    for(int i = 0; i < L.length; i ++ ){
        L.data[i] = p[i];		// 将原表中的元素赋值到新申请的地址中
    }
    L.MaxSize = L.MaxSize + len；	// 重新计算 L 的最大容量
    free(p);				// 释放p指针所指向的内存空间
}
```

## 顺序表的特点

1、<font color = red>**随机访问**</font>，即可以在O(1)时间内找到第i个元素。

2、存储密度高，每个节点只存储数据元素

3、拓展容量不方便（即便采用动态分配的方式实现，拓展长度的时间复杂度也比较高)

4、插入、删除操作不方便，需要移动大量元素

## 顺序表的基本操作

**注：**顺序表的基本操作均基于**静态分配**方式说明

### 插入

**Code：**

```cpp
// 向顺序表中位序为 i 的位置插入一个元素 n
bool InsertSeqList(SeqList& L, int i, int e) {
    // 判断输入是否合法
    if (i < 1 || i > L.length + 1) {
        return false;
    }
    // 判断当前存储空间是否已满
    if (L.length >= L.Maxsize) {
        return false;
    }
    // 逆序遍历，将第i个元素及后面的元素向后移动一位
    for (int j = L.length; j >= i; j--) {
        L.data[j] = L.data[j - 1];
    }
    // 将 e 复制到下标为 i - 1 的位置
    L.data[i - 1] = e;
    // 更新 L 的长度
    L.length++;
    return true;
}
```

**时间复杂度分析：**

> **最好情况:新元素插入到表尾，不需要移动元素**
>     	i = n + 1，循环 0 次 
>     	最好时间复杂度 = O(1)
> 	
> **最坏情况:新元素插入到表头，需要将原有的n个元素全都向后移动**
>     	i = 1，循环 n 次 
>    	 最坏时间复杂度 = O(n);
> 	
> **平均情况:假设新元素插入到任何一个位置的概率相同**
>     	即i=1,2,3.. , length+1的概率都是p=1/(n+1)
>     	平均时间复杂度：O(n)

### 删除

**Code：**

```cpp
// 删除顺序表中位序为 i 的元素并且返回被删除的值
bool DeleteSeqlist(SeqList& L, int i, int& e) {
    // 判断输入是否合法
    if (i < 1 || i > L.length) {
        return false;
    }
    // e 记录被删除的元素的值
    e = L.data[i - 1];
    // 将第 i 个位置后的元素前移
    for (int j = i; j < L.length; j++) {
        L.data[j] = L.data[j + 1];
    }
    // 更新 L 的长度
    L.length--;
    return true;
}
```

**时间复杂度分析：**

> **最好情况:删除表尾元素，不需要移动其他元素**
>    	 i = n，循环 0 次;
>     	最好时间复杂度 = O(1)
> 	
> **最坏情况:删除表头元素，需要将后续的n-1个元素全都向前移动**
>   	  i = 1，循环 n - 1 次;
>    	 最坏时间复杂度 = O(n);
> 	
> **平均情况:假设删除任何一个元素的概率相同，即 i= 1,2,3.... length 的概率都是 p = 1/n**
>     	i = 1，循环n-1次; i = 2，循环n-2次; i = 3，循环n-3次 ... i = n时，循环0次
>     	平均时间复杂度 = O(n)

### 按位查找

**Code：**

```cpp
// 获取表中第 i 个位置的元素的值
int GetElem(SqList L, int i){
    return L.data[i - 1];	// 直接返回下标为 i - 1 的元素的值即可
}
```

**时间复杂度分析：**

> 因为顺序表是连续存放的，所以直接返回数组下标对应的元素即可
>     	时间复杂度：O(1)

**注：**

**1、动态分配与静态分配均可直接返回数组下标对应的元素的值**

**2、按位查找体现出顺序表的<font color=red>随机存取</font>的特性**

### 按值查找

**Code：**

```cpp
// 在顺序表中查找第一个元素值为e的元素，并返回其位序
int LocateElem(SqList L, int e){
    for(int i = 0; i < L.length; i ++ ){
        if(L.data[i] == e){
            return i + 1;
        }
    }
    return 0;
}
```

**分析：**

> **最好情况:目标元素在表头**
>     	循环1次
>     	最好时间复杂度 = O(1)
> 	
> **最坏情况:目标元素在表尾**
>     	循环n次
>    	 最坏时间复杂度 = O(n)
> 	
> **平均情况:假设目标元素出现在任何一个位置的概率**
>     	目标元素在第1位，循环1次;在第2位，循环2次;....;在第n位，循环n次
>     	平均时间复杂度 = O(n)

# 单链表

## 什么是单链表

通过<font color= red>**链式存储**</font>的方式存储的顺序表.

每个结点除了存放<font color= red>**数据元素**</font>外，还有存储<font color= red>**指向下一个节点的指针**</font>。

## 单链表的实现

```cpp
typedef LNode{
    ElemType data;		// 结点中存放元素值，Elemtype为题目要求的数据类型
    struct LNode *next;		// 存放指向像一个结点的指针
}LNode, *LinkList;
```

**注：**

> 因为可以通过头结点来表示整个单链表，所以我们可以声明两个不同的变量名称来提高代码的可读性
> 		1、若强调当前为一个单链表，则使用 LinkList 作为变量名
> 		2、若强调当前为头结点，则使用 LNode * 作为变量名

## 单链表的特点

> 1、不要求大片的连续空间，改变容量方便
> 2、不可随机存取，要耗费一定空间存放

## 单链表的基本操作

### 初始化

**1、带头结点**

```cpp
// 初始化一个单链表(带头结点)
bool InitList(LinkList &L){
    L = (LNode *)malloc(sizeof(LNode));	// L 申请一个内存空间作为头结点
    if(L == NULL){			
        return false;			// 若 L = NULL 说明申请失败，内存不足
    }	
    L -> next = NULL;			// 头结点后暂时还没有其他结点，故指向NULL
    return true;
}
```

**2、不带头结点**

```cpp
// 初始化一个单链表(不带头结点)
bool InitList(LinkList &L){
    L = NULL;		// L不作为头结点，直接记录为空即可
    return true;
}
```

**3、对比**

> 不带头结点，写代码更麻烦
> 对第一个数据结点和后续数据结点的处理需要用不同的代码逻辑
> 对空表和非空表的处理需要用不同的代码逻辑
>
> 带头结点方便后续操作

### 插入

#### 按位序插入

**1、带头结点**

**Code：**

```cpp
bool ListInsert(LinkList &L, int i, ElemType e){
    if(i < 1){
        return false;			// 判断输入是否合法
    }
    LNode *p;				// 定义一个指针 p ，指向当前所遍历到的结点
    p = L;				// 初始化指向头结点
    int j = 0;				// 记录当前 p 指向的是第几个结点   
    // 逐个遍历，找到第 i - 1 个结点
    while(p != NULL && j < i - 1){
        p = p->next;
        j ++;
    }
    if(p == NULL){			// 若 p 遍历完成之后为 null，说明i不合法
        return false;
    }
    // 申请一个存储空间来存放要插入的结点
    LNode *s = (LNode *)malloc(sizeof(LNode));
    s -> data = e;			// 赋值到新申请的结点
    s -> next = p -> next;		// 将新申请的结点指向原来第i个结点所指向的结点
    p -> next = s;			// 将原来第i个结点的指针指向新申请的结点
    return true;
}
```

**图示：**

![1652327016_1_.jpg](https://s2.loli.net/2022/05/12/AunlvTszKw9i2rS.png)

**注意：**

> 第19行和第20行代码<font color =red>**不可调换顺序**</font>
> 若先执行第20行代码，会先将 p 所指结点的指针指向 s 所指向的结点
> 那么再执行第19行代码的话 s 所指向的结点的指针将会指向本身，形成自环

**图示：**

![1652327082_1_.jpg](https://s2.loli.net/2022/05/12/YFCLkB9Vn28DPHg.png)

**时间复杂度分析**

> **最好情况：插入位置在表头**
>     	循环1次
>     	最好时间复杂度：O(1)
> 	
> **最坏情况:插入位置在表尾**
>     	循环n次
>     	最坏时间复杂度 = O(n)
> 	
> **平均情况:假设插入位置出现在任何一个位置的概率相同**
>     	插入位置在第1位，循环1次;在第2位，循环2次;....;在第n位，循环n次
>     	平均时间复杂度 = O(n)

**2、不带头结点**

**Code：**

```cpp
bool ListInsert(LinkList &L, int i, ElemType e){
   	// 输入不合法
    if(i < 1){
        return false;
    }
    // 因为没有头结点，故插入第一个结点的操作与插入其他结点不同
    if(i == 1){
        LNode *s = (LNode *)malloc(sizeof(LNode));
        s -> data = e;
        s -> next = L;
        L = s;		// 头指针指向新结点
        return true;
    }
    LNode *p;		// 指针 p 指向当前扫描到的结点
    int j = 1;		// 记录当前 p 指向的是第几个结点
    p = L;		// p 初始指向头指针所指向的结点（非头结点）
    // 循环找到第 i - 1 个结点
    while(p != NULL && j < i - 1){
        p = p -> next;
        j ++;
    }
    // 输入不合法
    if(p == NULL){
        return false;
    }
    LNode *s = (LNode *)malloc(sizeof(LNode));
    s -> data = e;
    s -> next = p -> next;
    p -> next = s;
    return true;
}
```

**图示：**

![1651550344_1_.jpg](https://s2.loli.net/2022/05/03/SRJbkfvUsNI6Ma1.png)

**注意：**

> 第 10 行和第 11 行 以及 第 28 行和第 29 行代码不可调换顺序，否则会出现自环的情况

**图示：**

![1651551439_1_.jpg](https://s2.loli.net/2022/05/03/eQcNgzGjEPRqxtJ.png)

**时间复杂度分析：**

> **最好情况：插入位置在表头**
>    	 循环1次
>     	最好时间复杂度：O(1)
> 	
> **最坏情况:插入位置在表尾**
>     	循环n次
>     	最坏时间复杂度 = O(n)
> 	
> **平均情况:假设插入位置出现在任何一个位置的概率相同**
>     	插入位置在第1位，循环1次;在第2位，循环2次;....;在第n位，循环n次
>     	平均时间复杂度 = O(n)

#### 后插操作

**Code：**

```cpp
// 后插操作：在 p 结点之后插入元素 e
bool InsertNextNode(LNode *p, ElemType e){
    if(p == NULL){
        return false;
    }
    LNode *s = (LNode *)malloc(sizeof(LNode));
    // 内存分配失败
    if(s == NULL){
        return false;
    }
    s -> data = e;			// 用结点 s 保存数据元素 e
    s -> next = p -> next;
    p -> next = s;			// 将结点 s 连接到 p 之后
    return true;
}

// 在第 i 个位置插入元素 e （带头结点）
bool ListInsert(LinkList &L, int i, ElemType e){
    if(i < 1){
        return false;
    }
    LNode *p;		// 指针 p 指向当前扫描到的结点
    int j = 0;		// 记录当前 p 指向的是第几个结点
    p = L;		// L 指向头结点
    
    // 循环找到第 i - 1 个结点
    while(p != NULL && j < i - 1){
        p = p -> next;
        j ++;
    }
    // 调用后插操作函数
    return InsertNextNode(p, e);
}
```

**时间复杂度分析：**

> **后插操作：在 p 结点之后插入元素 e**
>
> ​		不需要循环遍历直接插入即可
>
> ​		时间复杂度：O(1)
>
> **在第 i 个位置插入元素 e**
>
> ​		需要循环遍历找到第 i - 1 个位置
>
> ​		平均时间复杂度：O(n)

#### 前插操作

**Code1：**

```cpp
// 前插操作：在 p 结点之前插入元素 e
bool InsertPriorNode(LNode *p, ElemType e){
    if(p == NULL){
        return false;
    }
    LNode *s = (LNode *)malloc(sizeof(LNode));
    // 内存分配失败
    if(s == NULL){
        return false;
    }
    s -> next = p -> next;
    p -> next = s;			// 将结点 s 连接到 p 之后
    s -> data = p -> data;			// 用结点 s 保存数据元素 e
    p -> data = e;
    return true;
}
```

**Code2：**

```cpp
// 前插操作：在 p 结点之前插入元素 e
bool InsertPriorNode(LNode *p, ElemType e){
    if(p == NULL){
        return false;
    }
    LNode *s = (LNode *)malloc(sizeof(LNode));
    // 内存分配失败
    if(s == NULL){
        return false;
    }
    s -> next = p -> next;
    p -> next = s;			// 将结点 s 连接到 p 之后
    ElemType temp = p -> data;			// 交换数据域部分
    p -> data = s;
    s -> data = p -> data;
    p -> data = e;
    return true;
}
```

**时间复杂度分析：**

> **给定结点的前插操作相当于找到该结点的前驱结点进行后插操作**
>
> ​		找到前驱结点需要的平均时间复杂度为：O(n)
>
> **前插操作：在 p 结点之前插入元素 e**
>
> ​		不论使用上述哪种方式均不需要遍历
>
> ​		故时间复杂度均为：O(1)

### 删除

#### 按位序删除

**Code：**

```cpp
bool ListDelete(LinkList &L, int i, ElemType &e){
	if(i < 1){
        return false;
    }
    LNode *p;			// 指针 p 指向当前所扫描到的结点
    int j = 0;			// 记录 p 当时所指向的是第几个结点
    p = L;			// L 指向头结点，初始化 p 也指向头结点
    
    // 循环遍历找到第 i - 1 个结点
    while(p != NULL && j < i - 1){
        p = p -> next;
        j ++;
    }
    // 输入不合法
    if(p == NULL){
        return false;
    }
    // 第 i - 1 个结点后已无其他结点
    if(p -> next == NULL){
        return false;
    }
    
    LNode *q = p -> next;	// 令 q 指向被删除结点
    e = q -> data;		// 用 e 返回被删除的元素的值
    p -> next = q -> next;	// 将 q 所指向的结点从链中断开
    free(q);			// 释放 q 结点所存储的空间
    return true;
}
```

**图示：**

![1652330542_1_.jpg](https://s2.loli.net/2022/05/12/SFWBLTbh1EAzrJ2.png)

**时间复杂度分析：**

> 