---
title: C++ STL基本用法详解
date: 2025-01-20 14:00:00
tags:
  - C++ 算法与数据结构
categories:
  - CPP


---

# 前言

{% note info no-icon %}

**STL（Standard Template Library）** 是C++标准库的重要组成部分，提供了丰富的数据结构和算法，大大提高了C++程序开发的效率。

本文详细介绍STL中常用容器、迭代器、算法等的基本用法，帮助读者快速掌握STL的使用。

{% endnote %}

{% note success no-icon %}

**本文包含以下内容：**

- STL简介和六大组件
- 13种常用容器的详细用法（string, vector, list, stack, queue, priority_queue, deque, set, map, multiset, multimap, unordered_set, unordered_map）
- 迭代器的使用
- 常用算法的介绍
- 函数对象和Lambda表达式
- 实用技巧和最佳实践

{% endnote %}

---

# STL简介

## 什么是STL

{% note info no-icon %}

**STL（Standard Template Library）** 是C++标准模板库的简称，是C++标准库的核心组成部分。

**STL的特点：**

1. **模板化**：使用模板技术，支持泛型编程
2. **高效性**：经过优化的数据结构和算法实现
3. **可复用性**：提供了大量可复用的组件
4. **标准化**：是C++标准的一部分，跨平台兼容

**STL的优势：**

- 提高开发效率：无需重复实现常见的数据结构和算法
- 代码质量高：经过充分测试和优化
- 类型安全：模板技术保证类型安全
- 易于维护：标准化的接口和实现

{% endnote %}

## STL的六大组件

{% note success no-icon %}

STL由六大组件组成，它们协同工作，提供了强大的功能：

1. **容器（Containers）**：存储数据的模板类
   - 序列容器：vector, list, deque等
   - 关联容器：set, map等
   - 无序关联容器：unordered_set, unordered_map等
   - 容器适配器：stack, queue, priority_queue

2. **迭代器（Iterators）**：提供访问容器元素的方法
   - 连接容器和算法的桥梁
   - 支持多种迭代器类型（输入、输出、前向、双向、随机访问）

3. **算法（Algorithms）**：对容器中的元素进行操作
   - 排序、查找、计数、修改等算法
   - 独立于容器类型，通过迭代器工作

4. **函数对象（Function Objects）**：行为类似函数的对象
   - 可以作为算法的参数
   - 包括内置函数对象和自定义函数对象

5. **适配器（Adapters）**：修改容器或迭代器的接口
   - 容器适配器：stack, queue, priority_queue
   - 迭代器适配器：reverse_iterator等

6. **分配器（Allocators）**：管理内存分配
   - 控制容器的内存分配策略
   - 通常使用默认分配器即可

{% endnote %}

## 常用头文件

{% note warning no-icon %}

使用STL时需要包含相应的头文件：

```cpp
#include <vector>        // vector容器
#include <list>          // list容器
#include <deque>         // deque容器
#include <set>           // set和multiset
#include <map>           // map和multimap
#include <unordered_set> // unordered_set
#include <unordered_map> // unordered_map
#include <stack>         // stack适配器
#include <queue>         // queue和priority_queue
#include <string>        // string类
#include <algorithm>     // 算法库
#include <functional>    // 函数对象
#include <iterator>      // 迭代器
```

**注意：** 在C++中，标准库的头文件不需要`.h`后缀。

{% endnote %}

# string（字符串）

## 基本介绍

{% note info no-icon %}

**string类** 是C++标准库提供的字符串类，虽然不是STL容器，但使用方式与容器类似，是C++中最常用的字符串处理工具。

**string的特点：**

- 动态管理内存，自动调整大小
- 支持丰富的字符串操作
- 提供类似容器的接口（迭代器、size等）
- 类型安全，比C风格字符串更安全

**使用场景：**

- 字符串的创建、修改、查找
- 字符串的拼接、截取、替换
- 字符串的比较、转换

{% endnote %}

## 常用操作

### 1. 构造和初始化

```cpp
#include <string>
#include <iostream>
using namespace std;

int main() {
    // 【默认构造】空字符串
    string s1;
    
    // 【C风格字符串构造】
    string s2("Hello");
    string s3 = "World";
    
    // 【重复字符构造】构造n个相同字符
    string s4(5, 'A');  // "AAAAA"
    
    // 【拷贝构造】
    string s5(s2);      // "Hello"
    string s6 = s2;     // "Hello"
    
    // 【子串构造】
    string s7(s2, 1, 3);  // 从位置1开始，长度为3："ell"
    
    cout << s1 << endl;  // 空字符串
    cout << s2 << endl;  // "Hello"
    cout << s4 << endl;  // "AAAAA"
    
    return 0;
}
```

### 2. 插入操作

```cpp
string s = "Hello";

// 【push_back】在末尾添加字符
s.push_back('!');  // "Hello!"

// 【insert】在指定位置插入
s.insert(5, " World");  // "Hello World!"

// 【+=】字符串拼接
s += " C++";  // "Hello World! C++"

// 【append】追加字符串
s.append(" STL");  // "Hello World! C++ STL"
```

### 3. 删除操作

```cpp
string s = "Hello World";

// 【erase】删除指定范围的字符
s.erase(5, 6);  // 从位置5开始删除6个字符："Hello"

// 【pop_back】删除最后一个字符
s.pop_back();  // "Hell"

// 【clear】清空字符串
s.clear();  // 空字符串
```

### 4. 访问操作

```cpp
string s = "Hello";

// 【[]】下标访问（不检查边界）
char c1 = s[0];  // 'H'

// 【at】下标访问（检查边界，越界抛出异常）
char c2 = s.at(1);  // 'e'

// 【front】访问第一个字符
char c3 = s.front();  // 'H'

// 【back】访问最后一个字符
char c4 = s.back();  // 'o'

// 【substr】获取子串
string sub = s.substr(1, 3);  // 从位置1开始，长度为3："ell"
```

### 5. 查找操作

```cpp
string s = "Hello World Hello";

// 【find】查找子串第一次出现的位置
size_t pos1 = s.find("World");  // 6
size_t pos2 = s.find("Hello", 1);  // 从位置1开始查找：12

// 【rfind】查找子串最后一次出现的位置
size_t pos3 = s.rfind("Hello");  // 12

// 【find_first_of】查找第一个匹配的字符
size_t pos4 = s.find_first_of("lo");  // 2（第一个'l'的位置）

// 【find_last_of】查找最后一个匹配的字符
size_t pos5 = s.find_last_of("lo");  // 16（最后一个'o'的位置）

// 【find_first_not_of】查找第一个不匹配的字符
size_t pos6 = s.find_first_not_of("Helo ");  // 6（'W'的位置）

// 如果未找到，返回string::npos
if (s.find("NotExist") == string::npos) {
    cout << "未找到" << endl;
}
```

### 6. 其他常用操作

```cpp
string s1 = "Hello";
string s2 = "World";

// 【size/length】获取字符串长度
cout << s1.size() << endl;    // 5
cout << s1.length() << endl;  // 5

// 【empty】判断是否为空
if (!s1.empty()) {
    cout << "字符串不为空" << endl;
}

// 【compare】比较字符串
int result = s1.compare(s2);  // <0表示s1<s2，=0表示相等，>0表示s1>s2

// 【replace】替换子串
string s3 = "Hello World";
s3.replace(6, 5, "C++");  // 从位置6开始，替换5个字符："Hello C++"

// 【swap】交换两个字符串
s1.swap(s2);  // s1="World", s2="Hello"
```

## 完整示例代码

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    // 【构造字符串】
    string s1 = "Hello";
    string s2(" World");
    
    // 【字符串拼接】
    string s3 = s1 + s2;  // "Hello World"
    s3 += "!";            // "Hello World!"
    
    // 【查找操作】
    size_t pos = s3.find("World");
    if (pos != string::npos) {
        cout << "找到'World'，位置：" << pos << endl;
    }
    
    // 【替换操作】
    s3.replace(pos, 5, "C++");  // "Hello C++!"
    cout << s3 << endl;
    
    // 【遍历字符串】
    for (size_t i = 0; i < s3.size(); i++) {
        cout << s3[i] << " ";
    }
    cout << endl;
    
    // 【范围for循环（C++11）】
    for (char c : s3) {
        cout << c << " ";
    }
    cout << endl;
    
    // 【子串操作】
    string sub = s3.substr(0, 5);  // "Hello"
    cout << sub << endl;
    
    return 0;
}
```

## 使用场景和注意事项

{% note warning no-icon %}

**使用场景：**

- 字符串的输入输出处理
- 字符串的解析和格式化
- 文本处理和搜索
- 文件路径操作

**注意事项：**

1. `[]` 操作符不检查边界，`at()` 会检查边界并抛出异常
2. `find()` 返回 `string::npos` 表示未找到
3. `substr()` 的第二个参数是长度，不是结束位置
4. 字符串拼接时，`+=` 比 `+` 更高效
5. 需要包含 `<string>` 头文件

{% endnote %}

---

# pair（键值对）

## 基本介绍

{% note info no-icon %}

**pair** 是C++标准库提供的简单数据结构，用于存储两个值（键值对）。

**pair的特点：**

- 存储两个值，类型可以不同
- 第一个值通过 `first` 访问，第二个值通过 `second` 访问
- 支持比较操作（按first比较，相等时比较second）
- 常用于map的键值对、函数返回值等

**使用场景：**

- map的键值对存储
- 函数返回多个值
- 存储坐标点（x, y）
- 存储区间（start, end）
- 作为其他容器的元素类型

{% endnote %}

## 常用操作

### 1. 构造和初始化

```cpp
#include <utility>  // 或 <map>, <set> 等已包含
#include <iostream>
using namespace std;

int main() {
    // 【默认构造】使用默认值
    pair<int, string> p1;  // {0, ""}
    
    // 【直接构造】
    pair<int, string> p2(1, "one");
    pair<int, string> p3 = make_pair(2, "two");
    
    // 【列表初始化（C++11）】
    pair<int, string> p4{3, "three"};
    pair<int, string> p5 = {4, "four"};
    
    // 【拷贝构造】
    pair<int, string> p6(p2);
    pair<int, string> p7 = p2;
    
    return 0;
}
```

### 2. 访问操作

```cpp
pair<int, string> p{1, "apple"};

// 【first】访问第一个元素
int key = p.first;  // 1

// 【second】访问第二个元素
string value = p.second;  // "apple"

// 【修改值】
p.first = 2;
p.second = "banana";
```

### 3. 比较操作

```cpp
pair<int, string> p1{1, "apple"};
pair<int, string> p2{2, "banana"};
pair<int, string> p3{1, "apple"};

// 【比较操作】先比较first，相等时比较second
bool b1 = p1 < p2;   // true（1 < 2）
bool b2 = p1 == p3;   // true（first和second都相等）
bool b3 = p1 > p2;   // false
```

### 4. make_pair函数

```cpp
// 【make_pair】创建pair对象（自动推导类型）
auto p1 = make_pair(1, "one");
auto p2 = make_pair(2.5, 3);

// 【等价写法】
pair<int, string> p3 = make_pair(1, "one");
pair<double, int> p4 = make_pair(2.5, 3);
```

## 完整示例代码

```cpp
#include <iostream>
#include <utility>
#include <vector>
#include <map>
#include <algorithm>
using namespace std;

// 示例1：函数返回多个值
pair<int, int> findMinMax(vector<int>& nums) {
    if (nums.empty()) {
        return make_pair(0, 0);
    }
    int minVal = *min_element(nums.begin(), nums.end());
    int maxVal = *max_element(nums.begin(), nums.end());
    return make_pair(minVal, maxVal);
}

// 示例2：存储坐标点
void coordinatePoints() {
    vector<pair<int, int>> points;
    points.push_back({1, 2});
    points.push_back({3, 4});
    points.push_back({5, 6});
    
    cout << "坐标点: ";
    for (const auto& p : points) {
        cout << "(" << p.first << "," << p.second << ") ";
    }
    cout << endl;  // (1,2) (3,4) (5,6)
}

// 示例3：存储区间
void intervals() {
    vector<pair<int, int>> intervals{{1, 3}, {2, 6}, {8, 10}, {15, 18}};
    
    // 按起始位置排序
    sort(intervals.begin(), intervals.end());
    
    cout << "区间: ";
    for (const auto& interval : intervals) {
        cout << "[" << interval.first << "," << interval.second << "] ";
    }
    cout << endl;  // [1,3] [2,6] [8,10] [15,18]
}

// 示例4：在map中使用
void mapWithPair() {
    map<string, pair<int, int>> studentScores;
    
    // 存储学生的数学和英语成绩
    studentScores["Alice"] = {95, 88};
    studentScores["Bob"] = {87, 92};
    studentScores["Charlie"] = {92, 85};
    
    // 访问
    for (const auto& [name, scores] : studentScores) {
        cout << name << ": 数学=" << scores.first 
             << ", 英语=" << scores.second << endl;
    }
}

// 示例5：作为vector的元素
void vectorOfPairs() {
    vector<pair<string, int>> fruits;
    fruits.push_back({"apple", 5});
    fruits.push_back({"banana", 3});
    fruits.push_back({"orange", 2});
    
    // 按数量排序
    sort(fruits.begin(), fruits.end(), 
         [](const pair<string, int>& a, const pair<string, int>& b) {
             return a.second < b.second;
         });
    
    cout << "按数量排序: ";
    for (const auto& [name, count] : fruits) {
        cout << name << ":" << count << " ";
    }
    cout << endl;  // orange:2 banana:3 apple:5
}

int main() {
    // 【基本使用】
    pair<int, string> p{1, "apple"};
    cout << "pair: (" << p.first << ", " << p.second << ")" << endl;
    
    // 【make_pair】
    auto p2 = make_pair(2, "banana");
    cout << "make_pair: (" << p2.first << ", " << p2.second << ")" << endl;
    
    // 【函数返回值示例】
    vector<int> nums{3, 1, 4, 1, 5, 9, 2, 6};
    auto [minVal, maxVal] = findMinMax(nums);  // C++17结构化绑定
    cout << "最小值: " << minVal << ", 最大值: " << maxVal << endl;
    
    // 【坐标点示例】
    coordinatePoints();
    
    // 【区间示例】
    intervals();
    
    // 【map中使用示例】
    mapWithPair();
    
    // 【vector of pairs示例】
    vectorOfPairs();
    
    return 0;
}
```

## 使用场景和注意事项

{% note warning no-icon %}

**使用场景：**

- map的键值对存储（map的元素类型是pair）
- 函数返回多个值
- 存储坐标点、区间等成对数据
- 作为其他容器的元素类型
- 算法中的临时数据结构

**注意事项：**

1. 需要包含 `<utility>` 头文件（或使用已包含该头文件的容器头文件）
2. `first` 和 `second` 是public成员，可以直接访问和修改
3. pair支持比较操作，先比较`first`，相等时比较`second`
4. 使用 `make_pair()` 可以自动推导类型，更方便
5. C++17支持结构化绑定：`auto [a, b] = pair;`
6. pair常用于map的迭代器解引用：`*it` 返回 `pair<const Key, Value>`

**常用技巧：**

```cpp
// 1. 创建pair的三种方式
pair<int, string> p1(1, "one");
pair<int, string> p2 = make_pair(2, "two");
pair<int, string> p3{3, "three"};

// 2. 在map中遍历
for (const auto& [key, value] : map) { ... }
for (const auto& pair : map) {
    cout << pair.first << " -> " << pair.second;
}

// 3. 函数返回多个值
pair<bool, int> search(vector<int>& v, int target) {
    auto it = find(v.begin(), v.end(), target);
    if (it != v.end()) {
        return {true, it - v.begin()};
    }
    return {false, -1};
}
```

{% endnote %}

---

# vector（动态数组）

## 基本介绍

{% note info no-icon %}

**vector** 是C++中最常用的容器之一，是一个动态数组，支持随机访问。

**vector的特点：**

- 动态调整大小，自动管理内存
- 支持随机访问（通过下标）
- 在尾部插入和删除效率高（O(1)）
- 在中间插入和删除效率较低（O(n)）
- 内存连续存储，缓存友好

**使用场景：**

- 需要随机访问元素
- 频繁在尾部插入删除
- 需要动态大小的数组
- 作为其他容器的底层实现

{% endnote %}

## 常用操作

### 1. 构造和初始化

```cpp
#include <vector>
#include <iostream>
using namespace std;

