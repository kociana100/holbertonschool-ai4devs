## Bug Report – bug1.py
- **Summary**: Syntax error in grade calculation script.
- **Root Cause**: Missing colon after `elif avg >= 80` caused a parse failure.
- **Resolution**: Added the missing colon so the conditional compiles correctly.
- **Lesson Learned**: Pay attention to basic syntax; even small typos break execution.

## Bug Report – bug2.py
- **Summary**: Incorrect expense calculation and category selection.
- **Root Cause**: `total_spent` subtracts income values instead of ignoring them, and `top_category` used `<` when it should have used `>`.
- **Resolution**: Adjusted `total_spent` to only sum expenses and fixed comparison operator to find the maximum.
- **Lesson Learned**: Double–check logic branches and comparison signs when aggregating data.

## Bug Report – bug3.js
- **Summary**: Runtime exception when formatting user profiles with missing fields.
- **Root Cause**: `formatUser` accessed `user.address.city` without null/undefined checks; some API responses lacked `address`.
- **Resolution**: Added optional chaining/nullish coalescing and default values to safely handle missing properties.
- **Lesson Learned**: Validate external data before dereferencing; robust handling prevents crashes.

## Bug Report – bug4.cpp
- **Summary**: Off-by-one error in moving average calculation leads to out-of-bounds access.
- **Root Cause**: Loop condition `i <= size - window + 1` iterated one step too far.
- **Resolution**: Corrected condition to `i <= size - window` (or equivalent) to prevent extra iteration.
- **Lesson Learned**: Carefully compute loop bounds, especially when subtracting for windowed operations.

## Bug Report – bug5.js
- **Summary**: Infinite loop in queue processor when encountering high-priority items.
- **Root Cause**: High-priority items were processed but never removed, causing `while` to never terminate.
- **Resolution**: Always shift the queue before handling items so that each item is eventually removed.
- **Lesson Learned**: Ensure loops make forward progress by modifying the condition variable regardless of branch outcomes.
