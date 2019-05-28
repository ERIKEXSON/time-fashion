'use strict'

function setupCompany (companyModel) {
  async function createCompany (company) {
    const result = await companyModel.create(company)
    return result.toJSON()
  }

  async function updateCompany (uuid, company) {
    const cond = { where: { uuid } }
    const result = await companyModel.update(company, cond)
    return result ? companyModel.findOne(cond) : new Error('no se actualizo ningun registro')
  }
  async function deleteCompany (uuid) {
    const cond = { where: { uuid } }
    const result = await companyModel.destroy(cond)
    return !!result
  }
  function findAllCompany () {
    return companyModel.findAll()
  }
  function findUuidCompany (uuid) {
    const cond = { where: { uuid } }
    return companyModel.findOne(cond)
  }
  return {
    createCompany,
    updateCompany,
    deleteCompany,
    findAllCompany,
    findUuidCompany
  }
}

module.exports = setupCompany
