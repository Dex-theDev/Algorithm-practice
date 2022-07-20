//Calculate the factorial of a number
//fact(3) - 3 * 2 * 1 = 6
//fact(5) - 5 * 4 * 3 * 2 * 1 = 120

function fact(number){
    if(number === 1){
        return 1
    } // adds a base case, without this the loop will go on forever
    return number *  fact(number - 1)
}


//Fibonacci with recursion

function fib(n){
    if(n === 0 || n === 1){
        return 1
    }
    return fib(n - 1) + fib(n - 2)
}
// This will result in exponential time complexity (O(2^n)), which isn't good and will crash your browser as n grows
//Here is a better way with memoization

function fibOne(n, memo){
    let result
    if(memo[n]){
        return memo[n]
    }
    if(n === 0 || n === 1){
        result = 1
    } else {
        result = fib(n - 1, memo) + fib(n - 2, memo)
    }
    memo[n] = result
    console.log(memo)
    return result
    
}
console.log(fibOne(5, {}))