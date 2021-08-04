// Edit your script here
//1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
var numArray = [3, 6, 997, 3, 1, 46, 7];
var letters = ["sgegdfg", "dsf", "sdfsdfs", "s", "efeg", "fiver"];
var people = [
  { name: "Angelina Jolie", member: true },
  { name: "Eric Jones", member: false },
  { name: "Paris Hilton", member: true },
  { name: "Kayne West", member: false },
  { name: "Bob Ziroll", member: true }
];

var moviePeople = [
  { name: "Angelina Jolie", age: 80 },
  { name: "Eric Jones", age: 2 },
  { name: "Paris Hilton", age: 5 },
  { name: "Kayne West", age: 16 },
  { name: "Bob Ziroll", age: 100 }
];
function fiveAndGreaterOnly(arr) {
  return arr >= 5;
}
var nums = numArray.filter(fiveAndGreaterOnly)
console.log(nums);
console.log("<br>");

//2) Given an array of numbers, return a new array that only includes the even numbers.

function evenOnly(arr) {
  return arr % 2 == 0;
}
var evenNums = numArray.filter(evenOnly)
console.log(evenNums);
console.log("<br>");

//3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
function longerThanFive(arr) {
  return arr.length <= 5;
}
var shortWords = letters.filter(longerThanFive)
console.log(shortWords)
console.log("<br>");

//4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

function inClub(obj) {
  return obj.member;
}
var members = people.filter(inClub)
console.log(members)
console.log("<br>");

//5) Make a filtered list of all the people who are old enough to see The Matrix (older than 18)

function watchMovie(obj) {
  return obj.age >= 18;
}
var canSee = moviePeople.filter(watchMovie)
console.log(canSee)
console.log("<br>");