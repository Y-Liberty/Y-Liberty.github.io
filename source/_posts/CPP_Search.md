---
title: C++ 搜索专题 - DFS、BFS 与洪泛算法
date: 2024-12-01 10:30:00
tags:
  - C++ 算法与数据结构
categories:
  - CPP
cover: https://bu.dusays.com/2025/11/03/690849306c996.png
---

# 前言

{% note warning no-icon %}

本文将带你深入学习 C++ 中的**搜索算法**，包括**DFS（深度优先搜索）**、**BFS（广度优先搜索）**和**洪泛算法**，让你掌握这些重要的算法思想，能够解决各种搜索问题！

{% endnote %}

{% note warning no-icon %}

在阅读过程中有任何问题都可以发布到评论区，有价值的问题将会放到文章末尾Q&A之中！

{% endnote %}

{% note success no-icon %}

**本文导航：**
- 🔍 DFS（深度优先搜索）：深入理解递归搜索
- 📊 BFS（广度优先搜索）：层层递进的搜索策略
- 🌊 洪泛算法：连通性问题的经典解法
- 💡 实战练习：经典题目训练
- ⚠️ 常见错误：易错点分析
- 🚀 编程技巧：优化建议

{% endnote %}

# DFS（深度优先搜索）

## 什么是DFS

{% note info no-icon %}

**DFS（Depth-First Search，深度优先搜索）**是一种重要的搜索算法，它采用"一条路走到黑"的策略：

- 🌲 **树/图的遍历**：从起点开始，沿着一条路径尽可能深地搜索，直到无法继续，然后回溯到上一个节点，继续搜索其他路径
- 🔄 **递归思想**：DFS通常用递归实现，代码简洁优雅
- 📍 **回溯机制**：当一条路径走不通时，会返回到上一个状态继续尝试

{% endnote %}

{% note warning no-icon %}

**DFS的核心思想：**
- 先深入后回溯，像走迷宫一样，遇到死胡同就回头
- 用一个**递归函数**来模拟这个过程
- 需要**标记已访问**的节点，避免重复访问

{% endnote %}

## DFS的基本框架

{% note success no-icon %}

**DFS的基本代码框架：**

```cpp
#include <iostream>
#include <vector>
using namespace std;

const int N = 100;  // 最大节点数
bool st[N];         // 标记数组，st[i] 表示节点 i 是否已访问

void dfs(int u) {
    // 1. 标记当前节点已访问
    st[u] = true;
    
    // 2. 处理当前节点
    // 这里可以根据具体问题进行处理
    
    // 3. 遍历所有相邻节点
    for (int v : g[u]) {  // g[u] 表示节点 u 的相邻节点集合
        if (!st[v]) {     // 如果节点 v 未被访问
            dfs(v);       // 递归访问节点 v
        }
    }
}
```

{% endnote %}

## DFS的三种遍历方式

### 1. 前序遍历

{% note info no-icon %}

**前序遍历**：在处理当前节点**之前**先标记，然后处理当前节点，最后遍历相邻节点。

**适用场景：** 需要先处理当前节点的情况

**代码模板：**

```cpp
void dfs(int u) {
    // 1. 标记已访问
    st[u] = true;
    
    // 2. 处理当前节点（在前）
    cout << u << " ";  // 输出节点编号
    
    // 3. 遍历相邻节点
    for (int v : g[u]) {
        if (!st[v]) {
            dfs(v);
        }
    }
}
```


{% endnote %}

### 2. 后序遍历

{% note info no-icon %}

**后序遍历**：先遍历所有相邻节点，最后处理当前节点。

**适用场景：** 需要先处理子树，再处理当前节点的情况

**代码模板：**

```cpp
void dfs(int u) {
    // 1. 标记已访问
    st[u] = true;
    
    // 2. 先遍历相邻节点
    for (int v : g[u]) {
        if (!st[v]) {
            dfs(v);
        }
    }
    
    // 3. 处理当前节点（在后）
    cout << u << " ";  // 输出节点编号
}
```

{% endnote %}

### 3. 回溯式DFS

{% note info no-icon %}

**回溯式DFS**：访问完子树后，取消标记，允许重复访问。

**适用场景：** 需要尝试所有可能的路径，比如全排列、组合问题

**代码模板：**

```cpp
void dfs(int u) {
    // 1. 标记已访问
    st[u] = true;
    
    // 2. 处理当前节点
    // ...
    
    // 3. 遍历相邻节点
    for (int v : g[u]) {
        if (!st[v]) {
            dfs(v);
        }
    }
    
    // 4. 回溯：取消标记
    st[u] = false;  // 允许其他路径再次访问
}
```

**应用：** 全排列、N皇后、数独等需要尝试所有可能性的问题

{% endnote %}

## DFS的经典应用

### 应用1：图的遍历

{% note success no-icon %}

**问题描述：** 给定一个无向图，使用DFS遍历所有节点。

**完整代码：**

```cpp
#include <iostream>
#include <vector>
using namespace std;

const int N = 100;
vector<int> g[N];  // 邻接表存储图
bool st[N];        // 标记数组

// DFS遍历
void dfs(int u) {
    st[u] = true;           // 标记已访问
    cout << u << " ";      // 输出当前节点
    
    // 遍历所有相邻节点
    for (int v : g[u]) {
        if (!st[v]) {      // 如果未访问过
            dfs(v);        // 递归访问
        }
    }
}

int main() {
    int n, m;  // n个节点，m条边
    cin >> n >> m;
    
    // 读入边
    for (int i = 0; i < m; i++) {
        int a, b;
        cin >> a >> b;
        g[a].push_back(b);  // 无向图，双向连边
        g[b].push_back(a);
    }
    
    // 从节点1开始DFS遍历
    dfs(1);
    
    return 0;
}
```

**输入示例：**
```
6 5
1 2
1 3
2 4
2 5
3 6
```

**输出示例：**
```
1 2 4 5 3 6
```

{% endnote %}

### 应用2：连通块计数

{% note success no-icon %}

**问题描述：** 给定一个无向图，统计有多少个连通块。

**思路：**
- 对每个未访问的节点进行DFS
- 每次DFS可以访问到一个连通块的所有节点
- DFS的次数就是连通块的数量

**完整代码：**

```cpp
#include <iostream>
#include <vector>
using namespace std;

const int N = 100;
vector<int> g[N];
bool st[N];

// DFS遍历连通块
void dfs(int u) {
    st[u] = true;  // 标记已访问
    
    // 遍历相邻节点
    for (int v : g[u]) {
        if (!st[v]) {
            dfs(v);
        }
    }
}

int main() {
    int n, m;
    cin >> n >> m;
    
    // 读入边
    for (int i = 0; i < m; i++) {
        int a, b;
        cin >> a >> b;
        g[a].push_back(b);
        g[b].push_back(a);
    }
    
    int cnt = 0;  // 连通块数量
    
    // 遍历所有节点
    for (int i = 1; i <= n; i++) {
        if (!st[i]) {      // 如果节点未访问
            dfs(i);        // DFS遍历该连通块
            cnt++;         // 连通块数量+1
        }
    }
    
    cout << "连通块数量：" << cnt << endl;
    
    return 0;
}
```

