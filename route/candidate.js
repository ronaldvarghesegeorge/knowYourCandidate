const candidateController = require('../controller/candidate')
const candidateSchema = require('../schema/candidate')
const routes = [
  {
    method: 'GET',
    url: '/api/candidate',
    handler: candidateController.getCandidate,
    schema: candidateSchema.getAllSchema
  },
  {
    method: 'GET',
    url: '/api/candidate/:id',
    handler: candidateController.getCandidateById,
    schema: candidateSchema.getSchema
  },
  {
    method: 'GET',
    url: '/api/candidate/party/:id',
    handler: candidateController.getCandidateByParty,
    schema: candidateSchema.getSchema
  },
  {
    method: 'GET',
    url: '/api/candidate/constituency/:id',
    handler: candidateController.getCandidateByConstituency,
    schema: candidateSchema.getSchema
  },
  {
    method: 'POST',
    url: '/api/candidate',
    handler: candidateController.addCandidate,
    schema: candidateSchema.postSchema
  },
  {
    method: 'PUT',
    url: '/api/candidate/:id',
    handler: candidateController.updateCandidate,
    schema: candidateSchema.updateSchema
  },
  {
    method: 'DELETE',
    url: '/api/candidate/:id',
    handler: candidateController.deleteCandidate,
    schema: candidateSchema.deleteSchema
  },
  {
    method: 'PUT',
    url: '/api/candidate/image/:id',
    handler: candidateController.uploadImage
    // schema: candidateSchema.imageSchema
  },
  {
    method: 'GET',
    url: '/api/candidate/image/:id',
    handler: candidateController.getImage,
    schema: candidateSchema.getSchema
  }
]

module.exports = routes
