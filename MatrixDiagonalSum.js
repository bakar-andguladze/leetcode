var diagonalSum = function(mat) {
    var sum = 0;
    for(var i=0; i<mat.length; i++)
    {
        sum += mat[i][i];
        sum += mat[i][mat.length - 1 - i];
    }
    if(mat.length%2 == 1)
    {   
        sum -= mat[Math.floor(mat.length/2)][Math.floor(mat.length/2)];
    }
    return sum;
};

var mat = [[1,2,3],
           [4,5,6],
           [7,8,9]];

var mat2 = [[1,1,1,1],
            [1,1,1,1],
            [1,1,1,1],
            [1,1,1,1]]


console.log(diagonalSum(mat));
console.log(diagonalSum(mat2));
