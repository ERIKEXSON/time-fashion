'use strict'

function setupCountry(countryModel) {
  async function createCountry(country) {
    const result = await countryModel.create(country)
    return result.toJSON()
  }
  async function updateCountry(uuid, country) {
    const cond = { where : { uuid } }
    const result = await countryModel.update(country, cond)
    return result ? countryModel.findOne(cond) :  new Error ('no se actualizo ningun registro')
  }
  async function deleteCountry(uuid) {
    const cond = { where : { uuid } }
    const result = await countryModel.destroy(cond)
    return result ? true : false
  }
  function findAllCountry(){
    return countryModel.findAll()
  }
  function findUuidCountry(uuid) {
    const cond = { where : { uuid } }
    return countryModel.findOne(cond)
  }
  return {
    createCountry,
    updateCountry,
    deleteCountry,
    findAllCountry,
    findUuidCountry
  }

}

module.exports = setupCountry