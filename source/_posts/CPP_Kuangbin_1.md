---
title: Kuangbin算法专题1——搜索专题
date: 2025-11-09 14:00:00
tags:
  - C++ 算法与数据结构
  - 搜索算法
categories:
  - CPP
cover: https://bu.dusays.com/2025/11/16/6919704d5ae8f.png
---

# 前言

{% note warning no-icon %}

本文解析 **1024_OJ** 平台上 **Kuangbin算法专题1——搜索专题** 的所有题目。

平台链接：[http://oj.1024code.top/](http://oj.1024code.top/)

{% endnote %}

{% note success no-icon %}

**本文包含以下题目：**
- A. 棋盘问题
- B. 地牢大师
- C. 抓住那头牛
- D. 翻转
- E. 找倍数
- F. 质数路径
- G. 洗牌
- H. 罐子
- I. 点火游戏

{% endnote %}

---

# A. 棋盘问题

**题目链接：** [http://oj.1024code.top/problem.php?id=1468](http://oj.1024code.top/problem.php?id=1468)

## 整体思路

{% note info no-icon %}

这是一道经典的**DFS回溯**问题。核心思想是：

1. **逐行放置**：由于要求任意两个棋子不在同一行，我们可以按行来处理，每行最多放一个棋子
2. **列标记**：使用数组标记哪些列已经被占用，确保同一列不会放置多个棋子
3. **回溯搜索**：对于每一行，我们有两种选择：
   - 在当前行的某个合法位置放置棋子（如果该位置是棋盘且该列未被占用）
   - 不放置棋子，直接跳到下一行
4. **递归终止**：当已放置的棋子数达到k个时，找到一种合法方案，计数器加一
5. **剪枝优化**：如果剩余的行数不足以放置剩余的棋子，提前返回

{% endnote %}

## 思路拆解

### 步骤1：问题建模

{% note info no-icon %}

**问题分析：**

我们需要在N×N的棋盘上放置k个棋子，约束条件是：
- 每个棋子必须放在标记为`#`的位置（棋盘区域）
- 任意两个棋子不能在同一行
- 任意两个棋子不能在同一列

**数据结构设计：**

我们需要定义以下变量来存储棋盘状态和搜索结果。

{% endnote %}

**代码实现：**

```cpp
const int N = 10;        // 棋盘最大尺寸
int n, k;                // n: 棋盘大小, k: 需要放置的棋子数
char g[N][N];            // 存储棋盘，'#'表示可以放棋子，'.'表示不能放
bool col[N];             // col[j]: 标记第j列是否已被占用
int res;                 // 记录合法方案的总数
```

### 步骤2：DFS函数设计

{% note info no-icon %}

**函数参数设计：**

DFS函数需要两个参数来记录当前搜索状态：
- `row`：当前处理到第几行（从0开始）
- `cnt`：已经放置了多少个棋子

通过这两个参数，我们可以知道当前搜索进度和已放置的棋子数量。

{% endnote %}

**函数框架：**

```cpp
void dfs(int row, int cnt) {
    // 1. 递归终止条件：已放置k个棋子
    // 2. 剪枝：剩余行数不足
    // 3. 在当前行尝试放置棋子
    // 4. 不放置棋子，直接处理下一行
}
```

### 步骤3：递归终止条件

{% note success no-icon %}

**终止条件分析：**

当已放置的棋子数达到k时，说明我们找到了一种合法的放置方案。此时应该：
- 将方案计数器加一
- 返回上一层，继续搜索其他可能的方案

这是DFS搜索中的成功终止条件。

{% endnote %}

**代码实现：**

```cpp
if (cnt == k) {
    res++;      // 方案数加一
    return;     // 返回上一层
}
```

### 步骤4：剪枝优化

{% note warning no-icon %}

**剪枝策略：**

如果当前行已经超出了棋盘范围（`row >= n`），且还未放置足够的棋子（`cnt < k`），则说明不可能完成放置任务，应该提前返回。

这是一个重要的剪枝优化，可以避免无效的搜索，提高算法效率。

{% endnote %}

**代码实现：**

```cpp
if (row >= n) {
    return;     // 剩余行数不足，无法放置足够的棋子
}
```

### 步骤5：在当前行放置棋子

{% note warning no-icon %}

**核心操作：回溯机制**

这是整个算法的核心部分。我们需要：
1. **遍历当前行的每一列**，寻找可以放置棋子的位置
2. **判断条件**：
   - 该位置是棋盘（`g[row][j] == '#'`）
   - 该列未被占用（`!col[j]`）
3. **回溯三步走**：
   - **标记**：放置棋子前，标记该列已被占用
   - **递归**：进入下一行继续搜索
   - **恢复**：递归返回后，取消标记，恢复状态，尝试其他可能

**重点提示：** 回溯恢复状态是DFS算法的关键，没有这一步就无法尝试所有可能的组合！

{% endnote %}

**代码实现：**

```cpp
for (int j = 0; j < n; j++) {
    if (g[row][j] == '#' && !col[j]) {
        col[j] = true;              // 【重点】标记该列已被占用
        dfs(row + 1, cnt + 1);      // 递归处理下一行，棋子数加一
        col[j] = false;             // 【重点】回溯：取消标记，恢复状态
    }
}
```

### 步骤6：不放置棋子的情况

{% note info no-icon %}

**重要补充：**

当前行也可以不放置棋子，直接处理下一行。这样可以覆盖所有可能的组合情况。

例如：如果第0行不放置棋子，第1行放置一个棋子，这也是合法的方案。我们必须考虑这种情况，否则会漏掉一些解。

{% endnote %}

**代码实现：**

```cpp
dfs(row + 1, cnt);  // 不放置棋子，直接处理下一行，棋子数不变
```

## 完整解题代码

```cpp
#include <iostream>
#include <cstring>
using namespace std;

const int N = 10;        // 棋盘最大尺寸
int n, k;                // n: 棋盘大小, k: 需要放置的棋子数
char g[N][N];            // 存储棋盘，'#'表示可以放棋子，'.'表示不能放
bool col[N];             // col[j]: 标记第j列是否已被占用（重点：列标记）
int res;                 // 记录合法方案的总数

/**
 * DFS回溯函数
 * @param row 当前处理到第几行（从0开始）
 * @param cnt 已经放置了多少个棋子
 */
void dfs(int row, int cnt) {
    // 【终止条件】如果已放置k个棋子，找到一种合法方案
    if (cnt == k) {
        res++;           // 方案数加一
        return;          // 返回上一层
    }
    
    // 【剪枝优化】如果剩余行数不足，无法放置足够的棋子，直接返回
    if (row >= n) {
        return;
    }
    
    // 【思路】在当前行的每一列尝试放置棋子
    for (int j = 0; j < n; j++) {
        // 判断条件：1. 该位置是棋盘 2. 该列未被占用
        if (g[row][j] == '#' && !col[j]) {
            // 【回溯关键步骤1】标记该列已被占用
            col[j] = true;
            
            // 【递归搜索】进入下一行继续搜索，棋子数加一
            dfs(row + 1, cnt + 1);
            
            // 【回溯关键步骤2】取消标记，恢复状态，尝试其他可能
            // 这一步非常重要！如果没有这一步，就无法回溯到之前的状态
            col[j] = false;
        }
    }
    
    // 【重要】当前行也可以不放置棋子，直接处理下一行
    // 这样可以覆盖所有可能的组合情况
    dfs(row + 1, cnt);
}

int main() {
    // 多组测试数据
    while (cin >> n >> k) {
        // 输入结束标志
        if (n == -1 && k == -1) break;
        
        // 读入棋盘
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                cin >> g[i][j];
            }
        }
        
        // 初始化：方案数清零，列标记数组清零
        res = 0;
        memset(col, false, sizeof col);
        
        // 从第0行开始DFS搜索，初始棋子数为0
        dfs(0, 0);
        
        // 输出结果
        cout << res << endl;
    }
    
    return 0;
}
```

## 算法要点总结

{% note warning no-icon %}

**关键点：**

1. **回溯机制**：放置棋子后要标记，递归返回后要取消标记，这样才能尝试所有可能
2. **列标记数组**：使用`col[]`数组记录每列的占用情况，避免同一列放置多个棋子
3. **两种选择**：每一行可以选择放置棋子或不放置棋子，都需要考虑
4. **剪枝优化**：当剩余行数不足时提前返回，减少不必要的搜索

{% endnote %}

## 时间复杂度分析

{% note info no-icon %}

**时间复杂度：**

算法的时间复杂度为 <b>O(C(n, k) × k!)</b>，其中：
- <b>C(n, k)</b>：从n行中选择k行的组合数
- <b>k!</b>：在选定的k行中，每行选择一个位置的排列数

**分析过程：**
1. 我们需要从n行中选择k行来放置棋子
2. 对于选定的k行，每行需要选择一个列来放置棋子
3. 由于列不能重复，所以是一个排列问题
4. 最坏情况下需要遍历所有可能的组合和排列

{% endnote %}

{% note info no-icon %}

**空间复杂度：**

算法的空间复杂度为 <b>O(n)</b>，主要包括：
- **递归深度**：最大递归深度为n（处理n行）
- **标记数组**：`col[]`数组的大小为n，用于记录列的占用状态

**优化建议：**
- 递归深度是必需的，无法优化
- 标记数组空间较小，不会造成内存问题
- 如果n很大，可以考虑使用位运算来压缩状态

{% endnote %}

---

# B. 地牢大师

**题目链接：** [http://oj.1024code.top/problem.php?id=1469](http://oj.1024code.top/problem.php?id=1469)

## 整体思路

{% note info no-icon %}

这是一道经典的**三维BFS最短路径**问题。核心思想是：

1. **三维空间建模**：地牢是一个L×R×C的三维空间，每个位置用(l, r, c)三个坐标表示
2. **六个方向移动**：在三维空间中，可以从当前位置向六个方向移动：
   - 上下：层数变化（l+1, l-1）
   - 前后：行数变化（r+1, r-1）
   - 左右：列数变化（c+1, c-1）
3. **BFS搜索**：使用广度优先搜索，从起点S开始，逐层扩展，直到找到终点E
4. **最短路径保证**：BFS的特性保证了第一次到达终点时，路径长度就是最短的
5. **状态标记**：使用距离数组`dist[l][r][c]`记录从起点到该位置的最短距离，同时作为访问标记

{% endnote %}

## 思路拆解

### 步骤1：问题建模

{% note info no-icon %}

**三维空间表示：**

地牢是一个三维空间，需要：
- 使用三维数组`g[l][r][c]`存储地牢结构
- 使用三维数组`dist[l][r][c]`记录最短距离
- 定义结构体`Point`表示三维坐标点

**关键数据结构：**
- `g[l][r][c]`：存储字符，`'S'`表示起点，`'E'`表示终点，`'.'`表示通道，`'#'`表示墙壁
- `dist[l][r][c]`：记录从起点到位置(l, r, c)的最短距离，初始化为-1表示未访问

{% endnote %}

**代码实现：**

```cpp
const int N = 35;        // 地牢最大尺寸
int L, R, C;             // L: 层数, R: 每层的行数, C: 每层的列数
char g[N][N][N];         // 存储地牢结构
int dist[N][N][N];      // 记录最短距离，-1表示未访问

struct Point {
    int l, r, c;         // 三维坐标：层、行、列
};
```

### 步骤2：方向数组设计

{% note info no-icon %}

**六个方向的定义：**

在三维空间中，从当前位置(l, r, c)可以移动到六个相邻位置：
- 向上：`(l+1, r, c)`
- 向下：`(l-1, r, c)`
- 向前：`(l, r+1, c)`
- 向后：`(l, r-1, c)`
- 向右：`(l, r, c+1)`
- 向左：`(l, r, c-1)`

使用三个方向数组可以方便地遍历所有可能的方向。

{% endnote %}

**代码实现：**

```cpp
// 六个方向：上下、前后、左右
int dl[6] = {1, -1, 0, 0, 0, 0};   // 层方向变化
int dr[6] = {0, 0, 1, -1, 0, 0};   // 行方向变化
int dc[6] = {0, 0, 0, 0, 1, -1};   // 列方向变化
```

### 步骤3：BFS函数框架

{% note info no-icon %}

**BFS算法流程：**

1. **初始化**：将起点加入队列，距离设为0
2. **循环处理**：从队列中取出当前位置
3. **终点检查**：如果到达终点，返回距离
4. **方向遍历**：遍历六个方向，检查新位置
5. **边界检查**：确保新位置在地牢范围内
6. **可访问性检查**：新位置必须是通道且未访问
7. **状态更新**：更新距离，加入队列

{% endnote %}

**函数框架：**

```cpp
int bfs(Point start, Point end) {
    // 1. 初始化队列和距离数组
    // 2. 将起点加入队列
    // 3. BFS主循环
    // 4. 遍历六个方向
    // 5. 边界和可访问性检查
    // 6. 更新距离并加入队列
    // 7. 返回结果
}
```

### 步骤4：BFS主循环

{% note success no-icon %}

**核心逻辑：**

BFS的主循环不断从队列中取出位置进行处理：
- 如果到达终点，立即返回最短距离
- 否则，遍历六个方向，寻找可以移动到的位置
- 对于每个合法的新位置，更新距离并加入队列

**关键点：** BFS保证按距离递增的顺序访问位置，所以第一次到达终点时，距离就是最短的。

{% endnote %}

**代码实现：**

```cpp
while (!q.empty()) {
    Point t = q.front();
    q.pop();
    
    // 到达终点
    if (t.l == end.l && t.r == end.r && t.c == end.c) {
        return dist[t.l][t.r][t.c];
    }
    
    // 遍历六个方向
    for (int i = 0; i < 6; i++) {
        // ... 处理每个方向
    }
}
```

### 步骤5：方向遍历和边界检查

{% note warning no-icon %}

**重要检查步骤：**

对于每个方向，需要检查三个条件：
1. **边界检查**：新位置必须在三维空间的有效范围内
   - `nl >= 0 && nl < L`
   - `nr >= 0 && nr < R`
   - `nc >= 0 && nc < C`
2. **可访问性检查**：新位置必须是通道（`'.'`）且未被访问
   - `g[nl][nr][nc] == '.'`（注意：起点'S'和终点'E'也是通道）
   - `dist[nl][nr][nc] == -1`（未访问）
3. **状态更新**：如果通过检查，更新距离并加入队列

**注意：** 起点'S'和终点'E'在BFS中应该被视为通道，可以正常通过。

{% endnote %}

**代码实现：**

```cpp
for (int i = 0; i < 6; i++) {
    int nl = t.l + dl[i];
    int nr = t.r + dr[i];
    int nc = t.c + dc[i];
    
    // 边界检查
    if (nl < 0 || nl >= L || nr < 0 || nr >= R || nc < 0 || nc >= C) {
        continue;
    }
    
    // 如果是墙壁或已访问，跳过
    if (g[nl][nr][nc] == '#' || dist[nl][nr][nc] != -1) {
        continue;
    }
    
    // 更新距离并加入队列
    dist[nl][nr][nc] = dist[t.l][t.r][t.c] + 1;
    q.push({nl, nr, nc});
}
```

### 步骤6：输入处理和结果输出

{% note info no-icon %}

**输入输出处理：**

1. **多组测试数据**：使用`while`循环处理多组数据
2. **输入读取**：读取地牢的三维结构，同时记录起点和终点位置
3. **初始化**：每次处理前，将距离数组初始化为-1
4. **结果判断**：如果返回-1，说明无法到达终点；否则输出最短时间

{% endnote %}

**代码实现：**

```cpp
while (cin >> L >> R >> C, L || R || C) {
    Point start, end;
    
    // 读入地牢结构
    for (int l = 0; l < L; l++) {
        for (int r = 0; r < R; r++) {
            for (int c = 0; c < C; c++) {
                cin >> g[l][r][c];
                if (g[l][r][c] == 'S') {
                    start = {l, r, c};
                } else if (g[l][r][c] == 'E') {
                    end = {l, r, c};
                }
            }
        }
    }
    
    // 初始化距离数组
    memset(dist, -1, sizeof dist);
    
    // BFS搜索
    int res = bfs(start, end);
    
    // 输出结果
    if (res == -1) {
        cout << "Trapped!" << endl;
    } else {
        cout << "Escaped in " << res << " minute(s)." << endl;
    }
}
```

## 完整解题代码

```cpp
#include <iostream>
#include <queue>
#include <cstring>
using namespace std;

const int N = 35;        // 地牢最大尺寸
int L, R, C;             // L: 层数, R: 每层的行数, C: 每层的列数
char g[N][N][N];         // 存储地牢结构，'S'表示起点，'E'表示终点，'.'表示通道，'#'表示墙壁
int dist[N][N][N];      // 记录最短距离，-1表示未访问

// 六个方向：上下、前后、左右
// dl: 层方向变化, dr: 行方向变化, dc: 列方向变化
int dl[6] = {1, -1, 0, 0, 0, 0};   // 向上、向下、不变、不变、不变、不变
int dr[6] = {0, 0, 1, -1, 0, 0};   // 不变、不变、向前、向后、不变、不变
int dc[6] = {0, 0, 0, 0, 1, -1};   // 不变、不变、不变、不变、向右、向左

struct Point {
    int l, r, c;         // 三维坐标：层、行、列
};

/**
 * BFS搜索最短路径
 * @param start 起点坐标
 * @param end 终点坐标
 * @return 最短路径长度，如果无法到达返回-1
 */
int bfs(Point start, Point end) {
    queue<Point> q;
    
    // 【初始化】将起点加入队列，距离设为0
    q.push(start);
    dist[start.l][start.r][start.c] = 0;
    
    // 【BFS主循环】不断从队列中取出位置进行处理
    while (!q.empty()) {
        Point t = q.front();
        q.pop();
        
        // 【终点检查】如果到达终点，立即返回最短距离
        if (t.l == end.l && t.r == end.r && t.c == end.c) {
            return dist[t.l][t.r][t.c];
        }
        
        // 【方向遍历】遍历六个方向，寻找可以移动到的位置
        for (int i = 0; i < 6; i++) {
            int nl = t.l + dl[i];  // 新位置的层坐标
            int nr = t.r + dr[i];  // 新位置的行坐标
            int nc = t.c + dc[i];  // 新位置的列坐标
            
            // 【边界检查】确保新位置在地牢范围内
            if (nl < 0 || nl >= L || nr < 0 || nr >= R || nc < 0 || nc >= C) {
                continue;
            }
            
            // 【可访问性检查】如果是墙壁或已访问，跳过
            // 注意：起点'S'和终点'E'在BFS中应该被视为通道，可以正常通过
            if (g[nl][nr][nc] == '#' || dist[nl][nr][nc] != -1) {
                continue;
            }
            
            // 【状态更新】更新距离并加入队列
            dist[nl][nr][nc] = dist[t.l][t.r][t.c] + 1;
            q.push({nl, nr, nc});
        }
    }
    
    // 如果队列为空仍未到达终点，说明无法到达
    return -1;
}

int main() {
    // 多组测试数据
    while (cin >> L >> R >> C, L || R || C) {
        Point start, end;
        
        // 【输入读取】读入地牢的三维结构，同时记录起点和终点位置
        for (int l = 0; l < L; l++) {
            for (int r = 0; r < R; r++) {
                for (int c = 0; c < C; c++) {
                    cin >> g[l][r][c];
                    if (g[l][r][c] == 'S') {
                        start = {l, r, c};  // 记录起点
                    } else if (g[l][r][c] == 'E') {
                        end = {l, r, c};    // 记录终点
                    }
                }
            }
        }
        
        // 【初始化】将距离数组初始化为-1，表示所有位置都未访问
        memset(dist, -1, sizeof dist);
        
        // 【BFS搜索】从起点开始搜索到终点的最短路径
        int res = bfs(start, end);
        
        // 【结果输出】根据搜索结果输出相应信息
        if (res == -1) {
            cout << "Trapped!" << endl;  // 无法到达终点
        } else {
            cout << "Escaped in " << res << " minute(s)." << endl;  // 输出最短时间
        }
    }
    
    return 0;
}
```

## 算法要点总结

{% note warning no-icon %}

**关键点：**

1. **三维空间处理**：使用三维数组存储地牢结构，注意坐标顺序是(l, r, c)
2. **方向数组**：使用三个方向数组分别表示层、行、列的变化，方便遍历六个方向
3. **距离数组双重作用**：`dist[l][r][c]`既记录最短距离，又作为访问标记（-1表示未访问）
4. **BFS特性**：BFS保证按距离递增的顺序访问位置，第一次到达终点时距离就是最短的
5. **边界检查**：必须检查三个坐标是否都在有效范围内
6. **可访问性检查**：新位置必须是通道（不是墙壁）且未被访问

{% endnote %}

## 时间复杂度分析

{% note info no-icon %}

**时间复杂度：**

算法的时间复杂度为 <b>O(L × R × C)</b>，其中：
- **L**：地牢的层数
- **R**：每层的行数
- **C**：每层的列数

**分析过程：**
1. BFS算法会访问地牢中的每个可达位置
2. 每个位置最多被访问一次（通过`dist`数组判断）
3. 对于每个位置，需要检查六个方向，时间复杂度为O(1)
4. 因此总时间复杂度为O(L × R × C)

**最坏情况：**
- 当所有位置都是通道时，需要访问所有L×R×C个位置
- 每个位置检查六个方向，但每个方向的操作都是O(1)

{% endnote %}

{% note info no-icon %}

**空间复杂度：**

算法的空间复杂度为 <b>O(L × R × C)</b>，主要包括：
- **距离数组**：`dist[L][R][C]`，大小为L×R×C
- **地牢数组**：`g[L][R][C]`，大小为L×R×C
- **BFS队列**：最坏情况下队列中可能存储O(L×R×C)个位置

**优化建议：**
- 距离数组和地牢数组是必需的，无法优化
- 队列空间在最坏情况下可能较大，但实际运行中通常不会达到最坏情况
- 如果空间紧张，可以考虑使用位运算压缩状态，但会增加代码复杂度

{% endnote %}

---

# C. 抓住那头牛

**题目链接：** [http://oj.1024code.top/problem.php?id=1470](http://oj.1024code.top/problem.php?id=1470)

## 整体思路

{% note info no-icon %}

这是一道经典的**一维BFS最短路径**问题。核心思想是：

1. **问题建模**：将问题转化为在一维数轴上的最短路径问题
2. **三种移动方式**：农夫每次可以选择三种移动方式：
   - 向前移动一步：`pos + 1`
   - 向后移动一步：`pos - 1`
   - 瞬移到2倍位置：`pos * 2`
3. **BFS搜索**：使用广度优先搜索，从位置N开始，逐层扩展，直到找到位置K
4. **最短路径保证**：BFS的特性保证了第一次到达位置K时，步数就是最少的
5. **状态标记**：使用距离数组`dist[i]`记录从位置N到位置i的最少步数，同时作为访问标记
6. **边界处理**：位置范围限制在[0, 100000]之间

{% endnote %}

## 思路拆解

### 步骤1：问题建模

{% note info no-icon %}

**问题分析：**

- 农夫在位置N，牛在位置K
- 农夫每次可以：
  - 向前移动一步：`pos → pos + 1`
  - 向后移动一步：`pos → pos - 1`
  - 瞬移到2倍位置：`pos → pos * 2`
- 目标：找到从位置N到位置K的最少步数

**数据结构设计：**

- 使用一维数组`dist[i]`记录从位置N到位置i的最少步数
- 初始化为-1表示未访问
- 位置范围：[0, 100000]

{% endnote %}

**代码实现：**

```cpp
const int N = 100010;    // 位置最大值
int n, k;                // n: 农夫位置, k: 牛的位置
int dist[N];             // dist[i]: 从位置n到位置i的最少步数，-1表示未访问
```

### 步骤2：BFS函数设计

{% note info no-icon %}

**函数设计：**

BFS函数从位置n开始搜索，直到找到位置k：
1. 将起始位置n加入队列，距离设为0
2. 从队列中取出当前位置
3. 如果到达目标位置k，返回步数
4. 否则，生成三种可能的下一位置
5. 对于每个合法的新位置，更新距离并加入队列

{% endnote %}

**函数框架：**

```cpp
int bfs() {
    // 1. 初始化队列和距离数组
    // 2. 将起始位置加入队列
    // 3. BFS主循环
    // 4. 检查是否到达目标位置
    // 5. 生成三种可能的下一位置
    // 6. 边界检查和状态更新
    // 7. 返回结果
}
```

### 步骤3：BFS主循环

{% note success no-icon %}

**核心逻辑：**

BFS的主循环不断从队列中取出位置进行处理：
- 如果到达目标位置k，立即返回最短步数
- 否则，尝试三种移动方式，生成新的位置
- 对于每个合法的新位置，更新距离并加入队列

**关键点：** BFS保证按距离递增的顺序访问位置，所以第一次到达位置k时，步数就是最少的。

{% endnote %}

**代码实现：**

```cpp
while (!q.empty()) {
    int t = q.front();
    q.pop();
    
    // 到达目标位置
    if (t == k) {
        return dist[t];
    }
    
    // 尝试三种移动方式
    // ...
}
```

### 步骤4：三种移动方式

{% note warning no-icon %}

**移动方式实现：**

对于每个位置，可以执行三种操作：
1. **向前移动**：`t + 1`
   - 边界检查：`t + 1 < N`
   - 访问检查：`dist[t + 1] == -1`
2. **向后移动**：`t - 1`
   - 边界检查：`t - 1 >= 0`
   - 访问检查：`dist[t - 1] == -1`
3. **瞬移到2倍位置**：`t * 2`
   - 边界检查：`t * 2 < N`
   - 访问检查：`dist[t * 2] == -1`

**注意：** 瞬移操作可以大幅减少步数，是算法的关键优化点。

{% endnote %}

**代码实现：**

```cpp
// 1. 向前移动
if (t + 1 < N && dist[t + 1] == -1) {
    dist[t + 1] = dist[t] + 1;
    q.push(t + 1);
}

// 2. 向后移动
if (t - 1 >= 0 && dist[t - 1] == -1) {
    dist[t - 1] = dist[t] + 1;
    q.push(t - 1);
}

// 3. 瞬移到2倍位置
if (t * 2 < N && dist[t * 2] == -1) {
    dist[t * 2] = dist[t] + 1;
    q.push(t * 2);
}
```

### 步骤5：优化处理

{% note info no-icon %}

**特殊情况优化：**

如果农夫的位置n大于等于牛的位置k（`n >= k`），那么农夫只能向后移动，无法使用瞬移操作。

此时最短步数就是 `n - k`，可以直接返回，无需进行BFS搜索。

这是一个重要的优化，可以避免不必要的搜索。

{% endnote %}

**优化代码：**

```cpp
// 优化：如果n >= k，只能向后移动
if (n >= k) {
    return n - k;
}
```

## 完整解题代码

```cpp
#include <iostream>
#include <queue>
#include <cstring>
using namespace std;

const int N = 100010;    // 位置最大值
int n, k;                // n: 农夫位置, k: 牛的位置
int dist[N];             // dist[i]: 从位置n到位置i的最少步数，-1表示未访问

/**
 * BFS搜索最短路径
 * @return 从位置n到位置k的最少步数
 */
int bfs() {
    // 【优化】如果n >= k，只能向后移动，直接返回
    if (n >= k) {
        return n - k;
    }
    
    queue<int> q;
    
    // 【初始化】将起始位置加入队列，距离设为0
    q.push(n);
    dist[n] = 0;
    
    // 【BFS主循环】不断从队列中取出位置进行处理
    while (!q.empty()) {
        int t = q.front();
        q.pop();
        
        // 【终点检查】如果到达目标位置，立即返回最短步数
        if (t == k) {
            return dist[t];
        }
        
        // 【三种移动方式】尝试向前、向后、瞬移三种操作
        
        // 1. 向前移动一步
        if (t + 1 < N && dist[t + 1] == -1) {
            dist[t + 1] = dist[t] + 1;
            q.push(t + 1);
        }
        
        // 2. 向后移动一步
        if (t - 1 >= 0 && dist[t - 1] == -1) {
            dist[t - 1] = dist[t] + 1;
            q.push(t - 1);
        }
        
        // 3. 瞬移到2倍位置（关键优化：可以大幅减少步数）
        if (t * 2 < N && dist[t * 2] == -1) {
            dist[t * 2] = dist[t] + 1;
            q.push(t * 2);
        }
    }
    
    // 理论上不会到达这里
    return -1;
}

int main() {
    cin >> n >> k;
    
    // 【初始化】将距离数组初始化为-1，表示所有位置都未访问
    memset(dist, -1, sizeof dist);
    
    // 【BFS搜索】从位置n开始搜索到位置k的最短路径
    cout << bfs() << endl;
    
    return 0;
}
```

## 算法要点总结

{% note warning no-icon %}

**关键点：**

1. **一维BFS**：在数轴上使用BFS搜索最短路径，比二维或三维更简单
2. **三种移动方式**：向前、向后、瞬移，瞬移操作是关键优化点
3. **距离数组双重作用**：`dist[i]`既记录最短距离，又作为访问标记（-1表示未访问）
4. **BFS特性**：BFS保证按距离递增的顺序访问位置，第一次到达位置k时步数最少
5. **边界检查**：必须检查位置是否在有效范围内[0, N)
6. **优化处理**：如果n >= k，直接返回n - k，无需BFS搜索

{% endnote %}

## 时间复杂度分析

{% note info no-icon %}

**时间复杂度：**

算法的时间复杂度为 <b>O(K)</b>，其中K是牛的位置。

**分析过程：**
1. BFS算法会访问从位置n到位置k之间的所有可达位置
2. 每个位置最多被访问一次（通过`dist`数组判断）
3. 对于每个位置，需要检查三种移动方式，时间复杂度为O(1)
4. 最坏情况下需要访问O(K)个位置

**最坏情况：**
- 当n=0，k=100000时，需要访问所有位置
- 但实际运行中，由于瞬移操作的存在，访问的位置数量通常会少于K

{% endnote %}

{% note info no-icon %}

**空间复杂度：**

算法的空间复杂度为 <b>O(K)</b>，主要包括：
- **距离数组**：`dist[K]`，大小为K
- **BFS队列**：最坏情况下队列中可能存储O(K)个位置

**优化建议：**
- 距离数组是必需的，无法优化
- 队列空间在最坏情况下可能较大，但实际运行中通常不会达到最坏情况
- 如果K很大，可以考虑使用更高效的队列实现

{% endnote %}

---

# D. 翻转

**题目链接：** [http://oj.1024code.top/problem.php?id=1471](http://oj.1024code.top/problem.php?id=1471)

## 整体思路

{% note info no-icon %}

这是一道经典的**状态空间BFS**问题。核心思想是：

1. **状态表示**：将N×M的矩阵看作一个状态，目标是将所有元素变为0
2. **操作定义**：每次可以选择一个位置，翻转该位置及其上下左右相邻位置的值（0变1，1变0）
3. **状态空间搜索**：使用BFS搜索从初始状态到目标状态的最短路径
4. **状态压缩**：将矩阵状态压缩为字符串，方便存储和比较
5. **状态判重**：使用`unordered_set`记录已访问的状态，避免重复搜索
6. **BFS特性**：BFS保证第一次到达目标状态时，操作次数就是最少的

{% endnote %}

## 思路拆解

### 步骤1：问题建模

{% note info no-icon %}

**问题分析：**

- 给定一个N×M的矩阵，每个元素为0或1
- 每次操作：选择一个位置(x, y)，翻转该位置及上下左右相邻位置的值
- 目标：将所有元素变为0
- 求：最少操作次数

**状态表示：**

- 使用二维数组`vector<vector<int>>`存储矩阵状态
- 将状态压缩为字符串，方便存储和比较
- 使用`unordered_set<string>`记录已访问的状态

{% endnote %}

**代码实现：**

```cpp
int n, m;                            // 矩阵的行数和列数
vector<vector<int>> grid;            // 存储矩阵状态
unordered_set<string> visited;       // 记录已访问的状态
```

### 步骤2：状态压缩函数

{% note info no-icon %}

**状态压缩：**

将二维矩阵转换为一维字符串，方便存储和比较：
- 遍历矩阵的每个元素
- 将每个元素（0或1）转换为字符
- 拼接成字符串

这样可以方便地在`unordered_set`中存储和查找状态。

{% endnote %}

**代码实现：**

```cpp
string stateToString(const vector<vector<int>>& grid) {
    string s = "";
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            s += char('0' + grid[i][j]);
        }
    }
    return s;
}
```

### 步骤3：翻转操作函数

{% note warning no-icon %}

**翻转操作：**

翻转位置(x, y)及其上下左右相邻位置的值：
- 需要翻转5个位置：当前位置 + 上下左右4个相邻位置
- 使用方向数组`dx[]`和`dy[]`方便遍历
- 翻转操作：`value = 1 - value`（0变1，1变0）
- 需要检查边界，确保位置在矩阵范围内

**关键点：** 翻转操作会影响5个位置，这是整个算法的核心操作。

{% endnote %}

**代码实现：**

```cpp
vector<vector<int>> flip(const vector<vector<int>>& grid, int x, int y) {
    vector<vector<int>> newGrid = grid;
    int dx[] = {0, 0, 0, -1, 1};  // 当前位置、上、下、左、右
    int dy[] = {0, -1, 1, 0, 0};
    
    for (int i = 0; i < 5; i++) {
        int nx = x + dx[i];
        int ny = y + dy[i];
        if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
            newGrid[nx][ny] = 1 - newGrid[nx][ny];  // 翻转
        }
    }
    return newGrid;
}
```

### 步骤4：目标状态检查

{% note info no-icon %}

**目标状态判断：**

检查矩阵是否全为0：
- 遍历矩阵的所有元素
- 如果所有元素都为0，返回true
- 否则返回false

这是BFS搜索中的终止条件。

{% endnote %}

**代码实现：**

```cpp
bool isZero(const vector<vector<int>>& grid) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            if (grid[i][j] != 0) return false;
        }
    }
    return true;
}
```

### 步骤5：BFS搜索函数

{% note success no-icon %}

**BFS搜索流程：**

1. **初始化**：将初始状态加入队列，步数为0
2. **循环处理**：从队列中取出当前状态
3. **目标检查**：如果当前状态全为0，返回步数
4. **状态扩展**：对每个位置尝试翻转操作，生成新状态
5. **状态判重**：如果新状态未访问过，加入队列
6. **继续搜索**：重复上述过程，直到找到目标状态或队列为空

**关键点：** BFS保证按操作次数递增的顺序访问状态，第一次到达目标状态时操作次数最少。

{% endnote %}

**函数框架：**

```cpp
int bfs(vector<vector<int>>& start) {
    queue<pair<vector<vector<int>>, int>> q;
    unordered_set<string> visited;
    
    // 1. 初始化队列
    // 2. BFS主循环
    // 3. 检查目标状态
    // 4. 尝试所有可能的翻转操作
    // 5. 状态判重和加入队列
    // 6. 返回结果
}
```

## 完整解题代码

```cpp
#include <iostream>
#include <queue>
#include <unordered_set>
#include <vector>
#include <string>
using namespace std;

int n, m;  // 矩阵的行数和列数

/**
 * 将矩阵状态压缩为字符串
 * @param grid 矩阵状态
 * @return 压缩后的字符串
 */
string stateToString(const vector<vector<int>>& grid) {
    string s = "";
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            s += char('0' + grid[i][j]);  // 将0或1转换为字符
        }
    }
    return s;
}

/**
 * 翻转操作：翻转位置(x, y)及其上下左右相邻位置的值
 * @param grid 当前矩阵状态
 * @param x 行坐标
 * @param y 列坐标
 * @return 翻转后的新矩阵状态
 */
vector<vector<int>> flip(const vector<vector<int>>& grid, int x, int y) {
    vector<vector<int>> newGrid = grid;  // 复制当前状态
    int dx[] = {0, 0, 0, -1, 1};  // 当前位置、上、下、左、右
    int dy[] = {0, -1, 1, 0, 0};
    
    // 【关键】翻转5个位置：当前位置 + 上下左右4个相邻位置
    for (int i = 0; i < 5; i++) {
        int nx = x + dx[i];
        int ny = y + dy[i];
        // 边界检查
        if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
            newGrid[nx][ny] = 1 - newGrid[nx][ny];  // 翻转：0变1，1变0
        }
    }
    return newGrid;
}

/**
 * 检查矩阵是否全为0
 * @param grid 矩阵状态
 * @return 如果全为0返回true，否则返回false
 */
bool isZero(const vector<vector<int>>& grid) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            if (grid[i][j] != 0) return false;
        }
    }
    return true;
}

/**
 * BFS搜索最少操作次数
 * @param start 初始矩阵状态
 * @return 最少操作次数，如果无法达到目标状态返回-1
 */
int bfs(vector<vector<int>>& start) {
    queue<pair<vector<vector<int>>, int>> q;  // 队列：存储(状态, 操作次数)
    unordered_set<string> visited;  // 记录已访问的状态
    
    // 【初始化】将初始状态加入队列
    string startState = stateToString(start);
    q.push({start, 0});
    visited.insert(startState);
    
    // 【BFS主循环】不断从队列中取出状态进行处理
    while (!q.empty()) {
        auto [grid, steps] = q.front();
        q.pop();
        
        // 【目标检查】如果当前状态全为0，返回操作次数
        if (isZero(grid)) {
            return steps;
        }
        
        // 【状态扩展】尝试翻转每个位置，生成新状态
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                // 翻转位置(i, j)
                vector<vector<int>> newGrid = flip(grid, i, j);
                string newState = stateToString(newGrid);
                
                // 【状态判重】如果新状态未访问过，加入队列
                if (visited.find(newState) == visited.end()) {
                    visited.insert(newState);
                    q.push({newGrid, steps + 1});
                }
            }
        }
    }
    
    // 如果队列为空仍未找到目标状态，说明无法达到
    return -1;
}

int main() {
    cin >> n >> m;
    vector<vector<int>> grid(n, vector<int>(m));
    
    // 【输入读取】读入矩阵的初始状态
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            cin >> grid[i][j];
        }
    }
    
    // 【BFS搜索】从初始状态开始搜索到目标状态的最少操作次数
    int res = bfs(grid);
    
    // 【结果输出】根据搜索结果输出相应信息
    if (res == -1) {
        cout << "IMPOSSIBLE" << endl;  // 无法达到目标状态
    } else {
        cout << res << endl;  // 输出最少操作次数
    }
    
    return 0;
}
```

## 算法要点总结

{% note warning no-icon %}

**关键点：**

1. **状态空间搜索**：将矩阵的每种状态看作图中的一个节点，翻转操作看作边
2. **状态压缩**：将二维矩阵压缩为一维字符串，方便存储和比较
3. **状态判重**：使用`unordered_set`记录已访问状态，避免重复搜索
4. **翻转操作**：每次翻转会影响5个位置（当前位置 + 上下左右），需要仔细处理
5. **BFS特性**：BFS保证按操作次数递增的顺序访问状态，第一次到达目标状态时操作次数最少
6. **状态空间大小**：状态空间为2^(n×m)，当n和m较大时，状态空间会非常大

{% endnote %}

## 时间复杂度分析

{% note info no-icon %}

**时间复杂度：**

算法的时间复杂度为 <b>O(2^(n×m) × n × m)</b>，其中：
- **2^(n×m)**：状态空间的大小（每个位置有0和1两种可能）
- **n × m**：每个状态需要尝试n×m个位置进行翻转
- **n × m**：状态压缩和检查的时间复杂度

**分析过程：**
1. 状态空间大小为2^(n×m)，每个状态都可能被访问
2. 对于每个状态，需要尝试n×m个位置的翻转操作
3. 每次翻转操作需要O(n×m)时间进行状态压缩和检查
4. 因此总时间复杂度为O(2^(n×m) × n × m)

**最坏情况：**
- 当n和m较大时，状态空间会呈指数级增长
- 实际运行中，由于状态判重，很多状态不会被重复访问
- 但如果状态空间太大，算法可能会超时

{% endnote %}

{% note info no-icon %}

**空间复杂度：**

算法的空间复杂度为 <b>O(2^(n×m))</b>，主要包括：
- **状态存储**：`unordered_set`需要存储所有已访问的状态
- **队列存储**：BFS队列在最坏情况下可能存储O(2^(n×m))个状态
- **矩阵存储**：每个状态需要O(n×m)空间存储矩阵

**优化建议：**
- 当n×m较大时，状态空间会非常大，可能需要考虑其他算法
- 可以使用IDA*等启发式搜索算法进行优化
- 如果状态空间太大，可以考虑使用双向BFS或其他优化策略
- 对于小规模问题（n×m ≤ 20），当前算法可以正常工作

{% endnote %}

---

# E. 找倍数

**题目链接：** [http://oj.1024code.top/problem.php?id=1472](http://oj.1024code.top/problem.php?id=1472)

## 整体思路

{% note info no-icon %}

这是一道经典的**BFS搜索 + 余数判重**问题。核心思想是：

1. **问题转换**：寻找最小的只由0和1组成的数字M，使得M是N的倍数
2. **BFS搜索**：从"1"开始，逐位添加0或1，构建所有可能的数字
3. **余数判重**：使用余数判重，而不是数值判重（避免大数问题）
4. **模运算优化**：利用模运算性质，`(a * 10 + b) % n = ((a % n) * 10 + b) % n`
5. **状态空间**：余数只有0到N-1共N种可能，大大减少了状态空间
6. **BFS特性**：BFS保证按字典序访问，找到的第一个答案就是最小的

{% endnote %}

## 思路拆解

### 步骤1：问题分析

{% note info no-icon %}

**问题特点：**

- 需要找到最小的只由0和1组成的数字M
- M必须是N的倍数，即`M % N == 0`
- 数字M可能非常大（可能超过long long范围），不能直接存储和比较

**关键洞察：**
- 如果两个数字对N的余数相同，那么它们对N的倍数关系是等价的
- 例如：101和1001对3的余数都是2，那么1010和10010对3的余数也相同
- 因此可以用余数来判重，而不是用数字本身

{% endnote %}

**状态表示：**

```cpp
queue<string> q;              // 队列：存储当前数字字符串
vector<bool> visited(n, false); // 访问标记：visited[mod]表示余数mod是否已访问
```

### 步骤2：模运算性质

{% note info no-icon %}

**模运算的关键性质：**

对于数字`num = a1a2a3...ak`（字符串形式），计算`num % n`：

1. **逐位计算**：`mod = (mod * 10 + digit) % n`
2. **递推关系**：当前余数只依赖于前一个余数和当前位数字
3. **优化效果**：不需要计算完整数字的值，只需要维护余数

**示例：**
- 数字"101"，计算`101 % 3`：
  - `mod = 0`
  - `mod = (0 * 10 + 1) % 3 = 1`
  - `mod = (1 * 10 + 0) % 3 = 1`
  - `mod = (1 * 10 + 1) % 3 = 2`

{% endnote %}

**代码实现：**

```cpp
// 计算字符串数字对n的余数
int mod = 0;
for (char c : curr) {
    mod = (mod * 10 + (c - '0')) % n;
}
```

### 步骤3：BFS搜索框架

{% note info no-icon %}

**BFS算法流程：**

1. **初始化**：将"1"加入队列，余数1标记为已访问
2. **循环处理**：从队列中取出当前数字字符串
3. **余数计算**：计算当前数字对N的余数
4. **终止条件**：如果余数为0，找到答案，返回当前数字
5. **状态扩展**：在末尾添加0或1，生成两个新数字
6. **余数判重**：使用新数字的余数进行判重，避免重复搜索
7. **加入队列**：如果余数未访问，加入队列继续搜索

**关键点：** 使用余数判重，状态空间从指数级降低到O(N)

{% endnote %}

**函数框架：**

```cpp
string bfs(int n) {
    // 1. 特殊处理：n=1
    // 2. 初始化队列和访问数组
    // 3. BFS主循环
    // 4. 计算当前数字的余数
    // 5. 检查是否找到答案
    // 6. 扩展状态：添加0和1
    // 7. 余数判重和加入队列
}
```

### 步骤4：状态扩展

{% note success no-icon %}

**状态扩展策略：**

从当前数字字符串`curr`，可以生成两个新数字：
1. **添加0**：`next0 = curr + "0"`
2. **添加1**：`next1 = curr + "1"`

**余数计算优化：**
- 如果当前数字的余数是`mod`
- 添加0后的余数：`mod0 = (mod * 10) % n`
- 添加1后的余数：`mod1 = (mod * 10 + 1) % n`
- 不需要重新计算整个字符串的余数，只需要基于当前余数计算

**关键点：** 利用模运算的递推性质，避免重复计算。

{% endnote %}

**代码实现：**

```cpp
// 在末尾添加0
string next0 = curr + "0";
int mod0 = (mod * 10) % n;
if (!visited[mod0]) {
    visited[mod0] = true;
    q.push(next0);
}

// 在末尾添加1
string next1 = curr + "1";
int mod1 = (mod * 10 + 1) % n;
if (!visited[mod1]) {
    visited[mod1] = true;
    q.push(next1);
}
```

### 步骤5：特殊处理

{% note warning no-icon %}

**边界情况：**

1. **n = 1**：直接返回"1"，因为1是1的倍数
2. **n > 1**：从"1"开始搜索（不能从"0"开始，因为0不是正整数）

**为什么从"1"开始？**
- 题目要求找到最小的**正整数**M
- "0"不是正整数，所以不能从"0"开始
- "1"是最小的只由0和1组成的正整数

{% endnote %}

**代码实现：**

```cpp
string bfs(int n) {
    // 特殊处理：n=1时直接返回"1"
    if (n == 1) return "1";
    
    // 从"1"开始搜索
    q.push("1");
    visited[1] = true;  // 余数1标记为已访问
    // ...
}
```

### 步骤6：BFS特性保证

{% note info no-icon %}

**为什么BFS能找到最小解？**

1. **按字典序访问**：BFS按层扩展，先访问长度较短的数字
2. **同一长度按字典序**：同一长度的数字，按队列顺序（即字典序）访问
3. **第一个解最优**：由于按字典序访问，第一个找到的解就是字典序最小的，也就是数值最小的

**示例：**
- 第1层：1
- 第2层：10, 11
- 第3层：100, 101, 110, 111
- 如果101是N的倍数，那么它就是最小的解

{% endnote %}

## 完整解题代码

```cpp
#include <iostream>
#include <queue>
#include <string>
#include <vector>
using namespace std;

/**
 * BFS搜索最小的只由0和1组成的N的倍数
 * @param n 给定的正整数N
 * @return 最小的只由0和1组成的N的倍数（字符串形式）
 */
string bfs(int n) {
    // 【特殊处理】如果n=1，直接返回"1"
    if (n == 1) return "1";
    
    queue<string> q;                    // 队列：存储当前数字字符串
    vector<bool> visited(n, false);     // 访问标记：visited[mod]表示余数mod是否已访问
    
    // 【初始化】将"1"加入队列，余数1标记为已访问
    q.push("1");
    visited[1] = true;
    
    // 【BFS主循环】不断从队列中取出数字字符串进行处理
    while (!q.empty()) {
        string curr = q.front();
        q.pop();
        
        // 【余数计算】计算当前数字对n的余数
        // 利用模运算性质：(a * 10 + b) % n = ((a % n) * 10 + b) % n
        int mod = 0;
        for (char c : curr) {
            mod = (mod * 10 + (c - '0')) % n;
        }
        
        // 【终止条件】如果余数为0，找到答案，返回当前数字
        if (mod == 0) {
            return curr;
        }
        
        // 【状态扩展】在末尾添加0或1，生成两个新数字
        
        // 1. 添加0
        string next0 = curr + "0";
        int mod0 = (mod * 10) % n;  // 【优化】基于当前余数计算新余数，无需重新计算整个字符串
        if (!visited[mod0]) {
            visited[mod0] = true;    // 标记余数mod0已访问
            q.push(next0);           // 加入队列继续搜索
        }
        
        // 2. 添加1
        string next1 = curr + "1";
        int mod1 = (mod * 10 + 1) % n;  // 【优化】基于当前余数计算新余数
        if (!visited[mod1]) {
            visited[mod1] = true;    // 标记余数mod1已访问
            q.push(next1);           // 加入队列继续搜索
        }
    }
    
    // 理论上不会到达这里（因为一定存在解）
    return "";
}

int main() {
    int n;
    // 多组测试数据
    while (cin >> n && n) {
        // 【BFS搜索】从"1"开始搜索最小的只由0和1组成的N的倍数
        cout << bfs(n) << endl;
    }
    return 0;
}
```

## 算法要点总结

{% note warning no-icon %}

**关键点：**

1. **余数判重**：使用余数判重而不是数值判重，将状态空间从指数级降低到O(N)
2. **模运算优化**：利用模运算的递推性质，避免重复计算整个字符串的余数
3. **BFS特性**：BFS按字典序访问，保证找到的第一个解就是最小的
4. **状态扩展**：每次在末尾添加0或1，生成两个新状态
5. **特殊处理**：n=1时直接返回"1"，从"1"开始搜索（不能从"0"开始）
6. **状态空间**：余数只有0到N-1共N种可能，大大减少了搜索空间

{% endnote %}

## 时间复杂度分析

{% note info no-icon %}

**时间复杂度：**

算法的时间复杂度为 <b>O(N)</b>，其中N是给定的正整数。

**分析过程：**
1. 状态空间大小为N（余数只有0到N-1共N种可能）
2. 每个状态最多被访问一次（通过`visited`数组判断）
3. 对于每个状态，需要：
   - 计算余数：O(字符串长度)，但字符串长度最多为O(N)（因为最多N个不同余数）
   - 扩展状态：O(1)（添加0和1）
4. 因此总时间复杂度为O(N × 平均字符串长度)

**最坏情况：**
- 当N较大时，字符串长度可能达到O(N)
- 但实际运行中，由于BFS的特性，通常能在较短的字符串中找到解
- 平均情况下，时间复杂度接近O(N)

{% endnote %}

{% note info no-icon %}

**空间复杂度：**

算法的空间复杂度为 <b>O(N)</b>，主要包括：
- **访问数组**：`visited[N]`，大小为N
- **BFS队列**：最坏情况下队列中可能存储O(N)个字符串
- **字符串存储**：每个字符串的长度最多为O(N)，但队列中最多有O(N)个字符串

**优化建议：**
- 访问数组是必需的，无法优化
- 队列空间在最坏情况下可能较大，但实际运行中通常不会达到最坏情况
- 如果N很大，可以考虑使用更高效的字符串存储方式，但会增加代码复杂度

{% endnote %}

---

# F. 质数路径

**题目链接：** [http://oj.1024code.top/problem.php?id=1473](http://oj.1024code.top/problem.php?id=1473)

## 整体思路

{% note info no-icon %}

这是一道经典的**BFS最短路径 + 质数预处理**问题。核心思想是：

1. **问题建模**：将四位质数看作图中的节点，如果两个质数只有一位数字不同，则在它们之间连一条边
2. **预处理质数**：使用埃拉托斯特尼筛法预处理所有四位质数（1000-9999）
3. **BFS搜索**：从起始质数开始，使用BFS搜索到目标质数的最短路径
4. **状态表示**：使用整数表示质数，使用`dist[i]`记录从起点到质数i的最短距离
5. **状态扩展**：对于当前质数，尝试改变每一位数字（0-9），生成新的质数
6. **BFS特性**：BFS保证第一次到达目标质数时，路径长度就是最短的

{% endnote %}

## 思路拆解

### 步骤1：问题建模

{% note info no-icon %}

**问题分析：**

- 给定两个四位质数start和end
- 每次操作：改变质数的一位数字，且改变后的数字仍必须是质数
- 目标：从start变换到end的最少步数

**图论建模：**
- 节点：所有四位质数（1000-9999）
- 边：如果两个质数只有一位数字不同，则它们之间有边
- 问题转化为：在无向图中，从start到end的最短路径长度

**关键点：** 不需要显式建图，可以在BFS过程中动态生成邻居节点。

{% endnote %}

**状态表示：**

```cpp
bool isPrime[N];      // isPrime[i]: 数字i是否为质数
bool visited[N];      // visited[i]: 质数i是否已访问
int dist[N];          // dist[i]: 从起点到质数i的最短距离
```

### 步骤2：质数预处理

{% note warning no-icon %}

**埃拉托斯特尼筛法：**

1. **初始化**：假设所有数字都是质数
2. **标记非质数**：从2开始，对于每个质数i，标记i的所有倍数为非质数
3. **优化**：只需要标记从i²开始的倍数（因为更小的倍数已经被之前的质数标记过了）
4. **范围**：预处理1000到9999的所有质数

**时间复杂度：** O(N log log N)，其中N=10000

**关键点：** 预处理只需要执行一次，可以在所有测试用例之前完成。

{% endnote %}

**代码实现：**

```cpp
void initPrimes() {
    memset(isPrime, true, sizeof isPrime);
    isPrime[0] = isPrime[1] = false;  // 0和1不是质数
    
    for (int i = 2; i < N; i++) {
        if (isPrime[i]) {
            // 标记i的所有倍数为非质数
            for (int j = i * i; j < N; j += i) {
                isPrime[j] = false;
            }
        }
    }
}
```

### 步骤3：数字变换方法

{% note info no-icon %}

**如何改变一位数字？**

对于四位数字`num = abcd`（a、b、c、d是各位数字），要改变第pos位（从右往左，0-indexed）：

1. **提取当前位数字**：`digit = (num / pow(10, pos)) % 10`
2. **替换数字**：`newNum = num - digit * pow(10, pos) + newDigit * pow(10, pos)`
3. **边界检查**：
   - 新数字必须在[1000, 9999]范围内
   - 如果pos=3（最高位），newDigit不能为0（否则不是四位数）

**示例：**
- 数字1234，改变第2位（百位）：
  - `digit = (1234 / 100) % 10 = 2`
  - 如果改为5：`newNum = 1234 - 2*100 + 5*100 = 1534`

{% endnote %}

**代码实现：**

```cpp
// 改变第pos位数字
int power = pow(10, pos);
int digit = (curr / power) % 10;  // 提取当前位数字

for (int d = 0; d <= 9; d++) {
    if (d == digit) continue;  // 跳过相同数字
    
    // 最高位不能为0
    if (pos == 3 && d == 0) continue;
    
    // 计算新数字
    int next = curr - digit * power + d * power;
    
    // 检查新数字是否为四位质数
    if (next >= 1000 && next < 10000 && isPrime[next]) {
        // 处理新数字
    }
}
```

### 步骤4：BFS搜索框架

{% note success no-icon %}

**BFS算法流程：**

1. **初始化**：将起始质数加入队列，距离设为0
2. **循环处理**：从队列中取出当前质数
3. **终点检查**：如果到达目标质数，返回距离
4. **状态扩展**：遍历四位数字的每一位，尝试改变该位数字
5. **生成新质数**：对于每个可能的数字替换，生成新数字
6. **合法性检查**：检查新数字是否为四位质数且未访问
7. **状态更新**：更新距离，加入队列

**关键点：** BFS保证按距离递增的顺序访问质数，第一次到达目标质数时距离就是最短的。

{% endnote %}

**函数框架：**

```cpp
int bfs(int start, int end) {
    // 1. 特殊处理：start == end
    // 2. 初始化队列和距离数组
    // 3. BFS主循环
    // 4. 遍历四位数字的每一位
    // 5. 尝试改变该位数字（0-9）
    // 6. 检查新数字是否为四位质数
    // 7. 更新距离并加入队列
    // 8. 返回结果
}
```

### 步骤5：状态扩展细节

{% note warning no-icon %}

**状态扩展的关键点：**

1. **遍历所有位**：对于四位数字，需要遍历pos=0,1,2,3（个位、十位、百位、千位）
2. **遍历所有数字**：对于每一位，尝试替换为0-9（注意最高位不能为0）
3. **跳过相同数字**：如果替换的数字和原数字相同，跳过
4. **边界检查**：确保新数字在[1000, 9999]范围内
5. **质数检查**：使用预处理好的`isPrime`数组快速判断
6. **访问标记**：使用`visited`数组避免重复访问

**优化：** 可以在找到目标质数时立即返回，不需要继续搜索。

{% endnote %}

**代码实现：**

```cpp
// 遍历四位数字的每一位
for (int pos = 0; pos < 4; pos++) {
    int power = pow(10, pos);
    int digit = (curr / power) % 10;
    
    // 尝试替换为0-9
    for (int d = 0; d <= 9; d++) {
        if (d == digit) continue;  // 跳过相同数字
        
        // 最高位不能为0
        if (pos == 3 && d == 0) continue;
        
        // 计算新数字
        int next = curr - digit * power + d * power;
        
        // 检查新数字是否为四位质数且未访问
        if (next >= 1000 && next < 10000 && 
            isPrime[next] && !visited[next]) {
            visited[next] = true;
            dist[next] = dist[curr] + 1;
            
            // 如果到达目标，立即返回
            if (next == end) {
                return dist[next];
            }
            
            q.push(next);
        }
    }
}
```

### 步骤6：特殊处理

{% note info no-icon %}

**边界情况：**

1. **start == end**：直接返回0，无需变换
2. **无法到达**：如果BFS结束后仍未到达end，返回-1或"Impossible"

**多组测试数据：**
- 质数预处理只需要执行一次（在main函数开始时）
- 每次BFS搜索前需要重置`visited`和`dist`数组

{% endnote %}

**代码实现：**

```cpp
int bfs(int start, int end) {
    // 特殊处理：起点和终点相同
    if (start == end) return 0;
    
    // 重置访问数组和距离数组
    memset(visited, false, sizeof visited);
    memset(dist, -1, sizeof dist);
    
    // BFS搜索
    // ...
    
    // 如果无法到达，返回-1
    return -1;
}
```

## 完整解题代码

```cpp
#include <iostream>
#include <queue>
#include <vector>
#include <cmath>
#include <cstring>
using namespace std;

const int N = 10000;        // 数字最大值
bool isPrime[N];            // isPrime[i]: 数字i是否为质数
bool visited[N];            // visited[i]: 质数i是否已访问（用于BFS）
int dist[N];                // dist[i]: 从起点到质数i的最短距离

/**
 * 使用埃拉托斯特尼筛法预处理所有质数
 * 时间复杂度：O(N log log N)
 */
void initPrimes() {
    // 【初始化】假设所有数字都是质数
    memset(isPrime, true, sizeof isPrime);
    isPrime[0] = isPrime[1] = false;  // 0和1不是质数
    
    // 【筛法】从2开始，标记所有非质数
    for (int i = 2; i < N; i++) {
        if (isPrime[i]) {
            // 【优化】从i²开始标记，因为更小的倍数已经被之前的质数标记过了
            for (int j = i * i; j < N; j += i) {
                isPrime[j] = false;
            }
        }
    }
}

/**
 * BFS搜索从start到end的最短路径
 * @param start 起始质数
 * @param end 目标质数
 * @return 最短路径长度，如果无法到达返回-1
 */
int bfs(int start, int end) {
    // 【特殊处理】如果起点和终点相同，直接返回0
    if (start == end) return 0;
    
    // 【初始化】重置访问数组和距离数组
    memset(visited, false, sizeof visited);
    memset(dist, -1, sizeof dist);
    
    queue<int> q;
    
    // 【初始化】将起点加入队列，距离设为0
    q.push(start);
    visited[start] = true;
    dist[start] = 0;
    
    // 【BFS主循环】不断从队列中取出质数进行处理
    while (!q.empty()) {
        int curr = q.front();
        q.pop();
        
        // 【状态扩展】遍历四位数字的每一位，尝试改变该位数字
        for (int pos = 0; pos < 4; pos++) {
            int power = pow(10, pos);                    // 计算10^pos
            int digit = (curr / power) % 10;             // 提取第pos位的数字
            
            // 【数字替换】尝试将第pos位替换为0-9
            for (int d = 0; d <= 9; d++) {
                if (d == digit) continue;  // 跳过相同数字
                
                // 【边界检查】最高位（pos=3）不能为0，否则不是四位数
                if (pos == 3 && d == 0) continue;
                
                // 【计算新数字】替换第pos位数字
                int next = curr - digit * power + d * power;
                
                // 【合法性检查】新数字必须是四位质数且未访问
                if (next >= 1000 && next < 10000 && 
                    isPrime[next] && !visited[next]) {
                    visited[next] = true;
                    dist[next] = dist[curr] + 1;
                    
                    // 【终点检查】如果到达目标质数，立即返回最短距离
                    if (next == end) {
                        return dist[next];
                    }
                    
                    // 加入队列继续搜索
                    q.push(next);
                }
            }
        }
    }
    
    // 如果队列为空仍未到达目标，说明无法到达
    return -1;
}

int main() {
    // 【预处理】在所有测试用例之前，预处理所有质数（只需执行一次）
    initPrimes();
    
    int t;
    cin >> t;
    
    // 多组测试数据
    while (t--) {
        int start, end;
        cin >> start >> end;
        
        // 【BFS搜索】从起始质数搜索到目标质数的最短路径
        int res = bfs(start, end);
        
        // 【结果输出】根据搜索结果输出相应信息
        if (res == -1) {
            cout << "Impossible" << endl;  // 无法到达
        } else {
            cout << res << endl;  // 输出最短路径长度
        }
    }
    
    return 0;
}
```

## 算法要点总结

{% note warning no-icon %}

**关键点：**

1. **质数预处理**：使用埃拉托斯特尼筛法预处理所有四位质数，避免在BFS中重复判断
2. **数字变换**：通过改变一位数字生成新质数，注意最高位不能为0
3. **BFS搜索**：将质数看作图中的节点，使用BFS找到最短路径
4. **状态表示**：使用整数表示质数，使用`dist[i]`记录最短距离
5. **访问标记**：使用`visited`数组避免重复访问，提高效率
6. **边界检查**：确保新数字是四位数（1000-9999）且是质数
7. **优化**：在找到目标质数时立即返回，不需要继续搜索

{% endnote %}

## 时间复杂度分析

{% note info no-icon %}

**时间复杂度：**

算法的时间复杂度分为两部分：

1. **预处理时间复杂度**：<b>O(N log log N)</b>，其中N=10000
   - 埃拉托斯特尼筛法的时间复杂度
   - 预处理只需要执行一次，可以在所有测试用例之前完成

2. **BFS时间复杂度**：<b>O(P × 40)</b>，其中：
   - **P**：四位质数的个数（大约1000多个）
   - **40**：每个质数最多有40个可能的变换（4位 × 10种数字，但需要排除原数字和非法情况）

**分析过程：**
- BFS会访问从start到end路径上的所有质数
- 对于每个质数，需要尝试改变4位数字，每位有10种可能（排除原数字和非法情况后约40种）
- 每个质数最多被访问一次（通过`visited`数组判断）
- 因此BFS的时间复杂度为O(P × 40)

**总时间复杂度：** O(N log log N + T × P × 40)，其中T是测试用例的数量

{% endnote %}

{% note info no-icon %}

**空间复杂度：**

算法的空间复杂度为 <b>O(N)</b>，主要包括：
- **质数标记数组**：`isPrime[N]`，大小为N=10000
- **访问数组**：`visited[N]`，大小为N=10000
- **距离数组**：`dist[N]`，大小为N=10000
- **BFS队列**：最坏情况下队列中可能存储O(P)个质数，其中P是四位质数的个数

**优化建议：**
- 质数标记数组是必需的，无法优化
- 访问数组和距离数组在每次BFS前需要重置，但这是必要的
- 队列空间在实际运行中通常不会达到最坏情况
- 如果内存紧张，可以考虑只存储四位质数，但会增加代码复杂度

{% endnote %}

---

# G. 洗牌

**题目链接：** [http://oj.1024code.top/problem.php?id=1474](http://oj.1024code.top/problem.php?id=1474)

## 整体思路

{% note info no-icon %}

这是一道经典的**状态空间BFS**问题。核心思想是：

1. **问题建模**：将牌的排列看作一个状态，目标是从初始状态变换到目标状态
2. **操作定义**：每次可以选择一个连续的子序列进行翻转（reverse操作）
3. **状态空间搜索**：使用BFS搜索从初始状态到目标状态的最短路径
4. **状态表示**：使用字符串表示牌的排列，方便存储和比较
5. **状态判重**：使用`unordered_set`记录已访问的状态，避免重复搜索
6. **BFS特性**：BFS保证第一次到达目标状态时，操作次数就是最少的

{% endnote %}

## 思路拆解

### 步骤1：问题建模

{% note info no-icon %}

**问题分析：**

- 给定一副牌的初始顺序和目标顺序
- 每次操作：选择一个连续的子序列[l, r]，将其翻转
- 目标：从初始顺序变换到目标顺序
- 求：最少操作次数

**状态表示：**
- 使用字符串表示牌的排列
- 例如：牌的顺序为[1, 2, 3, 4]，可以用字符串"1234"表示
- 使用`unordered_set<string>`记录已访问的状态

{% endnote %}

**状态表示：**

```cpp
string start;              // 初始状态（牌的初始顺序）
string target;             // 目标状态（牌的目标顺序）
unordered_set<string> visited;  // 记录已访问的状态
```

### 步骤2：翻转操作函数

{% note warning no-icon %}

**翻转操作：**

翻转字符串中从位置l到r的子序列：
- 使用`reverse`函数翻转子序列
- 注意：`reverse`函数是左闭右开区间，所以需要翻转[l, r+1)
- 翻转操作会生成新的状态

**关键点：** 翻转操作是唯一允许的操作，需要尝试所有可能的子序列。

{% endnote %}

**代码实现：**

```cpp
string flip(string s, int l, int r) {
    reverse(s.begin() + l, s.begin() + r + 1);  // 翻转[l, r]区间
    return s;
}
```

### 步骤3：BFS搜索框架

{% note success no-icon %}

**BFS算法流程：**

1. **初始化**：将初始状态加入队列，步数为0
2. **循环处理**：从队列中取出当前状态
3. **目标检查**：如果当前状态等于目标状态，返回步数
4. **状态扩展**：尝试所有可能的子序列翻转操作
5. **状态判重**：如果新状态未访问过，加入队列
6. **继续搜索**：重复上述过程，直到找到目标状态或队列为空

**关键点：** BFS保证按操作次数递增的顺序访问状态，第一次到达目标状态时操作次数最少。

{% endnote %}

**函数框架：**

```cpp
int bfs(string start, string target) {
    // 1. 特殊处理：start == target
    // 2. 初始化队列和访问集合
    // 3. BFS主循环
    // 4. 检查目标状态
    // 5. 尝试所有可能的翻转操作
    // 6. 状态判重和加入队列
    // 7. 返回结果
}
```

### 步骤4：状态扩展

{% note info no-icon %}

**状态扩展策略：**

对于当前状态字符串，需要尝试所有可能的子序列翻转：
- 外层循环：枚举起始位置i（0到n-1）
- 内层循环：枚举结束位置j（i到n-1）
- 翻转操作：翻转子序列[i, j]，生成新状态

**时间复杂度：** 对于每个状态，需要尝试O(n²)种翻转操作，其中n是牌的数量。

{% endnote %}

**代码实现：**

```cpp
int n = curr.length();

// 尝试所有可能的翻转
for (int i = 0; i < n; i++) {
    for (int j = i; j < n; j++) {
        string next = flip(curr, i, j);
        
        // 检查是否到达目标状态
        if (next == target) {
            return steps + 1;
        }
        
        // 状态判重
        if (visited.find(next) == visited.end()) {
            visited.insert(next);
            q.push({next, steps + 1});
        }
    }
}
```

### 步骤5：特殊处理

{% note info no-icon %}

**边界情况：**

1. **start == target**：直接返回0，无需操作
2. **无法到达**：如果BFS结束后仍未到达target，返回-1

**优化建议：**
- 当n较大时，状态空间可能非常大（最多n!种排列）
- 可以考虑使用IDA*等启发式搜索算法进行优化
- 对于小规模问题（n ≤ 10），当前算法可以正常工作

{% endnote %}

## 完整解题代码

```cpp
#include <iostream>
#include <queue>
#include <unordered_set>
#include <string>
#include <algorithm>
using namespace std;

/**
 * 翻转操作：翻转字符串中从位置l到r的子序列
 * @param s 原字符串
 * @param l 起始位置（包含）
 * @param r 结束位置（包含）
 * @return 翻转后的新字符串
 */
string flip(string s, int l, int r) {
    // 【关键】reverse函数是左闭右开区间，所以需要翻转[l, r+1)
    reverse(s.begin() + l, s.begin() + r + 1);
    return s;
}

/**
 * BFS搜索最少操作次数
 * @param start 初始状态（牌的初始顺序）
 * @param target 目标状态（牌的目标顺序）
 * @return 最少操作次数，如果无法到达目标状态返回-1
 */
int bfs(string start, string target) {
    // 【特殊处理】如果初始状态等于目标状态，直接返回0
    if (start == target) return 0;
    
    queue<pair<string, int>> q;  // 队列：存储(状态, 操作次数)
    unordered_set<string> visited;  // 记录已访问的状态
    
    // 【初始化】将初始状态加入队列
    q.push({start, 0});
    visited.insert(start);
    
    // 【BFS主循环】不断从队列中取出状态进行处理
    while (!q.empty()) {
        auto [curr, steps] = q.front();
        q.pop();
        
        int n = curr.length();
        
        // 【状态扩展】尝试所有可能的子序列翻转操作
        for (int i = 0; i < n; i++) {
            for (int j = i; j < n; j++) {
                // 翻转子序列[i, j]
                string next = flip(curr, i, j);
                
                // 【目标检查】如果到达目标状态，立即返回操作次数
                if (next == target) {
                    return steps + 1;
                }
                
                // 【状态判重】如果新状态未访问过，加入队列
                if (visited.find(next) == visited.end()) {
                    visited.insert(next);
                    q.push({next, steps + 1});
                }
            }
        }
    }
    
    // 如果队列为空仍未找到目标状态，说明无法到达
    return -1;
}

int main() {
    int n;
    cin >> n;
    
    // 【输入读取】读入牌的初始顺序和目标顺序
    string start = "", target = "";
    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;
        start += char('0' + x);  // 将数字转换为字符
    }
    
    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;
        target += char('0' + x);
    }
    
    // 【BFS搜索】从初始状态搜索到目标状态的最少操作次数
    int res = bfs(start, target);
    
    // 【结果输出】
    cout << res << endl;
    
    return 0;
}
```

## 算法要点总结

{% note warning no-icon %}

**关键点：**

1. **状态空间搜索**：将牌的每种排列看作图中的一个节点，翻转操作看作边
2. **状态表示**：使用字符串表示牌的排列，方便存储和比较
3. **状态判重**：使用`unordered_set`记录已访问状态，避免重复搜索
4. **翻转操作**：每次可以选择任意连续子序列进行翻转，需要尝试所有可能
5. **BFS特性**：BFS保证按操作次数递增的顺序访问状态，第一次到达目标状态时操作次数最少
6. **状态空间大小**：状态空间为n!，当n较大时，状态空间会非常大

{% endnote %}

## 时间复杂度分析

{% note info no-icon %}

**时间复杂度：**

算法的时间复杂度为 <b>O(n! × n²)</b>，其中n是牌的数量。

**分析过程：**
1. 状态空间大小为n!（所有可能的排列）
2. 每个状态最多被访问一次（通过`visited`集合判断）
3. 对于每个状态，需要尝试O(n²)种翻转操作（所有可能的子序列）
4. 每次翻转操作需要O(n)时间（字符串复制和翻转）
5. 因此总时间复杂度为O(n! × n² × n) = O(n! × n³)

**最坏情况：**
- 当n较大时，状态空间会呈阶乘级增长
- 实际运行中，由于状态判重，很多状态不会被重复访问
- 但如果状态空间太大，算法可能会超时

**优化建议：**
- 对于小规模问题（n ≤ 10），当前算法可以正常工作
- 对于大规模问题，可以考虑使用IDA*等启发式搜索算法
- 可以使用双向BFS进行优化，从起点和终点同时搜索

{% endnote %}

{% note info no-icon %}

**空间复杂度：**

算法的空间复杂度为 <b>O(n! × n)</b>，主要包括：
- **状态存储**：`unordered_set`需要存储所有已访问的状态
- **队列存储**：BFS队列在最坏情况下可能存储O(n!)个状态
- **字符串存储**：每个状态需要O(n)空间存储字符串

**优化建议：**
- 当n较大时，状态空间会非常大，可能需要考虑其他算法
- 可以使用IDA*等启发式搜索算法，避免存储所有状态
- 如果状态空间太大，可以考虑使用双向BFS或其他优化策略

{% endnote %}

---

# H. 罐子

**题目链接：** [http://oj.1024code.top/problem.php?id=1475](http://oj.1024code.top/problem.php?id=1475)

## 整体思路

{% note info no-icon %}

这是一道经典的**状态空间BFS**问题（倒水问题）。核心思想是：

1. **问题建模**：用(a, b)表示两个罐子中的水量，目标状态是其中一个罐子的水量为C
2. **六种操作**：每次可以选择六种操作之一：
   - 倒空第一个罐子：`(a, b) → (0, b)`
   - 倒空第二个罐子：`(a, b) → (a, 0)`
   - 装满第一个罐子：`(a, b) → (A, b)`
   - 装满第二个罐子：`(a, b) → (a, B)`
   - 从第一个罐子倒到第二个罐子：`(a, b) → (a-pour, b+pour)`
   - 从第二个罐子倒到第一个罐子：`(a, b) → (a+pour, b-pour)`
3. **BFS搜索**：从初始状态(0, 0)开始，使用BFS搜索到目标状态的最短路径
4. **状态判重**：使用`map`或`unordered_set`记录已访问的状态，避免重复搜索
5. **BFS特性**：BFS保证第一次到达目标状态时，操作次数就是最少的

{% endnote %}

## 思路拆解

### 步骤1：问题建模

{% note info no-icon %}

**问题分析：**

- 给定两个罐子的容量A和B，目标水量C
- 初始状态：两个罐子都是空的，即(0, 0)
- 目标状态：其中一个罐子的水量为C，即`a == C || b == C`
- 每次操作：可以选择六种操作之一
- 求：达到目标状态的最少操作次数

**状态表示：**
- 使用`pair<int, int>`表示状态(a, b)
- 使用`map<pair<int, int>, bool>`或`unordered_set`记录已访问的状态

{% endnote %}

**状态表示：**

```cpp
struct State {
    int a, b;        // 两个罐子中的水量
    int steps;       // 到达该状态的操作次数
};

map<pair<int, int>, bool> visited;  // 记录已访问的状态
```

### 步骤2：六种操作实现

{% note warning no-icon %}

**操作1-4：倒空和装满**

1. **倒空第一个罐子**：`(a, b) → (0, b)`，前提是`a > 0`
2. **倒空第二个罐子**：`(a, b) → (a, 0)`，前提是`b > 0`
3. **装满第一个罐子**：`(a, b) → (A, b)`，前提是`a < A`
4. **装满第二个罐子**：`(a, b) → (a, B)`，前提是`b < B`

**操作5-6：倒水操作**

5. **从第一个罐子倒到第二个罐子**：
   - 可以倒的水量：`pour = min(a, B - b)`
   - 新状态：`(a - pour, b + pour)`
   - 前提是`pour > 0`

6. **从第二个罐子倒到第一个罐子**：
   - 可以倒的水量：`pour = min(b, A - a)`
   - 新状态：`(a + pour, b - pour)`
   - 前提是`pour > 0`

**关键点：** 倒水操作需要计算可以倒多少水，不能超过目标罐子的剩余容量。

{% endnote %}

**代码实现：**

```cpp
// 操作1: 倒空第一个罐子
if (curr.a > 0 && !visited[{0, curr.b}]) {
    visited[{0, curr.b}] = true;
    q.push({0, curr.b, steps + 1});
}

// 操作2: 倒空第二个罐子
if (curr.b > 0 && !visited[{curr.a, 0}]) {
    visited[{curr.a, 0}] = true;
    q.push({curr.a, 0, steps + 1});
}

// 操作3: 装满第一个罐子
if (curr.a < A && !visited[{A, curr.b}]) {
    visited[{A, curr.b}] = true;
    q.push({A, curr.b, steps + 1});
}

// 操作4: 装满第二个罐子
if (curr.b < B && !visited[{curr.a, B}]) {
    visited[{curr.a, B}] = true;
    q.push({curr.a, B, steps + 1});
}

// 操作5: 从第一个罐子倒到第二个罐子
int pour = min(curr.a, B - curr.b);
if (pour > 0 && !visited[{curr.a - pour, curr.b + pour}]) {
    visited[{curr.a - pour, curr.b + pour}] = true;
    q.push({curr.a - pour, curr.b + pour, steps + 1});
}

// 操作6: 从第二个罐子倒到第一个罐子
pour = min(curr.b, A - curr.a);
if (pour > 0 && !visited[{curr.a + pour, curr.b - pour}]) {
    visited[{curr.a + pour, curr.b - pour}] = true;
    q.push({curr.a + pour, curr.b - pour, steps + 1});
}
```

### 步骤3：BFS搜索框架

{% note success no-icon %}

**BFS算法流程：**

1. **初始化**：将初始状态(0, 0)加入队列，步数为0
2. **循环处理**：从队列中取出当前状态
3. **目标检查**：如果`a == C || b == C`，返回步数
4. **状态扩展**：尝试六种操作，生成新状态
5. **状态判重**：如果新状态未访问过，加入队列
6. **继续搜索**：重复上述过程，直到找到目标状态或队列为空

**关键点：** BFS保证按操作次数递增的顺序访问状态，第一次到达目标状态时操作次数最少。

{% endnote %}

**函数框架：**

```cpp
int bfs() {
    // 1. 初始化队列和访问集合
    // 2. 将初始状态(0, 0)加入队列
    // 3. BFS主循环
    // 4. 检查目标状态
    // 5. 尝试六种操作
    // 6. 状态判重和加入队列
    // 7. 返回结果
}
```

### 步骤4：目标状态检查

{% note info no-icon %}

**目标状态判断：**

目标状态是其中一个罐子的水量为C：
- `a == C`：第一个罐子的水量为C
- `b == C`：第二个罐子的水量为C

只要满足其中一个条件，就找到了目标状态。

{% endnote %}

**代码实现：**

```cpp
// 检查是否达到目标
if (curr.a == C || curr.b == C) {
    return curr.steps;
}
```

## 完整解题代码

```cpp
#include <iostream>
#include <queue>
#include <map>
using namespace std;

struct State {
    int a, b;        // 两个罐子中的水量
    int steps;       // 到达该状态的操作次数
};

int A, B, C;  // A: 第一个罐子的容量, B: 第二个罐子的容量, C: 目标水量

/**
 * BFS搜索最少操作次数
 * @return 最少操作次数，如果无法达到目标状态返回-1
 */
int bfs() {
    queue<State> q;
    map<pair<int, int>, bool> visited;  // 记录已访问的状态
    
    // 【初始化】将初始状态(0, 0)加入队列
    q.push({0, 0, 0});
    visited[{0, 0}] = true;
    
    // 【BFS主循环】不断从队列中取出状态进行处理
    while (!q.empty()) {
        State curr = q.front();
        q.pop();
        
        // 【目标检查】如果其中一个罐子的水量为C，返回操作次数
        if (curr.a == C || curr.b == C) {
            return curr.steps;
        }
        
        // 【状态扩展】尝试六种操作，生成新状态
        
        // 操作1: 倒空第一个罐子
        if (curr.a > 0 && !visited[{0, curr.b}]) {
            visited[{0, curr.b}] = true;
            q.push({0, curr.b, curr.steps + 1});
        }
        
        // 操作2: 倒空第二个罐子
        if (curr.b > 0 && !visited[{curr.a, 0}]) {
            visited[{curr.a, 0}] = true;
            q.push({curr.a, 0, curr.steps + 1});
        }
        
        // 操作3: 装满第一个罐子
        if (curr.a < A && !visited[{A, curr.b}]) {
            visited[{A, curr.b}] = true;
            q.push({A, curr.b, curr.steps + 1});
        }
        
        // 操作4: 装满第二个罐子
        if (curr.b < B && !visited[{curr.a, B}]) {
            visited[{curr.a, B}] = true;
            q.push({curr.a, B, curr.steps + 1});
        }
        
        // 操作5: 从第一个罐子倒到第二个罐子
        // 【关键】计算可以倒的水量：不能超过第二个罐子的剩余容量
        int pour = min(curr.a, B - curr.b);
        if (pour > 0 && !visited[{curr.a - pour, curr.b + pour}]) {
            visited[{curr.a - pour, curr.b + pour}] = true;
            q.push({curr.a - pour, curr.b + pour, curr.steps + 1});
        }
        
        // 操作6: 从第二个罐子倒到第一个罐子
        // 【关键】计算可以倒的水量：不能超过第一个罐子的剩余容量
        pour = min(curr.b, A - curr.a);
        if (pour > 0 && !visited[{curr.a + pour, curr.b - pour}]) {
            visited[{curr.a + pour, curr.b - pour}] = true;
            q.push({curr.a + pour, curr.b - pour, curr.steps + 1});
        }
    }
    
    // 如果队列为空仍未找到目标状态，说明无法达到
    return -1;
}

int main() {
    cin >> A >> B >> C;
    
    // 【BFS搜索】从初始状态(0, 0)搜索到目标状态的最少操作次数
    int res = bfs();
    
    // 【结果输出】根据搜索结果输出相应信息
    if (res == -1) {
        cout << "impossible" << endl;  // 无法达到目标状态
    } else {
        cout << res << endl;  // 输出最少操作次数
    }
    
    return 0;
}
```

## 算法要点总结

{% note warning no-icon %}

**关键点：**

1. **状态空间搜索**：将每种水量组合(a, b)看作图中的一个节点，操作看作边
2. **状态表示**：使用`pair<int, int>`表示状态，使用`map`记录已访问状态
3. **六种操作**：倒空、装满、倒水等六种基本操作，需要仔细处理每种操作的前提条件
4. **倒水操作**：需要计算可以倒多少水，不能超过目标罐子的剩余容量
5. **BFS特性**：BFS保证按操作次数递增的顺序访问状态，第一次到达目标状态时操作次数最少
6. **状态空间大小**：状态空间为A×B，当A和B较大时，状态空间会较大

{% endnote %}

## 时间复杂度分析

{% note info no-icon %}

**时间复杂度：**

算法的时间复杂度为 <b>O(A × B)</b>，其中A和B是两个罐子的容量。

**分析过程：**
1. 状态空间大小为A×B（所有可能的水量组合）
2. 每个状态最多被访问一次（通过`visited`映射判断）
3. 对于每个状态，需要尝试六种操作，时间复杂度为O(1)
4. 因此总时间复杂度为O(A × B)

**最坏情况：**
- 当A和B较大时，需要访问所有A×B个状态
- 实际运行中，由于BFS的特性，通常能在较少的操作次数内找到解

{% endnote %}

{% note info no-icon %}

**空间复杂度：**

算法的空间复杂度为 <b>O(A × B)</b>，主要包括：
- **状态存储**：`map`需要存储所有已访问的状态，最多A×B个
- **队列存储**：BFS队列在最坏情况下可能存储O(A×B)个状态

**优化建议：**
- 可以使用`unordered_map`代替`map`，提高查找效率
- 如果A和B很大，可以考虑使用其他算法或优化策略
- 对于小规模问题（A, B ≤ 1000），当前算法可以正常工作

{% endnote %}

---

# I. 点火游戏

**题目链接：** [http://oj.1024code.top/problem.php?id=1476](http://oj.1024code.top/problem.php?id=1476)

## 整体思路

{% note info no-icon %}

这是一道经典的**多源BFS + 枚举**问题。核心思想是：

1. **问题建模**：给定N×M的方格矩阵，其中'#'表示草地，'.'表示空地
2. **点火策略**：可以选择最多两个草地点燃，火焰会向上下左右四个方向蔓延
3. **多源BFS**：从选择的点火点开始，同时进行BFS，模拟火焰同时从多个点蔓延
4. **枚举组合**：枚举所有可能的1个或2个点火点组合，对每种组合计算点燃所有草地的时间
5. **时间计算**：`dist[x][y]`记录该位置被点燃的时间，取最大值作为总时间
6. **最优解**：在所有可能的组合中取最小值

{% endnote %}

## 思路拆解

### 步骤1：问题建模

{% note info no-icon %}

**问题分析：**

- 给定N×M的方格矩阵，其中'#'表示草地，'.'表示空地
- 可以选择最多两个草地点燃
- 火焰会向上下左右四个方向蔓延，每个时间单位蔓延一格
- 目标：点燃所有草地所需的最少时间

**关键点：**
- 需要枚举所有可能的点火点组合（1个或2个）
- 对每种组合，使用多源BFS模拟火焰蔓延
- 多源BFS：将所有点火点同时加入队列，同时开始BFS

{% endnote %}

**数据结构：**

```cpp
char g[N][N];                    // 存储矩阵，'#'表示草地，'.'表示空地
vector<pair<int, int>> grass;     // 所有草地位置
int dist[N][N];                  // dist[x][y]: 位置(x,y)被点燃的时间
bool visited[N][N];              // visited[x][y]: 位置(x,y)是否已访问
```

### 步骤2：多源BFS实现

{% note success no-icon %}

**多源BFS算法流程：**

1. **初始化**：将所有点火点同时加入队列，距离设为0
2. **循环处理**：从队列中取出当前位置
3. **时间更新**：更新最大时间`maxTime`
4. **方向遍历**：向四个方向蔓延，寻找相邻的草地
5. **状态更新**：更新距离，加入队列，增加已燃烧草地数
6. **完成检查**：检查所有草地是否都被点燃

**关键点：** 多源BFS保证火焰同时从多个点开始蔓延，`dist[x][y]`记录该位置被点燃的时间。

{% endnote %}

**函数框架：**

```cpp
int bfs(vector<pair<int, int>>& fires) {
    // 1. 初始化距离数组和访问数组
    // 2. 将所有点火点加入队列
    // 3. 多源BFS主循环
    // 4. 向四个方向蔓延
    // 5. 检查是否所有草地都被点燃
    // 6. 返回最大时间
}
```

### 步骤3：方向蔓延

{% note warning no-icon %}

**火焰蔓延规则：**

火焰从当前位置(x, y)向四个方向蔓延：
- 上：`(x-1, y)`
- 下：`(x+1, y)`
- 左：`(x, y-1)`
- 右：`(x, y+1)`

**检查条件：**
1. **边界检查**：新位置必须在矩阵范围内
2. **草地检查**：新位置必须是草地（`g[nx][ny] == '#'`）
3. **访问检查**：新位置未被访问（`!visited[nx][ny]`）

**时间计算：** `dist[nx][ny] = dist[x][y] + 1`，表示新位置在下一时间单位被点燃。

{% endnote %}

**代码实现：**

```cpp
int dx[] = {-1, 0, 1, 0};  // 上、右、下、左
int dy[] = {0, 1, 0, -1};

// 向四个方向蔓延
for (int i = 0; i < 4; i++) {
    int nx = x + dx[i];
    int ny = y + dy[i];
    
    // 边界检查
    if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
    
    // 草地检查和访问检查
    if (g[nx][ny] != '#' || visited[nx][ny]) continue;
    
    visited[nx][ny] = true;
    dist[nx][ny] = dist[x][y] + 1;
    burned++;  // 已燃烧草地数加一
    q.push({nx, ny});
}
```

### 步骤4：枚举点火点组合

{% note info no-icon %}

**枚举策略：**

1. **枚举1个点火点**：遍历所有草地位置，每个位置作为唯一的点火点
2. **枚举2个点火点**：遍历所有草地位置对(i, j)，其中i < j，避免重复

**优化：**
- 如果只有一个点火点就能点燃所有草地，不需要枚举两个点火点
- 可以使用剪枝优化：如果当前组合的时间已经大于已知最优解，可以提前返回

{% endnote %}

**代码实现：**

```cpp
int ans = -1;
int grassCount = grass.size();

// 枚举1个点火点
for (int i = 0; i < grassCount; i++) {
    vector<pair<int, int>> fires = {grass[i]};
    int time = bfs(fires);
    if (time != -1) {
        if (ans == -1 || time < ans) {
            ans = time;
        }
    }
}

// 枚举2个点火点
for (int i = 0; i < grassCount; i++) {
    for (int j = i + 1; j < grassCount; j++) {
        vector<pair<int, int>> fires = {grass[i], grass[j]};
        int time = bfs(fires);
        if (time != -1) {
            if (ans == -1 || time < ans) {
                ans = time;
            }
        }
    }
}
```

### 步骤5：完成检查

{% note info no-icon %}

**完成条件：**

在BFS过程中，需要跟踪已燃烧的草地数：
- 初始值：`burned = fires.size()`（点火点本身）
- 每次蔓延到新草地时：`burned++`
- 完成条件：`burned == grass.size()`（所有草地都被点燃）

**时间计算：** `maxTime = max(maxTime, dist[x][y])`，取所有草地被点燃时间的最大值。

{% endnote %}

**代码实现：**

```cpp
int maxTime = 0;
int burned = fires.size();  // 已燃烧的草地数（初始为点火点数量）

while (!q.empty()) {
    auto [x, y] = q.front();
    q.pop();
    
    maxTime = max(maxTime, dist[x][y]);  // 更新最大时间
    
    // 蔓延操作...
    // burned++ 在蔓延到新草地时执行
}

// 检查是否所有草地都被点燃
if (burned == grass.size()) {
    return maxTime;
}
return -1;  // 无法点燃所有草地
```

## 完整解题代码

```cpp
#include <iostream>
#include <queue>
#include <vector>
#include <cstring>
#include <algorithm>
using namespace std;

const int N = 15;                    // 矩阵最大尺寸
int n, m;                            // n: 行数, m: 列数
char g[N][N];                        // 存储矩阵，'#'表示草地，'.'表示空地
vector<pair<int, int>> grass;         // 所有草地位置
int dist[N][N];                      // dist[x][y]: 位置(x,y)被点燃的时间
bool visited[N][N];                  // visited[x][y]: 位置(x,y)是否已访问

int dx[] = {-1, 0, 1, 0};            // 上、右、下、左四个方向
int dy[] = {0, 1, 0, -1};

/**
 * 多源BFS：从选定的点火点开始，模拟火焰蔓延
 * @param fires 选定的点火点集合
 * @return 点燃所有草地所需的时间，如果无法点燃所有草地返回-1
 */
int bfs(vector<pair<int, int>>& fires) {
    // 【初始化】重置距离数组和访问数组
    memset(dist, -1, sizeof dist);
    memset(visited, false, sizeof visited);
    
    queue<pair<int, int>> q;
    
    // 【初始化】将所有点火点同时加入队列，距离设为0
    for (auto [x, y] : fires) {
        q.push({x, y});
        dist[x][y] = 0;
        visited[x][y] = true;
    }
    
    int maxTime = 0;                  // 记录最大时间
    int burned = fires.size();       // 已燃烧的草地数（初始为点火点数量）
    
    // 【多源BFS主循环】不断从队列中取出位置进行处理
    while (!q.empty()) {
        auto [x, y] = q.front();
        q.pop();
        
        // 【时间更新】更新最大时间
        maxTime = max(maxTime, dist[x][y]);
        
        // 【方向蔓延】向四个方向蔓延，寻找相邻的草地
        for (int i = 0; i < 4; i++) {
            int nx = x + dx[i];
            int ny = y + dy[i];
            
            // 【边界检查】确保新位置在矩阵范围内
            if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
            
            // 【草地检查和访问检查】新位置必须是草地且未被访问
            if (g[nx][ny] != '#' || visited[nx][ny]) continue;
            
            // 【状态更新】更新距离，标记为已访问，增加已燃烧草地数
            visited[nx][ny] = true;
            dist[nx][ny] = dist[x][y] + 1;
            burned++;
            q.push({nx, ny});
        }
    }
    
    // 【完成检查】检查是否所有草地都被点燃
    if (burned == grass.size()) {
        return maxTime;  // 返回最大时间
    }
    return -1;  // 无法点燃所有草地
}

int main() {
    int T;
    cin >> T;
    
    // 多组测试数据
    for (int caseNum = 1; caseNum <= T; caseNum++) {
        cin >> n >> m;
        grass.clear();
        
        // 【输入读取】读入矩阵，收集所有草地位置
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                cin >> g[i][j];
                if (g[i][j] == '#') {
                    grass.push_back({i, j});  // 记录草地位置
                }
            }
        }
        
        // 【特殊处理】如果没有草地，直接输出-1
        if (grass.empty()) {
            cout << "Case " << caseNum << ": -1" << endl;
            continue;
        }
        
        int ans = -1;
        int grassCount = grass.size();
        
        // 【枚举1个点火点】遍历所有草地位置
        for (int i = 0; i < grassCount; i++) {
            vector<pair<int, int>> fires = {grass[i]};
            int time = bfs(fires);
            if (time != -1) {
                if (ans == -1 || time < ans) {
                    ans = time;  // 更新最优解
                }
            }
        }
        
        // 【枚举2个点火点】遍历所有草地位置对
        for (int i = 0; i < grassCount; i++) {
            for (int j = i + 1; j < grassCount; j++) {
                vector<pair<int, int>> fires = {grass[i], grass[j]};
                int time = bfs(fires);
                if (time != -1) {
                    if (ans == -1 || time < ans) {
                        ans = time;  // 更新最优解
                    }
                }
            }
        }
        
        // 【结果输出】
        cout << "Case " << caseNum << ": " << ans << endl;
    }
    
    return 0;
}
```

## 算法要点总结

{% note warning no-icon %}

**关键点：**

1. **多源BFS**：将所有点火点同时加入队列，同时开始BFS，模拟火焰同时从多个点蔓延
2. **枚举策略**：枚举所有可能的1个或2个点火点组合，对每种组合计算点燃所有草地的时间
3. **时间计算**：`dist[x][y]`记录该位置被点燃的时间，取最大值作为总时间
4. **完成检查**：跟踪已燃烧的草地数，检查是否所有草地都被点燃
5. **最优解**：在所有可能的组合中取最小值
6. **边界处理**：如果没有草地，直接返回-1

{% endnote %}

## 时间复杂度分析

{% note info no-icon %}

**时间复杂度：**

算法的时间复杂度为 <b>O(grass_count² × n × m)</b>，其中：
- **grass_count**：草地的数量
- **n × m**：矩阵的大小

**分析过程：**
1. 枚举1个点火点：O(grass_count)种组合
2. 枚举2个点火点：O(grass_count²)种组合
3. 对于每种组合，执行多源BFS：O(n × m)（每个位置最多访问一次）
4. 因此总时间复杂度为O((grass_count + grass_count²) × n × m) = O(grass_count² × n × m)

**最坏情况：**
- 当草地数量较多时，需要枚举的组合数会很大
- 实际运行中，由于多源BFS的特性，通常能在较少的操作次数内完成

**优化建议：**
- 如果只有一个点火点就能点燃所有草地，可以提前终止枚举两个点火点
- 可以使用剪枝优化：如果当前组合的时间已经大于已知最优解，可以提前返回

{% endnote %}

{% note info no-icon %}

**空间复杂度：**

算法的空间复杂度为 <b>O(n × m)</b>，主要包括：
- **距离数组**：`dist[n][m]`，大小为n×m
- **访问数组**：`visited[n][m]`，大小为n×m
- **BFS队列**：最坏情况下队列中可能存储O(n×m)个位置
- **草地位置数组**：`grass`，大小为grass_count

**优化建议：**
- 距离数组和访问数组是必需的，无法优化
- 队列空间在实际运行中通常不会达到最坏情况
- 对于小规模问题（n, m ≤ 15），当前算法可以正常工作

{% endnote %}

---

# 总结

{% note success no-icon %}

本文解析了**1024_OJ**平台上**C++图论之搜索专题**竞赛中的9道题目，涵盖了：

- **DFS回溯**：棋盘问题
- **BFS最短路径**：地牢大师、抓住那头牛、质数路径
- **状态空间搜索**：翻转、洗牌、罐子
- **多源BFS**：点火游戏
- **特殊技巧**：找倍数（余数判重）

这些题目都是搜索算法的经典应用，通过练习可以深入理解DFS和BFS算法的原理和应用场景。

{% endnote %}

---

## 参考资源

- **1024_OJ平台**：[http://oj.1024code.top](http://oj.1024code.top)

---

# Q&A
