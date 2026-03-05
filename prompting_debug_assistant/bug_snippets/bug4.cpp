#include <iostream>
#include <vector>
#include <numeric>
using namespace std;

// Calculates moving averages (contains OFF-BY-ONE bug)
vector<double> movingAverage(const vector<int>& nums, int window) {
    vector<double> result;
    if (window <= 0) return result;
    if ((int)nums.size() < window) return result;

    for (int i = 0; i <= (int)nums.size() - window + 1; i++) {
        // BUG: the loop condition should be:
        // i <= size - window   (without the +1)
        // This version will run one extra iteration -> out-of-bounds access.
        int sum = 0;
        for (int j = i; j < i + window; j++) {
            sum += nums[j]; // out-of-bounds when i is too large
        }
        result.push_back((double)sum / window);
    }
    return result;
}

int main() {
    vector<int> data = {10, 20, 30, 40, 50};
    int window = 3;

    auto ma = movingAverage(data, window);
    cout << "Moving averages:\n";
    for (double x : ma) {
        cout << x << "\n";
    }
    return 0;
}