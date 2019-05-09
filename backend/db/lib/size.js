'use strict'

function setupSize(sizeModel) {
  async function createSize(size) {
    const result = await sizeModel.create(size)
    return result.toJSON()
  }
  async function updateSize(uuid, size) {
    const cond = { where : { uuid } }
    const result = await sizeModel.update(size, cond)
    return result ? sizeModel.findOne(cond) :  new Error ('no se actualizo ningun registro')
  }
  async function deleteSize(uuid) {
    const cond = { where : { uuid } }
    const result = await sizeModel.destroy(cond)
    return result ? true : false
  }
  function findAllSize(){
    return sizeModel.findAll()
  }
  function findUuidSize(uuid) {
    const cond = { where : { uuid } }
    return sizeModel.findOne(cond)
  }
  return {
    createSize,
    updateSize,
    deleteSize,
    findAllSize,
    findUuidSize
  }

}

module.exports = setupSize