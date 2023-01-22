/*
20. Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type.
 

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false
 
Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

Link: https://leetcode.com/problems/valid-parentheses/
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    if(s.length % 2 === 1)
        return false

    stack.push(s[0])
    let i = 1
    while(i < s.length) {
        if(!isOpener(s[i])) {
            if(isLegitPair(stack[stack.length - 1], s[i])) {
                stack.pop()
            }
            else 
                return false
        }
        else 
            stack.push(s[i])
        i++
    }
    return stack.length === 0
};

var isLegitPair = function(c1, c2) {
    return c1 === '(' && c2 === ')' || 
            c1 === '{' && c2 === '}' ||
            c1 === '[' && c2 === ']'
}

var isOpener = function(c) {
    return c === '{' || c === '[' || c === '('
}

let sample = "([}}])"
console.log(isValid(sample))

