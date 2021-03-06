const boom = require('boom')
const Candidate = require('../model/candidate')
const config = require('../config')

exports.getCandidate = async (req, reply) => {
  try {
    return await Candidate.find()
  } catch (err) {
    throw boom.boomify(err)
  }
}

exports.getCandidateById = async (req, reply) => {
  try {
    const id = req.params.id
    return await Candidate.findById(id)
      .populate('constituency')
      .populate('party')
  } catch (err) {
    throw boom.boomify(err)
  }
}

exports.getCandidateByConstituency = async (req, reply) => {
  try {
    const id = req.params.id
    return await Candidate.find({ constituency: id })
  } catch (err) {
    throw boom.boomify(err)
  }
}

exports.getCandidateByParty = async (req, reply) => {
  try {
    const id = req.params.id
    return await Candidate.find({ party: id })
  } catch (err) {
    throw boom.boomify(err)
  }
}

exports.addCandidate = async (req, reply) => {
  try {
    const data = new Candidate(req.body)
    data.createdAt = new Date()
    data.updatedAt = new Date()
    return data.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

exports.updateCandidate = async (req, reply) => {
  try {
    const id = req.params.id
    const candidate = req.body
    candidate.updatedAt = new Date()
    const { ...updateData } = candidate
    return await Candidate.findByIdAndUpdate(id, updateData, { new: true })
  } catch (err) {
    throw boom.boomify(err)
  }
}

exports.deleteCandidate = async (req, reply) => {
  try {
    const id = req.params.id
    return await Candidate.findByIdAndRemove(id)
  } catch (err) {
    throw boom.boomify(err)
  }
}

exports.uploadImage = async (req, reply) => {
  try {
    const id = req.params.id

    const file = req.raw.files
    const path = new Date().getTime() + file['image'].name
    const dir = `${config.imgDir}/uploads/${path}`

    await file['image'].mv(dir, (err) => {
      if (err) {
        return {
          status: 'upload Failed',
          error: err
        }
      }
    })
    return await Candidate.findByIdAndUpdate(id, { image: path }, { new: true })
  } catch (err) {
    throw boom.boomify(err)
  }
}

exports.getImage = async (req, reply) => {
  try {
    const id = req.params.id
    let data = await Candidate.findById(id)
    reply.sendFile(data.image)
  } catch (err) {
    throw boom.boomify(err)
  }
}
