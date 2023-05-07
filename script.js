// Assignment Code
var capLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var lowLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var numberChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', ';', ':', '"', '', ',', '<', '.', '>', '/', '?'];

function generatePassword(){

howManyChars =  parseInt(
  prompt('How many charactors would you like the pasword to be?'),
  10
);

if (howManyChars < 8 || howManyChars > 128) {
  alert( 'Password must be between 8-128 characters, please select between those values.');
  return null;
}


if( 
  hasSpecChars === false && hasLowerLetters === false && hasUpperLetters === false && hasNumbers === false
) {
  alert('Must make at least one selection from proceeding prompt.')
  return null;
} else {
  alert('Your password will not include')
}
var hasSpecChars = confirm('Please click on OK to confirm inclusion of special characters.');

var hasLowerLetters = confirm('Please click on Ok to confirm inclusion of lowercased letters.')

var hasUpperLetters = confirm('Please click on OK to confirm inclusion of uppercased letters.')

var hasNumbers = confirm('Please click on Ok to confirm inclusion of numbers.')
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
