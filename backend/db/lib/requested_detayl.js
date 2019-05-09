'use strict'

function setupRequesteddetayl(requesteddetaylModel) {
  async function createRequesteddetayl (requesteddetayl){
    const result  = await requesteddetaylModel.create(requesteddetayl)
    return result.toJSON()
  }

  async function updateRequesteddetayl(uuid, requesteddetayl) {
    const cond = { where : { uuid } }
    const result = await requesteddetaylModel.update(requesteddetayl, cond)
    return result ? requesteddetaylModel.findOne(cond) :  new Error ('no se actualizo ningun registro')
  }
  async function deleteRequesteddetayl(uuid) {
    const cond = { where : { uuid } }
    const result = await requesteddetaylModel.destroy(cond)
    return result ? true : false
  }
  function findAllRequesteddetayl(){
    return requesteddetaylModel.findAll()
  }
  function findUuidRequesteddetayl(uuid) {
    const cond = { where : { uuid } }
    return requesteddetaylModel.findOne(cond)
  }
  return {
    createRequesteddetayl,
    updateRequesteddetayl,
    deleteRequesteddetayl,
    findAllRequesteddetayl,
    findUuidRequesteddetayl
  }
}

module.exports = setupRequesteddetayl