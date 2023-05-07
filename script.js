// Assignment Code
//Variable capLetters is an array of all of the capital letters to be chosen for the password. 
var capLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//Variable lowLetters is an array of all of the lowercase letters to be chosen for the password.
var lowLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Variable numberChar is an array of all of the numbers to be chosen for the password. 
var numberChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

//Variable specialChar is an array of all of the special charactors to be chosen for the password. 
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', ';', ':', '"', '', ',', '<', '.', '>', '/', '?'];

//Variable userSelect is left an empty array to store the options of lowercase, uppercase, special, and numeric characters. 
let userSelect = [];


//The function gerneratePassword is the start of the various prompts that will become the randomly generated password. 
function generatePassword(){

//This prompt ask how many characters the user would like the password to be. 
howManyChars =  parseInt(
  prompt('How many charactors would you like the pasword to be?'),
  10
);

//This IF statement uses the howManyChars variable to determine the length of the password. When the howManyChars < 8 OR howManyChars > 128 the prompt will return the user to choose a number between those variables. 
if (howManyChars < 8 || howManyChars > 128) {
  alert( 'Password must be between 8-128 characters, please select between those values.');
  return null;
}

//This IF statement determines that if all options of hasSpecChars AND hasLowerLetters AND hasUpperLetters AND hasNumbers are not selected i.e. false, than the prompt will return must make one selection. 
if( 
  hasSpecChars === false && hasLowerLetters === false && hasUpperLetters === false && hasNumbers === false
) {
  alert('Must make at least one selection from proceeding prompt.')
  return null;
} else 

//Variabel hasSpecChars to include specail characters. 
var hasSpecChars = confirm('Please click on OK to confirm inclusion of special characters.');

//IF hasSpecChars is strictly true the user password wil include the special characters
if(hasSpecChars === true) {
  userSelect = userSelect.concat(specialChar);
}

//Variable hasLowerLetters to include lower case letters. 
var hasLowerLetters = confirm('Please click on Ok to confirm inclusion of lowercased letters.');

//IF hasLowerLetters is strictly true the user password will include the lowercase letters. 
if(hasLowerLetters === true){
  userSelect = userSelect.concat(lowLetters);
}

//Variable hasUpperLetters to include uppercase letters. 
var hasUpperLetters = confirm('Please click on OK to confirm inclusion of uppercased letters.');

//IF hasUpperLetters is strictly true the user password will include uppercase letters. 
if(hasUpperLetters === true) {
  userSelect = userSelect.concat(capLetters);
}

//Variable hasNumbers to include numbers. 
var hasNumbers = confirm('Please click on Ok to confirm inclusion of numbers.');

//IF hasNumbers is strictly true the user password will include numbers. 
if(hasNumbers === true) {
  userSelect = userSelect.concat(numberChar);
}


var password = ""
//FOR LOOP used to randomize various selections to output the new random password. 
for (var i =0; i < howManyChars; i++) {
  var index = Math.floor(Math.random() * userSelect.length)

  var chosenChars = userSelect[index]
  password += chosenChars
}
return password
}







var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
