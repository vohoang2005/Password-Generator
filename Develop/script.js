//Assignment Code + Event Listener to prompt questions when button pushed
document.querySelector("#generate").addEventListener("click", writePassword);

// Listed all possible outcome.
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphalower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaupper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Choices to be selected or not.
var confirmlength = "";
var confirmsymbol;
var confirmnumeric;
var confirmuppercase;
var confirmlowercase;

function generatePassword() {
  var confirmlength = window.prompt("How many characters would you like your password to be?");
  while (confirmlength <= 7 || confirmlength > 128) {
    window.alert("Your password length must be between 8-128 characters, please try again.");
    var confirmlength = window.prompt("How many characters would you like your password to be?");
    }
  // To confirm the listed choices.
  var confirmsymbol = window.confirm("Click OK to include Special Characters");
  var confirmnumeric = window.confirm("Click OK to include Numeric Characters");
  var confirmuppercase = window.confirm("Click OK to include UpperCase Characters");
  var confirmlowercase = window.confirm("Click OK to include LowerCase Characters");

  // Reloop if not at least 1 choice is choosen.
    while(confirmuppercase === false && confirmlowercase === false && confirmsymbol === false && confirmnumeric === false) {
      window.alert("You must choose at least one parameter");
      //Rerun the loop.
      var confirmsymbol = window.confirm("Click OK to include Special Characters");
      var confirmnumeric = window.confirm("Click OK to include Numeric Characters");
      var confirmuppercase = window.confirm("Click OK to include UpperCase Characters");
      var confirmlowercase = window.confirm("Click OK to include LowerCase Characters");
    }
    // Assign an action to the password parameters
    var passwordCharacters = [];
      
    if (confirmsymbol) {
      passwordCharacters = passwordCharacters.concat(symbol);
    }

    if (confirmnumeric) {
      passwordCharacters = passwordCharacters.concat(number);
    }
      
    if (confirmlowercase) {
      passwordCharacters = passwordCharacters.concat(alphalower);
    }

    if (confirmuppercase) {
      passwordCharacters = passwordCharacters.concat(alphaupper);
    }
    console.log(passwordCharacters);

    var randomPassword = "";

    for (var i = 0; i < confirmlength; i++) {
      randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
      console.log(randomPassword)
    }
    return randomPassword;
  }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

