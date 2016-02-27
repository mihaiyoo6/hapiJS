const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({
	port: 3000
});

server.route({
	method: 'GET',
	path: '/',
	handler(request, reply) {
		return reply('helo Hapi');
	}
});

server.start(err=> {
	console.log(server.info)
});