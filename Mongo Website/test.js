var my_mod = require('./mymodule');
console.log((function(settings){
    return settings.split('').reverse().join('')
})(my_mod.name));