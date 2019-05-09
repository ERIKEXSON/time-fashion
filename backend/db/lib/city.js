'use strict'

function setupCity(cityModel) {
  //async function createCity(city) {
    //const result = await cityModel.create(city)
    //return result.toJSON()
  //}
  //async function updateCity(uuid, city) {
    //const cond = { where : { uuid } }
    //const result = await cityModel.update(city, cond)
    //return result ? cityModel.findOne(cond) :  new Error ('no se actualizo ningun registro')
  //}
  //async function deleteCity(uuid) {
    //const cond = { where : { uuid } }
    //const result = await cityModel.destroy(cond)
    //return result ? true : false
  //}
  function findAllCity(){
    return cityModel.findAll()
  }
  function findUuidCity(uuid) {
    const cond = { where : { uuid } }
    return cityModel.findOne(cond)
  }
  return {
    //createCity,
    //updateCity,
    //deleteCity,
    findAllCity,
    findUuidCity
  }

}

module.exports = setupCity