int main() {
    // 【默认构造】空vector
    vector<int> v1;
    
    // 【指定大小构造】n个默认值
    vector<int> v2(5);  // 5个0
    
    // 【指定大小和初始值构造】
    vector<int> v3(5, 10);  // 5个10
    
    // 【列表初始化（C++11）】
    vector<int> v4{1, 2, 3, 4, 5};
    
    // 【拷贝构造】
    vector<int> v5(v4);
    vector<int> v6 = v4;
    
    // 【范围构造】
    vector<int> v7(v4.begin(), v4.end());
    
    return 0;
}
```

### 2. 插入操作

```cpp
vector<int> v;

// 【push_back】在尾部插入元素
v.push_back(1);
v.push_back(2);
v.push_back(3);  // v = {1, 2, 3}

// 【insert】在指定位置插入元素
v.insert(v.begin() + 1, 10);  // 在位置1插入10：{1, 10, 2, 3}
v.insert(v.end(), 4);         // 在末尾插入4：{1, 10, 2, 3, 4}

// 【insert】插入多个相同元素
v.insert(v.begin(), 3, 0);  // 在开头插入3个0：{0, 0, 0, 1, 10, 2, 3, 4}
```

### 3. 删除操作

```cpp
vector<int> v{1, 2, 3, 4, 5};

// 【pop_back】删除最后一个元素
v.pop_back();  // {1, 2, 3, 4}

// 【erase】删除指定位置的元素
v.erase(v.begin() + 1);  // 删除位置1的元素：{1, 3, 4}

// 【erase】删除指定范围的元素
v.erase(v.begin(), v.begin() + 2);  // 删除前2个元素：{4}

// 【clear】清空所有元素
v.clear();  // 空vector
```

### 4. 访问操作

```cpp
vector<int> v{1, 2, 3, 4, 5};

// 【[]】下标访问（不检查边界）
int a = v[0];  // 1
int b = v[2];  // 3

// 【at】下标访问（检查边界，越界抛出异常）
int c = v.at(1);  // 2

// 【front】访问第一个元素
int d = v.front();  // 1

// 【back】访问最后一个元素
int e = v.back();  // 5

// 【迭代器访问】
for (auto it = v.begin(); it != v.end(); ++it) {
    cout << *it << " ";
}
```

### 5. 容量操作

```cpp
vector<int> v;

// 【size】获取元素个数
cout << v.size() << endl;  // 0

// 【empty】判断是否为空
if (v.empty()) {
    cout << "vector为空" << endl;
}

// 【capacity】获取容量（已分配的内存大小）
cout << v.capacity() << endl;  // 可能大于size

// 【resize】改变大小
v.resize(5);      // 大小变为5，新元素为默认值0
v.resize(10, 1);  // 大小变为10，新元素为1

// 【reserve】预留容量（避免频繁重新分配内存）
v.reserve(100);  // 预留100个元素的空间
```

## 完整示例代码

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    // 【创建vector】
    vector<int> v{3, 1, 4, 1, 5, 9, 2, 6};
    
    // 【遍历vector】
    cout << "原始vector: ";
    for (int x : v) {
        cout << x << " ";
    }
    cout << endl;
    
    // 【排序】
    sort(v.begin(), v.end());
    cout << "排序后: ";
    for (int x : v) {
        cout << x << " ";
    }
    cout << endl;
    
    // 【查找】
    auto it = find(v.begin(), v.end(), 5);
    if (it != v.end()) {
        cout << "找到5，位置：" << it - v.begin() << endl;
    }
    
    // 【删除重复元素】
    v.erase(unique(v.begin(), v.end()), v.end());
    cout << "去重后: ";
    for (int x : v) {
        cout << x << " ";
    }
    cout << endl;
    
    // 【二维vector】
    vector<vector<int>> matrix(3, vector<int>(4, 0));  // 3x4的矩阵，初始值为0
    matrix[0][0] = 1;
    matrix[1][1] = 2;
    
    return 0;
}
```

## 使用场景和注意事项

{% note warning no-icon %}

**使用场景：**

- 需要随机访问元素（通过下标）
- 频繁在尾部插入删除
- 需要动态大小的数组
- 作为其他算法的输入输出

**注意事项：**

1. `[]` 操作符不检查边界，`at()` 会检查边界并抛出异常
2. `push_back()` 可能导致内存重新分配，使用 `reserve()` 可以优化
3. 在中间插入删除效率低，如果频繁操作，考虑使用 `list`
4. `size()` 返回元素个数，`capacity()` 返回容量
5. 需要包含 `<vector>` 头文件

**时间复杂度：**

- 随机访问：O(1)
- 尾部插入/删除：O(1)（平均）
- 中间插入/删除：O(n)
- 查找：O(n)

{% endnote %}

---

# list（双向链表）

## 基本介绍

{% note info no-icon %}

**list** 是双向链表容器，不支持随机访问，但支持高效的插入和删除操作。

**list的特点：**

- 双向链表结构，每个节点包含前后指针
- 不支持随机访问（不能使用下标）
- 在任意位置插入删除效率高（O(1)）
- 内存不连续，缓存不友好
- 提供成员函数 `sort()`, `unique()`, `merge()` 等

**使用场景：**

- 频繁在任意位置插入删除
- 不需要随机访问
- 需要链表特有的操作（如合并、去重）

{% endnote %}

## 常用操作

### 1. 构造和初始化

```cpp
#include <list>
#include <iostream>
using namespace std;

int main() {
    // 【默认构造】空list
    list<int> l1;
    
    // 【指定大小构造】n个默认值
    list<int> l2(5);  // 5个0
    
    // 【指定大小和初始值构造】
    list<int> l3(5, 10);  // 5个10
    
    // 【列表初始化（C++11）】
    list<int> l4{1, 2, 3, 4, 5};
    
    // 【拷贝构造】
    list<int> l5(l4);
    list<int> l6 = l4;
    
    return 0;
}
```

### 2. 插入操作

```cpp
list<int> l;

// 【push_front】在头部插入
l.push_front(1);
l.push_front(2);  // {2, 1}

// 【push_back】在尾部插入
l.push_back(3);
l.push_back(4);  // {2, 1, 3, 4}

// 【insert】在指定位置插入
auto it = l.begin();
++it;  // 指向第二个元素
l.insert(it, 10);  // 在位置1插入10：{2, 10, 1, 3, 4}

// 【insert】插入多个相同元素
l.insert(l.end(), 3, 5);  // 在末尾插入3个5：{2, 10, 1, 3, 4, 5, 5, 5}
```

### 3. 删除操作

```cpp
list<int> l{1, 2, 3, 2, 4, 2, 5};

// 【pop_front】删除第一个元素
l.pop_front();  // {2, 3, 2, 4, 2, 5}

// 【pop_back】删除最后一个元素
l.pop_back();  // {2, 3, 2, 4, 2}

// 【erase】删除指定位置的元素
auto it = l.begin();
++it;
l.erase(it);  // 删除位置1的元素：{2, 2, 4, 2}

// 【erase】删除指定范围的元素
l.erase(l.begin(), l.end());  // 清空（等同于clear）

// 【remove】删除所有等于指定值的元素
l = {1, 2, 3, 2, 4, 2, 5};
l.remove(2);  // 删除所有2：{1, 3, 4, 5}

// 【clear】清空所有元素
l.clear();
```

### 4. 访问操作

```cpp
list<int> l{1, 2, 3, 4, 5};

// 【front】访问第一个元素
int a = l.front();  // 1

// 【back】访问最后一个元素
int b = l.back();  // 5

// 【注意】list不支持[]和at()，只能通过迭代器访问
for (auto it = l.begin(); it != l.end(); ++it) {
    cout << *it << " ";
}
```

### 5. 特殊操作

```cpp
list<int> l1{3, 1, 4, 1, 5};
list<int> l2{2, 7, 1, 8};

// 【sort】排序（成员函数，不是算法库的sort）
l1.sort();  // {1, 1, 3, 4, 5}

// 【unique】去除连续重复元素（需要先排序）
l1.unique();  // {1, 3, 4, 5}

// 【merge】合并两个有序list（l2会被清空）
l2.sort();  // {1, 2, 7, 8}
l1.merge(l2);  // l1 = {1, 1, 3, 4, 5, 7, 8}, l2为空

// 【reverse】反转
l1.reverse();  // {8, 7, 5, 4, 3, 1, 1}

// 【splice】移动元素（从一个list移动到另一个list）
list<int> l3{10, 20};
l1.splice(l1.begin(), l3);  // l1 = {10, 20, 8, 7, ...}, l3为空
```

## 完整示例代码

```cpp
#include <iostream>
#include <list>
using namespace std;

int main() {
    // 【创建list】
    list<int> l{3, 1, 4, 1, 5, 9, 2, 6};
    
    // 【遍历list】
    cout << "原始list: ";
    for (int x : l) {
        cout << x << " ";
    }
    cout << endl;
    
    // 【排序】
    l.sort();
    cout << "排序后: ";
    for (int x : l) {
        cout << x << " ";
    }
    cout << endl;
    
    // 【去重】
    l.unique();
    cout << "去重后: ";
    for (int x : l) {
        cout << x << " ";
    }
    cout << endl;
    
    // 【在中间插入】
    auto it = l.begin();
    advance(it, 2);  // 移动到第3个位置
    l.insert(it, 10);
    cout << "插入10后: ";
    for (int x : l) {
        cout << x << " ";
    }
    cout << endl;
    
    // 【删除指定值】
    l.remove(5);
    cout << "删除5后: ";
    for (int x : l) {
        cout << x << " ";
    }
    cout << endl;
    
    return 0;
}
```

## 使用场景和注意事项

{% note warning no-icon %}

**使用场景：**

- 频繁在任意位置插入删除
- 不需要随机访问
- 需要链表特有的操作（合并、去重等）

**注意事项：**

1. list不支持随机访问，不能使用 `[]` 和 `at()`
2. 只能通过迭代器访问元素
3. `sort()` 是成员函数，不是算法库的 `sort()`
4. `unique()` 只去除连续重复元素，需要先排序
5. `merge()` 会清空被合并的list
6. 需要包含 `<list>` 头文件

**时间复杂度：**

- 插入/删除：O(1)（已知位置）
- 查找：O(n)
- 排序：O(n log n)

{% endnote %}

---

# stack（栈）

## 基本介绍

{% note info no-icon %}

**stack** 是栈容器适配器，实现了后进先出（LIFO）的数据结构。

**stack的特点：**

- 后进先出（LIFO）原则
- 只允许在栈顶进行插入和删除
- 基于其他容器实现（默认使用deque）
- 接口简单，操作高效

**使用场景：**

- 表达式求值
- 括号匹配
- 函数调用栈
- 深度优先搜索（DFS）
- 撤销操作

{% endnote %}

## 常用操作

### 1. 构造和初始化

```cpp
#include <stack>
#include <iostream>
using namespace std;

int main() {
    // 【默认构造】空stack
    stack<int> s1;
    
    // 【基于其他容器构造】
    deque<int> d{1, 2, 3};
    stack<int> s2(d);  // 基于deque构造
    
    // 【基于vector构造】
    vector<int> v{1, 2, 3};
    stack<int, vector<int>> s3(v);  // 指定底层容器为vector
    
    return 0;
}
```

### 2. 插入和删除操作

```cpp
stack<int> s;

// 【push】在栈顶插入元素
s.push(1);
s.push(2);
s.push(3);  // 栈顶是3

// 【pop】删除栈顶元素（不返回值）
s.pop();  // 删除3，栈顶变为2

// 【注意】pop()不返回值，需要先top()再pop()
int top = s.top();  // 获取栈顶元素：2
s.pop();            // 删除栈顶元素
```

### 3. 访问操作

```cpp
stack<int> s;
s.push(1);
s.push(2);
s.push(3);

// 【top】访问栈顶元素（不删除）
int top = s.top();  // 3

// 【注意】stack不支持遍历，只能访问栈顶
```

### 4. 其他操作

```cpp
stack<int> s;

// 【size】获取元素个数
cout << s.size() << endl;  // 0

// 【empty】判断是否为空
if (s.empty()) {
    cout << "栈为空" << endl;
}

// 【注意】stack没有clear()，需要手动清空
while (!s.empty()) {
    s.pop();
}
```

## 完整示例代码

```cpp
#include <iostream>
#include <stack>
#include <string>
using namespace std;

// 示例1：括号匹配
bool isValid(string s) {
    stack<char> st;
    for (char c : s) {
        if (c == '(' || c == '[' || c == '{') {
            st.push(c);
        } else {
            if (st.empty()) return false;
            char top = st.top();
            st.pop();
            if ((c == ')' && top != '(') ||
                (c == ']' && top != '[') ||
                (c == '}' && top != '{')) {
                return false;
            }
        }
    }
    return st.empty();
}

// 示例2：表达式求值（简单版本）
int evaluatePostfix(string expr) {
    stack<int> st;
    for (char c : expr) {
        if (isdigit(c)) {
            st.push(c - '0');
        } else {
            int b = st.top(); st.pop();
            int a = st.top(); st.pop();
            if (c == '+') st.push(a + b);
            else if (c == '-') st.push(a - b);
            else if (c == '*') st.push(a * b);
            else if (c == '/') st.push(a / b);
        }
    }
    return st.top();
}

int main() {
    // 【基本使用】
    stack<int> s;
    s.push(1);
    s.push(2);
    s.push(3);
    
    cout << "栈顶元素: " << s.top() << endl;  // 3
    s.pop();
    cout << "弹出后栈顶元素: " << s.top() << endl;  // 2
    
    // 【括号匹配示例】
    string expr1 = "()[]{}";
    string expr2 = "([)]";
    cout << expr1 << " 是否有效: " << isValid(expr1) << endl;  // true
    cout << expr2 << " 是否有效: " << isValid(expr2) << endl;  // false
    
    // 【表达式求值示例】
    string postfix = "23+";
    cout << "后缀表达式 " << postfix << " 的值: " << evaluatePostfix(postfix) << endl;  // 5
    
    return 0;
}
```

## 使用场景和注意事项

{% note warning no-icon %}

**使用场景：**

- 括号匹配问题
- 表达式求值（中缀转后缀、后缀表达式求值）
- 函数调用栈模拟
- 深度优先搜索（DFS）
- 撤销操作（Undo）

**注意事项：**

1. `pop()` 不返回值，需要先 `top()` 再 `pop()`
2. `top()` 在栈为空时行为未定义，需要先检查 `empty()`
3. stack不支持遍历，只能访问栈顶
4. 默认底层容器是 `deque`，可以指定为 `vector` 或 `list`
5. 需要包含 `<stack>` 头文件

**时间复杂度：**

- 插入（push）：O(1)
- 删除（pop）：O(1)
- 访问（top）：O(1)

{% endnote %}

---

# queue（队列）

## 基本介绍

{% note info no-icon %}

**queue** 是队列容器适配器，实现了先进先出（FIFO）的数据结构。

**queue的特点：**

- 先进先出（FIFO）原则
- 只允许在队尾插入，在队头删除
- 基于其他容器实现（默认使用deque）
- 接口简单，操作高效

**使用场景：**

- 广度优先搜索（BFS）
- 任务调度
- 消息队列
- 缓冲区管理
- 打印队列

{% endnote %}

## 常用操作

### 1. 构造和初始化

```cpp
#include <queue>
#include <iostream>
using namespace std;

int main() {
    // 【默认构造】空queue
    queue<int> q1;
    
    // 【基于其他容器构造】
    deque<int> d{1, 2, 3};
    queue<int> q2(d);  // 基于deque构造
    
    // 【基于list构造】
    list<int> l{1, 2, 3};
    queue<int, list<int>> q3(l);  // 指定底层容器为list
    
    return 0;
}
```

### 2. 插入和删除操作

```cpp
queue<int> q;

// 【push】在队尾插入元素
q.push(1);
q.push(2);
q.push(3);  // 队列：1 -> 2 -> 3（队头是1，队尾是3）

// 【pop】删除队头元素（不返回值）
q.pop();  // 删除1，队头变为2

// 【注意】pop()不返回值，需要先front()再pop()
int front = q.front();  // 获取队头元素：2
q.pop();                // 删除队头元素
```

