const fastify = require('fastify')({
    logger: true
});

const routes = require("./route/constituency");
const swagger = require("./config/swagger");
const mongoose = require('mongoose');

fastify.register(require('fastify-formbody'));
fastify.register(require("fastify-swagger"), swagger.options);

routes.forEach((route) => {
    fastify.route(route)
});

// Store your db uri in env  //TODO

mongoose.connect("mongodb://localhost/kyc",{ useNewUrlParser: true })
    .then(() => console.log("MongoDB connected…"))
    .catch(err => console.log(err));
mongoose.set('useFindAndModify', false);


fastify.listen(3000, '0.0.0.0', (err, address) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1)
    }
    fastify.swagger();
    fastify.log.info(`server listening on ${address}`)
});