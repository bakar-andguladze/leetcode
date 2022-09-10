/*
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

Constraints:
    1 <= n <= 45


Link: 
https://leetcode.com/problems/climbing-stairs/
*/

/**
 * @param {number} n
 * @return {number}
*/
var climbStairs = function(n) {
    return fibonacci(n+1);
};

var fibonacci = function(n) {
    let f = Math.sqrt(5);
    let Phi = (1+f)/2;
    
    return Math.floor((Math.pow(Phi, n) - Math.pow(1-Phi, n)) / f);
};

console.log(climbStairs(10));