// optimized time and space complexity
const Fibonacci = (n) => {
    if(n < 0)
        return -1;
    if(n == 0)
        return 0;
    if(n < 3)
        return 1;

    let result = 0;
    let a = 1, b = 1;

    for(let i = 3; i <= n; i++)
    {
        result = a + b;
        a = b;
        b = result;
    }
    return result; 
}

console.log(Fibonacci(100));

// while loop - better space complexity 
const Fibonacci2 = (n) => {
    if(n < 0)
        return -1;
    if(n == 0)
        return 0;
    if(n < 3)
        return 1;

    let result = 0;
    let a = 1, b = 1;

    while(n >= 3)
    {
        result = a + b;
        a = b;
        b = result;
        n--;
    }

    return result; 
}

console.log(Fibonacci2(6));


// Memoization 
const FibonacciArray = (n) => {
    if(n < 1) 
        return 0;
    if(n < 3) 
        return 1;
    
    let arr = new Array(n+1);
    arr[0] = 0;
    arr[1] = 1;
    arr[2] = 1;

    for(let i = 3; i < n+1; i++)
    {
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[n];
}

console.log(FibonacciArray(10));

