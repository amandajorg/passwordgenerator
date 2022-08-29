// Get references to the #generate element
// this targets the button 
var generateBtn = document.querySelector("#generate"); 

// Assignment code here
var lengthOfCharacters = []; 
var choiceArray = [];

var upperCaseLetterslist = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCaseLetterlist = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numericlist = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbolslist = ['*', '$', '#', '@', '%']


// Define the function to generate the password
function generatePassword() {
// Prompt the user for the password criteria
// Length between 8 < 128
var userInput = window.prompt("How long do you want your password to be?")

var length = parseInt("userInput")

if (length < 8 || length > 128){
  window.alert("Password length must be between 8 and 128 characters long.")
  return
}

/* if (isNaN(length)) {
  window.alert("This is not a number.")
  return */
} 
// Lowercase, uppercase, special characters, numbers
var numeric = window.confirm("Would you like to include numbers?")
var upperCaseLetters = window.confirm("Would you like to include uppercase letters?")
var lowerCaseLetters = window.confirm("Would you like to include lowercase letters?")
var symbols = window.confirm("Would you like to include symbols?")

// Validate the input
// Generate password based on criteria
// Display the password



// Write password to the #password input
// We are naming the password "writePassword", and storing it into the var password variable.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
