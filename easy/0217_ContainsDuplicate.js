/*
217. Contains Duplicate
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 
Constraints:
1 <= nums.length <= 105
-109 <= nums[i] <= 109

Link: https://leetcode.com/problems/contains-duplicate/description/
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// my initial solution
var containsDuplicate = function(nums) {
    let hashTable = {}
    for(let i=0; i<nums.length; i++) {
        hashTable[nums[i]] = []
    }
    for(let i=0; i<nums.length; i++) {
        hashTable[nums[i]].push(i)
    }
    for(key in hashTable) {
        if(hashTable[key].length > 1)
            return true
    }
    return false
};

// prettier & better solution
var containsDuplicate = function(nums) {
    let set = new Set()
    for(let i=0; i<nums.length; i++) {
        if(set.has(nums[i]))
            return true
        set.add(nums[i])
    }
    return false
};

/*
Runtime: beats 87.82%
Memory: beats 73.66%
*/
