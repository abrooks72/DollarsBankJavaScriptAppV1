const color = require('./Colors');
// const users = require('./Users');
const readline = require("readline");
// const { getUser } = require('./Users');
// const { setTimeout } = require('timers');

var map = {};
var funds = {};



// const func= menu.DefaultMenu;
var money = 0;
var accounts = {
    
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
}); 

  const funcs = {
   L: "Austin",

    A: function(name){
      console.log("Hello " + name);
    },

    B: function(){
        console.log("Hello Dexter");
    },

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
                    if(!funcs.getUser2(answer)){
                        console.log(color.red + '   No Such User, returning to main menu');
                      funcs.DefaultMenu();
                    }
                    else{
                        rl.question("   What is your password? ", function(answer){
                            pass = answer;
                            funcs.login(name,pass);
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

    Login: function(){
        console.log("Welcome to the login page");
        //this.getUser();
    },


    getUser: function(){
        let myUser = 'austin'
        rl.question(color.blue + '   What is the username you would like to create? ', function(answer) {
            myUser = answer.toLowerCase();
            if(funcs.getUser2(myUser)){
                console.log(color.red,'  User exists.');
                funcs.getUser();
            }
            else{
                console.log(color.green, '  Username available.');
                funcs.getPass(myUser);

            }
        });

        
            
        
    },

    getPass: function(name){
        let password;
        
        rl.question(color.blue + '   What would you like your password set as? ', function(answer){
            password = answer;
            funcs.addUser(name,password);
        })

       setTimeout(()=> {
           this.DefaultMenu();
       }, 7000)
          
       
    },

    getUser2: function(name){
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
        
        // console.log(func);
                                                
    },

    login: function(name, password){
        if(name in map && map[name] == password){
            console.log(color.green, '  Access Granted');
            console.log('   You have: ' + funds.name + '$');
            funcs.userMenu(name);
        }
        else{
            console.log(color.red, '  The username/password combination is invalid');
        }
    },

    userMenu: function(name){
        let choice = 0;
        console.log(color.green, '  1: Deposit', '\n', color.red, ' 2: Withdraw', '\n', color.cyan, ' 3: Transfer', '\n', color.blue, ' 4: Logout');
        rl.question("   What option would you like to select? ", function (answer){
            choice = answer;
        
            if(choice == 1){
                console.log(color.green, '\n   Deposit Selected');
                funcs.Deposit(name);
            }
            else if(choice == 2){
                console.log(color.red, '\n   Withdraw Selected');
                funcs.Withdraw(name);
            }
            else if(choice == 3){
                console.log(color.cyan, '\n   Transfer Selected');
                funcs.Transfer(name);
            }
            else if(choice == 4){
                funcs.DefaultMenu();
                
            }
            //rl.close();
        });
    },

    Deposit: function(name){
        let amount = 0;
        rl.question("   How much money would you like to deposit? ", function(answer){
            if(answer >= 0){
            //    let user= Object.keys(funds).filter((key)=> key === name)[0]
            //    console.log(user);
                funds[name] += parseInt(answer);
                
               

            }
            
        });
        setTimeout(()=> {
           

            console.log(color.green, '  You now have: ' + funds[name] + '$');
            // console.log(funds[name])
            // console.log(typeof(funds[name]))
            funcs.userMenu(name);
        }, 5000)
      
    },

    Withdraw: function(name){
        rl.question("   How much money would you like to withdraw? ", function(answer){
            funds[name] -= parseInt(answer);
            
        });
        setTimeout(()=> {
            console.log(color.green, '  You now have: ' + funds[name] + '$');
            funcs.userMenu(name);
        }, 7000)
    },

    Transfer: function(name){
        let transferAccount;
        rl.question("   Whose account would you like to transfer funds into? ", function(answer){
            transferAccount = answer;
        });
        setTimeout(()=> {
            console.log('   Accessing ' + transferAccount + ' Account...');
            funcs.TransferAmmount(name, transferAccount);
        }, 5000)

        
    },

    TransferAmmount: function(myName, name){
        let transferAmount = 0;
        rl.question("   How much money would you like to transfer? ", function(answer){
            transferAmount = parseInt(answer);
            funds[myName] -= transferAmount;
            funds[name] += transferAmount;
        });
        setTimeout(()=> {
            console.log('   Transferring ' + transferAmount + ' to account: ' + name);
            console.log(color.green, '  You now have: ' + funds[name] + '$');
            funcs.userMenu(myName);
        }, 5000)
    }

    

    
}

module.exports = funcs