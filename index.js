const fastify = require("fastify")({
    logger: true
});

const productRoutes = require("./src/routes/products.routes");
const swagger = require('./src/utils/swagger')

require("./src/utils/mongoose")

fastify.register(require('fastify-swagger'), swagger.options)


productRoutes.forEach(route => {
    fastify.route(route)
})


const start = async () => {
    await fastify.listen(3001);
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
};

start();