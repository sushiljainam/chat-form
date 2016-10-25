global.END_INPUT = '--end';

console.log("Sign-up Form");
console.log("'"+global.END_INPUT+"' to terminate input");

var regex = {};
regex.name = new RegExp('/(([a-zA-Z]+)\s)*([a-zA-Z]+)/');
regex.date.yyyy = new RegExp('/[1-2][0]/')
//define all patterns to validate
//read names dob, respond accordingly, complete sign up
//edit functions
var sign_up_init = function () {
  console.log("your good name? please!");
  var rl = process.openStdin();

  rl.addListener("data", function(d) {
    var input = d.toString().trim();
    // here your code

    if (input===global.END_INPUT) {
    	rl.destroy();
    };
  }
}

sign_up_init();
