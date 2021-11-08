//Using the umbrella example from the class slide, see if you can follow the example open() method and create the close() method.

//Solution
const umbrella = {
  color: "pink",
  isOpen: false,
  open: function() {
    if (umbrella.isOpen === true) {
      return "The umbrella is already opened!";
    } else {
      umbrella.isOpen = true;
      return "Julia opens the umbrella!";
    }
   },
  close: function () {
    if (umbrella.isOpen === false) {
      return "The umbrella is now closed!";
    } else {
      return "Julia has closed the umbrella!"
    }
  }
 };
 
 //Create a breakfast object to represent the following menu item:
//The Lumberjack - $9.95
//eggs, sausage, toast, hashbrowns, pancakes

//Solution 
let breakfast = {
   name: 'Lumberjack',
   price: '$9.95',
   ingredients: ['eggs', 'sausage', 'toast', 'hashbrowns', 'pancakes'],
};
console.log(breakfast);

//Using the given object:
//add a printAccountSummary() method that returns the following account message:
//Welcome!
//Your balance is currently $1000 and your interest rate is 1%.

//Solution
const savingsAccount = {
 balance: 1000,
 interestRatePercent: 1,
 deposit: function addMoney(amount) {
   if (amount > 0) {
     savingsAccount.balance += amount;
   }
 },
 withdraw: function removeMoney(amount) {
   var verifyBalance = savingsAccount.balance - amount;
   if (amount > 0 && verifyBalance >= 0) {
     savingsAccount.balance -= amount;
   }
 },
 AccountSummary: function printAccountSummary() {
   return `Welcome!\n Your balance is currently ${savingsAccount.balance} and your interest rate is ${interestRatePercent}%,`
 }
};

//Using the object from exercise 3, answer the following quiz question:
//Which of the following are valid ways to access properties and call methods from the savingsAccount object?

// Solution
/*savingsAccount.balance;// Correct
savingsAccount[balance];// Wrong
savingsAccount[“balance”];// Correct
savingsAccount.”balance”;// Wrong
savingsAccount.withdraw = 50;//Wrong
savingsAccount.removeMoney = 50; Wrong
savingsAccount.withdraw(50); //Correct
savingsAccount.removeMoney(50);*///Correct

//Create an object called facebookProfile. The object should have 3 properties:
//your name
//the number of friends you have, and
//an array of messages you've posted (as strings)
//The object should also have 4 methods:
//postMessage(message) - adds a new message string to the array
//deleteMessage(index) - removes the message corresponding to the index provided
//addFriend() - increases the friend count by 1
//removeFriend() - decreases the friend 

//Solution
const facebookProfile = {
  name: 'Adewole Oluwafemi',
  numberOfFriends: 50,
  messagesPosted: ['Jesus is Lord', 'I love Jesus', 'What God cannot do doesn\'t exist' ],
  newMessage: function postMessage(message) {
        facebookProfile.newMessage.push(message)
  },
  delMessage: function deleteMessage(index) {
     facebookProfile.delMessage.splice(-1, 1)
  },
  newfriend: function addFriend() {
      facebookProfile.numberOfFriends +=1
  },
  delfriend: function removeFriend () {
    facebookProfile.numberOfFriends-=1
  },
};

//Here is an array of donut objects.

/*
Use the forEach() method to loop over the array and print out the following donut summaries using console.log.
Jelly donuts cost $1.22 each
Chocolate donuts cost $2.45 each
Cider donuts cost $1.59 each
Boston Cream donuts cost $5.99 each

* QUIZ REQUIREMENTS
* - Your code should have an array named `donuts`
* - Your `donuts` array should call the `forEach()` method
* - Your `forEach()` loop should output the donut summaries
* - BE CAREFUL ABOUT THE PUNCTUATION, SPACES, AND EXACT WORDS TO BE PRINTED.
*/

const donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
 ];
 //Solution.
 donuts.forEach(function (donut){
   console.log(`${donut.type} costs $${donut.cost} each`);
 });

 