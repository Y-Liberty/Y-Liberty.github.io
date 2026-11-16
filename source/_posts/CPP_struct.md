---
title: C++ 结构体和联合体
date: 2024-10-20 10:00:00
tags:
  - C++ 基础语法
categories:
  - CPP
cover: https://bu.dusays.com/2025/11/03/69084e6eb0a2a.png
---

# 前言

{% note warning no-icon %}

本文详细介绍 C++ 中**结构体（struct）**的定义、使用方法和实际应用。

结构体是 C++ 中非常重要的数据类型，它允许我们将不同类型的数据组合在一起，形成一个新的数据类型。

{% endnote %}

{% note warning no-icon %}

在阅读过程中有任何问题都可以发布到评论区，有价值的问题将会放到文章末尾Q&A之中！

{% endnote %}

{% note success no-icon %}

**本文导航：**
- 🎯 什么是结构体？为什么需要结构体？
- 📝 结构体的定义和基本使用
- 💡 结构体的实际应用示例
- 🔧 结构体的高级用法
- 📊 结构体排序（外置函数和内置重载）
- 🔧 typedef 定义结构体的技巧
- 📦 联合体（union）简介
- ⚠️ 常见错误和注意事项
- 📚 练习题和总结

{% endnote %}

# 一、什么是结构体？

## 生活中的例子

{% note info no-icon %}

想象一下，你要记录一个学生的信息，包括：
- 姓名（字符串）
- 年龄（整数）
- 成绩（浮点数）

如果使用普通变量，你需要这样写：

```cpp
string name1 = "张三";
int age1 = 15;
double score1 = 95.5;

string name2 = "李四";
int age2 = 16;
double score2 = 88.0;
```

这样写有什么问题呢？
- 变量太多，容易混乱
- 每个学生的信息分散，不便于管理
- 如果要处理多个学生，代码会变得非常复杂

{% endnote %}

## 结构体的作用

{% note success no-icon %}

**结构体（struct）**就像是一个"信息卡"，它可以把相关的数据打包在一起，形成一个整体。

使用结构体后，我们可以这样表示学生信息：

```cpp
struct Student {
    string name;    // 姓名
    int age;        // 年龄
    double score;   // 成绩
};
```

这样，每个学生的信息就是一个整体，更加清晰和便于管理！

{% endnote %}

# 二、结构体的定义

## 基本语法

{% note info no-icon %}

结构体的定义格式如下：

```cpp
struct 结构体名称 {
    数据类型1 成员变量1;
    数据类型2 成员变量2;
    // ... 更多成员变量
};
```

**说明：**
- `struct` 是关键字，表示定义结构体
- `结构体名称` 是我们给这个结构体起的名字（通常首字母大写）
- 大括号 `{}` 内是结构体的成员变量
- 最后的分号 `;` 不能忘记！

{% endnote %}

## 第一个结构体示例

让我们定义一个学生结构体：

```cpp
#include <iostream>
#include <string>
using namespace std;

// 定义学生结构体
struct Student {
    string name;    // 学生姓名
    int age;        // 学生年龄
    double score;   // 学生成绩
};

int main() {
    // 声明一个学生变量
    Student s1;
    
    // 给结构体成员赋值
    s1.name = "张三";
    s1.age = 15;
    s1.score = 95.5;
    
    // 输出学生信息
    cout << "姓名：" << s1.name << endl;
    cout << "年龄：" << s1.age << endl;
    cout << "成绩：" << s1.score << endl;
    
    return 0;
}
```

**运行结果：**
```
姓名：张三
年龄：15
成绩：95.5
```

{% note success no-icon %}

**代码说明：**
1. `struct Student` 定义了一个名为 `Student` 的结构体类型
2. `Student s1;` 声明了一个 `Student` 类型的变量 `s1`
3. `s1.name`、`s1.age`、`s1.score` 使用点号 `.` 访问结构体的成员变量
4. 点号 `.` 是结构体成员访问运算符

{% endnote %}

## 使用 typedef 定义结构体

{% note info no-icon %}

`typedef` 可以为类型起一个别名，让代码更简洁。在定义结构体时使用 `typedef` 可以省略 `struct` 关键字。

