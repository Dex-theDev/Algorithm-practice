// Take an array of numbers as input and return the minimum value in array
function minValue(array){
    return Math.min(...array) 
}
console.log(minValue([2,4,5,1,3,1]))

function minValue2(array){
    let currentMin = array[0]
    for(const num of array){
        if(num < currentMin){
            currentMin = num
        }
    }
    return currentMin
}

//Best case - [1,2,3]
//Worst case - [3,2,1]
//Average case - [2,1,3]
//Big O  - O(n)

//Take a number as input and return 'true' if its an even number, return 'false' if its odd 
function isEven(n){
    return !(n % 2)
}
console.log(isEven(-8))

//Big O - O(1)