**输入示例：**
```
6 4
1 2
2 3
4 5
6 6
```

**输出示例：**
```
连通块数量：3
```

**解释：**
- 节点1、2、3构成一个连通块
- 节点4、5构成一个连通块
- 节点6单独构成一个连通块

{% endnote %}

## DFS在矩阵中的应用

### 矩阵DFS模板

{% note warning no-icon %}

**二维矩阵DFS是竞赛中常见的问题类型！**

在二维矩阵中使用DFS时，通常需要：
- 遍历上下左右四个方向
- 使用方向数组简化代码
- 判断边界条件

{% endnote %}

{% note success no-icon %}

**二维矩阵DFS代码模板：**

```cpp
#include <iostream>
using namespace std;

const int N = 100;
int g[N][N];           // 存储矩阵
bool st[N][N];         // 标记数组
int n, m;              // 矩阵大小：n行m列

// 方向数组：上、右、下、左
int dx[4] = {-1, 0, 1, 0};
int dy[4] = {0, 1, 0, -1};

// 矩阵DFS
void dfs(int x, int y) {
    // 1. 标记已访问
    st[x][y] = true;
    
    // 2. 处理当前格子
    // 这里可以根据具体问题进行处理
    
    // 3. 遍历四个方向
    for (int i = 0; i < 4; i++) {
        int nx = x + dx[i];  // 新的行坐标
        int ny = y + dy[i];  // 新的列坐标
        
        // 判断是否越界
        if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
            continue;
        }
        
        // 判断是否满足条件（根据题目要求修改）
        if (!st[nx][ny] && g[nx][ny] != 0) {  // 示例：非0且未访问
            dfs(nx, ny);  // 递归访问
        }
    }
}

int main() {
    cin >> n >> m;
    
    // 读入矩阵
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            cin >> g[i][j];
        }
    }
    
    // 从(0,0)开始DFS
    dfs(0, 0);
    
    return 0;
}
```

**方向数组说明：**
- `dx[4] = {-1, 0, 1, 0}` 表示行方向的变化
- `dy[4] = {0, 1, 0, -1}` 表示列方向的变化
- 四个方向分别是：上(-1,0)、右(0,1)、下(1,0)、左(0,-1)

{% endnote %}

## 实战题目

### 题目1：全排列问题

{% note warning no-icon %}

**题目描述：**
给定一个正整数 n，输出 1 到 n 的所有全排列。

**输入格式：**
一个整数 n（1 ≤ n ≤ 9）

**输出格式：**
每行一个排列，按字典序输出。

{% endnote %}

{% note success no-icon %}

**解题思路：**
- 使用DFS + 回溯
- 用一个数组`path[]`存储当前路径
- 递归尝试每个位置可以放置哪些数字
- 回溯时恢复状态

**完整代码：**

```cpp
#include <iostream>
#include <vector>
using namespace std;

const int N = 10;
int n;
int path[N];      // 存储当前排列
bool st[N];       // 标记数组，st[i]表示数字i是否已使用

void dfs(int u) {
    // 如果已经填满n个位置，输出排列
    if (u > n) {
        for (int i = 1; i <= n; i++) {
            cout << path[i] << " ";
        }
        cout << endl;
        return;
    }
    
    // 尝试在位置u放置每个未被使用的数字
    for (int i = 1; i <= n; i++) {
        if (!st[i]) {           // 如果数字i未被使用
            path[u] = i;        // 将数字i放在位置u
            st[i] = true;       // 标记数字i已使用
            dfs(u + 1);         // 递归处理下一个位置
            st[i] = false;      // 回溯：恢复状态
        }
    }
}

int main() {
    cin >> n;
    dfs(1);  // 从第1个位置开始
    return 0;
}
```

**输入示例：**
```
3
```

**输出示例：**
```
1 2 3 
1 3 2 
2 1 3 
2 3 1 
3 1 2 
3 2 1 
```

**执行过程分析：**
1. 第一个位置：可以选择1、2、3
2. 假设选择1，第二个位置：可以选择2、3
3. 假设选择2，第三个位置：只能选择3
4. 得到排列：1 2 3
5. 回溯，恢复状态，继续尝试其他可能

{% endnote %}

### 题目2：迷宫问题

{% note warning no-icon %}

**题目描述：**
给定一个 n×m 的迷宫，其中 0 表示可以走，1 表示障碍物。从起点 (0,0) 出发，能否到达终点 (n-1, m-1)？

**输入格式：**
第一行两个整数 n 和 m
接下来 n 行，每行 m 个整数（0 或 1）

**输出格式：**
如果能到达终点，输出 "Yes"，否则输出 "No"。

{% endnote %}

{% note success no-icon %}

**解题思路：**
- 使用DFS从起点开始搜索
- 标记已访问的格子，避免重复访问
- 如果能到达终点，返回true

**完整代码：**

```cpp
#include <iostream>
using namespace std;

const int N = 105;
int n, m;
int g[N][N];      // 存储迷宫
bool st[N][N];    // 标记数组

// 方向数组
int dx[4] = {-1, 0, 1, 0};
int dy[4] = {0, 1, 0, -1};

// DFS搜索路径
bool dfs(int x, int y) {
    // 到达终点
    if (x == n - 1 && y == m - 1) {
        return true;
    }
    
    // 标记当前格子已访问
    st[x][y] = true;
    
    // 遍历四个方向
    for (int i = 0; i < 4; i++) {
        int nx = x + dx[i];
        int ny = y + dy[i];
        
        // 判断边界
        if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
            continue;
        }
        
        // 判断是否可以走（不是障碍物且未访问）
        if (g[nx][ny] == 0 && !st[nx][ny]) {
            if (dfs(nx, ny)) {  // 如果从(nx,ny)能到达终点
                return true;
            }
        }
    }
    
    return false;  // 所有方向都走不通
}

int main() {
    cin >> n >> m;
    
    // 读入迷宫
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            cin >> g[i][j];
        }
    }
    
    // 从起点开始DFS
    if (dfs(0, 0)) {
        cout << "Yes" << endl;
    } else {
        cout << "No" << endl;
    }
    
    return 0;
}
```

**输入示例：**
```
5 5
0 1 0 0 0
0 1 0 1 0
0 0 0 0 0
0 1 1 1 0
0 0 0 0 0
```

**输出示例：**
```
Yes
```

**迷宫图示：**
```
0 1 0 0 0
0 1 0 1 0
0 0 0 0 0
0 1 1 1 0
0 0 0 0 0
```
- 0 表示通路
- 1 表示障碍物
- 存在从左上角到右下角的路径

{% endnote %}

## DFS常见错误

{% note warning no-icon %}

### 错误1：忘记标记已访问

```cpp
// ❌ 错误写法
void dfs(int u) {
    // 忘记标记 st[u] = true;
    for (int v : g[u]) {
        if (!st[v]) {  // 可能导致无限递归
            dfs(v);
        }
    }
}

// ✅ 正确写法
void dfs(int u) {
    st[u] = true;  // 必须先标记
    for (int v : g[u]) {
        if (!st[v]) {
            dfs(v);
        }
    }
}
```

### 错误2：边界判断错误

