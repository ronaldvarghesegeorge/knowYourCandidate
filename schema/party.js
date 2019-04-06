const getAllSchema = {
  description: 'Shows all the party. Sort, search and pagination yet to be implemented',
  tags: ['party'],
  summary: 'Get all party'
}

const getSchema = {
  description: 'party',
  tags: ['party'],
  summary: 'Get party by using id',
  params: {
    type: 'object',
    properties: {
      id: { type: 'string' }
    }
  }
  // response: {
  //   200: {
  //     description: 'Successful response',
  //     type: 'object',
  //     properties: {
  //       _id: { type: 'string' },
  //       title: { type: 'string' },
  //       description: { type: 'string' },
  //       __v: { type: 'number' }
  //     }
  //   }
  // }
}

const postSchema = {
  description: 'Create a new party',
  tags: ['party'],
  summary: 'Add party',
  body: {
    type: 'object',
    properties: {
      title: { type: 'string' },
      description: { type: 'string' }
    },
    required: ['title', 'description']
  }
  // response: {
  //   200: {
  //     description: 'Successful response',
  //     type: 'object',
  //     properties: {
  //       _id: { type: 'string' },
  //       title: { type: 'string' },
  //       description: { type: 'string' },
  //       __v: { type: 'number' }
  //     }
  //   }
  // }
}

const updateSchema = {
  description: 'update party',
  tags: ['party'],
  summary: ' update party',
  params: {
    type: 'object',
    properties: {
      id: { type: 'string' }
    }
  },
  body: {
    type: 'object',
    properties: {
      title: { type: 'string' },
      description: { type: 'string' }
    },
    required: ['title', 'description']
  }
  // response: {
  //   200: {
  //     description: 'Successful response',
  //     type: 'object',
  //     properties: {
  //       _id: { type: 'string' },
  //       title: { type: 'string' },
  //       description: { type: 'string' },
  //       __v: { type: 'number' }
  //     }
  //   }
  // }
}

const deleteSchema = {
  description: 'party',
  tags: ['party'],
  summary: 'Get party',
  params: {
    type: 'object',
    properties: {
      id: { type: 'string' }
    }
  }
}

// const updatePartySchema = {
//   params: {
//     type: 'object',
//     properties: {
//       id: { type: 'string' }
//     }
//   },
//   body: {
//     type: 'object',
//     properties: {
//       id: { type: 'string' }
//     }
//   }
// }

module.exports = {
  getAllSchema,
  getSchema,
  postSchema,
  updateSchema,
  deleteSchema
  // updatePartySchema
}
