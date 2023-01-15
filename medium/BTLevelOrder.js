/*
102. Binary Tree Level Order Traversal

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Example 2:
Input: root = [1]
Output: [[1]]

Example 3:
Input: root = []
Output: []

Constraints:
The number of nodes in the tree is in the range [0, 2000].
-1000 <= Node.val <= 1000

Link: https://leetcode.com/problems/binary-tree-level-order-traversal/
*/

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    var output = [[]];
    if(root.length <= 1)
    {
        if(root.length == 1)
        {
            output[0] = root;
        }
        return output;
    }

    var level = 0;
    var levelWeight = 1;
    var currentIndex = 0;

    while(currentIndex < root.length)
    {
        output[level] = [];
        for(var i=currentIndex; i<currentIndex+levelWeight; i++)
        {
            if(root[i] != null && root[i] != undefined)
                output[level].push(root[i]);
        }
        if(currentIndex+levelWeight >= root.length)
        {
            return output;
        }
        currentIndex += levelWeight;
        level++;
        levelWeight *= 2;
    }
};

root = [3,9,20,null,null,15,7]
console.log(levelOrder(root));