### 3. 访问操作

```cpp
queue<int> q;
q.push(1);
q.push(2);
q.push(3);

// 【front】访问队头元素（不删除）
int front = q.front();  // 1

// 【back】访问队尾元素（不删除）
int back = q.back();  // 3

// 【注意】queue不支持遍历，只能访问队头和队尾
```

### 4. 其他操作

```cpp
queue<int> q;

// 【size】获取元素个数
cout << q.size() << endl;  // 0

// 【empty】判断是否为空
if (q.empty()) {
    cout << "队列为空" << endl;
}

// 【注意】queue没有clear()，需要手动清空
while (!q.empty()) {
    q.pop();
}
```

## 完整示例代码

```cpp
#include <iostream>
#include <queue>
#include <vector>
using namespace std;

// 示例1：BFS遍历（广度优先搜索）
void bfs(vector<vector<int>>& graph, int start) {
    queue<int> q;
    vector<bool> visited(graph.size(), false);
    
    q.push(start);
    visited[start] = true;
    
    cout << "BFS遍历顺序: ";
    while (!q.empty()) {
        int node = q.front();
        q.pop();
        cout << node << " ";
        
        // 遍历相邻节点
        for (int neighbor : graph[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                q.push(neighbor);
            }
        }
    }
    cout << endl;
}

// 示例2：任务调度（简单版本）
void taskScheduler() {
    queue<string> tasks;
    
    // 添加任务
    tasks.push("任务1");
    tasks.push("任务2");
    tasks.push("任务3");
    
    // 处理任务
    cout << "任务处理顺序: ";
    while (!tasks.empty()) {
        string task = tasks.front();
        tasks.pop();
        cout << task << " ";
    }
    cout << endl;
}

// 示例3：层次遍历二叉树（模拟）
struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

void levelOrder(TreeNode* root) {
    if (!root) return;
    
    queue<TreeNode*> q;
    q.push(root);
    
    cout << "层次遍历: ";
    while (!q.empty()) {
        TreeNode* node = q.front();
        q.pop();
        cout << node->val << " ";
        
        if (node->left) q.push(node->left);
        if (node->right) q.push(node->right);
    }
    cout << endl;
}

int main() {
    // 【基本使用】
    queue<int> q;
    q.push(1);
    q.push(2);
    q.push(3);
    
    cout << "队头元素: " << q.front() << endl;  // 1
    cout << "队尾元素: " << q.back() << endl;   // 3
    cout << "队列大小: " << q.size() << endl;  // 3
    
    q.pop();
    cout << "弹出后队头元素: " << q.front() << endl;  // 2
    
    // 【BFS示例】
    vector<vector<int>> graph = {
        {1, 2},      // 节点0的邻居
        {0, 3, 4},   // 节点1的邻居
        {0, 5},     // 节点2的邻居
        {1},        // 节点3的邻居
        {1},        // 节点4的邻居
        {2}         // 节点5的邻居
    };
    bfs(graph, 0);
    
    // 【任务调度示例】
    taskScheduler();
    
    return 0;
}
```

## 使用场景和注意事项

{% note warning no-icon %}

**使用场景：**

- 广度优先搜索（BFS）
- 层次遍历二叉树
- 任务调度和消息队列
- 缓冲区管理
- 打印队列

**注意事项：**

1. `pop()` 不返回值，需要先 `front()` 再 `pop()`
2. `front()` 和 `back()` 在队列为空时行为未定义，需要先检查 `empty()`
3. queue不支持遍历，只能访问队头和队尾
4. 默认底层容器是 `deque`，可以指定为 `list`
5. 需要包含 `<queue>` 头文件

**时间复杂度：**

- 插入（push）：O(1)
- 删除（pop）：O(1)
- 访问（front/back）：O(1)

**与stack的区别：**

| 特性     | stack            | queue                    |
| -------- | ---------------- | ------------------------ |
| 数据结构 | 后进先出（LIFO） | 先进先出（FIFO）         |
| 访问方法 | 只有 `top()`     | 有 `front()` 和 `back()` |

{% endnote %}

---

# priority_queue（优先队列）

## 基本介绍

{% note info no-icon %}

**priority_queue** 是优先队列容器适配器，实现了堆（heap）数据结构。

**priority_queue的特点：**

- 默认是最大堆（大根堆），堆顶元素最大
- 可以自定义比较函数，实现最小堆或其他排序规则
- 只允许访问堆顶元素
- 插入和删除操作的时间复杂度为O(log n)
- 基于其他容器实现（默认使用vector）

**使用场景：**

- Top K问题
- 任务调度（按优先级）
- 最短路径算法（Dijkstra）
- 合并K个有序序列
- 中位数查找

{% endnote %}

## 常用操作

### 1. 构造和初始化

```cpp
#include <queue>
#include <iostream>
#include <vector>
#include <functional>
using namespace std;

int main() {
    // 【默认构造】空优先队列（最大堆）
    priority_queue<int> pq1;
    
    // 【基于vector构造】最大堆
    vector<int> v{3, 1, 4, 1, 5, 9, 2, 6};
    priority_queue<int> pq2(v.begin(), v.end());
    
    // 【最小堆】使用greater比较函数
    priority_queue<int, vector<int>, greater<int>> pq3;
    
    // 【自定义比较函数】最小堆
    priority_queue<int, vector<int>, less<int>> pq4;  // 最大堆（默认）
    
    return 0;
}
```

### 2. 插入和删除操作

```cpp
priority_queue<int> pq;  // 最大堆

// 【push】插入元素
pq.push(3);
pq.push(1);
pq.push(4);
pq.push(1);
pq.push(5);  // 堆顶是5（最大值）

// 【pop】删除堆顶元素（不返回值）
pq.pop();  // 删除5，堆顶变为4

// 【注意】pop()不返回值，需要先top()再pop()
int top = pq.top();  // 获取堆顶元素：4
pq.pop();            // 删除堆顶元素
```

### 3. 访问操作

```cpp
priority_queue<int> pq;
pq.push(3);
pq.push(1);
pq.push(4);
pq.push(5);

// 【top】访问堆顶元素（不删除）
int top = pq.top();  // 5（最大值）

// 【注意】priority_queue不支持遍历，只能访问堆顶
```

### 4. 其他操作

```cpp
priority_queue<int> pq;

// 【size】获取元素个数
cout << pq.size() << endl;  // 0

// 【empty】判断是否为空
if (pq.empty()) {
    cout << "优先队列为空" << endl;
}

// 【注意】priority_queue没有clear()，需要手动清空
while (!pq.empty()) {
    pq.pop();
}
```

### 5. 自定义比较函数

```cpp
// 【最小堆】使用greater
priority_queue<int, vector<int>, greater<int>> minHeap;
minHeap.push(3);
minHeap.push(1);
minHeap.push(4);
cout << minHeap.top() << endl;  // 1（最小值）

// 【自定义结构体】按某个字段排序
struct Person {
    string name;
    int age;
    Person(string n, int a) : name(n), age(a) {}
};

// 按年龄从大到小排序（最大堆）
struct CompareAge {
    bool operator()(const Person& a, const Person& b) {
        return a.age < b.age;  // 注意：优先队列的比较函数是反的
    }
};

priority_queue<Person, vector<Person>, CompareAge> pq;
pq.push(Person("Alice", 25));
pq.push(Person("Bob", 30));
pq.push(Person("Charlie", 20));
cout << pq.top().name << endl;  // Bob（年龄最大）

// 【使用Lambda表达式（C++11）】
auto cmp = [](int a, int b) { return a > b; };  // 最小堆
priority_queue<int, vector<int>, decltype(cmp)> pq2(cmp);
```

## 完整示例代码

```cpp
#include <iostream>
#include <queue>
#include <vector>
#include <functional>
using namespace std;

// 示例1：Top K问题（找出最大的K个数）
vector<int> topK(vector<int>& nums, int k) {
    priority_queue<int, vector<int>, greater<int>> pq;  // 最小堆
    
    for (int num : nums) {
        pq.push(num);
        if (pq.size() > k) {
            pq.pop();  // 保持堆大小为k
        }
    }
    
    vector<int> result;
    while (!pq.empty()) {
        result.push_back(pq.top());
        pq.pop();
    }
    reverse(result.begin(), result.end());  // 反转得到从大到小
    return result;
}

// 示例2：合并K个有序序列
vector<int> mergeKSortedArrays(vector<vector<int>>& arrays) {
    struct Element {
        int val;
        int arrayIdx;
        int idx;
        Element(int v, int a, int i) : val(v), arrayIdx(a), idx(i) {}
    };
    
    auto cmp = [](const Element& a, const Element& b) {
        return a.val > b.val;  // 最小堆
    };
    
    priority_queue<Element, vector<Element>, decltype(cmp)> pq(cmp);
    
    // 将每个数组的第一个元素加入堆
    for (int i = 0; i < arrays.size(); i++) {
        if (!arrays[i].empty()) {
            pq.push(Element(arrays[i][0], i, 0));
        }
    }
    
    vector<int> result;
    while (!pq.empty()) {
        Element e = pq.top();
        pq.pop();
        result.push_back(e.val);
        
        // 将下一个元素加入堆
        if (e.idx + 1 < arrays[e.arrayIdx].size()) {
            pq.push(Element(arrays[e.arrayIdx][e.idx + 1], e.arrayIdx, e.idx + 1));
        }
    }
    
    return result;
}

// 示例3：任务调度（按优先级）
struct Task {
    string name;
    int priority;
    Task(string n, int p) : name(n), priority(p) {}
};

bool operator<(const Task& a, const Task& b) {
    return a.priority < b.priority;  // 优先级大的在前（最大堆）
}

void taskScheduler() {
    priority_queue<Task> tasks;
    
    tasks.push(Task("任务1", 3));
    tasks.push(Task("任务2", 1));
    tasks.push(Task("任务3", 5));
    tasks.push(Task("任务4", 2));
    
    cout << "任务执行顺序（按优先级）: ";
    while (!tasks.empty()) {
        Task task = tasks.top();
        tasks.pop();
        cout << task.name << " ";
    }
    cout << endl;
}

int main() {
    // 【基本使用】最大堆
    priority_queue<int> pq;
    pq.push(3);
    pq.push(1);
    pq.push(4);
    pq.push(1);
    pq.push(5);
    
    cout << "最大堆堆顶: " << pq.top() << endl;  // 5
    pq.pop();
    cout << "弹出后堆顶: " << pq.top() << endl;  // 4
    
    // 【最小堆】
    priority_queue<int, vector<int>, greater<int>> minHeap;
    minHeap.push(3);
    minHeap.push(1);
    minHeap.push(4);
    minHeap.push(5);
    cout << "最小堆堆顶: " << minHeap.top() << endl;  // 1
    
    // 【Top K示例】
    vector<int> nums = {3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5};
    vector<int> top3 = topK(nums, 3);
    cout << "Top 3: ";
    for (int x : top3) {
        cout << x << " ";
    }
    cout << endl;  // 9 6 5
    
    // 【合并K个有序序列示例】
    vector<vector<int>> arrays = {
        {1, 4, 7},
        {2, 5, 8},
        {3, 6, 9}
    };
    vector<int> merged = mergeKSortedArrays(arrays);
    cout << "合并后: ";
    for (int x : merged) {
        cout << x << " ";
    }
    cout << endl;  // 1 2 3 4 5 6 7 8 9
    
    // 【任务调度示例】
    taskScheduler();
    
    return 0;
}
```

## 使用场景和注意事项

{% note warning no-icon %}

**使用场景：**

- Top K问题（最大/最小的K个元素）
- 任务调度（按优先级）
- 最短路径算法（Dijkstra算法）
- 合并K个有序序列
- 中位数查找
- 堆排序

**注意事项：**

1. `pop()` 不返回值，需要先 `top()` 再 `pop()`
2. `top()` 在优先队列为空时行为未定义，需要先检查 `empty()`
3. priority_queue不支持遍历，只能访问堆顶
4. 默认是最大堆，使用 `greater<int>` 可以实现最小堆
5. 自定义比较函数时，注意比较逻辑是反的（`a < b` 表示a的优先级低于b）
6. 需要包含 `<queue>` 头文件

**时间复杂度：**

- 插入（push）：O(log n)
- 删除（pop）：O(log n)
- 访问（top）：O(1)
- 建堆：O(n)

**与queue的区别：**

| 特性               | queue                 | priority_queue     |
| ------------------ | --------------------- | ------------------ |
| 数据结构           | 先进先出（FIFO）      | 按优先级排序（堆） |
| 访问方法           | `front()` 和 `back()` | 只有 `top()`       |
| 插入删除时间复杂度 | O(1)                  | O(log n)           |

**实现最小堆的方法：**

```cpp
// 方法1：使用greater
priority_queue<int, vector<int>, greater<int>> minHeap;

// 方法2：自定义比较函数
struct Compare {
    bool operator()(int a, int b) {
        return a > b;  // 最小堆
    }
};
priority_queue<int, vector<int>, Compare> minHeap;
```

{% endnote %}

---

# deque（双端队列）

## 基本介绍

{% note info no-icon %}

**deque** 是双端队列容器，支持在两端高效插入和删除，同时支持随机访问。

**deque的特点：**

- 双端队列，支持在头部和尾部高效插入删除
- 支持随机访问（通过下标）
- 内存分段连续，不是完全连续
- 在两端插入删除效率高（O(1)）
- 在中间插入删除效率较低（O(n)）

**使用场景：**

- 需要在两端频繁插入删除
- 需要随机访问
- 作为stack和queue的底层容器
- 滑动窗口问题

{% endnote %}

## 常用操作

### 1. 构造和初始化

```cpp
#include <deque>
#include <iostream>
using namespace std;

int main() {
    // 【默认构造】空deque
    deque<int> dq1;
    
    // 【指定大小构造】n个默认值
    deque<int> dq2(5);  // 5个0
    
    // 【指定大小和初始值构造】
    deque<int> dq3(5, 10);  // 5个10
    
    // 【列表初始化（C++11）】
    deque<int> dq4{1, 2, 3, 4, 5};
    
    // 【拷贝构造】
    deque<int> dq5(dq4);
    deque<int> dq6 = dq4;
    
    // 【范围构造】
    deque<int> dq7(dq4.begin(), dq4.end());
    
    return 0;
}
```

### 2. 插入操作

```cpp
deque<int> dq;

// 【push_front】在头部插入
dq.push_front(1);
dq.push_front(2);  // {2, 1}

// 【push_back】在尾部插入
dq.push_back(3);
dq.push_back(4);  // {2, 1, 3, 4}

// 【insert】在指定位置插入元素
dq.insert(dq.begin() + 2, 10);  // 在位置2插入10：{2, 1, 10, 3, 4}

// 【insert】插入多个相同元素
dq.insert(dq.end(), 3, 5);  // 在末尾插入3个5：{2, 1, 10, 3, 4, 5, 5, 5}
```

### 3. 删除操作

```cpp
deque<int> dq{1, 2, 3, 4, 5};

// 【pop_front】删除第一个元素
dq.pop_front();  // {2, 3, 4, 5}

// 【pop_back】删除最后一个元素
dq.pop_back();  // {2, 3, 4}

// 【erase】删除指定位置的元素
dq.erase(dq.begin() + 1);  // 删除位置1的元素：{2, 4}

// 【erase】删除指定范围的元素
dq.erase(dq.begin(), dq.end());  // 清空（等同于clear）

// 【clear】清空所有元素
dq.clear();  // 空deque
```

### 4. 访问操作

```cpp
deque<int> dq{1, 2, 3, 4, 5};

// 【[]】下标访问（不检查边界）
int a = dq[0];  // 1
int b = dq[2];  // 3

// 【at】下标访问（检查边界，越界抛出异常）
int c = dq.at(1);  // 2

// 【front】访问第一个元素
int d = dq.front();  // 1

// 【back】访问最后一个元素
int e = dq.back();  // 5

// 【迭代器访问】
for (auto it = dq.begin(); it != dq.end(); ++it) {
    cout << *it << " ";
}
```

### 5. 其他操作