{% endnote %}

### 基本用法

```cpp
#include <iostream>
#include <string>
using namespace std;

// 方式1：先定义结构体，再用 typedef 起别名
struct Student {
    string name;
    int age;
    double score;
};
typedef Student Stu;  // 给 Student 起别名 Stu

// 方式2：定义结构体的同时使用 typedef（推荐）
typedef struct {
    string name;
    int age;
    double score;
} Student2;  // Student2 就是结构体类型的别名

int main() {
    // 使用原名称
    Student s1 = {"张三", 15, 95.5};
    
    // 使用别名（方式1）
    Stu s2 = {"李四", 16, 88.0};
    
    // 使用别名（方式2）
    Student2 s3 = {"王五", 15, 92.5};
    
    // 三种方式效果相同
    cout << s1.name << " " << s1.age << "岁" << endl;
    cout << s2.name << " " << s2.age << "岁" << endl;
    cout << s3.name << " " << s3.age << "岁" << endl;
    
    return 0;
}
```

### typedef 的优势

{% note success no-icon %}

1. **简化代码**：可以省略 `struct` 关键字
2. **提高可读性**：使用更简洁的类型名
3. **便于维护**：如果需要修改类型，只需修改一处

**示例对比：**

```cpp
// 不使用 typedef
struct Student s1;
struct Student s2;

// 使用 typedef
typedef struct Student Stu;
Stu s1;
Stu s2;
```

{% endnote %}

### 实际应用示例

```cpp
#include <iostream>
#include <string>
using namespace std;

// 使用 typedef 定义坐标点类型
typedef struct {
    double x;
    double y;
} Point;

// 使用 typedef 定义学生类型
typedef struct {
    string name;
    int age;
    double score;
} Student;

int main() {
    // 使用别名，代码更简洁
    Point p1 = {1.0, 2.0};
    Point p2 = {3.0, 4.0};
    
    Student students[3] = {
        {"张三", 15, 95.5},
        {"李四", 16, 88.0},
        {"王五", 15, 92.5}
    };
    
    // 输出信息
    cout << "点1：(" << p1.x << ", " << p1.y << ")" << endl;
    cout << "点2：(" << p2.x << ", " << p2.y << ")" << endl;
    
    for (int i = 0; i < 3; i++) {
        cout << students[i].name << " " 
             << students[i].age << "岁 " 
             << students[i].score << "分" << endl;
    }
    
    return 0;
}
```

{% note warning no-icon %}

**注意事项：**
- `typedef` 只是给类型起别名，不会创建新的类型
- 在 C++ 中，即使不使用 `typedef`，也可以直接使用结构体名称（不需要加 `struct`）
- `typedef` 在 C 语言中更常用，C++ 中也可以使用，但通常不是必需的

{% endnote %}

# 三、结构体的初始化

## 方式一：先声明后赋值

```cpp
struct Student {
    string name;
    int age;
    double score;
};

int main() {
    Student s1;
    s1.name = "张三";
    s1.age = 15;
    s1.score = 95.5;
    return 0;
}
```

## 方式二：声明时初始化

```cpp
struct Student {
    string name;
    int age;
    double score;
};

int main() {
    // 方式1：按顺序初始化
    Student s1 = {"张三", 15, 95.5};
    
    // 方式2：C++11 支持的大括号初始化
    Student s2{"李四", 16, 88.0};
    
    return 0;
}
```

{% note warning no-icon %}

**注意事项：**
- 初始化时，数据的顺序必须与结构体定义中成员变量的顺序一致
- 如果只初始化部分成员，未初始化的成员会被设置为默认值（数值类型为0，字符串为空）

{% endnote %}

# 四、结构体的实际应用

## 应用示例1：学生信息管理

