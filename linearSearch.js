//Linear Search Algorithm


/*
Works on ordered and unordered lists. Used to find a specific element in a list
*/

function linearSearch(arr, element){
//visit every element in the array and see if it's the element you're looking for
let index = 0
for(const item of arr){
    if(item == element){
        return index
    }
    index++
}
}


const arr = [5,3,10,-10,33,51]

console.log(linearSearch(arr, 33))

//Time Complexity
//Best Case - The item we want is first (O(1))
//Worst Case - The item we want is last (O(n))
//Avergae Case - Random order, we don't know where the item is (O(n))