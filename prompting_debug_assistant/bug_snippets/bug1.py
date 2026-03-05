# Simple CLI "grade reporter" (contains a SYNTAX ERROR)
def parse_scores(text):
    parts = text.split(",")
    scores = []
    for p in parts:
        p = p.strip()
        if p:
            scores.append(int(p))
    return scores

def letter_grade(avg):
    if avg >= 90:
        return "A"
    elif avg >= 80
        return "B"   # <-- SYNTAX ERROR: missing colon after elif
    elif avg >= 70:
        return "C"
    elif avg >= 60:
        return "D"
    else:
        return "F"

raw = "90, 78, 85, 92"
scores = parse_scores(raw)
avg = sum(scores) / len(scores)
print("Scores:", scores)
print("Average:", avg)
print("Letter:", letter_grade(avg))