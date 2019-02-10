const Logger = require('./module-exports-log-factory');
const dbLogger = Logger('DB');
const acLogger = new Logger('AC');

test('Node.js style module exporting a factory', () => {
    expect(dbLogger.info('Informational'))
        .toBe('[DB] info: Informational');
    expect(acLogger.verbose('Verbose message'))
        .toBe('[AC] verbose: Verbose message');
});