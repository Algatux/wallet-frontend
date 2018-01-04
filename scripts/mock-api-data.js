var jsf = require('json-schema-faker');
var mockDataSchema = require('./mock/schema/apiSchema');
var fs = require('fs');

fs.writeFile("./scripts/mock/schema/db.json", JSON.stringify(jsf(mockDataSchema)), function (err) {
    if (err) {
        return console.log(err);
    } else {
        console.log("Mock data generated.");
    }
});