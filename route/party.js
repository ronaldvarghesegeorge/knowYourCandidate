const partyController = require('../controller/party')
const partySchema = require('../schema/party')
const routes = [
  {
    method: 'GET',
    url: '/api/party',
    handler: partyController.getParty,
    schema: partySchema.getAllSchema
  },
  {
    method: 'GET',
    url: '/api/party/:id',
    handler: partyController.getSingleParty,
    schema: partySchema.getSchema
  },
  {
    method: 'POST',
    url: '/api/party',
    handler: partyController.addParty,
    schema: partySchema.postSchema
  },
  {
    method: 'PUT',
    url: '/api/party/:id',
    handler: partyController.updateParty,
    schema: partySchema.updateSchema
  },
  {
    method: 'DELETE',
    url: '/api/party/:id',
    handler: partyController.deleteParty,
    schema: partySchema.deleteSchema
  }
]

module.exports = routes
