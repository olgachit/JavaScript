//Write a function called even(), which receives an array containing numbers as a parameter. The function returns a second (usually smaller) array which has the even numbers of the original array. The function must not make changes to the original table. (3p)
// Example: In a three-item array, there are items 2, 7 and 4. The function returns a two-item array with items 2 and 4.
// Print both the original array and the new array to the console in the main program after you have called the function.

function even(arr) {
    const evenNumbers=[];

    for (let i=0;i<arr.length; i++) {
        if (arr[i]%2===0) {
            evenNumbers.push(arr[i])
        }
    } return evenNumbers
}

const originalArray=[2,7,4,9,10,3];
const evenArray=even(originalArray)

console.log(`Original Array: ${originalArray}`)
console.log(`Even Array: ${evenArray}`)