/*
14. Longest Common Prefix
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Constraints:
1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.

Link: https://leetcode.com/problems/longest-common-prefix/description/
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0)
        return ""
    let shortestString = strs[0]
    for(let i=1; i<strs.length; i++) {
        if(strs[i].length < shortestString.length)
            shortestString = strs[i]
    }

    let commonPrefix = ""
    let pointer = 0
    while(pointer < shortestString.length) {
        for(let i=0; i<strs.length; i++) {
            if(strs[i][pointer] !== shortestString[pointer])
                return commonPrefix
        }
        commonPrefix += shortestString[pointer]
        pointer++
    }

    return commonPrefix
};