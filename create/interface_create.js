const makeFile = require('../lib/makefile.js');
const stringToGood = require('../lib/goodstring.js');

const TYPE = 'interface';

exports.interfaceCreate = async(nazwa) => {
    const names = await stringToGood.stringToGood(nazwa);
    let text = await makeInterface(names.name);
    console.log(text);
    await makeFile.makeFile(names.file, text, TYPE);
}

function makeInterface(name) {
    return "interface " + name + "{ \n" +
        "   \n" +
        "}\n";
}