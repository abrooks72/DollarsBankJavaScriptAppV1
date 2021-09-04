const color = require('./Colors');
const menu = require('./MenuFunctions');
var map = {};

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
        
    }

    

    
}
module.exports = functions;