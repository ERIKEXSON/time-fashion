'use strict'

function setupDirection(directionModel) {
  async function createDirection(direction) {
    const result = await directionModel.create(direction)
    return result.toJSON()
  }
  async function updateDirection(uuid, direction) {
    const cond = { where : { uuid } }
    const result = await directionModel.update(direction, cond)
    return result ? directionModel.findOne(cond) :  new Error ('no se actualizo ningun registro')
  }
  async function deleteDirection(uuid) {
    const cond = { where : { uuid } }
    const result = await directionModel.destroy(cond)
    return result ? true : false
  }
  function findAllDirection(){
    return directionModel.findAll()
  }
  function findUuidDirection(uuid) {
    const cond = { where : { uuid } }
    return directionModel.findOne(cond)
  }
  return {
    createDirection,
    updateDirection,
    deleteDirection,
    findAllDirection,
    findUuidDirection,
  }

}

module.exports = setupDirection