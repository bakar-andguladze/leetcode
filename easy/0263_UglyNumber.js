/*
263. Ugly Number

An ugly number is a positive integer which does not have a prime factor other than 2, 3, and 5.
Given an integer n, return true if n is an ugly number.

Example 1:
Input: n = 6
Output: true
Explanation: 6 = 2 × 3

Example 2:
Input: n = 1
Output: true
Explanation: 1 has no prime factors.

Example 3:
Input: n = 14
Output: false
Explanation: 14 is not ugly since it includes the prime factor 7.
 
Constraints:
-231 <= n <= 231 - 1

Link: https://leetcode.com/problems/ugly-number/description/
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if(n<=0)
        return false
    const factors = [2, 3, 5]
    for(let i=0; i<factors.length; i++) {
        while(n%factors[i] === 0) {
            n /= factors[i]
        }
    }

    return n == 1
};


// Test Cases
console.log(isUgly(6)) // true  // 6 = 2 * 3
console.log(isUgly(1)) // true  // 1 has no prime factors.