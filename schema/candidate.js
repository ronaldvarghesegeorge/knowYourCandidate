const getAllSchema = {
  description: 'Shows all the candidates.',
  tags: ['candidate'],
  summary: 'Get all candidate'
}

const getSchema = {
  description: 'candidate',
  tags: ['candidate'],
  summary: 'Get candidate by using id',
  params: {
    type: 'object',
    properties: {
      id: { type: 'string' }
    }
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        _id: { type: 'string' },
        name: { type: 'string' },
        description: { type: 'string' },
        party: { type: 'object' },
        constituency: { type: 'object' },
        createdAt: { format: 'date' },
        updatedAt: { format : 'date' },
        __v: { type: 'number' }
      }
    }
  }
}

const postSchema = {
  description: 'Create a new candidate',
  tags: ['candidate'],
  summary: 'Add candidate',
  body: {
    type: 'object',
    properties: {
      name: { type: 'string' },
        description: { type: 'string' },
        party: { type: 'object' },
        constituency: { type: 'object' },
        createdAt: { format: 'date' },
        updatedAt: { format : 'date' }
    },
    // required: ['title', 'description']
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        _id: { type: 'string' },
        name: { type: 'string' },
        description: { type: 'string' },
        party: { type: 'object' },
        constituency: { type: 'object' },
        createdAt: { format: 'date' },
        updatedAt: { format : 'date' },
        __v: { type: 'number' }
      }
    }
  }
}

const updateSchema = {
  description: 'Edit candidate',
  tags: ['candidate'],
  summary: 'Edit candidate',
  params: {
    type: 'object',
    properties: {
      id: { type: 'string' }
    }
  },
  body: {
    type: 'object',
    properties: {
       name: { type: 'string' },
        description: { type: 'string' },
        party: { type: 'object' },
        constituency: { type: 'object' },
      createdAt: { format: 'date' },
        updatedAt: { format : 'date' }
    },
    required: ['title', 'description']
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        _id: { type: 'string' },
         name: { type: 'string' },
        description: { type: 'string' },
        party: { type: 'object' },
        constituency: { type: 'object' },
        createdAt: { format: 'date' },
        updatedAt: { format : 'date' },
        __v: { type: 'number' }
      }
    }
  }
}

const deleteSchema = {
  description: 'candidate',
  tags: ['candidate'],
  summary: 'Get candidate',
  params: {
    type: 'object',
    properties: {
      id: { type: 'string' }
    }
  }
}

module.exports = {
  getAllSchema,
  getSchema,
  postSchema,
  updateSchema,
  deleteSchema
}