'use strict'

function setupDepartment (departmentModel) {
  // async function createDepartment(department) {
  // const result = await departmentModel.create(department)
  // return result.toJSON()
  // }
  // async function updateDepartment(uuid, department) {
  // const cond = { where : { uuid } }
  // const result = await departmentModel.update(department, cond)
  // return result ? departmentModel.findOne(cond) :  new Error ('no se actualizo ningun registro')
  // }
  // async function deleteDepartment(uuid) {
  // const cond = { where : { uuid } }
  // const result = await departmentModel.destroy(cond)
  // return result ? true : false
  // }
  function findAllDepartment () {
    return departmentModel.findAll()
  }
  function findUuidDepartment (uuid) {
    const cond = { where: { uuid } }
    return departmentModel.findOne(cond)
  }
  return {
    // createDepartment,
    // updateDepartment,
    // deleteDepartment,
    findAllDepartment,
    findUuidDepartment
  }
}
module.exports = setupDepartment
