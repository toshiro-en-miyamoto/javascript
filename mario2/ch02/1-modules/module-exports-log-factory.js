/**
    TypeError: Class constructor Logger cannot be invoked without 'new'
 
      1 | const Logger = require('./module-exports-log-factory');
    > 2 | const dbLogger = Logger('DB');

class Logger
{
    constructor(name) {
        // if the Logger() function was invoked without using new
        if(!(this instanceof Logger)) {
            return new Logger(name);
        }
        this.name = name;
    }

    log(message) {
        return `[${this.name}] ${message}`;
    }

    info(message) {
        return `[${this.name}] info: ${message}`;
    }

    verbose(message) {
        return `[${this.name}] verbose: ${message}`;
    }
}

*/

function Logger(name) {
    // if the Logger() function was invoked without using new
    // prior to ES2015
    //      if(!(this instanceof Logger)) {
    // ES2015 & Node.js v6
    //      if(!new.target)
    if(!new.target) {
        return new Logger(name);
    }
    this.name = name;
}

Logger.prototype.log = function(message) {
    return `[${this.name}] ${message}`;
};

Logger.prototype.info = function(message) {
    return `[${this.name}] info: ${message}`;
};

Logger.prototype.verbose = function(message) {
    return `[${this.name}] verbose: ${message}`;
};

module.exports = Logger;