'use strict'

function setupDepartment(departmentModel) {
   function findAllDepartment(){
    return departmentModel.findAll()
    }
  function findUuidDepartment(uuid) {
    const cond = { where : { uuid } }
    return departmentModel.findOne(cond)
  }
  return {
    findAllDepartment,
    findUuidDepartment
  }
}

module.exports = setupDepartment