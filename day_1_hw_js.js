//Section 1 -----------------------------------------------

//what types are these? Write your answer in a comment beside it.

1;          // number
"cat";      // String
true;       // bollean
[];         // Array
{};         // Object
1.1;        // number
undefined;  // undefiend

//Section 2

// what is the truthy/falsiness values of the following
// write your answer in a comment beside it
// you can use an if to test this...
1;          //  true
"cat";      //  true
true;       //  true
NaN;        //  false
[];         //  true
{};         //  true
undefined;  //  undefiend
"";         //  undefiend
0;          //  undefined


//Section 3 -------------------------------------------

//Using examples that are different from above...

//3.1 Assign a variable that is a number

var myNumber = 1.0;

//3.2 Assign a variable that is a string

var myString = "I am a String";

//3.3 Assign a variable that is a boolean

var myBool = true;

//3.4 Assign a variable that is an object

var myCar {
  colour: "blue",
  make: "subaru",
  model: "WRX",
  maxspeed: 200.0
}

//Section 4 ---------------------------------------------
//4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false

var myBool = false;

if (myBool === true){
    console.log("Hello")
  } else {
    console.log("bye")  
  } 

//Section 5 ---------------------------------------------
var animals = ["raccoon","hedgehog","mouse","gerbil"];

//5.1. Assign the first element to a variable

var first = animals[0];

//5.2. Assign the last element to a variable

var last = animals[animals.length - 1];

//5.3. Assign the length of an array to a variable

var len = animals.length;

//5.4. Add an item to the end of the array

animals.push("Pig");

//5.5. Add an item to the start of the array

animals.unshift("Horse");

//5.6. Assign the index of hedgehog to a variable

var hedgehog = animals[1];

//Section 6 ------------------------------------------------

//6.1 Create an array of 5 vegetables

var myArray = ["Carrot", "Turnip", "Potatoe", "Parsnip", "Mushroom"];

//6.2 Loop over the array and write to the console using a "while"

var x = 0;

while (x < myArray.length) {
  console.log(myArray[x]);
  x++;
}

//6.3 Loop again using a "for" with a counter

for (var key in myArray){
  console.log(key + "=" + myArray[key]);
}

//6.4 Loop again using a "for if"

for (var i = 0; i < myArray.length; i++){
  console.log(myArray[i]);
}

//Section 7 -----------------------------------------------
var accounts = [
  { name: 'jay',
    amount: 125.50,
    type: 'personal'
  },
  { name: 'val',
    amount: 55125.10,
    type: 'business'
  },
  { name: 'marc',
    amount: 400.00,
    type: 'personal'
  },
  { name: 'keith',
    amount: 220.25,
    type: 'business'
  },
  { name: 'rick',
    amount: 1.00,
    type: 'personal'
  },
];
//7.1 Calculate the total cash in accounts

var total = 0
for (var key in accounts)
{
  total += accounts[key].amount;
}
console.log(total);

//7.2 Find the amount of money in the account with the largest balance

var max = 0;
for (var key in accounts)
{
  if (max < accounts[key].amount)
  {
    max = accounts[key].amount;
  }
}
console.log(max);

//7.3 Find the name of the account with the smallest balance

var min = 99999999;
var poorest = "";
for (var key in accounts)
{
  if (min > accounts[key].amount)
  {
    min = accounts[key].amount;
    poorest = accounts[key].name;
  }
}
console.log(poorest);

//7.4 Calculate the average bank account value

var total = 0;
var average = 0;
var numAccounts = accounts.length;
for (var key in accounts)
{
  total += accounts[key].amount;
}
average = total/numAccounts;
console.log(average);

//7.5 Find the value of marcs bank account

marcsAccount = 0
for (var key in accounts)
{
  if (accounts[key].name === "marc")
  {
    marcsAccount = accounts[key].amount;
  }
}
console.log(marcsAccount);

//7.6 Find the holder of the largest bank account

var max = 0;
var richest = "";
for (var key in accounts)
{
  if (max < accounts[key].amount)
  {
    max = accounts[key].amount;
    richest = accounts[key].name;
  }
}
console.log(richest);

//7.7 Calculate the total cash in business accounts

var total = 0;
for (var key in accounts)
{
  if (accounts[key].type === 'business')
  {
    total += accounts[key].amount;
  }
}
console.log(total);

//7.8 Find the largest personal account owner

var max = 0;
for (var key in accounts)
{
  if ((max < accounts[key].amount) && 
      (accounts[key].type === 'personal'))
  {
    max = accounts[key].amount;
  }
}
console.log(max);

//Section 8 ---------------------------------------------
//Assign a variable myPerson to a hash, giving them a name, height, favourite food and an eat method

// myPerson object
var myPerson = {
  name:   "Bobby",
  height:  1.8,
  favourite_food: "stovies",
  eat: function(){return this.favourite_food;}
};

console.log(myPerson.eat());
