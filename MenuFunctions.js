const color = require('./Colors');

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const funcs = {
    A: function(name){
        console.log("Hello " + name);
    },

    B: function(){
        console.log("Hello Dexter");
    },

    DefaultMenu: function(){
        console.log(color.green, '  1: Create New Account', '\n', color.cyan, ' 2: Login to your account', '\n', color.red, color.underscore, '3: Close Browser', color.reset);
        //const input = prompt("Enter a valid option 1-3:");
        console.log(color.magenta);
        rl.question("   What option would you like to select? ", function (answer) {
            if(answer == 1){
                console.log(color.green, '  Create new account');
            }
            else if(answer == 2){
                console.log(color.cyan, '  Login to your account');
            }
            else if(answer == 3){
                console.log(color.red, '  Closing Browser');
            }
            rl.close();
          });
    }

    
}

module.exports = funcs;