```cpp
#include <iostream>
#include <string>
#include <iomanip>
using namespace std;

struct Student {
    string name;    // 姓名
    int age;        // 年龄
    double score;   // 成绩
};

int main() {
    Student students[3];  // 定义学生数组
    
    // 输入学生信息
    for (int i = 0; i < 3; i++) {
        cout << "请输入第" << (i + 1) << "个学生的信息：" << endl;
        cout << "姓名：";
        cin >> students[i].name;
        cout << "年龄：";
        cin >> students[i].age;
        cout << "成绩：";
        cin >> students[i].score;
    }
    
    // 输出学生信息
    cout << "\n学生信息列表：" << endl;
    cout << setw(10) << "姓名" << setw(10) << "年龄" << setw(10) << "成绩" << endl;
    for (int i = 0; i < 3; i++) {
        cout << setw(10) << students[i].name 
             << setw(10) << students[i].age 
             << setw(10) << students[i].score << endl;
    }
    
    return 0;
}
```

## 应用示例2：坐标点

```cpp
#include <iostream>
#include <cmath>
#include <iomanip>
using namespace std;

struct Point {
    double x;  // x坐标
    double y;  // y坐标
};

// 计算两点之间的距离
double distance(Point p1, Point p2) {
    double dx = p1.x - p2.x;
    double dy = p1.y - p2.y;
    return sqrt(dx * dx + dy * dy);
}

int main() {
    Point p1, p2;
    
    cout << "请输入第一个点的坐标（x y）：";
    cin >> p1.x >> p1.y;
    
    cout << "请输入第二个点的坐标（x y）：";
    cin >> p2.x >> p2.y;
    
    double dist = distance(p1, p2);
    cout << fixed << setprecision(2);
    cout << "两点之间的距离为：" << dist << endl;
    
    return 0;
}
```

## 应用示例3：日期时间

```cpp
#include <iostream>
using namespace std;

struct Date {
    int year;   // 年
    int month;  // 月
    int day;    // 日
};

// 判断日期是否合法
bool isValid(Date d) {
    if (d.month < 1 || d.month > 12) return false;
    if (d.day < 1 || d.day > 31) return false;
    // 简化判断，实际应该考虑月份天数不同
    return true;
}

// 输出日期
void printDate(Date d) {
    cout << d.year << "年" << d.month << "月" << d.day << "日" << endl;
}

int main() {
    Date today = {2024, 12, 20};
    
    if (isValid(today)) {
        cout << "日期合法：";
        printDate(today);
    } else {
        cout << "日期不合法！" << endl;
    }
    
    return 0;
}
```

# 五、结构体的高级用法

## 5.1 结构体数组

{% note info no-icon %}

结构体数组就是数组的每个元素都是结构体类型。

{% endnote %}

```cpp
#include <iostream>
#include <string>
using namespace std;

struct Student {
    string name;
    int age;
    double score;
};

int main() {
    // 定义结构体数组
    Student students[5] = {
        {"张三", 15, 95.5},
        {"李四", 16, 88.0},
        {"王五", 15, 92.5},
        {"赵六", 17, 85.0},
        {"钱七", 16, 90.0}
    };
    
    // 遍历数组，输出学生信息
    for (int i = 0; i < 5; i++) {
        cout << "学生" << (i + 1) << "：" << endl;
        cout << "  姓名：" << students[i].name << endl;
        cout << "  年龄：" << students[i].age << endl;
        cout << "  成绩：" << students[i].score << endl;
        cout << endl;
    }
    
    return 0;
}
```

## 5.2 结构体作为函数参数

```cpp
#include <iostream>
#include <string>
using namespace std;

struct Student {
    string name;
    int age;
    double score;
};

// 函数参数是结构体（值传递）
void printStudent(Student s) {
    cout << "姓名：" << s.name << endl;
    cout << "年龄：" << s.age << endl;
    cout << "成绩：" << s.score << endl;
}

// 函数参数是结构体指针（地址传递）
void updateScore(Student* s, double newScore) {
    s->score = newScore;  // 使用 -> 访问指针指向的结构体成员
}

// 函数参数是结构体引用（引用传递）
void updateAge(Student& s, int newAge) {
    s.age = newAge;  // 使用 . 访问引用结构体的成员
}

int main() {
    Student s1 = {"张三", 15, 95.5};
    
    // 值传递
    printStudent(s1);
    
    // 地址传递
    updateScore(&s1, 98.0);
    cout << "更新后的成绩：" << s1.score << endl;
    
    // 引用传递
    updateAge(s1, 16);
    cout << "更新后的年龄：" << s1.age << endl;
    
    return 0;
}
```

