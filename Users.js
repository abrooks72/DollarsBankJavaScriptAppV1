var map = {};
map['austin'] = 'broo2388';
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
    }

    

    
}
module.exports = functions;