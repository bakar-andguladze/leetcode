/*
441. Arranging Coins
You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

Given the integer n, return the number of complete rows of the staircase you will build.

Example 1:
Input: n = 5
Output: 2
Explanation: Because the 3rd row is incomplete, we return 2.

Example 2:
Input: n = 8
Output: 3
Explanation: Because the 4th row is incomplete, we return 3.

Constraints:
1 <= n <= 231 - 1

Link: https://leetcode.com/problems/arranging-coins/description/
*/

/**
 * @param {number} n
 * @return {number}
 */
// Approach 1 - Brute Force
// Time Complexity - O(n)
var arrangeCoins = function(n) {
    let rows = 0;
    let coinsInRow = 1
    while(n >= 0) {
        n -= coinsInRow
        rows++
        coinsInRow++
    }
    if(n<0)
        return rows-1
    return rows
};

// approach 2 - Quadratic equation formula:
var arrangeCoins = function(n) {
    return Math.floor((Math.sqrt(8 * n + 1) - 1) / 2)
}