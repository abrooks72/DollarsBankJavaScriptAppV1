// const func = require('./MenuFunctions');

const color = require('./Colors');
const users = require('./Users');
const readline = require("readline");
// const { getUser } = require('./Users');
// const { setTimeout } = require('timers');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

const funcs = {
    
    DefaultMenu: function(){
    
        console.log(color.green, '  1: Create New Account', '\n', color.cyan, ' 2: Login to your account', '\n', color.red, color.underscore, '3: Close Browser', color.reset, color.magenta, color.bright);
         //const input = prompt("Enter a valid option 1-3:");
         let choice = 0;
         rl.question("   What option would you like to select? ", function (answer) {
             if(answer == 1){
                 console.log(color.green, '  Create new account');
                 funcs.getUser();
             }
             else if(answer == 2){
                 console.log(color.cyan, '  Login to your account:');
                 let name;
                 let pass;
                 rl.question("   What is your username? ", function (answer) {
                     name = answer;
                     if(!users.getUser(answer)){
                         console.log(color.red + '   No Such User, returning to main menu');
                       funcs.DefaultMenu();
                     }
                     else{
                         rl.question("   What is your password? ", function(answer){
                             pass = answer;
                             users.login(name,pass);
                         });
                     }
                 });
                
                 
                 
             }
             else if(answer == 3){
                 console.log(color.red, '  Closing Browser');
             }
             // rl.close();
           });
     },
}
module.exports = funcs
