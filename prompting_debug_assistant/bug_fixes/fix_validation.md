# Fix Validation Report

## Bug 1 – bug1_fixed.py
- **Input**: `"90, 78, 85, 92"` (raw score string)
- **Expected Output**: `Scores: [90, 78, 85, 92]`, `Average: 86.25`, `Letter: B` ✅
- **Actual Output**: `Scores: [90, 78, 85, 92]`, `Average: 86.25`, `Letter: B` ✅
- **Status**: FIXED (added missing colon after `elif avg >= 80:`)

## Bug 2 – bug2_fixed.py
- **Input**: 
  ```python
  [
    {"type": "income", "amount": 1200, "category": "salary"},
    {"type": "expense", "amount": 50, "category": "food"},
    {"type": "expense", "amount": 20, "category": "transport"},
    {"type": "expense", "amount": 80, "category": "food"}
  ]
  ```
- **Expected Output**: `Total spent: 150.0`, `Top category: food -> 130` ✅
- **Actual Output**: `Total spent: 150.0`, `Top category: food -> 130` ✅
- **Status**: FIXED (removed subtraction of income in `total_spent()`, changed `<` to `>` in `top_category()`)

## Bug 3 – bug3_fixed.js
- **Input**: User IDs: [1, 2, 3]
  - ID 1: `{ name: "Ana", address: { city: "Tirana" }, tags: ["data", "sql"] }`
  - ID 2: `{ name: "Ben", tags: ["js"] }` (missing address)
  - ID 3: `null`
- **Expected Output**: 
  ```
  Loaded: Ana from Tirana (2 tags)
  Loaded: Ben from Unknown City (1 tags)
  Loaded: Unknown from Unknown City (0 tags)
  ``` ✅
- **Actual Output**: 
  ```
  Loaded: Ana from Tirana (2 tags)
  Loaded: Ben from Unknown City (1 tags)
  Loaded: Unknown from Unknown City (0 tags)
  ``` ✅
- **Status**: FIXED (added optional chaining `?.` and nullish coalescing `??` operators for safe property access)

## Bug 4 – bug4_fixed.cpp
- **Input**: `data = [10, 20, 30, 40, 50]`, `window = 3`
- **Expected Output**: 
  ```
  20
  30
  40
  ``` ✅
- **Actual Output**: 
  ```
  20
  30
  40
  ``` ✅
- **Status**: FIXED (removed `+1` from loop condition: changed `i <= (int)nums.size() - window + 1` to `i <= n - window`)

## Bug 5 – bug5_fixed.js
- **Input**: 
  ```javascript
  [
    { name: "Email", priority: "high" },
    { name: "Report", priority: "normal" },
    { name: "Backup", priority: "normal" }
  ]
  ```
- **Expected Output**: `Total processed: 3` ✅
- **Actual Output**: `Total processed: 3` ✅
- **Status**: FIXED (moved `queue.shift()` outside the if condition to always remove items, preventing infinite loop)
