/**
 * Created by Parth Mehta on 08-08-2017.
 */
// impport packages required
const  Hapi = require('hapi');
const  Hoek = require('hoek');
const Routes = require('./lib/routes');

//create obj server of Hapi
const server = new Hapi.Server();

// define port for server reqiest reply
server.connection({ port : 3030});

// define the route and handler
server.route(Routes);

server.start((err) => {
    Hoek.assert(!err, err);

console.log(`Server running at: ${server.info.uri}`);

});