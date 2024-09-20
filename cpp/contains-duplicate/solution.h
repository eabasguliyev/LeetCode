#ifndef CONTAINS_DUPLICATE_H
#define CONTAINS_DUPLICATE_H
#include <vector>
#include <unordered_map>

class ContainsDuplicate{
    public:
     template<typename K, typename V>
    void print_map(std::unordered_map<K, V> const &m);
    
    int numIdenticalPairs(std::vector<int>& nums);
};

#endif