// 102. Binary Tree Level Order Traversal
// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
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

