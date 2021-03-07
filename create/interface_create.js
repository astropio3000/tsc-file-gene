const makeFile = require('../lib/makefile.js');
const stringToGood = require('../lib/goodstring.js');

const TYPE = 'interface';

exports.interfaceCreate = async(nazwa) => {
    const names = await stringToGood.stringToGood(nazwa);
    let text = await makeInterface(names.name);
    await makeFile.makeFile(names.file, text, TYPE);
}

function makeInterface(name) {
    return "export interface " + name + "{ \n" +
        "   \n" +
        "}\n";
}