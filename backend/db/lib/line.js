'use strict'

function setupLine (lineModel) {
  async function createLine (line) {
    const result = await lineModel.create(line)
    return result.toJSON()
  }
  async function updateLine (uuid, line) {
    const cond = { where: { uuid } }
    const result = await lineModel.update(line, cond)
    return result ? lineModel.findOne(cond) : new Error('no se actualizo ningun registro')
  }
  async function deleteLine (uuid) {
    const cond = { where: { uuid } }
    const result = await lineModel.destroy(cond)
    return !!result
  }
  function findAllLine () {
    return lineModel.findAll()
  }
  function findUuidLine (uuid) {
    const cond = { where: { uuid } }
    return lineModel.findOne(cond)
  }
  return {
    createLine,
    updateLine,
    deleteLine,
    findAllLine,
    findUuidLine
  }
}

module.exports = setupLine
