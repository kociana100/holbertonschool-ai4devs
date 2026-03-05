## Bug 1 – bug1.py

**Intended Behavior**: Parse scores and output the average grade as a letter grade (A, B, C, D, or F).
**Issue Type**: Syntax error
**Notes**: Missing colon after `elif avg >= 80` on line 14. Python requires a colon at the end of conditional statements.

## Bug 2 – bug2.py

**Intended Behavior**: Calculate total expenses and find the category with the highest spending.
**Issue Type**: Logic errors (2 bugs)
**Notes**: (1) `total_spent()` subtracts income values instead of ignoring them; (2) `top_category()` uses `<` instead of `>`, finding the category with minimum spending instead of maximum.

## Bug 3 – bug3.js

**Intended Behavior**: Load user profiles from an API and display formatted user information.
**Issue Type**: Runtime exception (insufficient null/undefined checking)
**Notes**: `formatUser()` tries to access `user.address.city` without checking if `address` exists. Some API responses are missing the `address` property, causing a TypeError.

## Bug 4 – bug4.cpp

**Intended Behavior**: Calculate moving averages of a vector with a given window size.
**Issue Type**: Off-by-one error
**Notes**: Loop condition `i <= (int)nums.size() - window + 1` should be `i < (int)nums.size() - window` (or without the `+1`). This causes one extra iteration that accesses out-of-bounds memory.

## Bug 5 – bug5.js

**Intended Behavior**: Process all items in the queue, removing each after processing.
**Issue Type**: Infinite loop (logic error)
**Notes**: High-priority items are processed but never removed from the queue (missing `queue.shift()`), so the same item is processed infinitely.