```cpp
deque<int> dq;

// 【size】获取元素个数
cout << dq.size() << endl;  // 0

// 【empty】判断是否为空
if (dq.empty()) {
    cout << "deque为空" << endl;
}

// 【resize】改变大小
dq.resize(5);      // 大小变为5，新元素为默认值0
dq.resize(10, 1);  // 大小变为10，新元素为1
```

## 完整示例代码

```cpp
#include <iostream>
#include <deque>
#include <algorithm>
using namespace std;

// 示例1：滑动窗口最大值（简单版本）
vector<int> maxSlidingWindow(vector<int>& nums, int k) {
    deque<int> dq;  // 存储索引
    vector<int> result;
    
    for (int i = 0; i < nums.size(); i++) {
        // 移除窗口外的元素
        while (!dq.empty() && dq.front() <= i - k) {
            dq.pop_front();
        }
        
        // 移除小于当前元素的元素（保持递减）
        while (!dq.empty() && nums[dq.back()] < nums[i]) {
            dq.pop_back();
        }
        
        dq.push_back(i);
        
        // 窗口形成后，记录最大值
        if (i >= k - 1) {
            result.push_back(nums[dq.front()]);
        }
    }
    
    return result;
}

// 示例2：双端队列模拟
void dequeDemo() {
    deque<int> dq;
    
    // 两端插入
    dq.push_front(1);
    dq.push_back(2);
    dq.push_front(3);
    dq.push_back(4);
    // dq = {3, 1, 2, 4}
    
    cout << "deque内容: ";
    for (int x : dq) {
        cout << x << " ";
    }
    cout << endl;
    
    // 随机访问
    cout << "dq[0] = " << dq[0] << endl;  // 3
    cout << "dq[2] = " << dq[2] << endl;  // 2
    
    // 两端删除
    dq.pop_front();  // 删除3
    dq.pop_back();  // 删除4
    // dq = {1, 2}
    
    cout << "删除后: ";
    for (int x : dq) {
        cout << x << " ";
    }
    cout << endl;
}

// 示例3：回文检查（使用deque）
bool isPalindrome(string s) {
    deque<char> dq;
    
    // 将字符加入deque（忽略空格和标点）
    for (char c : s) {
        if (isalnum(c)) {
            dq.push_back(tolower(c));
        }
    }
    
    // 从两端比较
    while (dq.size() > 1) {
        if (dq.front() != dq.back()) {
            return false;
        }
        dq.pop_front();
        dq.pop_back();
    }
    
    return true;
}

int main() {
    // 【基本使用】
    deque<int> dq{1, 2, 3, 4, 5};
    
    // 【遍历deque】
    cout << "原始deque: ";
    for (int x : dq) {
        cout << x << " ";
    }
    cout << endl;
    
    // 【两端操作】
    dq.push_front(0);
    dq.push_back(6);
    cout << "两端插入后: ";
    for (int x : dq) {
        cout << x << " ";
    }
    cout << endl;
    
    // 【随机访问】
    cout << "dq[3] = " << dq[3] << endl;  // 3
    
    // 【滑动窗口示例】
    vector<int> nums = {1, 3, -1, -3, 5, 3, 6, 7};
    vector<int> result = maxSlidingWindow(nums, 3);
    cout << "滑动窗口最大值: ";
    for (int x : result) {
        cout << x << " ";
    }
    cout << endl;  // 3 3 5 5 6 7
    
    // 【回文检查示例】
    string s1 = "A man a plan a canal Panama";
    string s2 = "race a car";
    cout << s1 << " 是回文: " << isPalindrome(s1) << endl;  // true
    cout << s2 << " 是回文: " << isPalindrome(s2) << endl;  // false
    
    return 0;
}
```

## 使用场景和注意事项

{% note warning no-icon %}

**使用场景：**

- 需要在两端频繁插入删除
- 需要随机访问
- 滑动窗口问题
- 作为stack和queue的底层容器
- 回文检查等双端操作

**注意事项：**

1. `[]` 操作符不检查边界，`at()` 会检查边界并抛出异常
2. deque的内存不是完全连续的，是分段连续的
3. 在两端插入删除效率高（O(1)），在中间插入删除效率低（O(n)）
4. deque支持随机访问，但性能可能略低于vector
5. 需要包含 `<deque>` 头文件

**时间复杂度：**

- 随机访问：O(1)
- 两端插入/删除：O(1)
- 中间插入/删除：O(n)
- 查找：O(n)

**与vector的区别：**

| 特性         | vector                 | deque                |
| ------------ | ---------------------- | -------------------- |
| 插入删除位置 | 只支持尾部高效插入删除 | 支持两端高效插入删除 |
| 内存布局     | 完全连续               | 分段连续             |
| 头部插入删除 | O(n)                   | O(1)                 |
| 尾部插入删除 | O(1)                   | O(1)                 |

**与list的区别：**

| 特性         | list       | deque    |
| ------------ | ---------- | -------- |
| 随机访问     | 不支持     | 支持     |
| 中间插入删除 | O(1)       | O(n)     |
| 内存布局     | 完全不连续 | 分段连续 |

{% endnote %}

---

# set（集合）

## 基本介绍

{% note info no-icon %}

**set** 是有序集合容器，元素唯一且自动排序。

**set的特点：**

- 元素唯一，不允许重复
- 自动排序（默认升序）
- 基于红黑树实现
- 插入、删除、查找的时间复杂度为O(log n)
- 不支持随机访问（不能使用下标）

**使用场景：**

- 需要有序且唯一的元素集合
- 需要快速查找、插入、删除
- 去重操作
- 维护有序序列

{% endnote %}

## 常用操作

### 1. 构造和初始化

```cpp
#include <set>
#include <iostream>
using namespace std;

int main() {
    // 【默认构造】空set
    set<int> s1;
    
    // 【列表初始化（C++11）】
    set<int> s2{3, 1, 4, 1, 5, 9, 2, 6};  // 自动去重和排序：{1, 2, 3, 4, 5, 6, 9}
    
    // 【拷贝构造】
    set<int> s3(s2);
    set<int> s4 = s2;
    
    // 【范围构造】
    vector<int> v{3, 1, 4, 1, 5};
    set<int> s5(v.begin(), v.end());  // {1, 3, 4, 5}
    
    // 【自定义比较函数】降序
    set<int, greater<int>> s6{3, 1, 4, 5};  // {5, 4, 3, 1}
    
    return 0;
}
```

### 2. 插入操作

```cpp
set<int> s;

// 【insert】插入元素
s.insert(3);
s.insert(1);
s.insert(4);
s.insert(1);  // 重复元素，不会插入
// s = {1, 3, 4}

// 【insert】插入返回pair<iterator, bool>
auto result = s.insert(2);
if (result.second) {
    cout << "插入成功" << endl;
} else {
    cout << "元素已存在" << endl;
}

// 【insert】插入多个元素
vector<int> v{5, 6, 7};
s.insert(v.begin(), v.end());  // {1, 2, 3, 4, 5, 6, 7}
```

### 3. 删除操作

```cpp
set<int> s{1, 2, 3, 4, 5};

// 【erase】删除指定值的元素
s.erase(3);  // {1, 2, 4, 5}

// 【erase】删除指定位置的元素
auto it = s.find(2);
if (it != s.end()) {
    s.erase(it);  // {1, 4, 5}
}

// 【erase】删除指定范围的元素
s.erase(s.begin(), s.find(5));  // 删除5之前的所有元素：{5}

// 【clear】清空所有元素
s.clear();  // 空set
```

### 4. 查找操作

```cpp
set<int> s{1, 2, 3, 4, 5};

// 【find】查找元素，返回迭代器
auto it = s.find(3);
if (it != s.end()) {
    cout << "找到元素: " << *it << endl;
} else {
    cout << "未找到" << endl;
}

// 【count】统计元素个数（set中只能是0或1）
if (s.count(3) > 0) {
    cout << "元素存在" << endl;
}

// 【lower_bound】返回第一个不小于指定值的迭代器
auto it1 = s.lower_bound(3);  // 指向3
auto it2 = s.lower_bound(6);  // 指向end()

// 【upper_bound】返回第一个大于指定值的迭代器
auto it3 = s.upper_bound(3);  // 指向4
auto it4 = s.upper_bound(5);  // 指向end()

// 【equal_range】返回相等元素的范围
auto range = s.equal_range(3);
// range.first指向3，range.second指向4
```

### 5. 访问操作

```cpp
set<int> s{1, 2, 3, 4, 5};

// 【注意】set不支持[]和at()，只能通过迭代器访问

// 【迭代器访问】
for (auto it = s.begin(); it != s.end(); ++it) {
    cout << *it << " ";
}

// 【范围for循环】
for (int x : s) {
    cout << x << " ";
}

// 【反向迭代器】
for (auto it = s.rbegin(); it != s.rend(); ++it) {
    cout << *it << " ";  // 逆序输出
}
```

### 6. 其他操作

```cpp
set<int> s;

// 【size】获取元素个数
cout << s.size() << endl;  // 0

// 【empty】判断是否为空
if (s.empty()) {
    cout << "set为空" << endl;
}

// 【begin/end】获取迭代器
auto first = s.begin();  // 指向最小元素
auto last = s.end();     // 指向末尾（不包含）
```

## 完整示例代码

```cpp
#include <iostream>
#include <set>
#include <vector>
#include <algorithm>
using namespace std;

// 示例1：去重和排序
vector<int> removeDuplicates(vector<int>& nums) {
    set<int> s(nums.begin(), nums.end());
    return vector<int>(s.begin(), s.end());
}

// 示例2：查找两个数组的交集
vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {
    set<int> s1(nums1.begin(), nums1.end());
    set<int> s2(nums2.begin(), nums2.end());
    vector<int> result;
    
    // 方法1：遍历较小的set
    for (int x : s1) {
        if (s2.count(x)) {
            result.push_back(x);
        }
    }
    
    // 方法2：使用set_intersection算法
    // set_intersection(s1.begin(), s1.end(), 
    //                  s2.begin(), s2.end(), 
    //                  back_inserter(result));
    
    return result;
}

// 示例3：维护有序序列
void maintainSortedSequence() {
    set<int> s;
    
    // 动态插入元素，自动保持有序
    s.insert(5);
    s.insert(2);
    s.insert(8);
    s.insert(1);
    s.insert(3);
    
    cout << "有序序列: ";
    for (int x : s) {
        cout << x << " ";
    }
    cout << endl;  // 1 2 3 5 8
    
    // 查找第一个大于等于4的元素
    auto it = s.lower_bound(4);
    if (it != s.end()) {
        cout << "第一个>=4的元素: " << *it << endl;  // 5
    }
}

// 示例4：自定义比较函数
struct Point {
    int x, y;
    Point(int x, int y) : x(x), y(y) {}
};

// 按x坐标排序，x相同时按y排序
struct ComparePoint {
    bool operator()(const Point& a, const Point& b) const {
        if (a.x != b.x) return a.x < b.x;
        return a.y < b.y;
    }
};

void customCompare() {
    set<Point, ComparePoint> points;
    points.insert(Point(2, 3));
    points.insert(Point(1, 4));
    points.insert(Point(2, 1));
    points.insert(Point(1, 2));
    
    cout << "按x,y排序的点: ";
    for (const auto& p : points) {
        cout << "(" << p.x << "," << p.y << ") ";
    }
    cout << endl;  // (1,2) (1,4) (2,1) (2,3)
}

int main() {
    // 【基本使用】
    set<int> s{3, 1, 4, 1, 5, 9, 2, 6};
    
    // 【遍历set】
    cout << "set内容（自动去重和排序）: ";
    for (int x : s) {
        cout << x << " ";
    }
    cout << endl;  // 1 2 3 4 5 6 9
    
    // 【查找操作】
    if (s.find(5) != s.end()) {
        cout << "找到5" << endl;
    }
    
    // 【范围查找】
    auto lower = s.lower_bound(3);
    auto upper = s.upper_bound(6);
    cout << "范围[3, 6]的元素: ";
    for (auto it = lower; it != upper; ++it) {
        cout << *it << " ";
    }
    cout << endl;  // 3 4 5 6
    
    // 【去重示例】
    vector<int> nums = {3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5};
    vector<int> uniqueNums = removeDuplicates(nums);
    cout << "去重后: ";
    for (int x : uniqueNums) {
        cout << x << " ";
    }
    cout << endl;  // 1 2 3 4 5 6 9
    
    // 【交集示例】
    vector<int> nums1 = {1, 2, 2, 1};
    vector<int> nums2 = {2, 2};
    vector<int> inter = intersection(nums1, nums2);
    cout << "交集: ";
    for (int x : inter) {
        cout << x << " ";
    }
    cout << endl;  // 2
    
    // 【维护有序序列示例】
    maintainSortedSequence();
    
    // 【自定义比较函数示例】
    customCompare();
    
    return 0;
}
```

## 使用场景和注意事项

{% note warning no-icon %}

**使用场景：**

- 需要有序且唯一的元素集合
- 需要快速查找、插入、删除
- 去重操作
- 维护有序序列
- 范围查询（lower_bound, upper_bound）

**注意事项：**

1. set不支持随机访问，不能使用 `[]` 和 `at()`
2. 元素自动排序，默认是升序，可以使用 `greater<T>` 实现降序
3. 插入重复元素不会报错，但不会插入成功
4. `insert()` 返回 `pair<iterator, bool>`，可以通过 `second` 判断是否插入成功
5. `find()` 返回迭代器，未找到返回 `end()`
6. `count()` 在set中只能是0或1（因为元素唯一）
7. 需要包含 `<set>` 头文件

**时间复杂度：**

- 插入（insert）：O(log n)
- 删除（erase）：O(log n)
- 查找（find）：O(log n)
- 遍历：O(n)

**与vector的区别：**

| 特性               | vector       | set      |
| ------------------ | ------------ | -------- |
| 随机访问           | 支持         | 不支持   |
| 重复元素           | 允许         | 不允许   |
| 排序               | 需要手动排序 | 自动排序 |
| 插入删除时间复杂度 | O(n)         | O(log n) |

{% endnote %}

---

# map（映射）

## 基本介绍

{% note info no-icon %}

**map** 是键值对映射容器，键唯一且按键自动排序。

**map的特点：**

- 键值对存储（key-value pairs）
- 键唯一，不允许重复
- 按键自动排序（默认升序）
- 基于红黑树实现
- 插入、删除、查找的时间复杂度为O(log n)
- 支持通过键快速访问值

**使用场景：**

- 需要键值对映射关系
- 需要按键排序
- 需要快速查找、插入、删除
- 字典、索引等应用

{% endnote %}

## 常用操作

### 1. 构造和初始化

```cpp
#include <map>
#include <iostream>
using namespace std;

int main() {
    // 【默认构造】空map
    map<string, int> m1;
    
    // 【列表初始化（C++11）】
    map<string, int> m2{{"apple", 5}, {"banana", 3}, {"orange", 2}};
    
    // 【拷贝构造】
    map<string, int> m3(m2);
    map<string, int> m4 = m2;
    
    // 【自定义比较函数】按键降序
    map<string, int, greater<string>> m5{{"apple", 5}, {"banana", 3}};
    
    return 0;
}
```

### 2. 插入操作

```cpp
map<string, int> m;

// 【insert】插入键值对
m.insert({"apple", 5});
m.insert(make_pair("banana", 3));
m.insert(pair<string, int>("orange", 2));

// 【insert】插入返回pair<iterator, bool>
auto result = m.insert({"apple", 10});  // 键已存在，不会插入
if (result.second) {
    cout << "插入成功" << endl;
} else {
    cout << "键已存在，值为: " << result.first->second << endl;
}

// 【[]】访问或插入（如果键不存在则插入）
m["grape"] = 4;  // 插入新键值对
m["apple"] = 6;  // 更新已存在的键的值

// 【insert】插入多个元素
map<string, int> m2{{"pear", 1}, {"kiwi", 2}};
m.insert(m2.begin(), m2.end());
```

### 3. 删除操作

