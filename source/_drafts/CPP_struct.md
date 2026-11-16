---
title: C++ 结构体和联合体
date: 2024-10-21 15:00:00
tags:
  - C++ 基础语法
categories:
  - CPP	
cover: https://bu.dusays.com/2025/11/03/69084e6eb0a2a.png
---

# 前言

{% note warning flat%}

本文记录 C++ 相关的**结构体**的相关知识。

{% endnote %}

{% note warning flat%}

在阅读过程中有任何问题都可以发布到评论区，有价值的问题将会放到文章末尾Q&A之中！

{% endnote %}

# 什么叫结构体

{% note success no-icon%}

在生活中，我们的书包内可以同时放入语文书、数学书、文具盒等等**不同类型**的物品。

这些物品的**类型不同**，但是都是属于你的**学习用品**。

在程序中，结构体的功能和书包相同，就是将**相关但是不同的数据类型**“**打包**”在一起。

{% endnote %}

## 为什么要“打包”数据

{% note success no-icon%}

比如说在一个班级中，每个学生都有自己的姓名、学号、成绩等等不同的信息。

如果这些信息是相对独立的，那么就没办法通过学生的姓名查询到成绩，学号等等相关信息。

在代码中，我们也可以模拟一下这种情形。

{% endnote %}

```cpp
#include <iostream>

using namespace std;

int main(){
    int id, sorce;
    string name;
    
    return 0;
}
```

{% note success no-icon%}

使用这种方法来定义的话，必须通过**判断**的形式来获取到相关联的信息，特别麻烦。

{% endnote %}

```cpp
#include <iostream>

using namespace std;

int main(){
    int id, sorce;
    string name;
    if(name == "A"){
        id = 1;
        sorce = 98;
    }
    if(name == "B"){
        id = 2;
        sorce = 89;
    }
    ...;
    return 0;
}
```

{% note warning no-icon%}

结构体的功能就是**将多个不同类型的数据联系起来**。

{% endnote %}

# 什么叫联合体

{% note success no-icon%}

联合体和结构体十分类似，同样也是可以同时定义多个不同类型的变量。

但是和结构体不同的是，结构体中的每个成员都有自己的内存空间，而**联合体中的所有元素共用同一片内存空间**。

类似于**变形金刚**，有汽车和汽车人两种形态，但是**同一时间只会存在一种形态**。

{% endnote %}

# 结构体

## 声明

{% note success no-icon%}

结构体的**声明**是通过 `struct` 关键字来定义的。

具体定义方式如下。

{% endnote %}

```cpp
struct Student { // 创建了一个新的类型，叫 Student
    string name; // 成员1：姓名
    int age;     // 成员2：年龄
    double score; // 成员3：分数
}; // 注意！这里的分号不能丢！
```

{% note warning no-icon%}

强调：`struct` 是**创建一个新的数据类型**，而不是创建变量。

在此处，`Student` 的作用和 `int` 的作用是相同的。

{% endnote %}

## 定义

{% note danger no-icon%}

那么，既然 `Student` 的作用和 `int` 的作用是**相同**的，该如何**定义**一个结构体变量呢？

{% endnote %}

{% note success no-icon%}

很简单，就像我们定义一个整数类型变量，或者整数类型数组的方式即可。

{% endnote %}

```cpp
struct Student {
    string name;
    int age;
    double score;
};

int main(){
    int a;
    int b[110];
    Student st1;
    student st2[110];
    return 0;
}
```

## 访问

{% note danger no-icon%}

如何**访问**一个结构体内的成员呢？

{% endnote %}

{% note success no-icon%}

访问结构体内的元素时，需要用 `.` 来进行访问。

访问之后所有的操作和普通的数据类型**基本相似**。

{% endnote %}

```cpp
struct Student {
    string name;
    int age;
    double score;
};

int main(){
    Student st1;				// 定义一个结构体变量 st1
    cin >> st1.name >> st1.age >> st1.score;	// 分别输入姓名，年龄和成绩。
    
    Student st2[110];				// 定义一个结构体数组 st2
    for(int i = 0; i < 10; i ++ ){
        // 和访问数组的元素的方式相同，用下标进行访问
        cin >> st2[i].name >> st2[i].age >> st2[i].sorce;	
    }
    
    Student st3 = {"abc", 18, 92.6};		// 特别的，结构体的初始化需要使用{ }
    
    // 输出和输入同样，用 . 访问之后就和基础的数据类型一样操作即可
    cout << st1.name << " " << st1.age << " " << st1.score << endl;
    
    return 0;
}
```

