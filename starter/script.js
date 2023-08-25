// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {

  // Option for password length and password length validation
  let passwordLength = parseInt(prompt("Please enter the desired password length (Between 10 and 64 characters): "))

  if (isNaN(passwordLength) || passwordLength < 10 || passwordLength > 64) {
    alert("Please enter a valid password length between 10 and 64 characters.");
    return null;
  }

  // Option for character types and character type validation
  let lowercaseCharacter = confirm("Do you wish to include lowercase characters?");
  let uppercaseCharacter = confirm("Do you wish to include uppercase characters?");
  let numericCharacter = confirm("Do you wish to include numeric characters?");
  let specialCharacter = confirm("Do you wish to include special characters?");

  if(!lowercaseCharacter && !uppercaseCharacter && !numericCharacter && !specialCharacter) {
    alert("Please select at least one character type for your password (っ °Д °;)っ")
    return null;
  }

  // Store choices in an object
  let passwordOptions = {
    length: passwordLength,
    lowercase: lowercaseCharacter,
    uppercase: uppercaseCharacter,
    numeric: numericCharacter,
    special: specialCharacter
  }

  return passwordOptions;

}

// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
