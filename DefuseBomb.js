var decrypt = function(code, k) {
    var decryptedCode = new Array(code.length);
    for(var i=0; i<code.length; i++)
    {
        decryptedCode[i] = replaceX(code, i, k);
    }
    return decryptedCode;
};

const replaceX = (arr, currentIndex, k) => {
    var direction = k/Math.abs(k);
    var tmp = 0;
    while(true)
    {
        currentIndex += direction;
        if(currentIndex >= arr.length)
            currentIndex = 0;
        if(currentIndex < 0)
            currentIndex = arr.length - 1;
        tmp += arr[currentIndex];
        k -= direction;
        if(k==0)
        break;
    }
    return tmp;    
}

var decryptedCode1 = decrypt([5,7,1,4], 3);
console.log(decryptedCode1);

