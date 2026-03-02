## Bug 1 – bug1.py

**Intended Behavior**: Function should print a greeting using the provided name.
**Issue Type**: Syntax error
**Notes**: Missing colon after function definition causes a syntax error; the file currently fails to run.ls

## Bug 2 – bug2.py

**Intended Behavior**: Calculate and print the average of the numbers in the list.
**Issue Type**: Logic error
**Notes**: The divisor is `len(nums) - 1` instead of `len(nums)`, which produces an incorrect result.

## Bug 3 – bug3.js

**Intended Behavior**: Log the uppercase version of `user.name` if a user object exists.
**Issue Type**: Runtime error
**Notes**: `user` is initialized to `null`, so accessing `user.name` throws a TypeError.

## Bug 4 – bug4.cpp

**Intended Behavior**: Print all elements of the `arr` array.
**Issue Type**: Logic / off-by-one error
**Notes**: Loop uses `i <= n` instead of `i < n`, causing an out-of-bounds access when `i == 4`.

## Bug 5 – bug5.js

**Intended Behavior**: Iterate from 0 to 4 and log each number once.
**Issue Type**: Logic/infinite loop
**Notes**: Loop decrements `i` (`i--`) while the condition `i < 5` is always true for negative numbers, causing an infinite loop.



