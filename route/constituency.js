const constituencyController = require('../controller/constituency')
const constituencySchema = require('../schema/constituency')
const routes = [
  {
    method: 'GET',
    url: '/api/constituency',
    handler: constituencyController.getConstituency,
    schema: constituencySchema.getAllSchema
  },
  {
    method: 'GET',
    url: '/api/constituency/:id',
    handler: constituencyController.getSingleConstituency,
    schema: constituencySchema.getSchema
  },
  {
    method: 'POST',
    url: '/api/constituency',
    handler: constituencyController.addConstituency,
    schema: constituencySchema.postSchema
  },
  {
    method: 'PUT',
    url: '/api/constituency/:id',
    handler: constituencyController.updateConstituency,
    schema: constituencySchema.updateSchema
  },
  {
    method: 'DELETE',
    url: '/api/constituency/:id',
    handler: constituencyController.deleteConstituency,
    schema: constituencySchema.deleteSchema
  },
  {
    method: 'PUT',
    url: '/api/constituency/image/:id',
    handler: constituencyController.uploadImage,
    schema: constituencySchema.imageSchema
  },
  {
    method: 'GET',
    url: '/api/constituency/image/:id',
    handler: constituencyController.getImage,
    schema: constituencySchema.getSchema
  }
  // {
  //   method: 'PUT',
  //   url: '/api/constituency/party/:id',
  //   handler: constituencyController.addParty,
  //   schema: constituencySchema.updatePartySchema
  // },
  // {
  //   method: 'PUT',
  //   url: '/api/constituency/party/remove/:id',
  //   handler: constituencyController.deleteParty,
  //   schema: constituencySchema.updatePartySchema
  // }
]

module.exports = routes