## 函数中的结构体

{% note success no-icon%}

当结构体作为函数的参数进行传递的时候，同样也有**传值参数**和**引用参数**两种方式。

同样的，作为传值参数传递的时候在函数中修改结构体的变量的值**不会影响**到原结构体中的内容。

作为引用参数传递的时候在函数中修改结构体的变量的值**会影响到**原结构体中的内容。

{% endnote %}

### 值传递

```cpp
#include <iostream>

using namespace std;

struct Student {
    string name;
    int age;
    double score;
};

// 值传递：会创建结构体的副本
void printStudent(Student s) {
    cout << "姓名: " << s.name << endl;
    cout << "年龄: " << s.age << endl;
    cout << "成绩: " << s.score << endl;
    // 修改不会影响原结构体
    s.age = 20; 
}

int main() {
    Student st1 = {"张三", 18, 90.5};
    printStudent(st1);
    cout << "实际年龄: " << st1.age << endl; // 还是18，未被修改
    return 0;
}
```

### 引用传递

```cpp
#include <iostream>

using namespace std;

struct Student {
    string name;
    int age;
    double score;
};

// 引用传递：不会创建副本，直接操作原结构体
void updateStudent(Student &s, double newScore) {
    s.score = newScore; // 直接修改原结构体
    cout << s.name << "的成绩已更新为: " << s.score << endl;
}

int main() {
    Student st1 = {"李四", 17, 85.0};
    updateStudent(st1, 92.5); // 传递引用
    cout << "更新后的成绩: " << st1.score << endl; // 变为92.5
    return 0;
}
```

## 嵌套

{% note success no-icon%}

结构体同样也可以作为另外一个结构体中的成员，形成**嵌套结构。**

{% endnote %}

```cpp
#include <iostream>
using namespace std;

// 定义日期结构体
struct Date {
    int year;
    int month;
    int day;
};

// 定义地址结构体
struct Address {
    string province;
    string city;
    string street;
};

// 学生结构体嵌套其他结构体
struct Student {
    string name;
    int age;
    double score;
    Date birthday;      // 嵌套日期结构体
    Address address;    // 嵌套地址结构体
};

int main() {
    // 初始化嵌套结构体
    Student stu1 = {
        "张三", 
        18, 
        90.5,
        {2005, 5, 15},           // 初始化birthday
        {"A省", "B市", "C区"} // 初始化address
    };
    
    // 访问嵌套结构体成员
    cout << "学生信息:" << endl;
    cout << "姓名: " << stu1.name << endl;
    cout << "生日: " << stu1.birthday.year << "年" 
         << stu1.birthday.month << "月" 
         << stu1.birthday.day << "日" << endl;
    cout << "地址: " << stu1.address.province 
         << stu1.address.city 
         << stu1.address.street << endl;
    
    return 0;
}
```

## 结构体排序

{% note success no-icon%}

在程序设计中，我们经常需要对一组数据进行排序。

当这组数据是结构体时，排序就变得更加实用和有趣。

接下来将会讲解两种对结构体进行排序的方法：传统的**冒泡排序**和现代的STL **sort函数**。

{% endnote %}

### 为什么需要结构体排序？

{% note success no-icon%}

在实际应用中，我们很少只对单一数据进行排序。比如学生管理系统，我们可能需要：

- 按成绩从高到低排名
- 按年龄从小到大排序
- 先按班级排序，再按成绩排序
- 按姓名拼音顺序排列

结构体排序让我们能够**以多种方式组织和查看数据**，满足不同的业务需求。

{% endnote %}

#### 初始化结构体

```cpp
#include <iostream>
#include <string>
#include <algorithm> // 包含sort函数
using namespace std;

struct Student {
    string name;
    int age;
    double score;
    
    // 为了方便输出，添加一个显示方法
    void display() const {
        cout << name << "\t" << age << "\t" << score << endl;
    }
};
```

#### 方法一：冒泡排序 - 理解排序的本质

{% note success no-icon%}

冒泡排序是最经典的排序算法之一，通过**相邻元素的比较和交换**来达到排序的目的。

{% endnote %}

**基本原理**

{% note warning no-icon%}

冒泡排序就像水中的气泡一样，较大的元素会逐渐"浮"到数组的顶端。它的核心思想是：

