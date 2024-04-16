//Problem !
let word = "Javascript Is Best Popular Language !!";
let spliteWord = word.split("").reverse().join("");
console.log(spliteWord);

function reverstring(word) {
  return word.split("").reverse().join("");
}

let reverseWord = reverstring("Popular Language");
console.log(reverseWord); // Output: egaugnaL ralupoP;

// Problem !
let email = "moniruzzaman@gmail.com";
let newIndex = email.indexOf("@");
console.log(email.substring(newIndex + 1)); // Output: gmail.com;

function extraDomain(email) {
  let atIndex = email.indexOf("@");
  return email.substring(atIndex + 1);
}
console.log(extraDomain("Developer@gmail.com")); // Output: gmail.com;

// Problem !
let sentence = "Javascript Problem Solving";
let newSentence = sentence.includes("Javascript");
console.log(newSentence); // Output: true;

function checkCentence(sentence, word) {
  let wordSentence = sentence.includes(word);
  if (wordSentence) {
    return `${word} is present in the sentence`;
  } else {
    return `in not found`;
  }
}
console.log(checkCentence("Javascript Problem Solving", "Javascript")); // Output: Javascript is present in the sentence`

// Problem !
let newText = "Javascript Is One Of The Most Pupolar Programming Laguage";
let split = newText.split(" ").filter((word) => word.length <= 4);
console.log(split); // Output: 'Is', 'One', 'Of', 'The', 'Most';

function getLongWord(sentence, number) {
  let split = sentence.split(" ").filter((word) => word.length === number);
  return split;
}

console.log(
  getLongWord("Javascript Is One Of The Most Pupolar Programming Laguage", 7)
); // Output: 'Pupolar', 'Laguage';

// Problem !
let fruits = "Apple is the best Fruits !";
let newFruits = fruits.split("A").join("");
console.log(newFruits); // Output: pple is the best Fruits !

function removeSentence(sentence, letter) {
  let fruits = sentence.split(letter).join("");
  return fruits;
}
console.log(removeSentence("Apple", "e")); // Output: Appe;

// Problem !
let arrayFruits = [
  "Banana",
  "Coconat",
  "Paineaple",
  "Orange",
  "Banana",
  "Apple",
  "Orange",
  "Apple",
];
console.log(arrayFruits); // Output: 'Banana', 'Coconat', 'Paineaple', 'Orange', 'Banana', 'Apple', 'Orange', 'Apple';

let duplicatRemove = arrayFruits.filter(
  (word, index) => arrayFruits.indexOf(word) === index
);
console.log(duplicatRemove); // Output:'Banana', 'Coconat', 'Paineaple', 'Orange', 'Apple';

//Js Set Method !
function removeItem(arr) {
  return [...new Set(arr)];
}
console.log(removeItem(arrayFruits)); // Output: 'Banana', 'Coconat', 'Paineaple', 'Orange', 'Apple';
