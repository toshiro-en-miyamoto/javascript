const Logger = require('./module-exports-log-class');
const dbLogger = new Logger('DB');
const acLogger = new Logger('AC');

test('Node.js style module exporting a class', () => {
    expect(dbLogger.info('Informational'))
        .toBe('[DB] info: Informational');
    expect(acLogger.verbose('Verbose message'))
        .toBe('[AC] verbose: Verbose message');
});