1. 从第一个元素开始，**比较相邻的两个元素**
2. 如果顺序不对，就**交换**它们
3. 重复这个过程，直到整个数组有序

{% endnote %}

**按成绩降序排序**

```cpp
// 冒泡排序：按成绩降序排列
void bubbleSortByScore(Student arr[], int n) {
    for(int i = 0; i < n-1; i++) {
        // 每次循环将最大的元素"冒泡"到末尾
        for(int j = 0; j < n-i-1; j++) {
            // 比较相邻两个学生的成绩
            if(arr[j].score < arr[j+1].score) {
                // 交换两个结构体
                Student temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}
```

{% note danger no-icon%}

**代码解析：**

- 外层循环控制排序的**轮数**
- 内层循环进行相邻元素的**比较和交换**
- `n-i-1` 是因为每轮排序后，最后的元素已经是最大的了

{% endnote %}

**按年龄升序排序**

```cpp
// 冒泡排序：按年龄升序排列
void bubbleSortByAge(Student arr[], int n) {
    for(int i = 0; i < n-1; i++) {
        for(int j = 0; j < n-i-1; j++) {
            // 比较年龄，小的在前
            if(arr[j].age > arr[j+1].age) {
                Student temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}
```

**多级排序**：更复杂的排序需求

{% note success no-icon%}

在实际应用中，我们经常需要**多级排序**。比如先按成绩排序，成绩相同的再按年龄排序：

{% endnote %}

```cpp
// 多级排序：成绩降序，成绩相同按年龄升序
void bubbleSortMultiLevel(Student arr[], int n) {
    for(int i = 0; i < n-1; i++) {
        for(int j = 0; j < n-i-1; j++) {
            // 先比较主要条件：成绩
            if(arr[j].score < arr[j+1].score) {
                Student temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
            // 如果成绩相同，再比较次要条件：年龄
            else if(arr[j].score == arr[j+1].score && arr[j].age > arr[j+1].age) {
                Student temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}
```



**冒泡排序的完整示例**

```cpp
void demonstrateBubbleSort() {
    Student students[5] = {
        {"张三", 18, 85.5},
        {"李四", 17, 92.0},
        {"王五", 19, 78.5},
        {"赵六", 18, 88.0},
        {"孙七", 17, 95.5}
    };
    
    cout << "=== 冒泡排序演示 ===" << endl;
    cout << "排序前:" << endl;
    cout << "姓名\t年龄\t成绩" << endl;
    for(int i = 0; i < 5; i++) {
        students[i].display();
    }
    
    bubbleSortMultiLevel(students, 5);
    
    cout << "\n排序后(成绩降序，成绩相同年龄升序):" << endl;
    cout << "姓名\t年龄\t成绩" << endl;
    for(int i = 0; i < 5; i++) {
        students[i].display();
    }
}
```



#### 方法二：sort函数 - 现代C++的利器

{% note success no-icon%}

**STL** 中的 **sort**函数是一个高效且灵活的排序工具，它采用了快速排序、堆排序和插入排序的混合算法。

{% endnote %}

**使用比较函数**

{% note success no-icon%}

**比较函数**是告诉sort函数如何比较两个元素的关键：

{% endnote %}

```cpp
// 比较函数：按成绩降序
bool compareByScore(const Student &a, const Student &b) {
    return a.score > b.score; // 降序排列
}

// 比较函数：按年龄升序  
bool compareByAge(const Student &a, const Student &b) {
    return a.age < b.age; // 升序排列
}

// 比较函数：多级排序（成绩降序，成绩相同按年龄升序）
bool compareMultiLevel(const Student &a, const Student &b) {
    if(a.score != b.score)
        return a.score > b.score; // 成绩不同，按成绩降序
    else
        return a.age < b.age;     // 成绩相同，按年龄升序
}
```

**使用sort函数排序**

