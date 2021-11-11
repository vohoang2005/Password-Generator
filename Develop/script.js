// Listed all possible outcome.
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~", ":", ";", "|", "(", ")", "[", "]", "{", "}", "\""];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Choices to be selected or not.
var confirmLength = "";
var confirmSymbol;
var confirmUppercase;
var confirmLowercase;

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  while (password < 128 && password > 4) 
  var specialcharacter = window.confirm("Click OK to confirm including special characters");
  if (window.confirm) {
    ();
  } 





// How many characters would you like your password to contain?
// Click OK to confirm including special characters.
// Click Ok to confirm including numeric characters.
// Click ok to confirm including lowercase characters.
// Click ok to confirm including uppercase characters.


  

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
