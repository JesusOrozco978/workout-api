const Sequelize = require('sequelize')
const WorkOutModel = require('./workOuts')
const EquipmentsModel = require('./equipments')
const bodyPartsModel = require('./bodyParts')
const allConfigs = require('../config/sequelize')
const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect
})

const Workout = WorkOutModel(connection, Sequelize)
const Equipments = EquipmentsModel(connection, Sequelize, Workout)
const BodyParts = bodyPartsModel(connection, Sequelize, Workout)

Equipments.belongsTo(Workout)
Workout.hasMany(Equipments)
BodyParts.belongsTo(Workout)
Workout.hasMany(BodyParts)

module.exports = {
  Workout, Equipments, BodyParts, Sequelize,
}
