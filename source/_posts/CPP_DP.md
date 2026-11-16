---
title: C++ 动态规划算法基础
date: 2025-02-04
tags:
  - 动态规划
categories:
  - 算法学习


---

# C++ 动态规划算法基础

## 前言

{% note info no-icon %}

动态规划（Dynamic Programming，简称DP）是算法设计中的一种重要方法，广泛应用于解决最优化问题。本文将介绍动态规划的基本概念、核心思想，以及两种常用的分析方法：**常规分析方法**和**闫氏DP分析法**。

{% endnote %}

{% note success no-icon %}

**本文导航：**

- 📚 动态规划基础：定义、核心思想、基本要素
- 🔄 解题步骤：五步法解决DP问题
- 📖 常规分析方法：传统DP分析方法
- 🎯 闫氏DP分析法：集合角度的系统化方法
- ⚖️ 两种方法对比：选择适合的分析方法
- 📦 常见DP类型：线性、区间、背包、树形、状态压缩
- 🚀 优化技巧：空间优化、状态优化、转移优化
- 💡 学习建议：如何学好动态规划

{% endnote %}

---

# 一、什么是动态规划

## 1. 动态规划的定义

{% note success no-icon %}

**动态规划**是一种通过把原问题分解为相对简单的子问题的方式来解决复杂问题的方法。它通常用于解决具有**重叠子问题**和**最优子结构**性质的问题。

{% endnote %}

{% note info no-icon %}

动态规划的核心思想是：

- **记忆化**：避免重复计算已经求解过的子问题
- **自底向上**：从最小的子问题开始，逐步构建更大问题的解
- **状态转移**：通过状态转移方程描述问题之间的关系

{% endnote %}

## 2. 动态规划与贪心、分治的区别

{% note info no-icon %}

动态规划、贪心算法和分治算法是三种重要的算法设计方法，它们各有特点：

{% endnote %}

| 方法         | 特点                                 | 适用场景                         |
| ------------ | ------------------------------------ | -------------------------------- |
| **贪心算法** | 每一步都做出当前最优选择，不考虑全局 | 局部最优能导致全局最优的问题     |
| **分治算法** | 将问题分解为独立的子问题，递归求解   | 子问题之间相互独立的问题         |
| **动态规划** | 将问题分解为重叠的子问题，记忆化求解 | 具有重叠子问题和最优子结构的问题 |

## 3. 动态规划的基本要素

### 最优子结构

{% note success no-icon %}

问题的最优解包含子问题的最优解。也就是说，可以通过子问题的最优解来构造原问题的最优解。

**示例**：在最短路径问题中，如果从A到C的最短路径经过B，那么从A到B和从B到C的路径也分别是最短的。

{% endnote %}

### 重叠子问题

{% note warning no-icon %}

在递归求解过程中，同一个子问题会被多次计算。

**示例**：在计算斐波那契数列时，`fib(5)` 需要计算 `fib(4)` 和 `fib(3)`，而 `fib(4)` 又需要计算 `fib(3)` 和 `fib(2)`，`fib(3)` 被重复计算了。

{% endnote %}

### 状态转移方程

{% note info no-icon %}

描述问题状态之间关系的数学表达式，是动态规划的核心。

**示例**：斐波那契数列的状态转移方程为：`f(n) = f(n-1) + f(n-2)`

{% endnote %}

---

# 二、动态规划的解题步骤

## 常规解题步骤

{% note warning no-icon %}

1. **确定状态**：定义问题的状态，通常用 `dp[i]` 或 `dp[i][j]` 表示
2. **确定状态转移方程**：找出状态之间的关系
3. **确定初始状态**：设置边界条件
4. **确定计算顺序**：确定状态的计算顺序（自底向上或自顶向下）
5. **编写代码**：根据上述分析编写代码

{% endnote %}

---

# 三、动态规划分析方法

## 方法一：常规分析方法

{% note info no-icon %}

常规分析方法是最常用的动态规划分析方法，通过以下步骤进行：

