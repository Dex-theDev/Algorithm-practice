// Fibonacci Sequence

/*
Return the nth element of the Fibonacci sequence.
example. fib(4) yields 5

-Calculate the sequence up to the element we're looking for
-Return that element


*/

function fib(n){
    const numbers = [1,1] // create an array and start off the sequence
    for(i = 2; i < n + 1; i++){  //we're starting at 2 because that's the next index of the numbers array
        numbers.push(numbers[i - 2] + numbers[i - 1]) //add two numbers preceding the working index
    }
    return numbers[n]
}