{% note warning no-icon %}

**三种传递方式的区别：**
- **值传递**：会复制整个结构体，修改不会影响原结构体
- **地址传递**：传递结构体的地址，使用 `->` 访问成员，修改会影响原结构体
- **引用传递**：传递结构体的引用，使用 `.` 访问成员，修改会影响原结构体

{% endnote %}

## 5.3 结构体嵌套

```cpp
#include <iostream>
#include <string>
using namespace std;

struct Date {
    int year;
    int month;
    int day;
};

struct Student {
    string name;
    int age;
    Date birthday;  // 嵌套结构体：生日
    double score;
};

int main() {
    Student s1;
    s1.name = "张三";
    s1.age = 15;
    s1.birthday.year = 2009;
    s1.birthday.month = 5;
    s1.birthday.day = 20;
    s1.score = 95.5;
    
    cout << "学生信息：" << endl;
    cout << "姓名：" << s1.name << endl;
    cout << "年龄：" << s1.age << endl;
    cout << "生日：" << s1.birthday.year << "年" 
         << s1.birthday.month << "月" 
         << s1.birthday.day << "日" << endl;
    cout << "成绩：" << s1.score << endl;
    
    return 0;
}
```

# 六、结构体排序

{% note warning no-icon %}

在实际应用中，我们经常需要对结构体数组进行排序。C++ 提供了 `sort` 函数，但需要告诉它如何比较两个结构体。

有两种方式实现结构体排序：
1. **外置比较函数**：定义一个独立的比较函数
2. **内置重载运算符**：在结构体内部重载 `<` 运算符

{% endnote %}

## 6.1 外置比较函数方式

```cpp
#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

struct Student {
    string name;
    int age;
    double score;
};

// 外置比较函数：按成绩从高到低排序
bool cmpByScore(Student a, Student b) {
    return a.score > b.score;  // 返回 true 表示 a 排在 b 前面
}

// 外置比较函数：按年龄从小到大排序，年龄相同按成绩从高到低排序
bool cmpByAgeAndScore(Student a, Student b) {
    if (a.age != b.age) {
        return a.age < b.age;  // 年龄小的排在前面
    }
    return a.score > b.score;   // 年龄相同，成绩高的排在前面
}

int main() {
    Student students[5] = {
        {"张三", 15, 95.5},
        {"李四", 16, 88.0},
        {"王五", 15, 92.5},
        {"赵六", 17, 85.0},
        {"钱七", 16, 90.0}
    };
    
    // 按成绩排序
    sort(students, students + 5, cmpByScore);
    
    cout << "按成绩从高到低排序：" << endl;
    for (int i = 0; i < 5; i++) {
        cout << students[i].name << " " 
             << students[i].age << "岁 " 
             << students[i].score << "分" << endl;
    }
    
    cout << "\n按年龄从小到大排序（年龄相同按成绩从高到低）：" << endl;
    sort(students, students + 5, cmpByAgeAndScore);
    for (int i = 0; i < 5; i++) {
        cout << students[i].name << " " 
             << students[i].age << "岁 " 
             << students[i].score << "分" << endl;
    }
    
    return 0;
}
```

**运行结果：**
```
按成绩从高到低排序：
张三 15岁 95.5分
王五 15岁 92.5分
钱七 16岁 90.0分
李四 16岁 88.0分
赵六 17岁 85.0分

按年龄从小到大排序（年龄相同按成绩从高到低）：
张三 15岁 95.5分
王五 15岁 92.5分
钱七 16岁 90.0分
李四 16岁 88.0分
赵六 17岁 85.0分
```

{% note info no-icon %}

**外置比较函数说明：**
- 比较函数返回 `true` 表示第一个参数应该排在第二个参数前面
- 比较函数返回 `false` 表示第一个参数应该排在第二个参数后面
- `sort` 函数的第三个参数传入比较函数名

{% endnote %}

## 6.2 内置重载运算符方式

