const boom = require('boom')
const Constituency = require('../model/constituency')

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
    return await Constituency.findById(id).populate('party')
  } catch (err) {
    throw boom.boomify(err)
  }
}

exports.addConstituency = async (req, reply) => {
  try {
    const data = new Constituency(req.body)
    data.createdAt = new Date()
    data.updatedAt = new Date()
    return data.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

exports.updateConstituency = async (req, reply) => {
  try {
    const id = req.params.id
    const constituency = req.body
    constituency.updatedAt = new Date()
    const { ...updateData } = constituency
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

exports.addParty = async (req, reply) => {
  try {
    const id = req.params.id
    const party = req.body
    let data = new Constituency(await Constituency.findById(id))
    if (data.party.includes(party.id)) {
      data.party.push(party)
      data.updatedAt = new Date()
      return data.save()
    }
    return 'already exist'
  } catch (err) {
    throw boom.boomify(err)
  }
}

exports.deleteParty = async (req, reply) => {
  try {
    const id = req.params.id
    const party = req.body
    let data = new Constituency(await Constituency.findById(id))
    if (data.party.includes(party.id)) {
      data.party.push(party)
      data.updatedAt = new Date()
      return data.save()
    }
    return 'already exist'
  } catch (err) {
    throw boom.boomify(err)
  }
}
