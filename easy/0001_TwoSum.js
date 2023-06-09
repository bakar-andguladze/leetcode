/*
1. Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
 
Constraints:
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

Link:
https://leetcode.com/problems/two-sum/description/
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Time Complexity - O(n*n)
// Space Complexity - constant
var twoSumBruteForce = function(nums, target) {
    for(let i=0; i<nums.length; i++) {
        for(let j=i+1; j<nums.length; j++) {
            if(nums[i] + nums[j] == target)
                return [i, j]
        }
    }
    return 0
};

// Time Complexity - O(n*log(n))
// Space Complexity - O(n)
var twoSumHashTable = function(nums, target) {
    let map = {}

    for(let i=0; i<nums.length; i++) {
        let num = nums[i]
        let potentialMatch = target - num
        if (map[potentialMatch] >= 0) {
            return [i, map[potentialMatch]]
        } 
        else {
            map[num] = i
            console.log(map[num])
        }
    }
}

const nums = [2, 5, 19, 4] 
const target = 7

const result1 = twoSumBruteForce(nums, target)
const result2 = twoSumHashTable(nums, target)

console.log(`result1 = ${result1} \n result2 = ${result2}`)