{% endnote %}

### 1. 问题分析

{% note warning no-icon %}

- 理解问题：明确问题的目标和约束条件
- 识别特征：判断是否具有最优子结构和重叠子问题
- 确定状态：定义状态变量，表示问题的子问题

{% endnote %}

### 2. 状态定义

{% note success no-icon %}

状态定义是动态规划的基础，需要明确：

- **状态的含义**：`dp[i]` 或 `dp[i][j]` 表示什么
- **状态的维度**：一维、二维还是多维
- **状态的取值范围**：状态的取值范围

**示例**：在01背包问题中，可以定义 `dp[i][j]` 表示前i个物品在容量为j的背包中能获得的最大价值。

{% endnote %}

### 3. 状态转移方程

{% note danger no-icon %}

状态转移方程描述了状态之间的关系，通常有以下几种形式：

- **线性DP**：`dp[i] = f(dp[i-1], dp[i-2], ...)`
- **区间DP**：`dp[i][j] = f(dp[i][k], dp[k+1][j])`
- **树形DP**：在树上进行状态转移
- **背包DP**：`dp[i][j] = max(dp[i-1][j], dp[i-1][j-w[i]] + v[i])`

{% endnote %}

### 4. 初始状态

{% note warning no-icon %}

初始状态是状态转移的起点，需要明确：

- **边界条件**：最小子问题的解
- **初始值**：`dp[0]` 或 `dp[0][0]` 的值

{% endnote %}

### 5. 计算顺序

{% note info no-icon %}

确定状态的计算顺序，确保在计算 `dp[i]` 时，所需的子问题已经计算完成。

**示例**：在01背包问题中，通常从 `i=1, j=0` 开始，逐步计算到 `i=n, j=V`。

{% endnote %}

### 6. 完整示例：斐波那契数列

{% note warning no-icon %}

**问题描述**：计算第n个斐波那契数。

{% endnote %}

{% note success no-icon %}

**分析过程**：

1. **状态定义**：`dp[i]` 表示第i个斐波那契数
2. **状态转移方程**：`dp[i] = dp[i-1] + dp[i-2]`
3. **初始状态**：`dp[0] = 0, dp[1] = 1`
4. **计算顺序**：从 `i=2` 开始，依次计算到 `i=n`

{% endnote %}

{% note info no-icon %}

**代码实现**：

{% endnote %}

```cpp
#include <iostream>
#include <vector>
using namespace std;

int fibonacci(int n) {
    if (n <= 1) return n;
    
    // 【状态定义】dp[i] 表示第i个斐波那契数
    vector<int> dp(n + 1);
    
    // 【初始状态】
    dp[0] = 0;
    dp[1] = 1;
    
    // 【状态转移】从i=2开始计算
    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];  // 状态转移方程
    }
    
    return dp[n];
}

// 【空间优化版本】只保留前两个状态
int fibonacci_optimized(int n) {
    if (n <= 1) return n;
    
    int prev2 = 0;  // dp[i-2]
    int prev1 = 1;  // dp[i-1]
    
    for (int i = 2; i <= n; i++) {
        int curr = prev1 + prev2;  // dp[i] = dp[i-1] + dp[i-2]
        prev2 = prev1;
        prev1 = curr;
    }
    
    return prev1;
}

int main() {
    int n = 10;
    cout << "第" << n << "个斐波那契数: " << fibonacci(n) << endl;
    cout << "优化版本: " << fibonacci_optimized(n) << endl;
    return 0;
}
```

{% note success no-icon %}

**代码说明**：

- 基础版本使用一维数组存储所有状态，空间复杂度为 O(n)
- 优化版本只保留前两个状态，空间复杂度优化为 O(1)
- 两种方法的时间复杂度都是 O(n)

{% endnote %}

---

## 方法二：闫氏DP分析法

{% note info no-icon %}

**闫氏DP分析法**是由算法竞赛教练闫学灿（yxc）总结的一种系统化的动态规划分析方法。这种方法通过**集合**的角度来理解动态规划，使问题分析更加清晰和系统化。

