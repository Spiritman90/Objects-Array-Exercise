//Use the MDN Documentation to determine which of these methods would be best for reversing elements in this array:

//Solution 
const reverseMe = ["h", "e", "l", "l", "o"];
console.log(reverseMe.reverse());
//reverse() is the best method.

//What would be the best array method to sort the elements in this array:
const sortMe = [2, 1, 10, 7, 6];
console.log(sortMe.sort);
//sort() is the best method to sort the array.

//Consider the following array, removeFirstElement:
var removeFirstElement = ["a", "b", "c"];
//Let's say that you want to modify (i.e., mutate) removeFirstElement by removing the first element within it. Which method(s) could you use?
console.log(removeFirstElement.shift()); //The shift() method would be used to remove the first element
//Also, the splice() method can be used.
var removeFirstElement = ["a", "b", "c"];
var removedElement = removeFirstElement.splice(0, 1)
console.log(removedElement);


//What method would be best for changing this array into a string?
const turnMeIntoAString = ["U", "d", "a", "c", "i", "t", "y"];
console.log(turnMeIntoAString.join());// The join() method 

//Use the array's forEach() method to loop over the following array and add 100 to each of the values if the value is divisible by 3.

const test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];

//Solution
test.forEach(function(test){
  if (test % 3 === 0) {
   console.log(`${test + 100}`);
  } else {
    console.log(`${test}`);
  }
})

//Use the map() method to take the array of bill amounts shown below, and create a second array of numbers called totals that shows the bill amounts with a 15% tip added.

const bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];
 const total = bills.map(function(bills){
      bills = (bills * 0.15 ) + bills;
      return Number(bills.toFixed(2));
})

//Use a nested for loop to take the numbers array below and replace all of the values that are divisible by 2 (even numbers) with the string "even" and all other numbers with the string "odd".

const numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];
for (let i = 0;  i < numbers.length;  i++) {
 for (let j = 0; j < numbers[i].length; j++) {
    if (numbers[i][j] % 2 === 0) {
      console.log('even');
    } else {
      console.log(`odd`);
    }
 } 
}
