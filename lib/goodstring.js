exports.stringToGood = (str = '') => {
    fileName = str.replace(/\s/g, '-');
    classNameTemp = str.split(/\s/g);
    className = '';
    classNameTemp.forEach(element => {
        element = element.charAt(0).toUpperCase() + element.slice(1);
        className += element;
    });
    fileName = fileName.toLowerCase();
    return { file: fileName, name: className };
}