class Logger
{
    constructor(name) {
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

module.exports = Logger;