```cpp
map<string, int> m{{"apple", 5}, {"banana", 3}, {"orange", 2}};

// 【erase】删除指定键的元素
m.erase("banana");  // 删除键为"banana"的元素

// 【erase】删除指定位置的元素
auto it = m.find("orange");
if (it != m.end()) {
    m.erase(it);  // 删除迭代器指向的元素
}

// 【erase】删除指定范围的元素
m.erase(m.begin(), m.find("orange"));  // 删除"orange"之前的所有元素

// 【clear】清空所有元素
m.clear();  // 空map
```

### 4. 访问操作

```cpp
map<string, int> m{{"apple", 5}, {"banana", 3}, {"orange", 2}};

// 【[]】通过键访问值（如果键不存在会插入默认值）
int appleCount = m["apple"];  // 5
int grapeCount = m["grape"];  // 0（键不存在，插入默认值0）

// 【at】通过键访问值（如果键不存在抛出异常）
int bananaCount = m.at("banana");  // 3
// int kiwiCount = m.at("kiwi");   // 抛出异常

// 【find】查找键，返回迭代器
auto it = m.find("orange");
if (it != m.end()) {
    cout << "找到: " << it->first << " -> " << it->second << endl;
}

// 【迭代器访问】
for (auto it = m.begin(); it != m.end(); ++it) {
    cout << it->first << " -> " << it->second << endl;
}

// 【范围for循环】
for (const auto& pair : m) {
    cout << pair.first << " -> " << pair.second << endl;
}

// 【C++17结构化绑定】
for (const auto& [key, value] : m) {
    cout << key << " -> " << value << endl;
}
```

### 5. 查找操作

```cpp
map<string, int> m{{"apple", 5}, {"banana", 3}, {"orange", 2}};

// 【find】查找键，返回迭代器
auto it = m.find("banana");
if (it != m.end()) {
    cout << "找到: " << it->first << " -> " << it->second << endl;
} else {
    cout << "未找到" << endl;
}

// 【count】统计键的个数（map中只能是0或1）
if (m.count("apple") > 0) {
    cout << "键存在" << endl;
}

// 【lower_bound】返回第一个不小于指定键的迭代器
auto it1 = m.lower_bound("banana");  // 指向"banana"
auto it2 = m.lower_bound("grape");   // 指向"orange"（第一个大于"grape"的键）

// 【upper_bound】返回第一个大于指定键的迭代器
auto it3 = m.upper_bound("banana");  // 指向"orange"
auto it4 = m.upper_bound("orange");  // 指向end()

// 【equal_range】返回相等键的范围
auto range = m.equal_range("banana");
// range.first指向"banana"，range.second指向"orange"
```

### 6. 其他操作

```cpp
map<string, int> m;

// 【size】获取元素个数
cout << m.size() << endl;  // 0

// 【empty】判断是否为空
if (m.empty()) {
    cout << "map为空" << endl;
}

// 【begin/end】获取迭代器
auto first = m.begin();  // 指向最小键的元素
auto last = m.end();     // 指向末尾（不包含）
```

## 完整示例代码

```cpp
#include <iostream>
#include <map>
#include <vector>
#include <string>
using namespace std;

// 示例1：统计字符出现次数
map<char, int> countChars(string s) {
    map<char, int> count;
    for (char c : s) {
        count[c]++;
    }
    return count;
}

// 示例2：单词频率统计
map<string, int> wordFrequency(vector<string>& words) {
    map<string, int> freq;
    for (const string& word : words) {
        freq[word]++;
    }
    return freq;
}

// 示例3：学生成绩管理
void studentGrades() {
    map<string, int> grades;
    
    // 添加成绩
    grades["Alice"] = 95;
    grades["Bob"] = 87;
    grades["Charlie"] = 92;
    grades["David"] = 78;
    
    // 查找成绩
    if (grades.find("Alice") != grades.end()) {
        cout << "Alice的成绩: " << grades["Alice"] << endl;
    }
    
    // 遍历所有成绩
    cout << "所有学生成绩: " << endl;
    for (const auto& [name, score] : grades) {
        cout << name << ": " << score << endl;
    }
    
    // 更新成绩
    grades["Bob"] = 90;
    cout << "Bob更新后的成绩: " << grades["Bob"] << endl;
}

// 示例4：范围查询
void rangeQuery() {
    map<int, string> m{{1, "one"}, {3, "three"}, {5, "five"}, {7, "seven"}, {9, "nine"}};
    
    // 查找范围[3, 7]的所有元素
    auto lower = m.lower_bound(3);
    auto upper = m.upper_bound(7);
    
    cout << "范围[3, 7]的元素: ";
    for (auto it = lower; it != upper; ++it) {
        cout << it->first << "->" << it->second << " ";
    }
    cout << endl;  // 3->three 5->five 7->seven
}

int main() {
    // 【基本使用】
    map<string, int> m{{"apple", 5}, {"banana", 3}, {"orange", 2}};
    
    // 【遍历map】
    cout << "map内容: " << endl;
    for (const auto& [key, value] : m) {
        cout << key << " -> " << value << endl;
    }
    
    // 【访问和修改】
    m["apple"] = 6;  // 更新值
    m["grape"] = 4;  // 插入新键值对
    
    // 【查找】
    if (m.find("banana") != m.end()) {
        cout << "找到banana: " << m["banana"] << endl;
    }
    
    // 【字符统计示例】
    string s = "hello world";
    map<char, int> charCount = countChars(s);
    cout << "字符统计: " << endl;
    for (const auto& [ch, cnt] : charCount) {
        cout << ch << ": " << cnt << endl;
    }
    
    // 【单词频率示例】
    vector<string> words = {"apple", "banana", "apple", "orange", "banana", "apple"};
    map<string, int> freq = wordFrequency(words);
    cout << "单词频率: " << endl;
    for (const auto& [word, count] : freq) {
        cout << word << ": " << count << endl;
    }
    
    // 【学生成绩示例】
    studentGrades();
    
    // 【范围查询示例】
    rangeQuery();
    
    return 0;
}
```

## 使用场景和注意事项

{% note warning no-icon %}

**使用场景：**

- 需要键值对映射关系
- 需要按键排序
- 需要快速查找、插入、删除
- 字典、索引等应用
- 统计频率、计数等

**注意事项：**

1. `[]` 操作符如果键不存在会插入默认值，`at()` 会抛出异常
2. 元素按键自动排序，默认是升序，可以使用 `greater<T>` 实现降序
3. 插入重复键不会报错，但不会插入成功（值不会更新）
4. `insert()` 返回 `pair<iterator, bool>`，可以通过 `second` 判断是否插入成功
5. `find()` 返回迭代器，未找到返回 `end()`
6. `count()` 在map中只能是0或1（因为键唯一）
7. 迭代器指向的是 `pair<const Key, Value>` 类型
8. 需要包含 `<map>` 头文件

**时间复杂度：**

- 插入（insert）：O(log n)
- 删除（erase）：O(log n)
- 查找（find）：O(log n)
- 访问（[]/at）：O(log n)
- 遍历：O(n)

**与vector的区别：**

| 特性     | vector       | map          |
| -------- | ------------ | ------------ |
| 容器类型 | 序列容器     | 关联容器     |
| 访问方式 | 通过索引访问 | 通过键访问   |
| 重复元素 | 允许         | 键唯一       |
| 排序     | 需要手动排序 | 自动按键排序 |

{% endnote %}

---

# multiset（多重集合）

## 基本介绍

{% note info no-icon %}

**multiset** 是有序集合容器，元素可重复且自动排序。

**multiset的特点：**

- 元素可重复，允许相同元素存在
- 自动排序（默认升序）
- 基于红黑树实现
- 插入、删除、查找的时间复杂度为O(log n)
- 不支持随机访问（不能使用下标）

**使用场景：**

- 需要有序但允许重复的元素集合
- 需要快速查找、插入、删除
- 需要统计相同元素的个数
- 维护有序序列（允许重复）

{% endnote %}

## 常用操作

### 1. 构造和初始化

```cpp
#include <set>
#include <iostream>
using namespace std;

int main() {
    // 【默认构造】空multiset
    multiset<int> ms1;
    
    // 【列表初始化（C++11）】
    multiset<int> ms2{3, 1, 4, 1, 5, 9, 2, 6, 5, 3};  // 允许重复，自动排序
    
    // 【拷贝构造】
    multiset<int> ms3(ms2);
    multiset<int> ms4 = ms2;
    
    // 【范围构造】
    vector<int> v{3, 1, 4, 1, 5};
    multiset<int> ms5(v.begin(), v.end());
    
    // 【自定义比较函数】降序
    multiset<int, greater<int>> ms6{3, 1, 4, 5, 1};
    
    return 0;
}
```

### 2. 插入操作

```cpp
multiset<int> ms;

// 【insert】插入元素（允许重复）
ms.insert(3);
ms.insert(1);
ms.insert(4);
ms.insert(1);  // 允许重复
ms.insert(3);  // 允许重复
// ms = {1, 1, 3, 3, 4}

// 【insert】插入返回迭代器（总是成功，因为允许重复）
auto it = ms.insert(2);  // 返回指向插入元素的迭代器

// 【insert】插入多个元素
vector<int> v{5, 6, 7};
ms.insert(v.begin(), v.end());
```

### 3. 删除操作

```cpp
multiset<int> ms{1, 2, 2, 3, 3, 3, 4};

// 【erase】删除指定值的所有元素
ms.erase(2);  // 删除所有2：{1, 3, 3, 3, 4}

// 【erase】删除指定位置的元素
auto it = ms.find(3);
if (it != ms.end()) {
    ms.erase(it);  // 只删除一个3：{1, 3, 3, 4}
}

// 【erase】删除指定范围的元素
ms.erase(ms.begin(), ms.find(3));  // 删除3之前的所有元素：{3, 3, 4}

// 【clear】清空所有元素
ms.clear();  // 空multiset
```

### 4. 查找操作

```cpp
multiset<int> ms{1, 2, 2, 3, 3, 3, 4};

// 【find】查找元素，返回指向第一个匹配元素的迭代器
auto it = ms.find(3);
if (it != ms.end()) {
    cout << "找到元素: " << *it << endl;
}

// 【count】统计元素个数（multiset中可能大于1）
int count = ms.count(3);  // 3（有3个3）

// 【lower_bound】返回第一个不小于指定值的迭代器
auto it1 = ms.lower_bound(3);  // 指向第一个3

// 【upper_bound】返回第一个大于指定值的迭代器
auto it2 = ms.upper_bound(3);  // 指向4

// 【equal_range】返回相等元素的范围
auto range = ms.equal_range(3);
// range.first指向第一个3，range.second指向4
// 可以通过 range.second - range.first 计算个数
```

### 5. 访问操作

```cpp
multiset<int> ms{1, 2, 2, 3, 3, 3, 4};

// 【注意】multiset不支持[]和at()，只能通过迭代器访问

// 【迭代器访问】
for (auto it = ms.begin(); it != ms.end(); ++it) {
    cout << *it << " ";
}

// 【范围for循环】
for (int x : ms) {
    cout << x << " ";
}

// 【反向迭代器】
for (auto it = ms.rbegin(); it != ms.rend(); ++it) {
    cout << *it << " ";  // 逆序输出
}
```

## 完整示例代码

```cpp
#include <iostream>
#include <set>
#include <vector>
using namespace std;

// 示例1：统计元素出现次数
void countElements() {
    multiset<int> ms{1, 2, 2, 3, 3, 3, 4, 4, 4, 4};
    
    // 统计每个元素的个数
    for (int x : ms) {
        int count = ms.count(x);
        cout << x << " 出现 " << count << " 次" << endl;
    }
    
    // 使用equal_range避免重复统计
    auto it = ms.begin();
    while (it != ms.end()) {
        auto range = ms.equal_range(*it);
        int count = distance(range.first, range.second);
        cout << *it << " 出现 " << count << " 次" << endl;
        it = range.second;  // 跳到下一个不同的元素
    }
}

// 示例2：维护有序序列（允许重复）
void maintainSortedSequence() {
    multiset<int> ms;
    
    // 动态插入元素，自动保持有序
    ms.insert(5);
    ms.insert(2);
    ms.insert(8);
    ms.insert(2);  // 允许重复
    ms.insert(5);
    ms.insert(1);
    
    cout << "有序序列（允许重复）: ";
    for (int x : ms) {
        cout << x << " ";
    }
    cout << endl;  // 1 2 2 5 5 8
}

// 示例3：查找范围
void findRange() {
    multiset<int> ms{1, 2, 2, 3, 3, 3, 4, 5, 5, 6};
    
    // 查找范围[3, 5]的所有元素
    auto lower = ms.lower_bound(3);
    auto upper = ms.upper_bound(5);
    
    cout << "范围[3, 5]的元素: ";
    for (auto it = lower; it != upper; ++it) {
        cout << *it << " ";
    }
    cout << endl;  // 3 3 3 4 5 5
}

int main() {
    // 【基本使用】
    multiset<int> ms{3, 1, 4, 1, 5, 9, 2, 6, 5, 3};
    
    // 【遍历multiset】
    cout << "multiset内容（允许重复，自动排序）: ";
    for (int x : ms) {
        cout << x << " ";
    }
    cout << endl;  // 1 1 2 3 3 4 5 5 6 9
    
    // 【统计元素个数】
    cout << "元素3的个数: " << ms.count(3) << endl;  // 2
    cout << "元素5的个数: " << ms.count(5) << endl;  // 2
    
    // 【查找操作】
    auto it = ms.find(4);
    if (it != ms.end()) {
        cout << "找到4" << endl;
    }
    
    // 【统计示例】
    countElements();
    
    // 【维护有序序列示例】
    maintainSortedSequence();
    
    // 【范围查找示例】
    findRange();
    
    return 0;
}
```

## 使用场景和注意事项

{% note warning no-icon %}

**使用场景：**

- 需要有序但允许重复的元素集合
- 需要快速查找、插入、删除
- 需要统计相同元素的个数
- 维护有序序列（允许重复）

**注意事项：**

1. multiset不支持随机访问，不能使用 `[]` 和 `at()`
2. 元素自动排序，默认是升序，可以使用 `greater<T>` 实现降序
3. 允许重复元素，`insert()` 总是成功
4. `count()` 可能返回大于1的值（因为允许重复）
5. `find()` 返回指向第一个匹配元素的迭代器
6. `erase(value)` 会删除所有等于该值的元素
7. 需要包含 `<set>` 头文件

**时间复杂度：**

- 插入（insert）：O(log n)
- 删除（erase）：O(log n)（删除一个元素）或O(log n + k)（删除所有匹配元素，k为匹配元素个数）
- 查找（find）：O(log n)
- 计数（count）：O(log n + k)（k为匹配元素个数）
- 遍历：O(n)

**与set的区别：**

| 特性               | set                    | multiset         |
| ------------------ | ---------------------- | ---------------- |
| 重复元素           | 不允许                 | 允许             |
| `count()`返回值    | 只能是0或1             | 可能大于1        |
| `insert()`返回值   | `pair<iterator, bool>` | 只返回迭代器     |
| `erase(value)`行为 | 删除一个元素           | 删除所有匹配元素 |

{% endnote %}

---

# multimap（多重映射）

## 基本介绍

{% note info no-icon %}

**multimap** 是键值对映射容器，键可重复且按键自动排序。

**multimap的特点：**

- 键值对存储（key-value pairs）
- 键可重复，允许相同键存在
- 按键自动排序（默认升序）
- 基于红黑树实现
- 插入、删除、查找的时间复杂度为O(log n)
- 不支持 `[]` 操作符（因为键可能重复）

**使用场景：**

- 需要键值对映射但允许重复键
- 需要按键排序
- 需要快速查找、插入、删除
- 一对多映射关系

{% endnote %}

## 常用操作

### 1. 构造和初始化

```cpp
#include <map>
#include <iostream>
using namespace std;

int main() {
    // 【默认构造】空multimap
    multimap<string, int> mm1;
    
    // 【列表初始化（C++11）】
    multimap<string, int> mm2{{"apple", 5}, {"banana", 3}, {"apple", 2}};
    
    // 【拷贝构造】
    multimap<string, int> mm3(mm2);
    multimap<string, int> mm4 = mm2;
    
    // 【自定义比较函数】按键降序
    multimap<string, int, greater<string>> mm5{{"apple", 5}, {"banana", 3}};
    
    return 0;
}
```

### 2. 插入操作

