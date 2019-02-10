"use strict";

const fs = require("fs");

fs.readFile('web/README.md', 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
});
