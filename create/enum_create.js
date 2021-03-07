const makeFile = require('../lib/makefile.js');
const stringToGood = require('../lib/goodstring.js');

const TYPE = 'enum';

exports.enumCreate = async(nazwa) => {
    const names = await stringToGood.stringToGood(nazwa);
    let text = await makeEnum(names.name);
    console.log(text);
    await makeFile.makeFile(names.file, text, TYPE);
}

function makeEnum(name) {
    return "enum " + name + "{ \n" +
        "   \n" +
        "}\n";
}