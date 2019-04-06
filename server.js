const fastify = require('fastify')({
  logger: true
})

const mongoose = require('mongoose')
const fileUpload = require('fastify-file-upload')
const staticFiles = require('fastify-static')
const path = require('path')
const constituencyRoutes = require('./route/constituency')
const candidateRoutes = require('./route/candidate')
const partyRoutes = require('./route/party')
const swagger = require('./config/swagger')

fastify.register(staticFiles, {
  root: path.join(__dirname, 'uploads')
  // prefix: '/uploads/'
})
fastify.register(fileUpload)
fastify.register(require('fastify-formbody'))
fastify.register(require('fastify-swagger'), swagger.options)

const routes = constituencyRoutes.concat(candidateRoutes, partyRoutes)

routes.forEach((route) => {
  fastify.route(route)
})

// Store your db uri in env  //TODO

mongoose.connect('mongodb://localhost/kyc', { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected…'))
  .catch(err => console.log(err))
mongoose.set('useFindAndModify', false)

fastify.listen(3000, '0.0.0.0', (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.swagger()
  fastify.log.info(`server listening on ${address}`)
})