```cpp
#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

struct Student {
    string name;
    int age;
    double score;
    
    // 重载 < 运算符：按成绩从高到低排序
    bool operator < (const Student& other) const {
        return score > other.score;  // 成绩高的排在前面
    }
};

int main() {
    Student students[5] = {
        {"张三", 15, 95.5},
        {"李四", 16, 88.0},
        {"王五", 15, 92.5},
        {"赵六", 17, 85.0},
        {"钱七", 16, 90.0}
    };
    
    // 直接使用 sort，会自动调用重载的 < 运算符
    sort(students, students + 5);
    
    cout << "按成绩从高到低排序：" << endl;
    for (int i = 0; i < 5; i++) {
        cout << students[i].name << " " 
             << students[i].age << "岁 " 
             << students[i].score << "分" << endl;
    }
    
    return 0;
}
```

**更复杂的重载示例：按年龄从小到大，年龄相同按成绩从高到低**

```cpp
#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

struct Student {
    string name;
    int age;
    double score;
    
    // 重载 < 运算符：多条件排序
    bool operator < (const Student& other) const {
        if (age != other.age) {
            return age < other.age;  // 年龄小的排在前面
        }
        return score > other.score;  // 年龄相同，成绩高的排在前面
    }
};

int main() {
    Student students[5] = {
        {"张三", 15, 95.5},
        {"李四", 16, 88.0},
        {"王五", 15, 92.5},
        {"赵六", 17, 85.0},
        {"钱七", 16, 90.0}
    };
    
    sort(students, students + 5);
    
    cout << "按年龄从小到大排序（年龄相同按成绩从高到低）：" << endl;
    for (int i = 0; i < 5; i++) {
        cout << students[i].name << " " 
             << students[i].age << "岁 " 
             << students[i].score << "分" << endl;
    }
    
    return 0;
}
```

{% note success no-icon %}

**两种方式的对比：**

| 方式 | 优点 | 缺点 | 适用场景 |
|------|------|------|----------|
| 外置函数 | 灵活，可以为同一结构体定义多种排序方式 | 需要额外定义函数 | 需要多种排序方式时 |
| 内置重载 | 简洁，直接使用 sort | 只能定义一种默认排序方式 | 只有一种主要排序方式时 |

**建议：**
- 如果只需要一种排序方式，使用内置重载运算符
- 如果需要多种排序方式，使用外置比较函数

{% endnote %}

# 八、常见错误和注意事项

## 错误1：忘记结构体定义后的分号

{% note danger no-icon %}

**错误代码：**
```cpp
struct Student {
    string name;
    int age;
    double score;
}  // ❌ 缺少分号
```

**正确代码：**
```cpp
struct Student {
    string name;
    int age;
    double score;
};  // ✅ 必须有分号
```

{% endnote %}

## 错误2：结构体成员访问错误

{% note danger no-icon %}

**错误代码：**
```cpp
Student s1;
s1 = {"张三", 15, 95.5};  // ❌ 错误：只能在声明时这样初始化

// 正确方式1：声明时初始化
Student s1 = {"张三", 15, 95.5};  // ✅

// 正确方式2：逐个赋值
Student s2;
s2.name = "张三";   // ✅
s2.age = 15;        // ✅
s2.score = 95.5;    // ✅
```

{% endnote %}

## 错误3：结构体指针成员访问错误

{% note danger no-icon %}

**错误代码：**
```cpp
Student* p = &s1;
p.name = "李四";  // ❌ 错误：指针不能直接用点号访问
```

**正确代码：**
```cpp
Student* p = &s1;
p->name = "李四";  // ✅ 正确：指针使用 -> 访问成员
// 或者
(*p).name = "李四";  // ✅ 正确：先解引用再访问
```

{% endnote %}

## 注意事项

{% note warning no-icon %}

1. **结构体名称**：建议使用首字母大写的命名方式，如 `Student`、`Point` 等
2. **成员变量命名**：建议使用有意义的名称，如 `name`、`age` 等
3. **内存占用**：结构体的大小是所有成员变量大小的总和（可能有内存对齐）
4. **默认值**：结构体成员变量如果没有初始化，数值类型默认为 0，字符串类型为空字符串
5. **作用域**：结构体定义通常放在全局作用域或命名空间中

