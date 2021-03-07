const makeFile = require('../lib/makefile.js');
const stringToGood = require('../lib/goodstring.js');

const TYPE = 'model';

exports.modelCreate = async(nazwa) => {
    const names = await stringToGood.stringToGood(nazwa);
    let text = await makeModel(names.name);
    await makeFile.makeFile(names.file, text, TYPE);
}

function makeModel(name) {
    return "export interface " + name + "Model" + "{ \n" +
        "   \n" +
        "}\n";
}