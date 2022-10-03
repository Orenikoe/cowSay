

let cowsay = require("cowsay");
const importedObj = require('./information')

   console.log(cowsay.say({
    text : `I'm a ${importedObj.cowDescObj.name} from ${importedObj.cowDescObj.campus}!`,
    e : "Oo",
    T : "U "
}));