```cpp
multimap<string, int> mm;

// 【insert】插入键值对（允许重复键）
mm.insert({"apple", 5});
mm.insert(make_pair("banana", 3));
mm.insert(pair<string, int>("apple", 2}));  // 允许重复键
mm.insert({"apple", 7});  // 允许重复键

// 【insert】插入返回迭代器（总是成功，因为允许重复）
auto it = mm.insert({"orange", 4});

// 【insert】插入多个元素
multimap<string, int> mm2{{"pear", 1}, {"kiwi", 2}};
mm.insert(mm2.begin(), mm2.end());

// 【注意】multimap不支持[]操作符，因为键可能重复
```

### 3. 删除操作

```cpp
multimap<string, int> mm{{"apple", 5}, {"banana", 3}, {"apple", 2}};

// 【erase】删除指定键的所有元素
mm.erase("apple");  // 删除所有键为"apple"的元素

// 【erase】删除指定位置的元素
auto it = mm.find("banana");
if (it != mm.end()) {
    mm.erase(it);  // 删除迭代器指向的元素
}

// 【erase】删除指定范围的元素
mm.erase(mm.begin(), mm.find("banana"));  // 删除"banana"之前的所有元素

// 【clear】清空所有元素
mm.clear();  // 空multimap
```

### 4. 访问操作

```cpp
multimap<string, int> mm{{"apple", 5}, {"banana", 3}, {"apple", 2}};

// 【注意】multimap不支持[]和at()，因为键可能重复

// 【find】查找键，返回指向第一个匹配元素的迭代器
auto it = mm.find("apple");
if (it != mm.end()) {
    cout << "找到: " << it->first << " -> " << it->second << endl;
}

// 【迭代器访问】
for (auto it = mm.begin(); it != mm.end(); ++it) {
    cout << it->first << " -> " << it->second << endl;
}

// 【范围for循环】
for (const auto& pair : mm) {
    cout << pair.first << " -> " << pair.second << endl;
}

// 【C++17结构化绑定】
for (const auto& [key, value] : mm) {
    cout << key << " -> " << value << endl;
}
```

### 5. 查找操作

```cpp
multimap<string, int> mm{{"apple", 5}, {"banana", 3}, {"apple", 2}, {"apple", 7}};

// 【find】查找键，返回指向第一个匹配元素的迭代器
auto it = mm.find("apple");
if (it != mm.end()) {
    cout << "找到: " << it->first << " -> " << it->second << endl;
}

// 【count】统计键的个数（multimap中可能大于1）
int count = mm.count("apple");  // 3（有3个"apple"键）

// 【lower_bound】返回第一个不小于指定键的迭代器
auto it1 = mm.lower_bound("apple");  // 指向第一个"apple"

// 【upper_bound】返回第一个大于指定键的迭代器
auto it2 = mm.upper_bound("apple");  // 指向"banana"

// 【equal_range】返回相等键的范围
auto range = mm.equal_range("apple");
// range.first指向第一个"apple"，range.second指向"banana"
// 可以通过遍历range获取所有"apple"的值
for (auto it = range.first; it != range.second; ++it) {
    cout << it->first << " -> " << it->second << endl;
}
```

## 完整示例代码

```cpp
#include <iostream>
#include <map>
#include <vector>
#include <string>
using namespace std;

// 示例1：一对多映射（一个键对应多个值）
void oneToManyMapping() {
    multimap<string, string> courses;
    
    // 一个学生可以选多门课程
    courses.insert({"Alice", "Math"});
    courses.insert({"Alice", "Physics"});
    courses.insert({"Alice", "Chemistry"});
    courses.insert({"Bob", "Math"});
    courses.insert({"Bob", "English"});
    
    // 查找Alice的所有课程
    cout << "Alice的课程: ";
    auto range = courses.equal_range("Alice");
    for (auto it = range.first; it != range.second; ++it) {
        cout << it->second << " ";
    }
    cout << endl;  // Math Physics Chemistry
}

// 示例2：统计相同键的所有值
void countValuesForKey() {
    multimap<int, string> mm{{1, "one"}, {2, "two"}, {1, "first"}, {1, "uno"}};
    
    // 统计键1的所有值
    int key = 1;
    int count = mm.count(key);
    cout << "键" << key << "有" << count << "个值: ";
    
    auto range = mm.equal_range(key);
    for (auto it = range.first; it != range.second; ++it) {
        cout << it->second << " ";
    }
    cout << endl;  // one first uno
}

// 示例3：范围查询
void rangeQuery() {
    multimap<int, string> mm{{1, "one"}, {3, "three"}, {5, "five"}, {7, "seven"}, {9, "nine"}};
    
    // 查找范围[3, 7]的所有元素
    auto lower = mm.lower_bound(3);
    auto upper = mm.upper_bound(7);
    
    cout << "范围[3, 7]的元素: ";
    for (auto it = lower; it != upper; ++it) {
        cout << it->first << "->" << it->second << " ";
    }
    cout << endl;  // 3->three 5->five 7->seven
}

int main() {
    // 【基本使用】
    multimap<string, int> mm{{"apple", 5}, {"banana", 3}, {"apple", 2}, {"apple", 7}};
    
    // 【遍历multimap】
    cout << "multimap内容: " << endl;
    for (const auto& [key, value] : mm) {
        cout << key << " -> " << value << endl;
    }
    
    // 【统计键的个数】
    cout << "键'apple'的个数: " << mm.count("apple") << endl;  // 3
    
    // 【查找所有相同键的值】
    auto range = mm.equal_range("apple");
    cout << "键'apple'的所有值: ";
    for (auto it = range.first; it != range.second; ++it) {
        cout << it->second << " ";
    }
    cout << endl;  // 5 2 7（顺序可能不同，因为是按键排序的）
    
    // 【一对多映射示例】
    oneToManyMapping();
    
    // 【统计值示例】
    countValuesForKey();
    
    // 【范围查询示例】
    rangeQuery();
    
    return 0;
}
```

## 使用场景和注意事项

{% note warning no-icon %}

**使用场景：**

- 需要键值对映射但允许重复键
- 需要按键排序
- 需要快速查找、插入、删除
- 一对多映射关系
- 需要统计相同键的所有值

**注意事项：**

1. multimap不支持 `[]` 和 `at()` 操作符，因为键可能重复
2. 元素按键自动排序，默认是升序，可以使用 `greater<T>` 实现降序
3. 允许重复键，`insert()` 总是成功
4. `count()` 可能返回大于1的值（因为允许重复键）
5. `find()` 返回指向第一个匹配键的迭代器
6. `erase(key)` 会删除所有键为key的元素
7. 使用 `equal_range()` 可以获取所有相同键的值
8. 需要包含 `<map>` 头文件

**时间复杂度：**

- 插入（insert）：O(log n)
- 删除（erase）：O(log n)（删除一个元素）或O(log n + k)（删除所有匹配元素，k为匹配元素个数）
- 查找（find）：O(log n)
- 计数（count）：O(log n + k)（k为匹配元素个数）
- 遍历：O(n)

**与map的区别：**

| 特性             | map                    | multimap         |
| ---------------- | ---------------------- | ---------------- |
| 重复键           | 不允许                 | 允许             |
| `[]` 和 `at()`   | 支持                   | 不支持           |
| `count()`返回值  | 只能是0或1             | 可能大于1        |
| `insert()`返回值 | `pair<iterator, bool>` | 只返回迭代器     |
| `erase(key)`行为 | 删除一个元素           | 删除所有匹配元素 |

{% endnote %}

---

# unordered_set（无序集合）

## 基本介绍

{% note info no-icon %}

**unordered_set** 是哈希表实现的集合容器，元素唯一但无序。

**unordered_set的特点：**

- 元素唯一，不允许重复
- 无序存储（不保证顺序）
- 基于哈希表实现
- 插入、删除、查找的时间复杂度为O(1)（平均）
- 不支持随机访问（不能使用下标）
- 不支持排序相关操作（lower_bound、upper_bound等）

**使用场景：**

- 需要快速查找、插入、删除
- 不需要排序
- 只需要判断元素是否存在
- 去重操作（不需要保持顺序）

{% endnote %}

## 常用操作

### 1. 构造和初始化

```cpp
#include <unordered_set>
#include <iostream>
using namespace std;

int main() {
    // 【默认构造】空unordered_set
    unordered_set<int> us1;
    
    // 【列表初始化（C++11）】
    unordered_set<int> us2{3, 1, 4, 1, 5, 9, 2, 6};  // 自动去重，无序
    
    // 【拷贝构造】
    unordered_set<int> us3(us2);
    unordered_set<int> us4 = us2;
    
    // 【范围构造】
    vector<int> v{3, 1, 4, 1, 5};
    unordered_set<int> us5(v.begin(), v.end());
    
    // 【指定初始桶数】
    unordered_set<int> us6(100);  // 初始桶数为100
    
    return 0;
}
```

### 2. 插入操作

```cpp
unordered_set<int> us;

// 【insert】插入元素
us.insert(3);
us.insert(1);
us.insert(4);
us.insert(1);  // 重复元素，不会插入
// us = {1, 3, 4}（顺序不确定）

// 【insert】插入返回pair<iterator, bool>
auto result = us.insert(2);
if (result.second) {
    cout << "插入成功" << endl;
} else {
    cout << "元素已存在" << endl;
}

// 【insert】插入多个元素
vector<int> v{5, 6, 7};
us.insert(v.begin(), v.end());
```

### 3. 删除操作

```cpp
unordered_set<int> us{1, 2, 3, 4, 5};

// 【erase】删除指定值的元素
us.erase(3);  // 删除3

// 【erase】删除指定位置的元素
auto it = us.find(2);
if (it != us.end()) {
    us.erase(it);  // 删除迭代器指向的元素
}

// 【erase】删除指定范围的元素
us.erase(us.begin(), us.find(4));  // 删除4之前的所有元素

// 【clear】清空所有元素
us.clear();  // 空unordered_set
```

### 4. 查找操作

```cpp
unordered_set<int> us{1, 2, 3, 4, 5};

// 【find】查找元素，返回迭代器
auto it = us.find(3);
if (it != us.end()) {
    cout << "找到元素: " << *it << endl;
} else {
    cout << "未找到" << endl;
}

// 【count】统计元素个数（unordered_set中只能是0或1）
if (us.count(3) > 0) {
    cout << "元素存在" << endl;
}

// 【注意】unordered_set不支持lower_bound、upper_bound等排序相关操作
```

### 5. 访问操作

```cpp
unordered_set<int> us{1, 2, 3, 4, 5};

// 【注意】unordered_set不支持[]和at()，只能通过迭代器访问

// 【迭代器访问】
for (auto it = us.begin(); it != us.end(); ++it) {
    cout << *it << " ";
}

// 【范围for循环】
for (int x : us) {
    cout << x << " ";
}

// 【注意】unordered_set不支持反向迭代器（rbegin、rend）
```

### 6. 哈希表相关操作

```cpp
unordered_set<int> us{1, 2, 3, 4, 5};

// 【bucket_count】获取桶的数量
cout << "桶数: " << us.bucket_count() << endl;

// 【load_factor】获取负载因子（元素数/桶数）
cout << "负载因子: " << us.load_factor() << endl;

// 【max_load_factor】获取或设置最大负载因子
cout << "最大负载因子: " << us.max_load_factor() << endl;
us.max_load_factor(0.75);  // 设置最大负载因子

// 【rehash】重新哈希（调整桶数）
us.rehash(100);  // 将桶数调整为至少100

// 【reserve】预留空间（设置桶数）
us.reserve(100);  // 预留至少100个桶
```

## 完整示例代码

```cpp
#include <iostream>
#include <unordered_set>
#include <vector>
using namespace std;

// 示例1：快速去重（不需要排序）
vector<int> removeDuplicates(vector<int>& nums) {
    unordered_set<int> seen;
    vector<int> result;
    
    for (int num : nums) {
        if (seen.find(num) == seen.end()) {
            seen.insert(num);
            result.push_back(num);
        }
    }
    
    return result;
}

// 示例2：判断两个数组是否有相同元素
bool hasCommonElement(vector<int>& nums1, vector<int>& nums2) {
    unordered_set<int> s1(nums1.begin(), nums1.end());
    
    for (int num : nums2) {
        if (s1.count(num) > 0) {
            return true;
        }
    }
    
    return false;
}

// 示例3：查找第一个重复元素
int findFirstDuplicate(vector<int>& nums) {
    unordered_set<int> seen;
    
    for (int num : nums) {
        if (seen.count(num) > 0) {
            return num;  // 找到第一个重复元素
        }
        seen.insert(num);
    }
    
    return -1;  // 没有重复元素
}

int main() {
    // 【基本使用】
    unordered_set<int> us{3, 1, 4, 1, 5, 9, 2, 6};
    
    // 【遍历unordered_set】（顺序不确定）
    cout << "unordered_set内容（无序）: ";
    for (int x : us) {
        cout << x << " ";
    }
    cout << endl;
    
    // 【查找操作】
    if (us.find(5) != us.end()) {
        cout << "找到5" << endl;
    }
    
    // 【去重示例】
    vector<int> nums = {3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5};
    vector<int> uniqueNums = removeDuplicates(nums);
    cout << "去重后: ";
    for (int x : uniqueNums) {
        cout << x << " ";
    }
    cout << endl;
    
    // 【查找共同元素示例】
    vector<int> nums1 = {1, 2, 3, 4};
    vector<int> nums2 = {3, 4, 5, 6};
    cout << "是否有共同元素: " << hasCommonElement(nums1, nums2) << endl;
    
    // 【查找第一个重复元素示例】
    vector<int> nums3 = {1, 2, 3, 4, 2, 5};
    cout << "第一个重复元素: " << findFirstDuplicate(nums3) << endl;
    
    return 0;
}
```

## 使用场景和注意事项

{% note warning no-icon %}

**使用场景：**

- 需要快速查找、插入、删除（O(1)平均）
- 不需要排序
- 只需要判断元素是否存在
- 去重操作（不需要保持顺序）

**注意事项：**

1. unordered_set不支持随机访问，不能使用 `[]` 和 `at()`
2. 元素无序存储，遍历顺序不确定
3. 插入重复元素不会报错，但不会插入成功
4. `insert()` 返回 `pair<iterator, bool>`，可以通过 `second` 判断是否插入成功
5. `find()` 返回迭代器，未找到返回 `end()`
6. `count()` 只能是0或1（因为元素唯一）
7. 不支持排序相关操作（lower_bound、upper_bound等）
8. 不支持反向迭代器
9. 需要包含 `<unordered_set>` 头文件

**时间复杂度：**

- 插入（insert）：O(1)（平均），O(n)（最坏）
- 删除（erase）：O(1)（平均），O(n)（最坏）
- 查找（find）：O(1)（平均），O(n)（最坏）
- 遍历：O(n)

**与set的区别：**

| 特性           | set                              | unordered_set  |
| -------------- | -------------------------------- | -------------- |
| 排序           | 有序                             | 无序           |
| 底层实现       | 红黑树                           | 哈希表         |
| 查找时间复杂度 | O(log n)                         | O(1)（平均）   |
| 排序相关操作   | 支持（lower_bound、upper_bound） | 不支持         |
| 反向迭代器     | 支持                             | 不支持         |
| 使用场景       | 需要排序                         | 只需要快速查找 |

**哈希函数：**

- 内置类型（int、string等）有默认哈希函数
- 自定义类型需要提供哈希函数和相等比较函数
- 可以通过模板参数指定自定义哈希函数

{% endnote %}

---

# unordered_map（无序映射）

## 基本介绍

{% note info no-icon %}

**unordered_map** 是哈希表实现的映射容器，键唯一但无序。

**unordered_map的特点：**

- 键值对存储（key-value pairs）
- 键唯一，不允许重复
- 无序存储（不保证顺序）
- 基于哈希表实现
- 插入、删除、查找的时间复杂度为O(1)（平均）
- 支持通过键快速访问值
- 不支持排序相关操作（lower_bound、upper_bound等）

**使用场景：**

- 需要快速查找、插入、删除键值对
- 不需要按键排序
- 字典、索引等应用（不需要排序）
- 统计频率、计数等（不需要排序）

{% endnote %}

## 常用操作

### 1. 构造和初始化

