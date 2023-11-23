const Hapi = require('hapi');
const app = new Hapi.Server();
const Parser = require('./services/logParserService');

const parser = new Parser();

parser.readFile(`${__dirname}/../src/log/games.log`);

app.connection({
    host: 'localhost',
    port: 5000
});

app.start(error => {
    if (error) {
        throw error;
    }
    console.log(`Server running: ${app.info.uri}`);
})

require('./routes')(app, parser);

module.exports = app