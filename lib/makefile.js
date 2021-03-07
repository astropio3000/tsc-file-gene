const fs = require('fs');

exports.makeFile = async(name, text, type) => {
    let flag = true;
    await fs.writeFile('./' + name + '.' + type + '.ts', text, (ex) => {
        if (ex != null) {
            console.error('error makeFile', ex);
            flag = false;
        }
    });
    if (flag) {
        await console.log('success');
    }
}