```cpp
#include <unordered_map>
#include <iostream>
using namespace std;

int main() {
    // 【默认构造】空unordered_map
    unordered_map<string, int> um1;
    
    // 【列表初始化（C++11）】
    unordered_map<string, int> um2{{"apple", 5}, {"banana", 3}, {"orange", 2}};
    
    // 【拷贝构造】
    unordered_map<string, int> um3(um2);
    unordered_map<string, int> um4 = um2;
    
    // 【指定初始桶数】
    unordered_map<string, int> um5(100);  // 初始桶数为100
    
    return 0;
}
```

### 2. 插入操作

```cpp
unordered_map<string, int> um;

// 【insert】插入键值对
um.insert({"apple", 5});
um.insert(make_pair("banana", 3));
um.insert(pair<string, int>("orange", 2));

// 【insert】插入返回pair<iterator, bool>
auto result = um.insert({"apple", 10});  // 键已存在，不会插入
if (result.second) {
    cout << "插入成功" << endl;
} else {
    cout << "键已存在，值为: " << result.first->second << endl;
}

// 【[]】访问或插入（如果键不存在则插入）
um["grape"] = 4;  // 插入新键值对
um["apple"] = 6;  // 更新已存在的键的值

// 【insert】插入多个元素
unordered_map<string, int> um2{{"pear", 1}, {"kiwi", 2}};
um.insert(um2.begin(), um2.end());
```

### 3. 删除操作

```cpp
unordered_map<string, int> um{{"apple", 5}, {"banana", 3}, {"orange", 2}};

// 【erase】删除指定键的元素
um.erase("banana");  // 删除键为"banana"的元素

// 【erase】删除指定位置的元素
auto it = um.find("orange");
if (it != um.end()) {
    um.erase(it);  // 删除迭代器指向的元素
}

// 【erase】删除指定范围的元素
um.erase(um.begin(), um.find("orange"));  // 删除"orange"之前的所有元素

// 【clear】清空所有元素
um.clear();  // 空unordered_map
```

### 4. 访问操作

```cpp
unordered_map<string, int> um{{"apple", 5}, {"banana", 3}, {"orange", 2}};

// 【[]】通过键访问值（如果键不存在会插入默认值）
int appleCount = um["apple"];  // 5
int grapeCount = um["grape"];  // 0（键不存在，插入默认值0）

// 【at】通过键访问值（如果键不存在抛出异常）
int bananaCount = um.at("banana");  // 3
// int kiwiCount = um.at("kiwi");   // 抛出异常

// 【find】查找键，返回迭代器
auto it = um.find("orange");
if (it != um.end()) {
    cout << "找到: " << it->first << " -> " << it->second << endl;
}

// 【迭代器访问】
for (auto it = um.begin(); it != um.end(); ++it) {
    cout << it->first << " -> " << it->second << endl;
}

// 【范围for循环】
for (const auto& pair : um) {
    cout << pair.first << " -> " << pair.second << endl;
}

// 【C++17结构化绑定】
for (const auto& [key, value] : um) {
    cout << key << " -> " << value << endl;
}
```

### 5. 查找操作

```cpp
unordered_map<string, int> um{{"apple", 5}, {"banana", 3}, {"orange", 2}};

// 【find】查找键，返回迭代器
auto it = um.find("banana");
if (it != um.end()) {
    cout << "找到: " << it->first << " -> " << it->second << endl;
} else {
    cout << "未找到" << endl;
}

// 【count】统计键的个数（unordered_map中只能是0或1）
if (um.count("apple") > 0) {
    cout << "键存在" << endl;
}

// 【注意】unordered_map不支持lower_bound、upper_bound等排序相关操作
```

### 6. 哈希表相关操作

```cpp
unordered_map<string, int> um{{"apple", 5}, {"banana", 3}, {"orange", 2}};

// 【bucket_count】获取桶的数量
cout << "桶数: " << um.bucket_count() << endl;

// 【load_factor】获取负载因子（元素数/桶数）
cout << "负载因子: " << um.load_factor() << endl;

// 【max_load_factor】获取或设置最大负载因子
cout << "最大负载因子: " << um.max_load_factor() << endl;
um.max_load_factor(0.75);  // 设置最大负载因子

// 【rehash】重新哈希（调整桶数）
um.rehash(100);  // 将桶数调整为至少100

// 【reserve】预留空间（设置桶数）
um.reserve(100);  // 预留至少100个桶
```

## 完整示例代码

```cpp
#include <iostream>
#include <unordered_map>
#include <vector>
#include <string>
using namespace std;

// 示例1：统计字符出现次数（不需要排序）
unordered_map<char, int> countChars(string s) {
    unordered_map<char, int> count;
    for (char c : s) {
        count[c]++;
    }
    return count;
}

// 示例2：两数之和（快速查找）
vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> map;  // 值 -> 索引
    
    for (int i = 0; i < nums.size(); i++) {
        int complement = target - nums[i];
        if (map.find(complement) != map.end()) {
            return {map[complement], i};
        }
        map[nums[i]] = i;
    }
    
    return {};  // 未找到
}

// 示例3：单词频率统计（不需要排序）
unordered_map<string, int> wordFrequency(vector<string>& words) {
    unordered_map<string, int> freq;
    for (const string& word : words) {
        freq[word]++;
    }
    return freq;
}

// 示例4：判断两个字符串是否为字母异位词
bool isAnagram(string s, string t) {
    if (s.length() != t.length()) return false;
    
    unordered_map<char, int> count;
    
    // 统计s中每个字符的个数
    for (char c : s) {
        count[c]++;
    }
    
    // 减去t中每个字符的个数
    for (char c : t) {
        count[c]--;
        if (count[c] < 0) {
            return false;
        }
    }
    
    return true;
}

int main() {
    // 【基本使用】
    unordered_map<string, int> um{{"apple", 5}, {"banana", 3}, {"orange", 2}};
    
    // 【遍历unordered_map】（顺序不确定）
    cout << "unordered_map内容: " << endl;
    for (const auto& [key, value] : um) {
        cout << key << " -> " << value << endl;
    }
    
    // 【访问和修改】
    um["apple"] = 6;  // 更新值
    um["grape"] = 4;  // 插入新键值对
    
    // 【查找】
    if (um.find("banana") != um.end()) {
        cout << "找到banana: " << um["banana"] << endl;
    }
    
    // 【字符统计示例】
    string s = "hello world";
    unordered_map<char, int> charCount = countChars(s);
    cout << "字符统计: " << endl;
    for (const auto& [ch, cnt] : charCount) {
        cout << ch << ": " << cnt << endl;
    }
    
    // 【两数之和示例】
    vector<int> nums = {2, 7, 11, 15};
    vector<int> result = twoSum(nums, 9);
    cout << "两数之和索引: " << result[0] << ", " << result[1] << endl;
    
    // 【单词频率示例】
    vector<string> words = {"apple", "banana", "apple", "orange", "banana", "apple"};
    unordered_map<string, int> freq = wordFrequency(words);
    cout << "单词频率: " << endl;
    for (const auto& [word, count] : freq) {
        cout << word << ": " << count << endl;
    }
    
    // 【字母异位词示例】
    cout << "anagram和nagaram是否为字母异位词: " 
         << isAnagram("anagram", "nagaram") << endl;  // true
    
    return 0;
}
```

## 使用场景和注意事项

{% note warning no-icon %}

**使用场景：**

- 需要快速查找、插入、删除键值对（O(1)平均）
- 不需要按键排序
- 字典、索引等应用（不需要排序）
- 统计频率、计数等（不需要排序）
- 哈希表相关算法（两数之和、字母异位词等）

**注意事项：**

1. `[]` 操作符如果键不存在会插入默认值，`at()` 会抛出异常
2. 元素无序存储，遍历顺序不确定
3. 插入重复键不会报错，但不会插入成功（值不会更新）
4. `insert()` 返回 `pair<iterator, bool>`，可以通过 `second` 判断是否插入成功
5. `find()` 返回迭代器，未找到返回 `end()`
6. `count()` 只能是0或1（因为键唯一）
7. 不支持排序相关操作（lower_bound、upper_bound等）
8. 不支持反向迭代器
9. 需要包含 `<unordered_map>` 头文件

**时间复杂度：**

- 插入（insert）：O(1)（平均），O(n)（最坏）
- 删除（erase）：O(1)（平均），O(n)（最坏）
- 查找（find）：O(1)（平均），O(n)（最坏）
- 访问（[]/at）：O(1)（平均），O(n)（最坏）
- 遍历：O(n)

**与map的区别：**

| 特性           | map                              | unordered_map  |
| -------------- | -------------------------------- | -------------- |
| 排序           | 有序                             | 无序           |
| 底层实现       | 红黑树                           | 哈希表         |
| 查找时间复杂度 | O(log n)                         | O(1)（平均）   |
| 排序相关操作   | 支持（lower_bound、upper_bound） | 不支持         |
| 反向迭代器     | 支持                             | 不支持         |
| 使用场景       | 需要排序                         | 只需要快速查找 |

**哈希函数：**

- 内置类型（int、string等）有默认哈希函数
- 自定义类型需要提供哈希函数和相等比较函数
- 可以通过模板参数指定自定义哈希函数

**性能优化：**

- 使用 `reserve()` 预留空间，避免频繁重新哈希
- 合理设置 `max_load_factor`，平衡空间和时间
- 对于已知大小的数据，可以预先设置桶数

{% endnote %}

---

# 迭代器（Iterators）

## 基本介绍

{% note info no-icon %}

**迭代器（Iterator）** 是STL中用于访问容器元素的对象，它提供了统一的接口来遍历不同类型的容器。

**迭代器的作用：**

- 提供统一的访问方式，屏蔽不同容器的实现细节
- 连接容器和算法，使算法可以独立于容器类型
- 支持范围遍历和元素访问

**迭代器的特点：**

- 类似于指针，但比指针更安全
- 不同类型的容器提供不同类型的迭代器
- 支持解引用（`*`）和成员访问（`->`）

{% endnote %}

## 迭代器类型

{% note info no-icon %}

STL中的迭代器按功能分为五类，从功能弱到强：

{% endnote %}

### 1. 输入迭代器（Input Iterator）

{% note info no-icon %}

- 只能读取元素，只能向前移动
- 支持 `++`、`*`、`==`、`!=`
- 典型应用：`istream_iterator`

{% endnote %}

### 2. 输出迭代器（Output Iterator）

{% note info no-icon %}

- 只能写入元素，只能向前移动
- 支持 `++`、`*`（只能赋值）
- 典型应用：`ostream_iterator`

{% endnote %}

### 3. 前向迭代器（Forward Iterator）

{% note info no-icon %}

- 可以读写元素，只能向前移动
- 支持输入和输出迭代器的所有操作
- 典型应用：`forward_list`、`unordered_set`、`unordered_map`

{% endnote %}

### 4. 双向迭代器（Bidirectional Iterator）

{% note info no-icon %}

- 可以读写元素，可以向前和向后移动
- 支持前向迭代器的所有操作，还支持 `--`
- 典型应用：`list`、`set`、`map`、`multiset`、`multimap`

{% endnote %}

### 5. 随机访问迭代器（Random Access Iterator）

{% note info no-icon %}

- 可以读写元素，支持随机访问
- 支持双向迭代器的所有操作，还支持 `+`、`-`、`[]`、`<`、`>` 等
- 典型应用：`vector`、`deque`、`string`、普通数组指针

{% endnote %}

## 常用迭代器操作

### 1. 获取迭代器

```cpp
#include <vector>
#include <list>
#include <set>
#include <map>
#include <iostream>
using namespace std;

int main() {
    vector<int> v{1, 2, 3, 4, 5};
    list<int> l{1, 2, 3, 4, 5};
    set<int> s{1, 2, 3, 4, 5};
    
    // 【begin/end】获取正向迭代器
    auto it1 = v.begin();  // 指向第一个元素
    auto it2 = v.end();    // 指向末尾（不包含）
    
    // 【rbegin/rend】获取反向迭代器
    auto rit1 = v.rbegin();  // 指向最后一个元素
    auto rit2 = v.rend();    // 指向开头之前（不包含）
    
    // 【cbegin/cend】获取常量迭代器（C++11）
    auto cit1 = v.cbegin();  // 常量迭代器，不能修改元素
    auto cit2 = v.cend();
    
    return 0;
}
```

### 2. 迭代器遍历

```cpp
vector<int> v{1, 2, 3, 4, 5};

// 【方法1：使用迭代器】
for (auto it = v.begin(); it != v.end(); ++it) {
    cout << *it << " ";  // 解引用访问元素
}

// 【方法2：范围for循环（C++11）】
for (int x : v) {
    cout << x << " ";
}

// 【方法3：反向迭代器】
for (auto it = v.rbegin(); it != v.rend(); ++it) {
    cout << *it << " ";  // 逆序输出
}

// 【方法4：使用常量迭代器】
for (auto it = v.cbegin(); it != v.cend(); ++it) {
    cout << *it << " ";  // 不能修改 *it
}
```

### 3. 迭代器操作

```cpp
vector<int> v{1, 2, 3, 4, 5};

// 【解引用】访问元素
auto it = v.begin();
cout << *it << endl;  // 1

// 【成员访问】对于结构体/类
vector<pair<int, string>> vp{{1, "one"}, {2, "two"}};
auto it2 = vp.begin();
cout << it2->first << " " << it2->second << endl;  // 1 one

// 【移动迭代器】
++it;        // 向前移动
--it;        // 向后移动（双向迭代器）
it += 2;     // 随机访问迭代器支持
it = it + 3; // 随机访问迭代器支持

// 【比较迭代器】
if (it1 < it2) {  // 随机访问迭代器支持
    cout << "it1在it2之前" << endl;
}
```

### 4. 迭代器失效问题

{% note warning no-icon %}

**迭代器失效**是指在对容器进行某些操作后，之前获取的迭代器可能变得无效。

**常见失效情况：**

1. **vector/deque**：
   - `push_back()`、`insert()` 可能导致所有迭代器失效（如果发生重新分配）
   - `erase()` 会使被删除元素及其之后的所有迭代器失效

2. **list**：
   - `erase()` 只使被删除元素的迭代器失效
   - `insert()` 不会使其他迭代器失效

3. **set/map**：
   - `erase()` 只使被删除元素的迭代器失效
   - `insert()` 不会使其他迭代器失效

**解决方法：**

- 在修改容器后重新获取迭代器
- 使用返回值更新迭代器（如 `erase()` 返回下一个有效迭代器）

{% endnote %}

## 完整示例代码

```cpp
#include <iostream>
#include <vector>
#include <list>
#include <set>
#include <map>
#include <algorithm>
using namespace std;

// 示例1：使用迭代器遍历不同容器
void iteratorTraversal() {
    // vector遍历
    vector<int> v{1, 2, 3, 4, 5};
    cout << "vector: ";
    for (auto it = v.begin(); it != v.end(); ++it) {
        cout << *it << " ";
    }
    cout << endl;
    
    // list遍历
    list<int> l{1, 2, 3, 4, 5};
    cout << "list: ";
    for (auto it = l.begin(); it != l.end(); ++it) {
        cout << *it << " ";
    }
    cout << endl;
    
    // set遍历
    set<int> s{1, 2, 3, 4, 5};
    cout << "set: ";
    for (auto it = s.begin(); it != s.end(); ++it) {
        cout << *it << " ";
    }
    cout << endl;
}

// 示例2：使用迭代器修改元素
void iteratorModify() {
    vector<int> v{1, 2, 3, 4, 5};
    
    // 将所有元素乘以2
    for (auto it = v.begin(); it != v.end(); ++it) {
        *it *= 2;
    }
    
    cout << "修改后: ";
    for (int x : v) {
        cout << x << " ";
    }
    cout << endl;  // 2 4 6 8 10
}

// 示例3：使用迭代器删除元素
void iteratorErase() {
    vector<int> v{1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    
    // 删除所有偶数（正确方法）
    for (auto it = v.begin(); it != v.end();) {
        if (*it % 2 == 0) {
            it = v.erase(it);  // erase返回下一个有效迭代器
        } else {
            ++it;
        }
    }
    
    cout << "删除偶数后: ";
    for (int x : v) {
        cout << x << " ";
    }
    cout << endl;  // 1 3 5 7 9
}

// 示例4：使用反向迭代器
void reverseIterator() {
    vector<int> v{1, 2, 3, 4, 5};
    
    cout << "正向: ";
    for (auto it = v.begin(); it != v.end(); ++it) {
        cout << *it << " ";
    }
    cout << endl;
    
    cout << "反向: ";
    for (auto it = v.rbegin(); it != v.rend(); ++it) {
        cout << *it << " ";
    }
    cout << endl;  // 5 4 3 2 1
}

// 示例5：迭代器与算法结合
void iteratorWithAlgorithm() {
    vector<int> v{3, 1, 4, 1, 5, 9, 2, 6};
    
    // 使用迭代器查找元素
    auto it = find(v.begin(), v.end(), 5);
    if (it != v.end()) {
        cout << "找到5，位置: " << distance(v.begin(), it) << endl;
    }
    
    // 使用迭代器排序
    sort(v.begin(), v.end());
    cout << "排序后: ";
    for (int x : v) {
        cout << x << " ";
    }
    cout << endl;
}

int main() {
    iteratorTraversal();
    iteratorModify();
    iteratorErase();
    reverseIterator();
    iteratorWithAlgorithm();
    
    return 0;
}
```

