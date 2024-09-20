#include <iostream>
#include <vector>
#include <unordered_map>

class ContainsDuplicate {
public:
    template<typename K, typename V>
    void print_map(std::unordered_map<K, V> const &m)
    {
        for (auto const &pair: m) {
            std::cout << "{" << pair.first << ": " << pair.second << "}\n";
        }
    }
    
    int numIdenticalPairs(std::vector<int>& nums) {
        // int counter = 0;

        // for(int i = 0; i < nums.size(); i++){
        //     for(int j = i + 1; j < nums.size(); j++){
        //         if(nums[i] == nums[j]){
        //             counter++;
        //         }
        //     }
        // }

        // return counter;

        std::unordered_map<int , int> values;
        int result = 0;
        for(int i : nums){
            result += values[i];
            values[i]++;
        }

        print_map(values);
        
        return result;
    }
};