{% endnote %}

### 闫氏DP分析法的核心思想

{% note success no-icon %}

闫氏DP分析法将动态规划问题看作**集合划分**问题：

1. **状态表示**：用集合来表示状态
   - `dp[i]` 或 `dp[i][j]` 表示一个集合
   - 集合中存储的是所有满足某种条件的方案
   - 集合的属性（最大值、最小值、数量等）就是我们要计算的值

2. **状态计算**：通过集合划分来计算状态
   - 将当前集合划分为若干个子集
   - 每个子集对应一种情况
   - 通过子集的结果来计算当前集合的属性

{% endnote %}

### 闫氏DP分析法的步骤

{% note info no-icon %}

闫氏DP分析法分为两个核心步骤：

{% endnote %}

**第一步：状态表示**

{% note success no-icon %}

- **集合**：`dp[i][j]` 表示什么集合？
- **属性**：集合的属性是什么？（最大值、最小值、数量等）

{% endnote %}

**第二步：状态计算**

{% note warning no-icon %}

- **集合划分**：如何将当前集合划分为子集？
- **状态转移**：如何通过子集的结果计算当前集合的属性？

{% endnote %}

### 完整示例：01背包问题（闫氏DP分析法）

{% note warning no-icon %}

**问题描述**：有N个物品和一个容量为V的背包。每个物品只能使用一次。第i个物品的体积是 `w[i]`，价值是 `v[i]`。求解将哪些物品装入背包可使这些物品的总体积不超过背包容量，且总价值最大。

{% endnote %}

**闫氏DP分析**：

**第一步：状态表示**

{% note success no-icon %}

- **集合**：`dp[i][j]` 表示所有只考虑前i个物品，且总体积不超过j的选法集合
- **属性**：集合中所有方案的最大价值

{% endnote %}

**第二步：状态计算**

{% note warning no-icon %}

将集合 `dp[i][j]` 划分为两个子集：

1. **不选第i个物品**：只考虑前i-1个物品，总体积不超过j
   - 对应集合：`dp[i-1][j]`
   - 价值：`dp[i-1][j]`

2. **选第i个物品**：只考虑前i-1个物品，总体积不超过 `j-w[i]`，然后加上第i个物品
   - 对应集合：`dp[i-1][j-w[i]]`
   - 价值：`dp[i-1][j-w[i]] + v[i]`

{% endnote %}

{% note danger no-icon %}

**状态转移方程**：

```
dp[i][j] = max(dp[i-1][j], dp[i-1][j-w[i]] + v[i])
```

{% endnote %}

{% note info no-icon %}

**边界条件**：

- `dp[0][j] = 0`（没有物品，价值为0）
- `dp[i][0] = 0`（容量为0，价值为0）

{% endnote %}

{% note info no-icon %}

**代码实现**：

{% endnote %}

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int knapsack01(int n, int V, vector<int>& w, vector<int>& v) {
    // 【状态定义】dp[i][j] 表示前i个物品，容量为j时的最大价值
    vector<vector<int>> dp(n + 1, vector<int>(V + 1, 0));
    
    // 【状态转移】
    for (int i = 1; i <= n; i++) {
        for (int j = 0; j <= V; j++) {
            // 不选第i个物品
            dp[i][j] = dp[i-1][j];
            
            // 选第i个物品（需要容量足够）
            if (j >= w[i-1]) {
                dp[i][j] = max(dp[i][j], dp[i-1][j-w[i-1]] + v[i-1]);
            }
        }
    }
    
    return dp[n][V];
}

// 【空间优化版本】使用一维数组
int knapsack01_optimized(int n, int V, vector<int>& w, vector<int>& v) {
    vector<int> dp(V + 1, 0);
    
    for (int i = 0; i < n; i++) {
        // 【注意】需要逆序遍历，避免覆盖未使用的状态
        for (int j = V; j >= w[i]; j--) {
            dp[j] = max(dp[j], dp[j-w[i]] + v[i]);
        }
    }
    
    return dp[V];
}

