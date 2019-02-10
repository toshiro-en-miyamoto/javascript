const logger = require('./exports-log');

test('CommonJS style module', () => {
    expect(logger.info('Informational'))
        .toBe('info: Informational');
    expect(logger.verbose('Verbose message'))
        .toBe('verbose: Verbose message');
});