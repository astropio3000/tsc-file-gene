const makeFile = require('../lib/makefile.js');
const stringToGood = require('../lib/goodstring.js');

const TYPE = 'enum';

exports.enumCreate = async(nazwa) => {
    const names = await stringToGood.stringToGood(nazwa);
    let text = await makeEnum(names.name);
    await makeFile.makeFile(names.file, text, TYPE);
}

function makeEnum(name) {
    return "export enum " + name + "{ \n" +
        "   \n" +
        "}\n";
}