{% endnote %}

# 七、联合体（union）简介

{% note info no-icon %}

**联合体（union）**与结构体类似，但有一个重要的区别：联合体的所有成员共享同一块内存空间。

{% endnote %}

## 联合体的基本概念

### 与结构体的区别

{% note warning no-icon %}

**结构体（struct）**：每个成员都有自己独立的内存空间
**联合体（union）**：所有成员共享同一块内存空间，同一时刻只能使用一个成员

{% endnote %}

### 联合体的定义

```cpp
#include <iostream>
using namespace std;

// 定义联合体
union Data {
    int i;      // 整数
    double d;   // 浮点数
    char c;     // 字符
};

int main() {
    union Data data;
    
    // 使用整数成员
    data.i = 100;
    cout << "整数：" << data.i << endl;
    
    // 使用浮点数成员（会覆盖之前的值）
    data.d = 3.14;
    cout << "浮点数：" << data.d << endl;
    cout << "整数（已被覆盖）：" << data.i << endl;  // 值已改变
    
    // 使用字符成员
    data.c = 'A';
    cout << "字符：" << data.c << endl;
    
    return 0;
}
```

### 联合体的特点

{% note success no-icon %}

1. **内存共享**：所有成员共享同一块内存，大小等于最大成员的大小
2. **节省内存**：适合在多个数据类型中只使用一个的场景
3. **类型转换**：可以方便地进行类型转换

**内存大小示例：**

```cpp
union Data {
    int i;      // 4 字节
    double d;   // 8 字节
    char c;     // 1 字节
};
// Data 的大小 = 8 字节（最大成员 double 的大小）
```

{% endnote %}

### 联合体的应用场景

```cpp
#include <iostream>
using namespace std;

// 使用联合体存储不同类型的数据
union Value {
    int intValue;
    double doubleValue;
    char charValue;
};

struct Variable {
    int type;    // 类型：1-整数，2-浮点数，3-字符
    Value value; // 值（联合体）
};

int main() {
    Variable var;
    
    // 存储整数
    var.type = 1;
    var.value.intValue = 100;
    cout << "整数：" << var.value.intValue << endl;
    
    // 存储浮点数
    var.type = 2;
    var.value.doubleValue = 3.14;
    cout << "浮点数：" << var.value.doubleValue << endl;
    
    return 0;
}
```

{% note warning no-icon %}

**使用注意事项：**
- 联合体在同一时刻只能使用一个成员
- 给一个成员赋值会影响其他成员的值
- 需要自己记录当前使用的是哪个成员
- 联合体在算法竞赛中使用较少，主要用于底层编程

{% endnote %}

# 八、练习题

## 基础练习

### 练习1：图书管理系统

定义一个 `Book` 结构体，包含书名、作者、价格三个成员。编写程序：
1. 输入 3 本图书的信息
2. 输出所有图书信息
3. 计算所有图书的总价格

{% hideToggle 点击查看参考答案 %}

```cpp
#include <iostream>
#include <string>
#include <iomanip>
using namespace std;

struct Book {
    string name;    // 书名
    string author;  // 作者
    double price;   // 价格
};

int main() {
    Book books[3];
    
    // 输入图书信息
    for (int i = 0; i < 3; i++) {
        cout << "请输入第" << (i + 1) << "本书的信息：" << endl;
        cout << "书名：";
        cin >> books[i].name;
        cout << "作者：";
        cin >> books[i].author;
        cout << "价格：";
        cin >> books[i].price;
    }
    
    // 输出图书信息
    cout << "\n图书信息列表：" << endl;
    cout << setw(15) << "书名" << setw(15) << "作者" << setw(10) << "价格" << endl;
    double total = 0;
    for (int i = 0; i < 3; i++) {
        cout << setw(15) << books[i].name 
             << setw(15) << books[i].author 
             << setw(10) << books[i].price << endl;
        total += books[i].price;
    }
    
    cout << "\n总价格：" << total << "元" << endl;
    
    return 0;
}
```

{% endhideToggle %}

### 练习2：成绩统计