```cpp
// ❌ 错误写法
if (nx < 0 || nx > n || ny < 0 || ny > m) {  // 应该用 >=

// ✅ 正确写法
if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
```

### 错误3：回溯时忘记恢复状态

```cpp
// ❌ 错误写法（回溯问题）
void dfs(int u) {
    st[u] = true;
    // ... 处理
    st[u] = false;  // 如果不需要回溯，不应该取消标记
}

// 需要根据题目要求决定是否需要回溯
```

{% endnote %}

## DFS时间复杂度分析

{% note info no-icon %}

**DFS的时间复杂度：**
- **图遍历**：O(V + E)，其中V是节点数，E是边数
- **矩阵遍历**：O(N × M)，其中N是行数，M是列数
- **全排列**：O(n!)，需要生成n!个排列

**空间复杂度：**
- **递归栈深度**：O(H)，其中H是搜索树的最大深度
- **标记数组**：O(N)，其中N是节点数

{% endnote %}

## DFS优化技巧

{% note success no-icon %}

### 技巧1：剪枝优化

在DFS过程中，如果发现当前路径不可能得到最优解，可以提前返回，减少搜索空间。

```cpp
void dfs(int u, int sum) {
    // 剪枝：如果当前和已经超过最小值，直接返回
    if (sum >= minSum) {
        return;  // 提前剪枝
    }
    
    // ... 继续搜索
}
```

### 技巧2：记忆化搜索

对于重复子问题，可以使用数组存储已经计算过的结果。

```cpp
int mem[N];  // 记忆化数组

int dfs(int u) {
    if (mem[u] != -1) {  // 如果已经计算过
        return mem[u];   // 直接返回
    }
    
    // 计算并存储结果
    int res = /* 计算结果 */;
    mem[u] = res;
    return res;
}
```

### 技巧3：迭代加深DFS

当搜索深度不确定时，可以使用迭代加深策略。

```cpp
for (int depth = 1; depth <= maxDepth; depth++) {
    if (dfs(start, 0, depth)) {
        break;  // 找到解就退出
    }
}
```

{% endnote %}

# BFS（广度优先搜索）

## 什么是BFS

{% note info no-icon %}

**BFS（Breadth-First Search，广度优先搜索）**是另一种重要的搜索算法，它采用"层层递进"的策略：

- 🌊 **逐层遍历**：从起点开始，先访问距离起点最近的节点，然后访问距离起点次近的节点，依此类推
- 📊 **队列实现**：BFS通常用队列实现，保证先访问的节点先处理
- 🎯 **最短路径**：BFS天然适合求解最短路径问题（在无权图中）

{% endnote %}

{% note warning no-icon %}

**BFS的核心思想：**
- 像水波一样一层层扩散出去
- 用**队列**来存储待访问的节点
- 每次从队头取出节点，将其相邻未访问节点加入队尾
- 保证先访问距离起点更近的节点

{% endnote %}

## DFS与BFS的对比

{% note success no-icon %}

**DFS vs BFS：**

| 特性 | DFS（深度优先搜索） | BFS（广度优先搜索） |
| :---: | :---: | :---: |
| 实现方式 | 递归/栈 | 队列 |
| 搜索策略 | 一条路走到黑 | 层层递进 |
| 适用场景 | 回溯问题、全排列 | 最短路径、层序遍历 |
| 空间复杂度 | O(H)，H为深度 | O(W)，W为最宽层的节点数 |
| 特点 | 可能找到非最优解 | 找到的路径一定是最短的 |

**形象比喻：**
- **DFS**：像走迷宫，遇到岔路选择一条深入，走不通就回头
- **BFS**：像水波扩散，以起点为中心一圈圈向外扩展

{% endnote %}

## BFS的基本框架

{% note success no-icon %}

**BFS的基本代码框架：**

```cpp
#include <iostream>
#include <vector>
#include <queue>
using namespace std;

const int N = 100;
bool st[N];              // 标记数组，st[i] 表示节点 i 是否已访问
vector<int> g[N];        // 邻接表存储图

void bfs(int start) {
    queue<int> q;        // 定义队列
    q.push(start);       // 将起点加入队列
    st[start] = true;    // 标记起点已访问
    
    while (!q.empty()) {  // 队列不为空时循环
        int u = q.front(); // 取出队头元素
        q.pop();          // 弹出队头元素
        
        // 处理当前节点 u
        // 这里可以根据具体问题进行处理
        
        // 遍历所有相邻节点
        for (int v : g[u]) {
            if (!st[v]) {    // 如果节点 v 未被访问
                st[v] = true; // 标记已访问
                q.push(v);   // 将节点 v 加入队列
            }
        }
    }
}
```

**执行流程：**
1. 将起点加入队列并标记
2. 从队列取出队头节点
3. 处理该节点
4. 将该节点的所有未访问相邻节点加入队列
5. 重复步骤2-4，直到队列为空

{% endnote %}

## BFS求最短路径

{% note warning no-icon %}

**BFS最重要的应用之一：在无权图中求最短路径！**

在无权图（边权都为1）中，BFS第一次访问到某个节点时，经过的路径长度就是最短路径长度。

{% endnote %}

{% note success no-icon %}

**BFS求最短路径代码模板：**

```cpp
#include <iostream>
#include <vector>
#include <queue>
using namespace std;

const int N = 100;
vector<int> g[N];        // 邻接表
int dist[N];             // 距离数组，dist[i]表示从起点到节点i的最短距离

void bfs(int start) {
    queue<int> q;
    q.push(start);
    dist[start] = 0;     // 起点距离为0
    
    while (!q.empty()) {
        int u = q.front();
        q.pop();
        
        // 遍历相邻节点
        for (int v : g[u]) {
            if (dist[v] == -1) {      // 如果未访问过（初始化为-1）
                dist[v] = dist[u] + 1; // 距离 = 当前距离 + 1
                q.push(v);             // 加入队列
            }
        }
    }
}

int main() {
    int n, m;
    cin >> n >> m;
    
    // 初始化距离数组为-1（表示未访问）
    for (int i = 1; i <= n; i++) {
        dist[i] = -1;
    }
    
    // 读入边
    for (int i = 0; i < m; i++) {
        int a, b;
        cin >> a >> b;
        g[a].push_back(b);
        g[b].push_back(a);
    }
    
    // 从节点1开始BFS
    bfs(1);
    
    // 输出从节点1到所有节点的最短距离
    for (int i = 1; i <= n; i++) {
        cout << "从节点1到节点" << i << "的最短距离：" << dist[i] << endl;
    }
    
    return 0;
}
```

**关键点：**
- 使用 `dist[]` 数组记录距离，初始化为-1表示未访问
- 第一次访问到节点时，距离就是最短距离
- 如果 `dist[v] == -1`，说明节点v还未访问，更新距离并加入队列

{% endnote %}

## BFS在矩阵中的应用

### 矩阵BFS模板

{% note warning no-icon %}

**二维矩阵BFS也是竞赛中的高频题型！**

在矩阵中使用BFS时，需要注意：
- 使用 `pair<int, int>` 或结构体存储坐标
- 方向数组与DFS相同
- 队列中存储的是坐标对

{% endnote %}

{% note success no-icon %}