int main() {
    int n = 4, V = 5;
    vector<int> w = {1, 2, 3, 4};  // 重量
    vector<int> v = {2, 4, 4, 5};  // 价值
    
    cout << "最大价值: " << knapsack01(n, V, w, v) << endl;
    cout << "优化版本: " << knapsack01_optimized(n, V, w, v) << endl;
    return 0;
}
```

{% note success no-icon %}

**代码说明**：

- 基础版本使用二维数组，空间复杂度为 O(n×V)
- 优化版本使用一维数组，空间复杂度优化为 O(V)
- **关键点**：一维优化时需要逆序遍历容量，避免覆盖未使用的状态
- 两种方法的时间复杂度都是 O(n×V)

{% endnote %}

### 闫氏DP分析法的优势

{% note success no-icon %}

1. **系统化**：通过集合的角度统一理解各种DP问题
2. **清晰性**：集合划分使状态转移更加清晰
3. **通用性**：适用于各种类型的动态规划问题
4. **易于理解**：从集合的角度更容易理解状态的含义

{% endnote %}

---

# 四、两种方法的对比

{% note info no-icon %}

以下是常规分析方法和闫氏DP分析法的详细对比：

{% endnote %}

| 方面         | 常规分析方法             | 闫氏DP分析法         |
| ------------ | ------------------------ | -------------------- |
| **核心思想** | 通过状态转移方程描述问题 | 通过集合划分理解问题 |
| **分析角度** | 状态之间的关系           | 集合的属性和划分     |
| **适用场景** | 所有DP问题               | 所有DP问题           |
| **理解难度** | 中等                     | 相对容易（系统化）   |
| **优势**     | 直观，易于上手           | 系统化，逻辑清晰     |

{% note info no-icon %}

**建议**：

- 初学者可以先掌握常规分析方法
- 进阶学习时可以使用闫氏DP分析法，使分析更加系统化
- 两种方法可以结合使用，互相验证

{% endnote %}

---

# 五、扩展与专题

## 1. 背包问题

{% note success no-icon %}

经典的背包问题及其变种，是动态规划中最基础且重要的问题类型。

**典型问题**：

- 01背包：每种物品最多选1次
- 完全背包：每种物品可以选无限次
- 多重背包：每种物品有数量限制
- 分组背包：物品分组，每组最多选1个

{% endnote %}

{% note info no-icon %}

{% link 背包问题专题, https://blog.1024code.top/CPP_DP_knapsack/, true, 包含01背包、完全背包、多重背包、分组背包等所有背包问题 %}

{% endnote %}

## 2. 线性DP

{% note info no-icon %}

状态转移是线性的，通常是一维或二维状态，按照线性顺序进行状态转移。

**典型问题**：

- 最长上升子序列（LIS）
- 最长公共子序列（LCS）
- 编辑距离
- 数字三角形

{% endnote %}

{% note info no-icon %}

{% link 线性DP专题, https://blog.1024code.top/CPP_DP_linear/, true, 最长上升子序列、最长公共子序列、编辑距离等 %}

{% endnote %}

## 3. 区间DP

{% note info no-icon %}

状态定义在区间上，通过合并区间来求解，通常用于处理区间相关的问题。

**典型问题**：

- 石子合并
- 回文串相关
- 矩阵链乘法
- 括号匹配

{% endnote %}

{% note info no-icon %}

{% link 区间DP专题, https://blog.1024code.top/CPP_DP_interval/, true, 石子合并、回文串、矩阵链乘法等 %}

{% endnote %}

## 4. 计数类DP

{% note warning no-icon %}

用于统计满足某种条件的方案数量，通常需要特别注意避免重复计数。

**典型问题**：

- 整数划分
- 路径计数
- 排列组合问题
- 方案数统计

{% endnote %}

{% note info no-icon %}

{% link 计数类DP专题, https://blog.1024code.top/CPP_DP_counting/, true, 整数划分、路径计数、排列组合等计数问题 %}

{% endnote %}

## 5. 数位统计DP

{% note warning no-icon %}

用于统计数字在某个范围内满足特定条件的个数，通常与数位相关。

**典型问题**：

- 数字1出现的次数
- 不含某些数字的数的个数
- 数字各位之和问题
- 数字的特定性质统计

{% endnote %}

{% note info no-icon %}

{% link 数位统计DP专题, https://blog.1024code.top/CPP_DP_digit/, true, 数字统计、数位相关问题的动态规划解法 %}

{% endnote %}

## 6. 状态压缩DP

{% note warning no-icon %}

使用位运算压缩状态，通常用于状态空间较小但需要枚举所有状态的问题。

**典型问题**：

- 旅行商问题（TSP）
- 棋盘覆盖
- 状态压缩背包
- 状态机问题

{% endnote %}

{% note info no-icon %}

{% link 状态压缩DP专题, https://blog.1024code.top/CPP_DP_state_compression/, true, 旅行商问题、棋盘覆盖、状态压缩背包等 %}

{% endnote %}

## 7. 树形DP

{% note info no-icon %}

在树结构上进行状态转移，通常需要从叶子节点向根节点或从根节点向叶子节点进行状态转移。

**典型问题**：

- 树的直径
- 树的最大独立集
- 有依赖的背包
- 树上路径问题

{% endnote %}

{% note info no-icon %}

{% link 树形DP专题, https://blog.1024code.top/CPP_DP_tree/, true, 树的直径、树的最大独立集、有依赖的背包等 %}

{% endnote %}

## 8. 记忆化搜索

{% note info no-icon %}

使用递归+记忆化的方式实现DP，适用于状态转移关系复杂、难以确定计算顺序的问题。

**典型问题**：

- 滑雪问题
- 复杂状态转移的DP
- 难以确定计算顺序的问题
- 递归形式的DP

{% endnote %}

{% note info no-icon %}

{% link 记忆化搜索专题, https://blog.1024code.top/CPP_DP_memoization/, true, 递归+记忆化的动态规划实现方法 %}

{% endnote %}

---

# 六、动态规划的优化技巧

## 1. 空间优化

{% note success no-icon %}

通过滚动数组减少空间复杂度。

**示例**：01背包问题从二维优化到一维。

{% endnote %}

## 2. 状态优化

{% note info no-icon %}

减少状态的维度或数量。

**示例**：某些问题可以通过数学推导减少状态维度。

{% endnote %}

## 3. 转移优化

{% note warning no-icon %}

优化状态转移的过程。

**示例**：使用单调队列、斜率优化等技巧。

{% endnote %}

## 4. 记忆化搜索

{% note info no-icon %}

使用递归+记忆化的方式实现DP。

**适用场景**：状态转移关系复杂，难以确定计算顺序时。

{% endnote %}

---

# 七、学习建议

{% note warning no-icon %}

1. **理解核心思想**：掌握最优子结构和重叠子问题的概念
2. **多练习**：通过大量练习熟悉各种类型的DP问题
3. **总结规律**：总结不同类型问题的状态定义和转移方程
4. **画图分析**：通过画状态转移图帮助理解
5. **对比学习**：对比不同解法的优缺点

{% endnote %}

---

# 八、总结

{% note success no-icon %}

动态规划是解决最优化问题的重要方法，核心在于：

1. **识别问题特征**：判断是否具有最优子结构和重叠子问题
2. **定义状态**：明确状态的含义和属性
3. **建立转移方程**：描述状态之间的关系
4. **优化实现**：通过空间优化、状态优化等技巧提高效率

无论是使用常规分析方法还是闫氏DP分析法，关键都是要深入理解问题的本质，找到合适的状态定义和转移方程。

{% endnote %}

---

# 九、参考资料

{% note info no-icon %}

- 《算法导论》- 动态规划章节
- 《算法竞赛进阶指南》- 动态规划部分

{% endnote %}

---