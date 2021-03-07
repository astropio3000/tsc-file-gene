const makeFile = require('../lib/makefile.js');
const stringToGood = require('../lib/goodstring.js');

const TYPE = 'service';

exports.serviceCreate = async(nazwa) => {
    const names = await stringToGood.stringToGood(nazwa);
    let text = await makeService(names.name);
    await makeFile.makeFile(names.file, text, TYPE);
}

function makeService(name) {
    return "class " + name + "Service" + "{ \n" +
        "   \n" +
        "}\n";
}