const boom = require('boom')
const Constituency = require('../model/constituency')
const config = require('../config')

exports.getConstituency = async (req, reply) => {
  try {
    return await Constituency.find()
      .populate('party.id')
  } catch (err) {
    throw boom.boomify(err)
  }
}

exports.getSingleConstituency = async (req, reply) => {
  try {
    const id = req.params.id
    return await Constituency.findById(id)
      .populate('party.id')
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
    return await Constituency.findByIdAndUpdate(id, { image: path }, { new: true })
  } catch (err) {
    throw boom.boomify(err)
  }
}

exports.getImage = async (req, reply) => {
  try {
    const id = req.params.id
    let data = await Constituency.findById(id)
    reply.sendFile(data.image)
  } catch (err) {
    throw boom.boomify(err)
  }
}

// exports.upload = async (req, reply) => {
//   try {
//     const id = req.params.id

//     const file = req.raw.files
//     let fileArr = []
//     for (let key in file) {
//        fileArr.push({
//          name: file[key].name,
//          mimetype: file[key].mimetype
//     })
//     const dir = config.imgDir + file[key].name

//     file[key].mv(dir, (err) => {
//        if (err) {
//          console.log(err)
//        }

//        reply.send('File uploaded!')
//      })
//      reply.send(`${__dirname}/uploads/${file[key].name}`, file)
//     }
//   } catch (err) {
//     throw boom.boomify(err)
//   }
// }

// exports.addParty = async (req, reply) => {
//   try {
//     const id = req.params.id
//     const party = req.body
//     let data = await Constituency.findById(id)
//     let dataModel = new Constituency(data)
//     if (!data.party.includes(party.id)) {
//       dataModel.party.push(party)
//       dataModel.updatedAt = new Date()
//       return dataModel.save()
//     }
//     return 'Party exist'
//   } catch (err) {
//     throw boom.boomify(err)
//   }
// }

// exports.deleteParty = async (req, reply) => {
//   try {
//     const id = req.params.id
//     const party = req.body
//     let data = new Constituency(await Constituency.findById(id))
//     if (data.party.includes(party.id)) {
//       data.party.pull(party)
//       data.updatedAt = new Date()
//       return data.save()
//     }
//     return 'already exist'
//   } catch (err) {
//     throw boom.boomify(err)
//   }
// }
