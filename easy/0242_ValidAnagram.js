/*
242. Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
 
Constraints:
1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

Link: https://leetcode.com/problems/valid-anagram/description/
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Solution with sorting - O(n*log(n))
// Runtime: Beats ~40%
// Memory: Beats: 25.5%
var isAnagram = function(s, t) {
    s = s.split('').sort().join('');
    t = t.split('').sort().join('');

    if(s==t)
        return true
    return false
};