**二维矩阵BFS代码模板：**

```cpp
#include <iostream>
#include <queue>
using namespace std;

const int N = 105;
int n, m;
int g[N][N];           // 存储矩阵
int dist[N][N];        // 距离数组
bool st[N][N];         // 标记数组（可选，也可以用dist判断）

// 方向数组：上、右、下、左
int dx[4] = {-1, 0, 1, 0};
int dy[4] = {0, 1, 0, -1};

void bfs(int sx, int sy) {
    queue<pair<int, int>> q;
    q.push({sx, sy});
    dist[sx][sy] = 0;   // 起点距离为0
    st[sx][sy] = true;   // 标记起点已访问
    
    while (!q.empty()) {
        auto [x, y] = q.front();  // C++17结构化绑定
        q.pop();
        
        // 遍历四个方向
        for (int i = 0; i < 4; i++) {
            int nx = x + dx[i];
            int ny = y + dy[i];
            
            // 判断边界
            if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
                continue;
            }
            
            // 判断是否满足条件
            if (!st[nx][ny] && g[nx][ny] != 1) {  // 示例：不是障碍物且未访问
                dist[nx][ny] = dist[x][y] + 1;     // 更新距离
                st[nx][ny] = true;                  // 标记已访问
                q.push({nx, ny});                  // 加入队列
            }
        }
    }
}

int main() {
    cin >> n >> m;
    
    // 初始化
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            dist[i][j] = -1;  // 初始化为-1表示未访问
        }
    }
    
    // 读入矩阵
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            cin >> g[i][j];
        }
    }
    
    // 从(0,0)开始BFS
    bfs(0, 0);
    
    // 输出从起点到终点的最短距离
    cout << dist[n-1][m-1] << endl;
    
    return 0;
}
```

**注意：** 如果不支持C++17，可以用传统方式：
```cpp
int x = q.front().first;
int y = q.front().second;
```

{% endnote %}

## BFS的经典应用

### 应用1：图的层序遍历

{% note success no-icon %}

**问题描述：** 给定一个无向图，使用BFS按层输出所有节点。

**完整代码：**

```cpp
#include <iostream>
#include <vector>
#include <queue>
using namespace std;

const int N = 100;
vector<int> g[N];
bool st[N];

void bfs(int start) {
    queue<int> q;
    q.push(start);
    st[start] = true;
    
    while (!q.empty()) {
        int u = q.front();
        q.pop();
        
        cout << u << " ";  // 输出当前节点
        
        // 遍历相邻节点
        for (int v : g[u]) {
            if (!st[v]) {
                st[v] = true;
                q.push(v);
            }
        }
    }
    cout << endl;
}

int main() {
    int n, m;
    cin >> n >> m;
    
    // 读入边
    for (int i = 0; i < m; i++) {
        int a, b;
        cin >> a >> b;
        g[a].push_back(b);
        g[b].push_back(a);
    }
    
    // 从节点1开始BFS
    bfs(1);
    
    return 0;
}
```

**输入示例：**
```
6 5
1 2
1 3
2 4
2 5
3 6
```

**输出示例（可能的顺序）：**
```
1 2 3 4 5 6
```

**BFS遍历特点：** 先访问距离起点最近的节点，所以输出顺序会按层排列。

{% endnote %}

### 应用2：最短路径（无权图）

{% note success no-icon %}

**问题描述：** 给定一个无向图，求从节点1到节点n的最短路径长度（假设边权为1）。

**思路：**
- 使用BFS从节点1开始搜索
- 第一次访问到节点n时，记录的距离就是最短路径长度

**完整代码：**

```cpp
#include <iostream>
#include <vector>
#include <queue>
using namespace std;

const int N = 100005;
vector<int> g[N];
int dist[N];  // 距离数组

void bfs(int start) {
    queue<int> q;
    q.push(start);
    dist[start] = 0;
    
    while (!q.empty()) {
        int u = q.front();
        q.pop();
        
        // 如果到达目标节点，可以提前退出（可选）
        // if (u == target) break;
        
        // 遍历相邻节点
        for (int v : g[u]) {
            if (dist[v] == -1) {        // 未访问过
                dist[v] = dist[u] + 1;   // 更新距离
                q.push(v);
            }
        }
    }
}

int main() {
    int n, m;
    cin >> n >> m;
    
    // 初始化距离数组
    for (int i = 1; i <= n; i++) {
        dist[i] = -1;
    }
    
    // 读入边
    for (int i = 0; i < m; i++) {
        int a, b;
        cin >> a >> b;
        g[a].push_back(b);
        g[b].push_back(a);
    }
    
    // 从节点1开始BFS
    bfs(1);
    
    // 输出从节点1到节点n的最短距离
    if (dist[n] == -1) {
        cout << -1 << endl;  // 不可达
    } else {
        cout << dist[n] << endl;
    }
    
    return 0;
}
```

**输入示例：**
```
5 5
1 2
1 3
2 4
3 4
4 5
```

**输出示例：**
```
3
```

**路径说明：** 1 → 2 → 4 → 5，路径长度为3（经过3条边）。

{% endnote %}

## 实战题目

### 题目1：迷宫最短路径

{% note warning no-icon %}

**题目描述：**
给定一个 n×m 的迷宫，其中 0 表示可以走，1 表示障碍物。从起点 (0,0) 出发，求到达终点 (n-1, m-1) 的最短路径长度。

**输入格式：**
第一行两个整数 n 和 m
接下来 n 行，每行 m 个整数（0 或 1）

**输出格式：**
输出最短路径长度，如果不可达输出 -1。

{% endnote %}

{% note success no-icon %}

**解题思路：**
- 使用BFS从起点开始搜索
- 每次扩展四个方向的可达格子
- 使用 `dist[][]` 数组记录最短距离
- 第一次到达终点时，距离就是最短路径

**完整代码：**

```cpp
#include <iostream>
#include <queue>
using namespace std;

const int N = 105;
int n, m;
int g[N][N];        // 存储迷宫
int dist[N][N];     // 距离数组

// 方向数组
int dx[4] = {-1, 0, 1, 0};
int dy[4] = {0, 1, 0, -1};

int bfs(int sx, int sy, int ex, int ey) {
    queue<pair<int, int>> q;
    q.push({sx, sy});
    dist[sx][sy] = 0;
    
    while (!q.empty()) {
        int x = q.front().first;
        int y = q.front().second;
        q.pop();
        
        // 到达终点
        if (x == ex && y == ey) {
            return dist[x][y];
        }
        
        // 遍历四个方向
        for (int i = 0; i < 4; i++) {
            int nx = x + dx[i];
            int ny = y + dy[i];
            
            // 判断边界
            if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
                continue;
            }
            
            // 判断是否可以走（不是障碍物且未访问）
            if (g[nx][ny] == 0 && dist[nx][ny] == -1) {
                dist[nx][ny] = dist[x][y] + 1;
                q.push({nx, ny});
            }
        }
    }
    
    return -1;  // 不可达
}

int main() {
    cin >> n >> m;
    
    // 初始化距离数组
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            dist[i][j] = -1;
        }
    }
    
    // 读入迷宫
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            cin >> g[i][j];
        }
    }
    
    // BFS搜索最短路径
    int result = bfs(0, 0, n - 1, m - 1);
    
    if (result == -1) {
        cout << "不可达" << endl;
    } else {
        cout << "最短路径长度：" << result << endl;
    }
    
    return 0;
}
```