定义一个 `Score` 结构体，包含学生姓名和三门课程的成绩。编写程序：
1. 输入 5 个学生的信息
2. 计算每个学生的平均分
3. 找出平均分最高的学生

{% hideToggle 点击查看参考答案 %}

```cpp
#include <iostream>
#include <string>
#include <iomanip>
using namespace std;

struct Score {
    string name;      // 姓名
    double chinese;   // 语文成绩
    double math;      // 数学成绩
    double english;   // 英语成绩
    
    // 计算平均分
    double average() {
        return (chinese + math + english) / 3.0;
    }
};

int main() {
    Score students[5];
    
    // 输入学生信息
    for (int i = 0; i < 5; i++) {
        cout << "请输入第" << (i + 1) << "个学生的信息：" << endl;
        cout << "姓名：";
        cin >> students[i].name;
        cout << "语文成绩：";
        cin >> students[i].chinese;
        cout << "数学成绩：";
        cin >> students[i].math;
        cout << "英语成绩：";
        cin >> students[i].english;
    }
    
    // 找出平均分最高的学生
    int maxIndex = 0;
    double maxAvg = students[0].average();
    
    for (int i = 1; i < 5; i++) {
        double avg = students[i].average();
        if (avg > maxAvg) {
            maxAvg = avg;
            maxIndex = i;
        }
    }
    
    cout << "\n平均分最高的学生：" << endl;
    cout << "姓名：" << students[maxIndex].name << endl;
    cout << fixed << setprecision(2);
    cout << "平均分：" << maxAvg << endl;
    
    return 0;
}
```

{% endhideToggle %}

## 进阶练习

### 练习3：结构体排序应用

定义一个 `Employee` 结构体，包含员工姓名、工号和工资。编写程序：
1. 输入 10 个员工的信息
2. 按工资从高到低排序
3. 输出排序后的员工信息

{% hideToggle 点击查看参考答案 %}

```cpp
#include <iostream>
#include <string>
#include <algorithm>
#include <iomanip>
using namespace std;

struct Employee {
    string name;    // 姓名
    int id;         // 工号
    double salary;  // 工资
    
    // 重载 < 运算符：按工资从高到低排序
    bool operator < (const Employee& other) const {
        return salary > other.salary;
    }
};

int main() {
    Employee employees[10];
    
    // 输入员工信息
    for (int i = 0; i < 10; i++) {
        cout << "请输入第" << (i + 1) << "个员工的信息：" << endl;
        cout << "姓名：";
        cin >> employees[i].name;
        cout << "工号：";
        cin >> employees[i].id;
        cout << "工资：";
        cin >> employees[i].salary;
    }
    
    // 排序
    sort(employees, employees + 10);
    
    // 输出排序后的信息
    cout << "\n按工资从高到低排序：" << endl;
    cout << setw(10) << "姓名" << setw(10) << "工号" << setw(15) << "工资" << endl;
    for (int i = 0; i < 10; i++) {
        cout << setw(10) << employees[i].name 
             << setw(10) << employees[i].id 
             << setw(15) << fixed << setprecision(2) << employees[i].salary << endl;
    }
    
    return 0;
}
```

{% endhideToggle %}

# 九、总结

{% note success no-icon %}

## 知识点回顾

1. **结构体的定义**：使用 `struct` 关键字定义，注意最后的分号
2. **结构体变量**：声明和使用结构体变量，使用点号 `.` 访问成员
3. **结构体初始化**：可以在声明时初始化，也可以先声明后赋值
4. **结构体数组**：数组的每个元素都是结构体类型
5. **结构体作为函数参数**：值传递、地址传递、引用传递三种方式
6. **结构体嵌套**：结构体中可以包含其他结构体
7. **结构体排序**：外置比较函数和内置重载运算符两种方式
8. **typedef 技巧**：使用 typedef 简化结构体类型名
9. **联合体**：了解联合体的基本概念和特点

## 学习建议

1. **多练习**：通过实际编程练习加深对结构体的理解
2. **多应用**：尝试用结构体解决实际问题
3. **理解本质**：结构体是将相关数据打包的工具
4. **掌握排序**：结构体排序是算法竞赛中的常见操作

{% endnote %}

# Q&A
