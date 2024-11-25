/*
1480. Running Sum of 1d Array

Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums.

Example 1:
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

Example 2:
Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

Example 3:
Input: nums = [3,1,2,10,1] 
Output: [3,4,6,16,17]

Constraints:
1 <= nums.length <= 1000
-10^6 <= nums[i] <= 10^6 

Link: https://leetcode.com/problems/running-sum-of-1d-array/description/
*/

/**
* @param {number[]} nums
* @return {number[]}
*/
var runningSum1 = function(nums) {
    var tmp = 0;
    for(var i=1; i<nums.length; i++)
    {
        nums[i] += nums[i-1];
    }
    return nums;
};

var runningSum2 = function(nums) {
    let sumBefore = nums[0]
    for(var i=1; i<nums.length; i++)
    {
        nums[i] += sumBefore;
        sumBefore = nums[i]
    }
    return nums;
};

var a1 = [1,1,1,1,1];
var a2 = [1,2,3,4];
var a3 = [3,1,2,10,1];

var b1 = runningSum1(a1);
var b2 = runningSum1(a2);
var b3 = runningSum1(a3);


console.log(b1);
console.log(b2);
console.log(b3);