**输入示例：**
```
5 5
0 1 0 0 0
0 1 0 1 0
0 0 0 0 0
0 1 1 1 0
0 0 0 0 0
```

**输出示例：**
```
最短路径长度：8
```

**迷宫图示：**
```
0 1 0 0 0
0 1 0 1 0
0 0 0 0 0
0 1 1 1 0
0 0 0 0 0
```
- 从 (0,0) 到 (4,4) 的最短路径需要走8步

{% endnote %}

### 题目2：岛屿数量

{% note warning no-icon %}

**题目描述：**
给定一个由 '1'（陆地）和 '0'（水）组成的二维网格，计算岛屿的数量。一个岛屿被水包围，并且它是通过水平方向或垂直方向上相邻的陆地连接而成的。

**输入格式：**
第一行两个整数 n 和 m
接下来 n 行，每行 m 个字符（'0' 或 '1'）

**输出格式：**
输出岛屿的数量。

{% endnote %}

{% note success no-icon %}

**解题思路：**
- 遍历矩阵中的每个位置
- 如果遇到陆地('1')且未访问，使用BFS标记整个岛屿
- 每次BFS标记一个完整的岛屿，计数器+1

**完整代码：**

```cpp
#include <iostream>
#include <queue>
using namespace std;

const int N = 105;
int n, m;
char g[N][N];       // 存储网格
bool st[N][N];      // 标记数组

// 方向数组
int dx[4] = {-1, 0, 1, 0};
int dy[4] = {0, 1, 0, -1};

// BFS标记整个岛屿
void bfs(int sx, int sy) {
    queue<pair<int, int>> q;
    q.push({sx, sy});
    st[sx][sy] = true;
    
    while (!q.empty()) {
        int x = q.front().first;
        int y = q.front().second;
        q.pop();
        
        // 遍历四个方向
        for (int i = 0; i < 4; i++) {
            int nx = x + dx[i];
            int ny = y + dy[i];
            
            // 判断边界
            if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
                continue;
            }
            
            // 如果是陆地且未访问
            if (g[nx][ny] == '1' && !st[nx][ny]) {
                st[nx][ny] = true;
                q.push({nx, ny});
            }
        }
    }
}

int main() {
    cin >> n >> m;
    
    // 读入网格
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            cin >> g[i][j];
        }
    }
    
    int cnt = 0;  // 岛屿数量
    
    // 遍历所有位置
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            // 如果遇到陆地且未访问
            if (g[i][j] == '1' && !st[i][j]) {
                bfs(i, j);  // BFS标记整个岛屿
                cnt++;      // 岛屿数量+1
            }
        }
    }
    
    cout << "岛屿数量：" << cnt << endl;
    
    return 0;
}
```

**输入示例：**
```
4 5
11110
11010
11000
00000
```

**输出示例：**
```
岛屿数量：1
```

**网格图示：**
```
11110
11010
11000
00000
```
- 所有连通的'1'构成一个岛屿

**输入示例2：**
```
4 5
11000
11000
00100
00011
```

**输出示例2：**
```
岛屿数量：3
```

**解释：** 有三个独立的岛屿。

{% endnote %}

## BFS常见错误

{% note warning no-icon %}

### 错误1：忘记初始化距离数组

```cpp
// ❌ 错误写法
int dist[N];
// 忘记初始化，dist数组可能包含随机值

// ✅ 正确写法
int dist[N];
for (int i = 0; i < N; i++) {
    dist[i] = -1;  // 初始化为-1表示未访问
}
```

### 错误2：在入队前忘记标记

```cpp
// ❌ 错误写法
if (dist[v] == -1) {
    q.push(v);           // 先入队
    dist[v] = dist[u] + 1; // 后标记，可能导致重复入队
}

// ✅ 正确写法
if (dist[v] == -1) {
    dist[v] = dist[u] + 1; // 先标记
    q.push(v);             // 后入队
}
```

### 错误3：队列元素类型错误

```cpp
// ❌ 矩阵BFS错误写法
queue<int> q;  // 应该用pair<int, int>

// ✅ 正确写法
queue<pair<int, int>> q;
q.push({x, y});
```

{% endnote %}

## BFS时间复杂度分析

{% note info no-icon %}

**BFS的时间复杂度：**
- **图遍历**：O(V + E)，其中V是节点数，E是边数
- **矩阵遍历**：O(N × M)，其中N是行数，M是列数

**空间复杂度：**
- **队列空间**：O(W)，其中W是最宽层的节点数
- **标记数组**：O(V) 或 O(N × M)

**BFS的优势：**
- ✅ 在无权图中能找到最短路径
- ✅ 按层遍历，适合层序相关的问题

{% endnote %}

## BFS优化技巧

{% note success no-icon %}

### 技巧1：双向BFS

当起点和终点都已知时，可以从起点和终点同时进行BFS，相遇时停止，可以大大减少搜索空间。

```cpp
void bidirectional_bfs(int start, int end) {
    queue<int> q1, q2;
    int dist1[N], dist2[N];
    
    // 从起点开始BFS
    q1.push(start);
    dist1[start] = 0;
    
    // 从终点开始BFS
    q2.push(end);
    dist2[end] = 0;
    
    // 交替扩展，直到相遇
    // ...
}
```

### 技巧2：分层BFS

需要记录每层的节点时，可以在队列中加入特殊标记，或者记录每层的节点数。

```cpp
void layered_bfs(int start) {
    queue<int> q;
    q.push(start);
    
    while (!q.empty()) {
        int levelSize = q.size();  // 当前层的节点数
        
        // 处理当前层的所有节点
        for (int i = 0; i < levelSize; i++) {
            int u = q.front();
            q.pop();
            // 处理节点u
            // ...
        }
        // 当前层处理完毕
    }
}
```

### 技巧3：多起点BFS

当有多个起点时，可以将所有起点都加入队列，同时开始BFS。

```cpp
void multi_start_bfs(vector<int>& starts) {
    queue<int> q;
    
    // 将所有起点加入队列
    for (int start : starts) {
        q.push(start);
        dist[start] = 0;
    }
    
    // 正常BFS
    // ...
}
```

{% endnote %}

# 洪泛算法（Flood Fill）

## 什么是洪泛算法

{% note info no-icon %}

**洪泛算法（Flood Fill）**是一种用于填充连通区域的算法，就像绘图软件中的"油漆桶"工具：

- 🎨 **区域填充**：从一个起始点开始，将所有与之连通且颜色相同的区域填充成新颜色
- 🔗 **连通性判断**：判断哪些区域是连通的，需要一起处理
- 🌊 **洪水式扩散**：像洪水一样从起点向四周扩散，直到填满整个连通区域

{% endnote %}

{% note warning no-icon %}

**洪泛算法的核心思想：**
- 从一个起点开始，标记或修改所有连通且满足条件的区域
- 可以用DFS或BFS实现
- 常用于图像处理、迷宫填充、岛屿问题等场景

