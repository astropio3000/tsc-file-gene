const makeFile = require('../lib/makefile.js');
const stringToGood = require('../lib/goodstring.js');

const TYPE = 'class';

exports.classCreate = async(nazwa) => {
    const names = await stringToGood.stringToGood(nazwa);
    let text = await makeClass(names.name);
    console.log(text);
    await makeFile.makeFile(names.file, text, TYPE);
}

function makeClass(name) {
    return "class " + name + "{ \n" +
        "   constructor(){\n" +
        "       \n" +
        "   }\n" +
        "   \n" +
        "}\n";
}