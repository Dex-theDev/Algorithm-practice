//Determine whether an input is a power of two
//isPowerOfTwo(8) - true because 2 * 2 * 2 = 8

function isPowerOfTwo(number){
if(number < 1){
    return false
 } //1 will never be divisible by 2, also takes care of odd numbers
 let dividedNumber = number
 while(dividedNumber !== 1){
    if(dividedNumber % 2 !== 0){
        return false
    }
    dividedNumber = dividedNumber / 2
 }
 return true
}

//A cooler way

function isPowerOfTwo2(n){
    return Number.isInteger(Math.log2(n))
}
// This only works if looking for power of two
function isPowerOfTwo3(number){
    if(number < 1){
        return false
    }
    return (number & (number - 1)) === 0
}

//Best Case: number = 13 => O(1)  -- 13 % 2 does not equal to 0 so the iteration runs once
//Worst Case: number = 1,125,899,906,842,624 O(log n)=> a large number that IS a power of two