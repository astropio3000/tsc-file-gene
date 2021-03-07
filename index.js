#!/usr/bin/env node

var interfaceCreate = require('./create/interface_create.js');
var classCreate = require('./create/class_create.js');
var enumCreate = require('./create/enum_create.js');
var modelCreate = require('./create/model_create.js');
var serviceCreate = require('./create/service_create.js');

var args = process.argv.slice(2);

if (args.length <= 0) {
    console.error('NoGoodParms', 'brakuje parametrów');
} else {
    driver();
}

function driver() {
    var typ = args[0];
    var nazwa = args[1];
    if (nazwa === '' || nazwa === ' ' || nazwa === null || nazwa === undefined) {
        console.error('NameError', 'brak nazwy');
        return 1;
    }
    switch (typ) {
        case 'interface':
            interfaceCreate.interfaceCreate(nazwa);
            console.log("pomyślnie utworzono");
            break;
        case 'class':
            classCreate.classCreate(nazwa);
            console.log("pomyślnie utworzono");
            break;
        case 'enum':
            enumCreate.enumCreate(nazwa);
            console.log("pomyślnie utworzono");
            break;
        case 'model':
            modelCreate.modelCreate(nazwa);
            console.log("pomyślnie utworzono");
            break;
        case 'service':
            serviceCreate.serviceCreate(nazwa);
            console.log("pomyślnie utworzono");
            break;
    }
}