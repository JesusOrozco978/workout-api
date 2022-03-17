

const workOuts = (connection, Sequelize) => {
  return connection.define('workOuts', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    workoutName: { type: Sequelize.STRING },
    description: { type: Sequelize.TEXT },
  })
}

module.exports = workOuts