**洪泛算法与DFS/BFS的关系：**
- 洪泛算法本质上就是DFS或BFS的一种应用
- 区别在于应用场景：洪泛算法专门用于区域填充问题

{% endnote %}

## 洪泛算法的实现方式

### 方式1：DFS实现（递归）

{% note success no-icon %}

**DFS实现洪泛算法：**

```cpp
#include <iostream>
using namespace std;

const int N = 105;
int n, m;
char g[N][N];       // 存储网格
bool st[N][N];     // 标记数组

// 方向数组：上、右、下、左
int dx[4] = {-1, 0, 1, 0};
int dy[4] = {0, 1, 0, -1};

// DFS洪泛填充
void floodFill(int x, int y, char oldColor, char newColor) {
    // 边界判断
    if (x < 0 || x >= n || y < 0 || y >= m) {
        return;
    }
    
    // 如果当前格子不是目标颜色或已访问，返回
    if (g[x][y] != oldColor || st[x][y]) {
        return;
    }
    
    // 填充新颜色并标记
    g[x][y] = newColor;
    st[x][y] = true;
    
    // 递归填充四个方向
    for (int i = 0; i < 4; i++) {
        int nx = x + dx[i];
        int ny = y + dy[i];
        floodFill(nx, ny, oldColor, newColor);
    }
}

int main() {
    cin >> n >> m;
    
    // 读入网格
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            cin >> g[i][j];
        }
    }
    
    int sx, sy;        // 起始坐标
    char newColor;     // 新颜色
    cin >> sx >> sy >> newColor;
    
    char oldColor = g[sx][sy];  // 原颜色
    
    // 如果新颜色和原颜色相同，不需要填充
    if (oldColor != newColor) {
        floodFill(sx, sy, oldColor, newColor);
    }
    
    // 输出填充后的网格
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            cout << g[i][j];
        }
        cout << endl;
    }
    
    return 0;
}
```

**特点：**
- ✅ 代码简洁，易于理解
- ✅ 递归实现，符合直觉
- ⚠️ 递归深度可能很大，有栈溢出风险

{% endnote %}

### 方式2：BFS实现（队列）

{% note success no-icon %}

**BFS实现洪泛算法：**

```cpp
#include <iostream>
#include <queue>
using namespace std;

const int N = 105;
int n, m;
char g[N][N];       // 存储网格
bool st[N][N];     // 标记数组

// 方向数组
int dx[4] = {-1, 0, 1, 0};
int dy[4] = {0, 1, 0, -1};

// BFS洪泛填充
void floodFill(int sx, int sy, char oldColor, char newColor) {
    // 如果新颜色和原颜色相同，不需要填充
    if (oldColor == newColor) {
        return;
    }
    
    queue<pair<int, int>> q;
    q.push({sx, sy});
    g[sx][sy] = newColor;  // 填充起点
    st[sx][sy] = true;
    
    while (!q.empty()) {
        int x = q.front().first;
        int y = q.front().second;
        q.pop();
        
        // 遍历四个方向
        for (int i = 0; i < 4; i++) {
            int nx = x + dx[i];
            int ny = y + dy[i];
            
            // 边界判断
            if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
                continue;
            }
            
            // 如果是目标颜色且未访问
            if (g[nx][ny] == oldColor && !st[nx][ny]) {
                g[nx][ny] = newColor;  // 填充新颜色
                st[nx][ny] = true;     // 标记已访问
                q.push({nx, ny});      // 加入队列
            }
        }
    }
}

int main() {
    cin >> n >> m;
    
    // 读入网格
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            cin >> g[i][j];
        }
    }
    
    int sx, sy;
    char newColor;
    cin >> sx >> sy >> newColor;
    
    char oldColor = g[sx][sy];
    floodFill(sx, sy, oldColor, newColor);
    
    // 输出填充后的网格
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            cout << g[i][j];
        }
        cout << endl;
    }
    
    return 0;
}
```

**特点：**
- ✅ 避免递归深度过大导致的栈溢出
- ✅ 适合大面积的填充
- ⚠️ 需要额外的队列空间

{% endnote %}

## 洪泛算法的经典应用

### 应用1：图像区域填充

{% note success no-icon %}

**问题描述：** 给定一个二维网格（可以理解为图像），从某个位置开始，将所有连通且颜色相同的区域填充成新颜色。

**这是洪泛算法最典型的应用场景！**

**完整代码（DFS实现）：**

```cpp
#include <iostream>
#include <vector>
using namespace std;

const int N = 105;
int n, m;
vector<vector<char>> image;  // 存储图像
bool st[N][N];               // 标记数组

// 方向数组
int dx[4] = {-1, 0, 1, 0};
int dy[4] = {0, 1, 0, -1};

void floodFill(int x, int y, char oldColor, char newColor) {
    // 边界判断
    if (x < 0 || x >= n || y < 0 || y >= m) {
        return;
    }
    
    // 如果当前格子不是目标颜色或已访问，返回
    if (image[x][y] != oldColor || st[x][y]) {
        return;
    }
    
    // 填充新颜色并标记
    image[x][y] = newColor;
    st[x][y] = true;
    
    // 递归填充四个方向
    for (int i = 0; i < 4; i++) {
        int nx = x + dx[i];
        int ny = y + dy[i];
        floodFill(nx, ny, oldColor, newColor);
    }
}

int main() {
    cin >> n >> m;
    
    // 读入图像
    image.resize(n, vector<char>(m));
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            cin >> image[i][j];
        }
    }
    
    int sx, sy;
    char newColor;
    cin >> sx >> sy >> newColor;
    
    char oldColor = image[sx][sy];
    
    // 如果新颜色和原颜色相同，不需要填充
    if (oldColor != newColor) {
        floodFill(sx, sy, oldColor, newColor);
    }
    
    // 输出填充后的图像
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            cout << image[i][j];
        }
        cout << endl;
    }
    
    return 0;
}
```

**输入示例：**
```
4 5
.....
.###.
.#...
.###.
1 1 X
```

**输出示例：**
```
.....
.###.
.#...
.###.
```

**说明：** 从位置(1,1)开始，将连通的'#'填充成'X'。

{% endnote %}

### 应用2：连通区域标记

{% note success no-icon %}

**问题描述：** 给定一个二维网格，统计有多少个连通的区域，并为每个区域标记不同的编号。

**完整代码：**

