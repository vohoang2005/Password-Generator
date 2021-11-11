//Assignment Code + Event Listener to prompt questions when button pushed
document.querySelector("#generate").addEventListener("click", writePassword);

// Listed all possible outcome.
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~", ":", ";", "|", "(", ")", "[", "]", "{", "}"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Choices to be selected or not.
var confirmLength = "";
var confirmSymbol;
var confirmNumeric;
var confirmUppercase;
var confirmLowercase;

function generatePassword() {
  var confirmLength = window.prompt("How many characters would you like your password to be?");
  while (confirmLength <= 7 || confirmLength >= 128) {
    window.alert("Your password length must be between 8-128 characters, please try again.");
    var confirmLength = window.prompt("How many characters would you like your password to be?")
    }
  // To confirm the listed choices.
  var confirmSymbol = window.confirm("Click OK to include Special Characters");
  var confirmNumeric = window.confirm("Click OK to include Numeric Characters");
  var confirmUppercase = window.confirm("Click OK to include UpperCase Characters");
  var confirmLowercase = window.confirm("Click OK to include LowerCase Characters");

  // Reloop if not at least 1 choice is choosen.
    while(confirmUppercase === false && confirmLowercase === false && confirmSymbol === false && confirmNumeric === false) {
      window.alert("You must choose at least one parameter");
      //Rerun the loop.
      var confirmSymbol = window.confirm("Click OK to include Special Characters");
      var confirmNumeric = window.confirm("Click OK to include Numeric Characters");
      var confirmUppercase = window.confirm("Click OK to include UpperCase Characters");
      var confirmLowercase = window.confirm("Click OK to include LowerCase Characters");
    }
    //Now creating the password via choices picked.
    var passwordCharacters = [];
  if (confirmSymbol) {
    passwordCharacters = passwordCharacters.concat(symbol);
  }
  if (confirmNumeric) {
    passwordCharacters = passwordCharacters.concat(number);
  }
  if (confirmUppercase) {
    passwordCharacters = passwordCharacters.concat(alphaUpper);
  }
  if (confirmLowercase) {
    passwordCharacters = passwordCharacters.concat(alphaLower);
  }
  
  }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