## 使用场景和注意事项

{% note warning no-icon %}

**使用场景：**

- 遍历容器元素
- 在算法中使用（如 `sort()`、`find()` 等）
- 修改容器元素
- 删除容器元素（需要正确处理迭代器失效）

**注意事项：**

1. 不同类型的容器提供不同类型的迭代器
2. 随机访问迭代器功能最强，支持所有操作
3. 迭代器失效是常见问题，需要特别注意
4. 使用 `auto` 可以简化迭代器类型声明
5. 范围for循环（C++11）是遍历容器的推荐方式
6. 常量迭代器（`cbegin()`、`cend()`）用于只读访问

**迭代器类型对比：**

| 迭代器类型     | 支持操作                              | 典型容器                        |
| -------------- | ------------------------------------- | ------------------------------- |
| 输入迭代器     | `++`, `*`, `==`, `!=`                 | `istream_iterator`              |
| 输出迭代器     | `++`, `*`（赋值）                     | `ostream_iterator`              |
| 前向迭代器     | 输入+输出迭代器所有操作               | `forward_list`, `unordered_set` |
| 双向迭代器     | 前向迭代器 + `--`                     | `list`, `set`, `map`            |
| 随机访问迭代器 | 双向迭代器 + `+`, `-`, `[]`, `<`, `>` | `vector`, `deque`, `string`     |

{% endnote %}

---

# 算法（Algorithms）

## 基本介绍

{% note info no-icon %}

STL提供了丰富的算法，位于 `<algorithm>` 头文件中。这些算法通过迭代器操作容器，实现了常用的数据处理功能。

**算法的特点：**

- 通过迭代器操作容器，独立于容器类型
- 大多数算法接受迭代器范围 `[first, last)`
- 不会修改容器大小（除了 `remove` 系列算法）

{% endnote %}

## 常用算法分类

### 1. 排序算法

{% note info no-icon %}

**sort()** - 快速排序

- **用法**：`sort(first, last)` 或 `sort(first, last, comp)`
- **功能**：对指定范围内的元素进行排序，默认升序
- **时间复杂度**：O(n log n)
- **注意**：会改变原容器，不稳定排序（相等元素的相对顺序可能改变）

**stable_sort()** - 稳定排序

- **用法**：`stable_sort(first, last)` 或 `stable_sort(first, last, comp)`
- **功能**：与 `sort()` 类似，但保持相等元素的相对顺序
- **时间复杂度**：O(n log² n) 或 O(n log n)
- **适用场景**：需要保持相等元素相对顺序时使用

**partial_sort()** - 部分排序

- **用法**：`partial_sort(first, middle, last)`
- **功能**：只对前 `middle - first` 个元素进行排序，其余元素不保证顺序
- **时间复杂度**：O(n log k)，k为排序的元素个数
- **适用场景**：只需要前K个最小/最大元素时，比完全排序更高效

**nth_element()** - 找第n大元素

- **用法**：`nth_element(first, nth, last)`
- **功能**：将第n小的元素放在位置n，左边元素都小于等于它，右边元素都大于等于它
- **时间复杂度**：O(n) 平均
- **适用场景**：找中位数、第K大/小元素

{% endnote %}

```cpp
#include <algorithm>
#include <vector>
using namespace std;

vector<int> v{3, 1, 4, 1, 5, 9, 2, 6};

// 【sort】排序（默认升序）
sort(v.begin(), v.end());

// 【sort】自定义比较函数（降序）
sort(v.begin(), v.end(), greater<int>());

// 【stable_sort】稳定排序
stable_sort(v.begin(), v.end());

// 【partial_sort】部分排序
partial_sort(v.begin(), v.begin() + 3, v.end());

// 【nth_element】找第n大元素
nth_element(v.begin(), v.begin() + 3, v.end());
```

### 2. 查找算法

{% note info no-icon %}

**find()** - 线性查找

- **用法**：`find(first, last, value)`
- **功能**：在范围内查找第一个等于value的元素
- **返回值**：找到返回迭代器，未找到返回 `last`
- **时间复杂度**：O(n)
- **适用场景**：无序序列的查找

**find_if()** - 条件查找

- **用法**：`find_if(first, last, pred)`
- **功能**：查找第一个满足条件 `pred` 的元素
- **返回值**：找到返回迭代器，未找到返回 `last`
- **时间复杂度**：O(n)
- **适用场景**：需要按条件查找时

**binary_search()** - 二分查找

- **用法**：`binary_search(first, last, value)`
- **功能**：在有序序列中查找元素
- **返回值**：找到返回 `true`，未找到返回 `false`
- **时间复杂度**：O(log n)
- **注意**：序列必须是有序的，只判断是否存在，不返回位置

**lower_bound()** - 下界查找

- **用法**：`lower_bound(first, last, value)`
- **功能**：在有序序列中查找第一个不小于value的元素位置
- **返回值**：返回迭代器，指向第一个不小于value的元素
- **时间复杂度**：O(log n)
- **适用场景**：有序序列中查找插入位置

**upper_bound()** - 上界查找

- **用法**：`upper_bound(first, last, value)`
- **功能**：在有序序列中查找第一个大于value的元素位置
- **返回值**：返回迭代器，指向第一个大于value的元素
- **时间复杂度**：O(log n)
- **适用场景**：与 `lower_bound()` 配合使用，确定相等元素的范围

{% endnote %}

```cpp
vector<int> v{1, 2, 3, 4, 5, 6, 7, 8, 9};

// 【find】查找元素
auto it = find(v.begin(), v.end(), 5);

// 【find_if】条件查找
auto it2 = find_if(v.begin(), v.end(), [](int x) { return x > 5; });

// 【binary_search】二分查找（需要有序）
bool found = binary_search(v.begin(), v.end(), 5);

// 【lower_bound】下界
auto it3 = lower_bound(v.begin(), v.end(), 5);

// 【upper_bound】上界
auto it4 = upper_bound(v.begin(), v.end(), 5);
```

### 3. 计数和修改算法

{% note info no-icon %}

**count()** - 计数

- **用法**：`count(first, last, value)`
- **功能**：统计范围内等于value的元素个数
- **返回值**：元素个数
- **时间复杂度**：O(n)
- **适用场景**：统计特定值的出现次数

**count_if()** - 条件计数

- **用法**：`count_if(first, last, pred)`
- **功能**：统计范围内满足条件 `pred` 的元素个数
- **返回值**：满足条件的元素个数
- **时间复杂度**：O(n)
- **适用场景**：按条件统计元素个数

**fill()** - 填充

- **用法**：`fill(first, last, value)`
- **功能**：将范围内的所有元素设置为value
- **时间复杂度**：O(n)
- **适用场景**：初始化或重置容器元素

**reverse()** - 反转

- **用法**：`reverse(first, last)`
- **功能**：反转范围内的元素顺序
- **时间复杂度**：O(n)
- **适用场景**：需要逆序排列时

**unique()** - 去重

- **用法**：`unique(first, last)`
- **功能**：移除相邻的重复元素，只保留第一个
- **返回值**：返回指向去重后序列末尾的迭代器
- **时间复杂度**：O(n)
- **注意**：不会真正删除元素，只是移动，需要配合 `erase()` 使用；使用前需要先排序

{% endnote %}

```cpp
vector<int> v{1, 2, 2, 3, 3, 3, 4};

// 【count】计数
int cnt = count(v.begin(), v.end(), 3);

// 【count_if】条件计数
int cnt2 = count_if(v.begin(), v.end(), [](int x) { return x > 2; });

// 【fill】填充
fill(v.begin(), v.end(), 0);

// 【reverse】反转
reverse(v.begin(), v.end());

// 【unique】去重（需要先排序）
sort(v.begin(), v.end());
auto it = unique(v.begin(), v.end());
v.erase(it, v.end());
```

### 4. 其他常用算法

{% note info no-icon %}

**max_element() / min_element()** - 最值位置

- **用法**：`max_element(first, last)` 或 `max_element(first, last, comp)`
- **功能**：返回范围内最大/最小元素的迭代器
- **返回值**：指向最大/最小元素的迭代器
- **时间复杂度**：O(n)
- **注意**：返回的是迭代器，需要解引用才能获取值

**accumulate()** - 累加

- **用法**：`accumulate(first, last, init)` 或 `accumulate(first, last, init, op)`
- **功能**：对范围内的元素进行累加（或自定义运算）
- **返回值**：累加结果
- **时间复杂度**：O(n)
- **注意**：需要包含 `<numeric>` 头文件

**next_permutation()** - 下一个排列

- **用法**：`next_permutation(first, last)` 或 `next_permutation(first, last, comp)`
- **功能**：将序列转换为下一个字典序排列
- **返回值**：如果存在下一个排列返回 `true`，否则返回 `false`
- **时间复杂度**：O(n)
- **注意**：使用前需要先排序；配合 `do-while` 循环可以遍历所有排列

**prev_permutation()** - 上一个排列

- **用法**：`prev_permutation(first, last)`
- **功能**：将序列转换为上一个字典序排列
- **返回值**：如果存在上一个排列返回 `true`，否则返回 `false`
- **时间复杂度**：O(n)

{% endnote %}

```cpp
vector<int> v{3, 1, 4, 1, 5, 9, 2, 6};

// 【max_element/min_element】最值位置
int maxVal = *max_element(v.begin(), v.end());
int minVal = *min_element(v.begin(), v.end());

// 【accumulate】累加（需要 <numeric>）
#include <numeric>
int sum = accumulate(v.begin(), v.end(), 0);

// 【next_permutation】下一个排列
sort(v.begin(), v.end());
do {
    // 处理排列
} while (next_permutation(v.begin(), v.end()));
```

## 使用场景和注意事项

{% note warning no-icon %}

**使用场景：**

- 排序、查找、计数等常见操作
- 数据处理和转换

**注意事项：**

1. 大多数算法需要包含 `<algorithm>` 头文件
2. `accumulate` 需要 `<numeric>` 头文件
3. `binary_search`、`lower_bound`、`upper_bound` 需要有序序列
4. `unique` 不会真正删除元素，需要配合 `erase` 使用

{% endnote %}

---

# 函数对象（Function Objects）

## 基本介绍

{% note info no-icon %}

**函数对象（Function Object）** 是重载了 `operator()` 的类对象，可以像函数一样调用。

**函数对象的优势：**

- 可以保存状态
- 可以作为参数传递
- 比函数指针更灵活

{% endnote %}

## 常用函数对象

```cpp
#include <functional>
#include <algorithm>
#include <vector>
using namespace std;

vector<int> v{3, 1, 4, 1, 5, 9, 2, 6};

// 【less/greater】比较函数
sort(v.begin(), v.end(), less<int>());      // 升序
sort(v.begin(), v.end(), greater<int>());    // 降序

// 【plus/minus】算术运算
plus<int> add;
int result = add(3, 4);  // 7
```

## Lambda表达式（C++11）

```cpp
vector<int> v{3, 1, 4, 1, 5, 9, 2, 6};

// 【基本语法】
sort(v.begin(), v.end(), [](int a, int b) { return a > b; });

// 【捕获变量】
int threshold = 5;
int cnt = count_if(v.begin(), v.end(), [threshold](int x) { return x > threshold; });

// 【按值/按引用捕获】
int a = 10;
auto f1 = [a](int x) { return x + a; };      // 按值捕获
auto f2 = [&a](int x) { return x + a; };     // 按引用捕获
```

## 使用场景和注意事项

{% note warning no-icon %}

**使用场景：**

- 作为算法的比较函数或谓词
- 需要保存状态的函数
- 简化代码（Lambda表达式）

**注意事项：**

1. 函数对象需要包含 `<functional>` 头文件
2. Lambda表达式是C++11特性
3. 按引用捕获需要注意变量生命周期

{% endnote %}

---

# 实用技巧和最佳实践

## 容器选择指南

{% note info no-icon %}

选择合适的容器是使用STL的关键：

| 需求                       | 推荐容器                           |
| -------------------------- | ---------------------------------- |
| 需要随机访问               | `vector`, `deque`                  |
| 频繁在尾部插入删除         | `vector`, `deque`                  |
| 频繁在任意位置插入删除     | `list`                             |
| 需要有序且唯一             | `set`                              |
| 需要键值对映射             | `map`                              |
| 只需要快速查找，不需要排序 | `unordered_set`, `unordered_map`   |
| 需要栈/队列/优先队列       | `stack`, `queue`, `priority_queue` |

{% endnote %}

## 常见错误和注意事项

### 1. 迭代器失效

```cpp
vector<int> v{1, 2, 3, 4, 5};

// 【错误】修改容器后使用旧迭代器
auto it = v.begin();
v.push_back(6);  // 可能导致迭代器失效
// cout << *it;  // 危险！

// 【正确】重新获取迭代器
v.push_back(6);
auto it = v.begin();
cout << *it << endl;
```

### 2. 删除元素时的迭代器处理

```cpp
vector<int> v{1, 2, 3, 4, 5, 6};

// 【正确删除方法】
for (auto it = v.begin(); it != v.end();) {
    if (*it % 2 == 0) {
        it = v.erase(it);  // erase返回下一个有效迭代器
    } else {
        ++it;
    }
}
```

### 3. 性能优化建议

{% note info no-icon %}

- 使用 `reserve()` 预分配空间（vector、string）
- 使用 `reserve()` 预留桶数（unordered容器）
- 选择合适的容器类型
- 避免不必要的拷贝（使用引用）

{% endnote %}

## 实际应用示例

```cpp
// 示例：统计单词频率并找出频率最高的K个单词
vector<string> topKFrequent(vector<string>& words, int k) {
    unordered_map<string, int> freq;
    for (const string& word : words) {
        freq[word]++;
    }
    
    vector<pair<string, int>> vec(freq.begin(), freq.end());
    sort(vec.begin(), vec.end(), [](const pair<string, int>& a, const pair<string, int>& b) {
        if (a.second != b.second) return a.second > b.second;
        return a.first < b.first;
    });
    
    vector<string> result;
    for (int i = 0; i < k && i < vec.size(); i++) {
        result.push_back(vec[i].first);
    }
    return result;
}
```

---

# 总结

## STL的优势

{% note success no-icon %}

1. **代码复用**：提供通用的数据结构和算法
2. **类型安全**：模板机制保证类型安全
3. **性能优化**：经过高度优化的实现
4. **易于使用**：统一的接口，易于学习和使用
5. **可扩展性**：支持自定义类型和函数对象

{% endnote %}

## 学习建议

{% note info no-icon %}

1. **从常用容器开始**：先掌握 `vector`、`map`、`set` 等常用容器
2. **理解迭代器**：迭代器是STL的核心概念
3. **熟悉常用算法**：掌握 `sort`、`find`、`count` 等常用算法
4. **多实践**：通过编程题练习STL的使用
5. **注意细节**：注意迭代器失效、时间复杂度等细节

{% endnote %}

## 参考资料

{% note info no-icon %}

- C++标准库文档
- 《C++ Primer》
- 《Effective STL》
- 在线资源：cppreference.com

{% endnote %}

---