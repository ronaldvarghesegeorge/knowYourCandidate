const getAllSchema = {
  description: 'Shows all the constituency. Sort, search and pagination yet to be implemented',
  tags: ['constituency'],
  summary: 'Get all Constituency'
}

const getSchema = {
  description: 'Constituency',
  tags: ['constituency'],
  summary: 'Get Constituency by using id',
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
  description: 'Create a new Constituency',
  tags: ['constituency'],
  summary: 'Add Constituency',
  body: {
    type: 'object',
    properties: {
      title: { type: 'string' },
      description: { type: 'string' },
      party: {
        type: 'array',
        maxItems: 0,
        items: {
          type: ['string']
          // properties: {
          //   id: 'string'
          // }
        }
      }
    },
    required: ['title']
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
  description: 'update Constituency',
  tags: ['constituency'],
  summary: ' update Constituency',
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
    required: ['title']
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
  description: 'Constituency',
  tags: ['constituency'],
  summary: 'Get Constituency',
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

const imageSchema = {
  description: 'add image Constituency',
  tags: ['constituency'],
  summary: ' update Constituency',
  consumes: ['multipart/form-data'],
  params: {
    type: 'object',
    properties: {
      id: { type: 'string' }
    }
  },
  body: {
    type: 'object',
    properties: {
      file: {
        type: 'string'
        // format: 'binary'
      }
    }
  }
}

module.exports = {
  getAllSchema,
  getSchema,
  postSchema,
  updateSchema,
  deleteSchema,
  imageSchema
  // updatePartySchema
}
