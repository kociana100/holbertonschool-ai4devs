#include <iostream>
#include <vector>
using namespace std;

// Calculates moving averages (FIXED)
vector<double> movingAverage(const vector<int>& nums, int window) {
    vector<double> result;
    if (window <= 0) return result;
    if ((int)nums.size() < window) return result;

    int n = (int)nums.size();
    for (int i = 0; i <= n - window; i++) {   // FIX: removed the +1
        int sum = 0;
        for (int j = i; j < i + window; j++) {
            sum += nums[j];
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