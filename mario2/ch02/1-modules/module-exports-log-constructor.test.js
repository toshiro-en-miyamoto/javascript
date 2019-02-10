const Logger = require('./module-exports-log-constructor');
const dbLogger = new Logger('DB');
const acLogger = new Logger('AC');

test('Node.js style module exporting a constructor', () => {
    expect(dbLogger.info('Informational'))
        .toBe('[DB] info: Informational');
    expect(acLogger.verbose('Verbose message'))
        .toBe('[AC] verbose: Verbose message');
});