```cpp
#include <iostream>
#include <queue>
using namespace std;

const int N = 105;
int n, m;
char g[N][N];       // 存储网格
int label[N][N];    // 标记数组，label[i][j]表示(i,j)所属的区域编号
bool st[N][N];      // 访问标记

// 方向数组
int dx[4] = {-1, 0, 1, 0};
int dy[4] = {0, 1, 0, -1};

// BFS标记连通区域
void bfs(int sx, int sy, int regionId) {
    queue<pair<int, int>> q;
    q.push({sx, sy});
    label[sx][sy] = regionId;
    st[sx][sy] = true;
    
    while (!q.empty()) {
        int x = q.front().first;
        int y = q.front().second;
        q.pop();
        
        // 遍历四个方向
        for (int i = 0; i < 4; i++) {
            int nx = x + dx[i];
            int ny = y + dy[i];
            
            // 边界判断
            if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
                continue;
            }
            
            // 如果是相同类型的格子且未标记
            if (g[nx][ny] == g[sx][sy] && !st[nx][ny]) {
                label[nx][ny] = regionId;  // 标记为同一区域
                st[nx][ny] = true;
                q.push({nx, ny});
            }
        }
    }
}

int main() {
    cin >> n >> m;
    
    // 读入网格
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            cin >> g[i][j];
        }
    }
    
    int regionId = 0;  // 区域编号从0开始
    
    // 遍历所有格子
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            // 如果遇到未标记的格子
            if (!st[i][j]) {
                bfs(i, j, regionId);  // 标记整个连通区域
                regionId++;           // 区域编号+1
            }
        }
    }
    
    cout << "连通区域数量：" << regionId << endl;
    
    // 输出每个格子的区域编号
    cout << "区域标记：" << endl;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            cout << label[i][j] << " ";
        }
        cout << endl;
    }
    
    return 0;
}
```

**输入示例：**
```
4 5
11110
11010
11000
00000
```

**输出示例：**
```
连通区域数量：1
区域标记：
0 0 0 0 0
0 0 0 0 0
0 0 0 0 0
0 0 0 0 0
```

**说明：** 所有连通的'1'都属于区域0。

{% endnote %}

## 实战题目

### 题目1：岛屿周长

{% note warning no-icon %}

**题目描述：**
给定一个由 '1'（陆地）和 '0'（水）组成的二维网格，每个岛屿由水平方向或垂直方向上相邻的陆地连接而成。假设网格四周都被水包围，求所有岛屿的总周长。

**输入格式：**
第一行两个整数 n 和 m
接下来 n 行，每行 m 个字符（'0' 或 '1'）

**输出格式：**
输出所有岛屿的总周长。

{% endnote %}

{% note success no-icon %}

**解题思路：**
- 遍历网格，遇到陆地时使用洪泛算法标记整个岛屿
- 计算每个岛屿的周长：遍历岛屿的每个格子，检查四个方向
- 如果某个方向的相邻格子是水或边界，则该方向贡献1的周长

**完整代码：**

```cpp
#include <iostream>
#include <queue>
using namespace std;

const int N = 105;
int n, m;
char g[N][N];
bool st[N][N];

// 方向数组
int dx[4] = {-1, 0, 1, 0};
int dy[4] = {0, 1, 0, -1};

// 计算单个岛屿的周长
int calculatePerimeter(int sx, int sy) {
    queue<pair<int, int>> q;
    q.push({sx, sy});
    st[sx][sy] = true;
    
    int perimeter = 0;
    
    while (!q.empty()) {
        int x = q.front().first;
        int y = q.front().second;
        q.pop();
        
        // 检查四个方向，计算周长贡献
        for (int i = 0; i < 4; i++) {
            int nx = x + dx[i];
            int ny = y + dy[i];
            
            // 如果相邻格子是边界或水，贡献1的周长
            if (nx < 0 || nx >= n || ny < 0 || ny >= m || g[nx][ny] == '0') {
                perimeter++;
            } else if (!st[nx][ny]) {
                // 如果是未访问的陆地，加入队列
                st[nx][ny] = true;
                q.push({nx, ny});
            }
        }
    }
    
    return perimeter;
}

int main() {
    cin >> n >> m;
    
    // 读入网格
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            cin >> g[i][j];
        }
    }
    
    int totalPerimeter = 0;
    
    // 遍历所有格子
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            // 如果遇到陆地且未访问
            if (g[i][j] == '1' && !st[i][j]) {
                // 使用洪泛算法标记整个岛屿并计算周长
                totalPerimeter += calculatePerimeter(i, j);
            }
        }
    }
    
    cout << "总周长：" << totalPerimeter << endl;
    
    return 0;
}
```

**输入示例：**
```
4 4
0110
1101
1000
0000
```

**输出示例：**
```
总周长：16
```

**说明：** 
- 岛屿1的周长：8（4个边，每边贡献2）
- 岛屿2的周长：4（单独的一个格子）
- 岛屿3的周长：4（单独的一个格子）
- 总周长：8 + 4 + 4 = 16

{% endnote %}

### 题目2：封闭岛屿

{% note warning no-icon %}

**题目描述：**
给定一个由 '1'（水）和 '0'（陆地）组成的二维网格。一个岛屿是完全由水包围并且内部是陆地的封闭岛屿。求封闭岛屿的数量。

**注意：** 边界上的陆地不算封闭岛屿。

**输入格式：**
第一行两个整数 n 和 m
接下来 n 行，每行 m 个字符（'0' 或 '1'）

**输出格式：**
输出封闭岛屿的数量。

{% endnote %}

{% note success no-icon %}

**解题思路：**
- 先使用洪泛算法标记所有边界上的岛屿（这些不是封闭岛屿）
- 然后遍历内部的岛屿，统计封闭岛屿数量

**完整代码：**

```cpp
#include <iostream>
#include <queue>
using namespace std;

const int N = 105;
int n, m;
char g[N][N];
bool st[N][N];

// 方向数组
int dx[4] = {-1, 0, 1, 0};
int dy[4] = {0, 1, 0, -1};

// 标记连通区域（用于标记边界岛屿）
void markRegion(int sx, int sy, bool isBoundary) {
    queue<pair<int, int>> q;
    q.push({sx, sy});
    st[sx][sy] = true;
    
    while (!q.empty()) {
        int x = q.front().first;
        int y = q.front().second;
        q.pop();
        
        // 遍历四个方向
        for (int i = 0; i < 4; i++) {
            int nx = x + dx[i];
            int ny = y + dy[i];
            
            // 边界判断
            if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
                continue;
            }
            
            // 如果是陆地且未访问
            if (g[nx][ny] == '0' && !st[nx][ny]) {
                st[nx][ny] = true;
                q.push({nx, ny});
            }
        }
    }
}

int main() {
    cin >> n >> m;
    
    // 读入网格
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            cin >> g[i][j];
        }
    }
    
    // 第一步：标记所有边界上的岛屿（这些不是封闭岛屿）
    // 标记上边界和下边界
    for (int j = 0; j < m; j++) {
        if (g[0][j] == '0' && !st[0][j]) {
            markRegion(0, j, true);
        }
        if (g[n-1][j] == '0' && !st[n-1][j]) {
            markRegion(n-1, j, true);
        }
    }
    
    // 标记左边界和右边界
    for (int i = 0; i < n; i++) {
        if (g[i][0] == '0' && !st[i][0]) {
            markRegion(i, 0, true);
        }
        if (g[i][m-1] == '0' && !st[i][m-1]) {
            markRegion(i, m-1, true);
        }
    }
    
    // 第二步：统计封闭岛屿数量（内部未被标记的陆地）
    int cnt = 0;
    
    // 遍历内部格子（不包括边界）
    for (int i = 1; i < n - 1; i++) {
        for (int j = 1; j < m - 1; j++) {
            // 如果遇到陆地且未访问（说明是封闭岛屿）
            if (g[i][j] == '0' && !st[i][j]) {
                markRegion(i, j, false);  // 标记整个封闭岛屿
                cnt++;                     // 封闭岛屿数量+1
            }
        }
    }
    
    cout << "封闭岛屿数量：" << cnt << endl;
    
    return 0;
}
```

