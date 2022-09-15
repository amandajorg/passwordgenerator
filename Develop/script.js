// Step1:
// Get references to the #generate element. This targets the button.
var generateBtn = document.querySelector("#generate"); 

var passwordLength = 8; 
var choiceArray = [];

// array of options
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var symbols = ['*', '$', '#', '@', '%']

var randomizer = []

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input. We are naming the password function "writePassword", and storing it into the var password variable.
function writePassword() {
  var userInputPrompts = prompts();
  var passwordText = document.querySelector("#password");
  
  if (userInputPrompts) {
  var generatedPassword = generatePassword();
  passwordText.value = generatedPassword;
} else {
  passwordText.value = "";
}
}

// Define the function called generatePassword
function generatePassword(){
 var password = "";
// integer starts at 0, must be greater than 8, increase every 1
 for(var i = 0; i < passwordLength; i++) {
  var randomPassword = Math.floor(Math.random() * choiceArray.length);
  password = password + choiceArray[randomPassword];
}
return password;
}

// criteria prompts
function prompts() {
  choiceArray = [];

//  Step 2: Validate the user input.
  // parseInt is a method that turns any string into a number
  characterLength = parseInt(prompt('How long do you want your password to be? Note: It must be between 8 and 128 characters long.'));
//Check to make sure the password meets the criteria. 1) Needs to be a number. 2) Needs to be greater than 8. 3) Needs to be less than 128.
  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    window.alert("Incorrect input. Please try again.");
    return false;
  }
  if (window.confirm('Would you like to include numbers?')) {
    choiceArray = choiceArray.concat(numbers);
  }

  if (window.confirm('Would you like to include lowercase letters?')) {
    choiceArray = choiceArray.concat(lowerCaseLetters);
  }

  if (window.confirm('Would you like to include uppercase letters?')) {
    choiceArray = choiceArray.concat(upperCaseLetters);
  }

  if (window.confirm('Would you like to include symbols?')) {
    choiceArray = choiceArray.concat(symbols);
  }
  // // if the list is empty, meaning the user doesn't choose anything, then push/add/default to lowercase and uppercase letters.
  // if (choiceArray.Length === 0){
  //   choiceArray.concat(lowerCaseLetters, upperCaseLetters);
  // }
// Step 3:
// Display the generated password to the page.
  return true;
}