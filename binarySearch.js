//Binary Search

//The list MUST be ordered for this algorithm to work. 

//After sorting the list, find the item in the middle. Check if that's the item you're looking for, if not, take the half that the number must be on, either on the lower half or the larger half. Then repeat until the number is found. 

function findElement(sortedArr,element){
    let startIndex = 0
    let endIndex = sortedArr.length - 1
 if(sortedArr.indexOf(element) == -1){
    return -1
 }

while(startIndex <= endIndex){
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2)
  
    if(element === sortedArr[middleIndex]){
        return middleIndex
    }

    if(sortedArr[middleIndex] < element){
        startIndex = middleIndex + 1
    } else {
        endIndex = middleIndex - 1
    }
  }
}



//Time Complexity
//Best Case = The number we want is right in the middle of the array (O(1))
//Worst Case = The numbers is at the beginning or end (O(log n))
//Average Case = The number could be anywhere (O(log n))


const arr = [2,5]

//console.log(findElement(arr, 3))




//Taking in 2 strings, return the indices of the letters that match
//str1 = 'hello' str2 = 'help'  output = [0,1,2] -- str1 = "cow" str2 = "cat" output = [0]
//i should iterate through the shorter string to see if characters match
//return the answer in an array


function getMatch(str1,str2){
//find the iterator string
let testString
if(str1.length < str2.length){
    testString = str1
} else {
    testString = str2
}
//create an empty array to store values
const result = []

//iterate through the testString and compare values
for(i = 0; i < testString.length; i++){
    //if the current element matches the current element, then push the index into array
    if(str1[i] === str2[i]){
        result.push(i)
    }
   
}

return result
}

//console.log(getMatch("hello","help"))

//Get contains
//given 2 strings, return an array of the indices in the second string that appear in the first
//str1 = 'hello' str2 = 'legos' output = [0,1,3] -- str1 = 'candy' str2 = 'sugar' output = [3]
//create an empty array that will store the result
//create a hashmap with all the letters that appear once in the first string
//iterate through the second string and see if the current letter appears in the hashmap
//if it does, push the current index into the result array
//return the array


//Get contains two
//If the indices match, do not return the index
//str1 = 'hello' str2 = 'legos' output = [0,3], str1 = 'driver' str2 = 'pringle' output = [6]


function getContains(str1, str2){
    //create an empty array for the result 
    let result = []

    //create an empty object to store keys
    let letters = {}

    //iterate through str1 and store every unique key in it
    for(i = 0; i < str1.length; i++){
        if(!letters[str1[i]]){
            letters[str1[i]] = true
        }
    }
    
    //iterate through second string and check if letters exist
    for(i = 0; i < str2.length; i++){
        if(letters[str2[i]] && str1[i] !== str2[i]){
            result.push(i)
        }
    }
    return result
}
console.log(getContains('driver', 'pringle'))


//Time complexity? - Worst Case = string 1 has a million characters - O(26)
// Best Case = String 1 is empty O(1)
