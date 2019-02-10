function Logger(name) {
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