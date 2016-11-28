// var name = "Jay"

// var talk = function(){
//   name = "Rick";
//   console.log ("my name is " + name);

// }

// talk();

// console.log("global name is " + name);


var greet = function ( isHappy){
var text = "";

if (isHappy) {
    text = "Hello my friend";
  } else {
    text = "Go away";
  }
  var displayText = function(){
  console.log (text);
}
  displayText();
};

greet (true);

