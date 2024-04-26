//Problem !
// let domain = "mimoniruzzaman.com";

// let newDomain = domain.indexOf(".");
// let check = domain.slice(+0, newDomain);
// console.log(check);

function domain(text) {
  let domainName = text.indexOf(".");
  let check = text.slice(+0, domainName);
  return check;
}
console.log(domain("mimoniruzaman.com")); // Output: mimoniruzzaman;

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

//Problem !
function text(sentence, word) {
  let anyWord = sentence.toLowerCase().includes(word.toLowerCase());
  if (anyWord) {
    return `${word} Is Present In The Sentence`;
  } else {
    return `Is Not Found `;
  }
}
console.log(text("Hello", "hello"));

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
function word(newText, n = 2) {
  return newText
    .split(" ")
    .filter((word) => word.length === n)
    .join(" ");
}
console.log(word("Hello Javascript Is A Most Pupolar Language!"));

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
function allSentence(sentence, letter) {
  let newSentence = sentence.toLowerCase().split(letter.toLowerCase()).join("");
  return newSentence;
}
console.log(allSentence("Apple", "P")); // Output: ale !

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
