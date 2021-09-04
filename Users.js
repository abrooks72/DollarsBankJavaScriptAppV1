const color = require('./Colors');

var map = {};

// const func= menu.DefaultMenu;


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
        console.log(color.green, '  Account succesfully created');
        console.log(Object.keys(map));
        // console.log(func);
                                                
    },

    login: function(name, password){
        if(name in map && map[name] == password){
            console.log(color.green, '  Access Granted');
        }
        else{
            console.log(color.red, '  The username/password combination is invalid');
        }
    }

    

    
}
module.exports = functions;