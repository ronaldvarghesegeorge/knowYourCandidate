const boom = require('boom')
const Constituency = require('../model/constituency')

// Constituency.pre('save', (next) => {
//   this.updatedAt = new Date()
//   if (!this.createdAt) {
//     this.createdAt = new Date()
//   }
//   next()
// })

exports.getConstituency = async (req, reply) => {
  try {
    return await Constituency.find()
  } catch (err) {
    throw boom.boomify(err)
  }
}

exports.getSingleConstituency = async (req, reply) => {
  try {
    const id = req.params.id
    return await Constituency.findById(id)
  } catch (err) {
    throw boom.boomify(err)
  }
}

exports.addConstituency = async (req, reply) => {
  try {
    const data = new Constituency(req.body)
    return data.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

exports.updateConstituency = async (req, reply) => {
  try {
    const id = req.params.id
    const car = req.body
    const { ...updateData } = car
    return await Constituency.findByIdAndUpdate(id, updateData, { new: true })
  } catch (err) {
    throw boom.boomify(err)
  }
}

exports.deleteConstituency = async (req, reply) => {
  try {
    const id = req.params.id
    return await Constituency.findByIdAndRemove(id)
  } catch (err) {
    throw boom.boomify(err)
  }
}
