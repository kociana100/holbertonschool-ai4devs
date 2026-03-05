# Monthly expense summary (contains LOGICAL ERRORS)
def total_spent(transactions):
    total = 0.0
    for t in transactions:
        # transaction format: {"type": "...", "amount": number}
        if t["type"] == "expense":
            total += t["amount"]
        else:
            total -= t["amount"]  # BUG: income should increase balance, not reduce spending total
    return total

def top_category(transactions):
    per_cat = {}
    for t in transactions:
        if t["type"] == "expense":
            cat = t["category"]
            per_cat[cat] = per_cat.get(cat, 0) + t["amount"]

    # BUG: chooses the smallest instead of largest
    best_cat = None
    best_value = float("inf")
    for cat, value in per_cat.items():
        if value < best_value:     # should be ">" to find max
            best_value = value
            best_cat = cat
    return best_cat, best_value

data = [
    {"type": "income", "amount": 1200, "category": "salary"},
    {"type": "expense", "amount": 50, "category": "food"},
    {"type": "expense", "amount": 20, "category": "transport"},
    {"type": "expense", "amount": 80, "category": "food"},
]

print("Total spent:", total_spent(data))
cat, val = top_category(data)
print("Top category:", cat, "->", val)