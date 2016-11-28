// - Create a function that takes in the first name and surname, and speaks eg "Howdy, I am Rick Henry"

function hello(firstName,surname)
{
  console.log( "Howdy, I am " + firstName + " " + surname );
}

hello("Rick", "Henry");

// ----------------------------------------------------

// - Create a multiply function, returning the result.

function multiply(a,b)
{
  return a * b;
}

console.log(multiply(3,3));

// ----------------------------------------------------

// - Create a function that takes in an array and returns the first element.

var people = ["John", "Jim", "Jake"];

console.log(people[0]);

// ----------------------------------------------------

// - Create a function that takes in a list of names of any length, and prints them all to screen.

var people = ["John", "Jim", "Jake"];

// console.log(people);

for (var i = 0; i < people.length; i++){
console.log(people[i]);
}

// ----------------------------------------------------

// - Create an array of animal names and a function that adds the animals to a farm array and prints the names to the console.

var animals = ["Porkie", "Goofy", "Hendry"];
var farm = [];

for (var i = 0; i < animals.length; i++){
  farm[i] = animals[i];
}

for (var i = 0; i < farm.length; i++){
  console.log(farm[i]);
}

// ----------------------------------------------------





















