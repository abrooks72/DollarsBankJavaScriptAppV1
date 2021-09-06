const color = require('./Colors');
const readline = require("readline");
const defaultMenu = require('./DefaultMenu');




var map = {};
var funds = {
    name: 0
};

let totalAmount= 0;
// const func= menu.DefaultMenu;
var money = 0;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
}); 
const functions = {
    getUser: function(name){
        var name = name.toLowerCase();
        if(name in map){
            return true;
        }
        else{
            return false;
        }
    },

    getPassword: function(name,password){
        if(map[name] == password){
            return true;
        }
        else{
            false;
        }
    },

    addUser: function(name, password){
        map[name] = password;                                               //This is storing the user lists
        funds[name] = 0;
        console.log(color.green, '  Account succesfully created');
        
        console.log(Object.keys(map));
        // console.log(func);
                                                
    },

    login: function(name, password){
        if(name in map && map[name] == password){
            console.log(color.green, '  Access Granted');
            console.log('   You have: ' + funds[name] + '$');
            functions.userMenu(name);
        }
        else{
            console.log(color.red, '  The username/password combination is invalid');
        }
    },

    userMenu: function(name){
        let choice = 0;
        console.log(color.green, '  1: Deposit', '\n', color.red, ' 2: Withdraw', '\n', color.cyan, ' 3: Transfer');
        rl.question("   What option would you like to select? ", function (answer){
            choice = answer;
        
            if(choice == 1){
                console.log(color.green, '\n   Deposit Selected');
                functions.Deposit(name);
            }
            else if(choice == 2){
                console.log(color.red, '\n   Withdraw Selected');
                functions.Withdraw(name);
            }
            else if(choice == 3){
                functions.Transfer(name);
            }
            else if(choice == 4){
                 defaultMenu.DefaultMenu();
                
            }
            //rl.close();
        });
    },

    Deposit: function(name){
        let amount = 0;
        rl.question("   How much money would you like to deposit? ", function(answer){
            if(answer >= 0){
                totalAmount += parseInt(answer);
            }
            
        });
        setTimeout(()=> {
            console.log(color.green, '  You now have: ' + totalAmount + '$');
            // console.log(funds[name])
            // console.log(typeof(funds[name]))
            functions.userMenu();
        }, 5000)
      
    },

    Withdraw: function(name){
        rl.question("   How much money would you like to withdraw? ", function(answer){
            if(totalAmount >= answer && answer >= 0){
                totalAmount -= parseInt(answer);
            }
            
        });
        setTimeout(()=> {
            console.log(color.green, '  You now have: ' + totalAmount + '$');
            functions.userMenu();
        }, 5000)
    },

    Transfer: function(name){
        let transferAccount;
        let transferAmount = 0;
        rl.question("   Whose account would you like to transfer funds into?", function(answer){
            transferAccount = answer;
        });
        setTimeout(()=> {
            console.log('Accessing ' + transferAccount + ' Account...');
        }, 5000)
        rl.question("   How much would you like to transfer? ", function(answer){
            transferAmount = answer;
        });
    }

    

    
}
module.exports = functions;