
//Primality test
/*

Determine whether an input is a prime number

isPrime(9) false
isPrime(5) true

*/
function isPrime(n){
  for(i = 2; i < n; i++){ //start loop at 2, because every number is divisable by 1, end at n because everynumber is divisible by itself
    if(n % i === 0){
        console.log('running')
        return false
    }
  }
  console.log('running2')
  return true
}

//Big O = Worst Case  -> n = 25,277 => O(n)   Best Case -> n = 1, n = 2 => O(1)

//Improved version

/*
5 is a prime, divisible by itself and 1
9 is not a prime, divisible by itself, 1 and 3

-Every number thats NOT a prime has a product that consists of two factors, a and b, that are both neither 1 nor the number itself. 

9 = 3 * 3

At least one factor is smaller or equal to the square root of the number

sqrt(9) = 3 ===> 9 = 3 * 3 -- both factors are equal to the square root


*/

function improvedIsPrime(n){
    for(i = 2; i < Math.sqrt(n); i++){
        if(n % i === 0){
            return false
        }
        return true
    }
}
//Big O = O(sqrt(n))

//Even Better way -- this factors in negative numbers

function betterPrime(n){
    if(n <= 1) return false // takes care of 1 and negative numbers
    if(n % 2 === 0 && n > 2) return false // takes care of all even numbers greater than 2 
    const square = Math.sqrt(n) //stores the square root in a variable for faster looping
    for(i = 3; i <= square; i += 2){
        if(num % i === 0){
            return false
        }
    }
    return true
}
function betterPrime2(num) {
    for(let i = 2; i <= Math.sqrt(num); i++) {
      if(num % i === 0) {
        return false;
      }
    }
    return num > 1
  }
