/**
* @param {number[]} nums
* @return {number[]}
*/
var runningSum = function(nums) {
    var tmp = 0;
    for(var i=1; i<nums.length; i++)
    {
        nums[i] += nums[i-1];
    }
    return nums;
};

var a1 = [1,1,1,1,1];
var a2 = [1,2,3,4];
var a3 = [3,1,2,10,1];

var b1 = runningSum(a1);
var b2 = runningSum(a2);
var b3 = runningSum(a3);


console.log(b1);
console.log(b2);
console.log(b3);