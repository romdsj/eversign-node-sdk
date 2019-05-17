'use strict';

var Client = require('../index').Client;
var Document = require('../index').Document;

var config = require('./config.tmpl');

var client = new Client(config.accessKey, config.businessId);


// get a document and do some stuff with it
client.getDocumentByHash(config.documentHash).then(function(doc) {
    // console.log(doc.getDocumentHash());

    // download said document
    client.downloadFinalDocumentToPath(doc, true).then(data => {
        console.log(data);
    });
}).catch(function(err) {
    console.log(err)
});