**输入示例：**
```
5 8
11111111
10000111
11000011
11100111
11111111
```

**输出示例：**
```
封闭岛屿数量：1
```

**网格图示：**
```
11111111
10000111
11000011
11100111
11111111
```
- 边界上的陆地已经被标记
- 内部的连通区域构成1个封闭岛屿

{% endnote %}

## 洪泛算法常见错误

{% note warning no-icon %}

### 错误1：忘记检查新颜色和原颜色是否相同

```cpp
// ❌ 错误写法
void floodFill(int x, int y, char oldColor, char newColor) {
    // 如果新颜色和原颜色相同，会导致无限递归或循环
    if (g[x][y] != oldColor) return;
    g[x][y] = newColor;  // 如果newColor == oldColor，永远满足条件
    // ...
}

// ✅ 正确写法
void floodFill(int x, int y, char oldColor, char newColor) {
    if (oldColor == newColor) return;  // 提前判断
    // ...
}
```

### 错误2：边界判断位置错误

```cpp
// ❌ 错误写法
void floodFill(int x, int y, char oldColor, char newColor) {
    if (g[x][y] != oldColor) return;  // 先判断颜色，可能越界访问
    if (x < 0 || x >= n || y < 0 || y >= m) return;
    // ...
}

// ✅ 正确写法
void floodFill(int x, int y, char oldColor, char newColor) {
    if (x < 0 || x >= n || y < 0 || y >= m) return;  // 先判断边界
    if (g[x][y] != oldColor) return;
    // ...
}
```

### 错误3：使用标记数组但未初始化

```cpp
// ❌ 错误写法
bool st[N][N];  // 未初始化，可能包含随机值

// ✅ 正确写法
bool st[N][N] = {false};  // 初始化为false
// 或者在使用前初始化
for (int i = 0; i < n; i++) {
    for (int j = 0; j < m; j++) {
        st[i][j] = false;
    }
}
```

{% endnote %}

## 洪泛算法时间复杂度分析

{% note info no-icon %}

**洪泛算法的时间复杂度：**
- **DFS实现**：O(N × M)，其中N是行数，M是列数
- **BFS实现**：O(N × M)，每个格子最多访问一次

**空间复杂度：**
- **DFS实现**：O(H)，其中H是递归栈的最大深度（可能很大）
- **BFS实现**：O(N × M)，队列最多存储所有格子

**选择建议：**
- 小面积填充：使用DFS，代码简洁
- 大面积填充：使用BFS，避免栈溢出风险

{% endnote %}

# 总结

{% note warning no-icon %}

## 三种搜索算法对比

**DFS（深度优先搜索）：**
- ✅ **实现方式**：递归或栈
- ✅ **搜索策略**：一条路走到黑，深入到底再回溯
- ✅ **适用场景**：图的遍历、连通性判断、全排列、回溯问题
- ✅ **时间复杂度**：O(V + E) 或 O(N × M)
- ✅ **空间复杂度**：O(H)，H为递归栈深度
- ⚠️ **缺点**：可能找到非最优解

**BFS（广度优先搜索）：**
- ✅ **实现方式**：队列
- ✅ **搜索策略**：层层递进，按距离起点从近到远遍历
- ✅ **适用场景**：最短路径（无权图）、层序遍历、距离计算
- ✅ **时间复杂度**：O(V + E) 或 O(N × M)
- ✅ **空间复杂度**：O(W)，W为最宽层的节点数
- ✅ **优点**：在无权图中能找到最短路径

**洪泛算法（Flood Fill）：**
- ✅ **实现方式**：DFS或BFS
- ✅ **搜索策略**：从起点填充连通且满足条件的区域
- ✅ **适用场景**：图像填充、连通区域标记、岛屿问题
- ✅ **时间复杂度**：O(N × M)
- ✅ **空间复杂度**：DFS为O(H)，BFS为O(N × M)
- ✅ **本质**：DFS或BFS在区域填充问题上的应用

{% endnote %}

{% note success no-icon %}

## 核心要点总结

### DFS核心要点

1. **递归实现**：DFS本质是递归，代码简洁优雅
2. **标记访问**：必须标记已访问节点，避免重复和死循环
3. **回溯机制**：根据问题需要决定是否回溯
4. **边界判断**：矩阵DFS要注意边界检查
5. **方向数组**：使用`dx[]`和`dy[]`简化方向遍历

### BFS核心要点

1. **队列实现**：BFS用队列保证先访问距离更近的节点
2. **距离记录**：使用`dist[]`数组记录最短距离，初始化为-1
3. **标记时机**：在入队前标记，避免重复入队
4. **坐标存储**：矩阵BFS使用`pair<int, int>`存储坐标
5. **最短路径**：在无权图中，BFS第一次访问到节点时的距离就是最短距离

### 洪泛算法核心要点

1. **颜色判断**：必须判断新颜色和原颜色是否相同，避免无限循环
2. **边界优先**：先判断边界，再判断颜色，避免越界访问
3. **标记初始化**：标记数组必须初始化，避免随机值干扰
4. **实现选择**：小面积用DFS，大面积用BFS
5. **连通条件**：根据题目要求确定连通的条件（颜色相同、值相同等）

{% endnote %}

{% note info no-icon %}

## 选择算法的建议

**选择DFS的场景：**
- ✅ 需要遍历所有可能的路径（如全排列、N皇后）
- ✅ 需要回溯尝试不同选择
- ✅ 图的遍历和连通性判断
- ✅ 树的遍历
- ✅ 深度相关的搜索

**选择BFS的场景：**
- ✅ 需要求最短路径（无权图）
- ✅ 需要按层遍历
- ✅ 需要计算从起点到所有节点的最短距离
- ✅ 层次相关的搜索

**选择洪泛算法的场景：**
- ✅ 需要填充连通区域
- ✅ 需要标记连通区域
- ✅ 图像处理问题
- ✅ 岛屿相关问题
- ✅ 连通区域计数

{% endnote %}

{% note warning no-icon %}

## 常见错误提醒

1. ⚠️ **忘记标记已访问**：会导致无限递归或重复入队
2. ⚠️ **边界判断错误**：矩阵搜索要注意边界检查，使用`>=`而不是`>`
3. ⚠️ **初始化问题**：距离数组、标记数组必须正确初始化
4. ⚠️ **回溯时机**：需要回溯时才恢复状态，不需要回溯时不要取消标记
5. ⚠️ **颜色判断**：洪泛算法要判断新颜色和原颜色是否相同
6. ⚠️ **判断顺序**：先判断边界，再判断颜色，避免越界访问

{% endnote %}

{% note success no-icon %}

## 学习建议

1. **多练习**：通过大量练习掌握三种算法的应用场景
2. **理解本质**：理解DFS和BFS的底层原理，洪泛算法是它们的应用
3. **模板记忆**：熟记基本模板，根据题目要求灵活修改
4. **调试技巧**：在搜索过程中输出中间结果，帮助理解算法执行过程
5. **优化思考**：思考如何使用剪枝、记忆化等技巧优化搜索效率

{% endnote %}

# Q&A
