'use strict'

function setupCancellation(cancellationModel) {
  async function createCancellation (cancellation){
    const result  = await cancellationModel.create(cancellation)
    return result.toJSON()
  }

  async function updateCancellation(uuid, cancellation) {
    const cond = { where : { uuid } }
    const result = await cancellationModel.update(cancellation, cond)
    return result ? cancellationModel.findOne(cond) :  new Error ('no se actualizo ningun registro')
  }
  async function deleteCancellation(uuid) {
    const cond = { where : { uuid } }
    const result = await cancellationModel.destroy(cond)
    return result ? true : false
  }
  function findAllCancellation(){
    return cancellationModel.findAll()
  }
  function findUuidCancellation(uuid) {
    const cond = { where : { uuid } }
    return cancellationModel.findOne(cond)
  }
  return {
    createCancellation,
    updateCancellation,
    deleteCancellation,
    findAllCancellation,
    findUuidCancellation
  }
}

module.exports = setupCancellation