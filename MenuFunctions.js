const color = require('./Colors');
const users = require('./Users');
const readline = require("readline");
const { getUser } = require('./Users');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

const funcs = {
    A: function(name){
        console.log("Hello " + name);
    },

    B: function(){
        console.log("Hello Dexter");
    },

    DefaultMenu: function(){
        console.log(color.green, '  1: Create New Account', '\n', color.cyan, ' 2: Login to your account', '\n', color.red, color.underscore, '3: Close Browser', color.reset, color.magenta, color.bright);
        //const input = prompt("Enter a valid option 1-3:");
        
        rl.question("   What option would you like to select? ", function (answer) {
            if(answer == 1){
                console.log(color.green, '  Create new account');
                funcs.getUser();
            }
            else if(answer == 2){
                console.log(color.cyan, '  Login to your account');
            }
            else if(answer == 3){
                console.log(color.red, '  Closing Browser');
            }
            // rl.close();
          });
    },

    Login: function(){
        console.log("Welcome to the login page");
        //this.getUser();
    },


    getUser: function(){
        rl.question(color.blue + '   What is the username you would like to create? ', function(answer) {
            var myUser = answer.toLowerCase();

            if(users.getUser(answer)){
                console.log(color.red,'  User exists.');
                funcs.getUser();
            }
            else{
                console.log(color.green,'  Valid Username');
            }
        
        });
    }

    
}

module.exports = funcs