'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('workOuts', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      workoutName: { type: Sequelize.STRING },
      description: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      },
      deletedAt: { type: Sequelize.DATE },

    })

    await queryInterface.createTable('equipments', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      equipmentName: { type: Sequelize.STRING },
      workOutId: { type: Sequelize.STRING, references: { model: 'workOuts', key: 'id' } },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      },
      deletedAt: { type: Sequelize.DATE },

    })

    await queryInterface.createTable('bodyParts', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      body: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      },
      deletedAt: { type: Sequelize.DATE },

    })

    return queryInterface.createTable('pushOrPulls', {
      push: { type: Sequelize.STRING, references: { model: 'workOuts', key: 'id' } },
      pull: { type: Sequelize.STRING, references: { model: 'workOuts', key: 'id' } },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      },
      deletedAt: { type: Sequelize.DATE },

    })
  },

  async down(queryInterface) {
    await queryInterface.dropTable('workOuts')
    await queryInterface.dropTable('equipments')
    await queryInterface.dropTable('bodyParts')

    return queryInterface.dropTable('pushOrPull')
  }
}
