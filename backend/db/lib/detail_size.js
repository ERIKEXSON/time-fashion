'use strict'

function setupDetailSize(detailSizeModel) {
  async function createDetailSize (detailSize){
    console.log(detailSize)    
    const result  = await detailSizeModel.create(detailSize)
    return result.toJSON()
  }
  async function updateDetailSize(uuid, detailSize) {
    const cond = { where : { uuid } }
    const result = await detailSizeModel.update(detailSize, cond)
    return result ? detailSizeModel.findOne(cond) :  new Error ('no se actualizo ningun registro')
  }
  async function deleteDetailSize(uuid) {
    const cond = { where : { uuid } }
    const result = await detailSizeModel.destroy(cond)
    return result ? true : false
  }
  function findAllDetailSize(){
    return detailSizeModel.findAll()
  }
  function findUuidDetailSize(uuid) {
    const cond = { where : { uuid } }
    return brandModel.findOne(cond)
  }
  return {
    createDetailSize,
    updateDetailSize,
    deleteDetailSize,
    findAllDetailSize,
    findUuidDetailSize
  }
}

module.exports = setupDetailSize