```cpp
void demonstrateSortFunction() {
    Student students[5] = {
        {"张三", 18, 85.5},
        {"李四", 17, 92.0},
        {"王五", 19, 78.5},
        {"赵六", 18, 88.0},
        {"孙七", 17, 95.5}
    };
    
    cout << "=== STL sort函数演示 ===" << endl;
    
    // 按成绩降序排序
    sort(students, students + 5, compareByScore);
    cout << "按成绩降序:" << endl;
    cout << "姓名\t年龄\t成绩" << endl;
    for(int i = 0; i < 5; i++) 
        students[i].display();
    
    // 按年龄升序排序
    sort(students, students + 5, compareByAge);
    cout << "\n按年龄升序:" << endl;
    cout << "姓名\t年龄\t成绩" << endl;
    for(int i = 0; i < 5; i++) 
        students[i].display();
    
    // 多级排序
    sort(students, students + 5, compareMultiLevel);
    cout << "\n多级排序(成绩降序，成绩相同年龄升序):" << endl;
    cout << "姓名\t年龄\t成绩" << endl;
    for(int i = 0; i < 5; i++) 
        students[i].display();
}
```

# 联合体

{% note success no-icon%}

联合体（union）是C++中一种特殊的数据类型，它允许在**同一块内存空间**中存储不同的数据类型。

联合体的所有成员**共享同一块内存**，这意味着同一时间只能有一个成员是有效的。

{% endnote %}

## 声明、定义和访问

{% note success no-icon%}

联合体的声明、定义和访问的方式和结构体是**完全相同的**。

只不过在访问的过程中，后访问的元素会**覆盖掉**先访问到的元素。

{% endnote %}

```cpp
#include <iostream>
using namespace std;

union Data {
    int i;
    double d;
    char c;
};

int main() {
    Data data;  // 声明联合体变量
    
    // 使用整型成员
    data.i = 10;
    cout << "整数: " << data.i << endl;
    
    // 使用浮点型成员（会覆盖整数值）
    data.d = 3.14;
    cout << "浮点数: " << data.d << endl;
    
    // 使用字符成员（会覆盖浮点数值）
    data.c = 'A';
    cout << "字符: " << data.c << endl;
    
    return 0;
}
```

# 对比

|     特性     |             结构体 (struct)              |             联合体 (union)             |
| :----------: | :--------------------------------------: | :------------------------------------: |
|  **关键字**  |                 `struct`                 |                `union`                 |
| **内存分配** |        每个成员有**独立内存空间**        |       所有成员**共享同一块内存**       |
| **内存大小** |    ≥ 所有成员大小之**和**（内存对齐）    |          = **最大成员**的大小          |
| **成员使用** |      所有成员可以**同时使用和访问**      |     同一时间**只能有一个成员有效**     |
| **数据安全** |      成员**相互独立**，不会意外覆盖      |     可能因错误使用导致**数据覆盖**     |
|  **初始化**  |        可以同时**初始化所有成员**        |        只能**初始化第一个成员**        |
| **访问方式** |         使用点运算符`.`访问成员          |        使用点运算符`.`访问成员         |
|   **比喻**   |     **书包** - 可同时放书、笔、本子      | **变形金刚** - 同一时间只能是一种形态  |
| **适用场景** | 数据记录、对象建模、需要同时使用多个数据 | 节省内存、类型转换、硬件编程、数据互斥 |

# 使用技巧

## typedef 简化

## 什么是typedef？

`typedef` 是C++中的关键字，用于**为已有的数据类型创建新的名称（别名）**。就像给人**起外号**一样，让复杂的名字变得简单好记。

## 基本语法

```cpp
typedef 原类型名 新类型名;
```

## 简化结构体类型名

### 传统方式的问题

```cpp
struct Student {
    string name;
    int age;
};

// 每次声明变量都要写 struct 关键字
struct Student stu1;        // 有点啰嗦
struct Student students[100]; // 更啰嗦
```



### 使用typedef简化

```cpp
// 方法1：先定义结构体，再用typedef起别名
struct Student {
    string name;
    int age;
    double score;
};

typedef struct Student Stu;  // 给 struct Student 起别名叫 Stu

// 现在可以用更简短的名字了
Stu stu1;                   // 等价于 struct Student stu1
Stu students[100];          // 等价于 struct Student students[100]
```



### 更简洁的定义方式

```cpp
// 方法2：在定义结构体时直接使用typedef
typedef struct Student {
    string name;
    int age;
    double score;
} Stu;  // Stu 是 struct Student 的别名

// 立即可以使用
Stu stu1;
stu1.name = "李四";
```



### 最简洁的方式（匿名结构体）

```cpp
// 方法3：使用匿名结构体
typedef struct {
    string name;
    int age;
    double score;
} Stu;  // 直接定义 Student 类型

// 使用起来最简洁
Stu stu1;
Stu class1[50];
```

# Q&A

