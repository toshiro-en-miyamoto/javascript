const logger = require('./module-exports-log');

test('Node.js style module', () => {
    expect(logger('Informational'))
        .toBe('info: Informational');
    expect(logger.verbose('Verbose message'))
        .toBe('verbose: Verbose message');
});