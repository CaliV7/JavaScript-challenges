const userName = prompt("What's your name?");

console.log(userName);

//  We create the variable pass and we assign the result of prompt on it
const pass = prompt("What is the magic password?");

// We compare the value assigned to pass to the string "secret"
if (pass === "secret") {
    // If the pass matches the string we print Welcome
    console.log("Welcome! 👋 ");
} else {
    // If the pass doesn't match the string we print Welcome
    console.log("Wrong password! ❌");    
}

const age = prompt("How old are you?");
console.log(typeof(age));
// String

const ageNumber = parseInt(age);
console.log(typeof(ageNumber));
// Number

const user = prompt("What's your name?");

if(user === "Paul"){
  console.log("Hello, Paul!");
}else if(user === "John"){
  console.log("Hello, John!");
}else if(user === "Ringo"){ 
  console.log("Hello, Ringo!");
}else{
  console.log("Sorry, not today...");
}

const userAge = prompt("How old are you?");

if (userAge < 3) {
    console.log("Hello, Baby 🍼!");
}
else if (userAge < 18) {
    console.log("Hi! 👋");
}
else if (userAge > 100) {
    console.log("Greetings 🖖")
}
else {
    console.log("Wow... 😲")    
}

const userName = prompt("What's your name?");

if(userName === "Bob"){
  const userAge = prompt("What's your age?");
  if(parseInt(userAge) === 30){
    console.log("Welcome");
  }
  else{
    console.log("Go Away!");
  }
}
else{
  console.log("Go Away!");
}

const today = new Date().getDay();
console.log(today);

switch(today){
  case 0:
   console.log("it's Sunday");
   break
  case 1:
    console.log("it's Monday");
    break;
  case 2:
    console.log("it's Tuesday");
    break;
  case 3:
    console.log("it's Wednesday");
    break;
  case 4:
    console.log("it's Thursday");
    break;
  case 5:
    console.log("it's Friday");
    break;
  case 6:
    console.log("it's Saturday");
    break;
  default:
    console.log("Invalid date");
    break;
}
