const boom = require('boom')
const Party = require('../model/party')

exports.getParty = async (req, reply) => {
  try {
    return await Party.find()
  } catch (err) {
    throw boom.boomify(err)
  }
}

exports.getSingleParty = async (req, reply) => {
  try {
    const id = req.params.id
    return await Party.findById(id).populate('party')
  } catch (err) {
    throw boom.boomify(err)
  }
}

exports.addParty = async (req, reply) => {
  try {
    const data = new Party(req.body)
    return data.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

exports.updateParty = async (req, reply) => {
  try {
    const id = req.params.id
    const party = req.body
    const { ...updateData } = party
    return await Party.findByIdAndUpdate(id, updateData, { new: true })
  } catch (err) {
    throw boom.boomify(err)
  }
}

exports.deleteParty = async (req, reply) => {
  try {
    const id = req.params.id
    return await Party.findByIdAndRemove(id)
  } catch (err) {
    throw boom.boomify(err)
  }
}
