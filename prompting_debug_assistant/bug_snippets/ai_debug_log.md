 ## Bug 1 – bug1.py
**AI Diagnosis**: Because the elif avg >= 80 statement is missing the required colon (:), Python cannot parse the conditional block correctly and raises a SyntaxError: expected ':', preventing the program from running.
**Suggested Fix**: Add the missing colon (:) at the end of the elif statement.  
**Alternative Fixes Tested**: None.  
**Result**: Fix works as expected.  

 ## Bug 2 – bug2.py
**AI Diagnosis**: The code has logic bugs: total_spent() incorrectly subtracts income from “spent,” and top_category() finds the minimum expense category because it uses the wrong initial value and comparison.
**Suggested Fix**: Only sum transactions where type == "expense" in total_spent(), and in top_category() select the maximum category total (e.g., initialize to -inf and use > or simply use max()).
**Alternative Fixes Tested**: None.  
**Result**: Fix works as expected. 

 ## Bug 3 – bug3.py
**AI Diagnosis**: formatUser() assumes user, user.address, and user.tags always exist, so when the mock API returns a user without address (id=2) or null (id=3), it throws a TypeError from accessing properties on undefined/null.
**Suggested Fix**: Add input validation / defensive access (optional chaining + defaults) or skip invalid users before calling formatUser() so missing fields don’t crash the program.
**Alternative Fixes Tested**: None.  
**Result**: Fix works as expected.  

## Bug 4 – bug4.py
**AI Diagnosis**: The outer loop uses an off-by-one bound (<= size - window + 1), causing one extra iteration where the inner loop reads past the end of nums, leading to out-of-bounds access/undefined behavior.
**Suggested Fix**: Change the loop condition to iterate only while i <= size - window (or equivalently i + window <= size) so the last window stays within valid indices.
**Alternative Fixes Tested**: None.  
**Result**: Fix works as expected.  

## Bug 5 – bug5.py
**AI Diagnosis**: The loop becomes infinite because for "high" priority items you continue without removing the item from the queue, so queue[0] never changes and the condition queue.length > 0 stays true forever.
**Suggested Fix**: Remove the processed item in all branches (e.g., queue.shift() before continue, or restructure to always shift() at the top of the loop).
**Alternative Fixes Tested**: None.  
**Result**: Fix works as expected.  
