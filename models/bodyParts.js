const bodyParts = (connection, Sequelize, workOuts) => {
  return connection.define('bodyParts', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    body: { type: Sequelize.STRING },
    workOutId: { type: Sequelize.INTEGER, references: { model: workOuts, key: 'id' } },
  })
}

module.exports = bodyParts
