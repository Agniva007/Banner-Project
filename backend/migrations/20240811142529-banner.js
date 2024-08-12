'use strict';
const {v4:uuidv4} = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('banner', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
        field: 'ID'
      },
      uuid: {
        type: Sequelize.UUID,
        defaultValue: uuidv4(),
        field: 'UUID'
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
        field: 'DESCRIPTION'
      },
      timer: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'TIMER'
      },
      link: {
        type: Sequelize.STRING,
        allowNull: true,
        field: 'LINK',
      },
      is_visible: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        field: 'IS_VISIBLE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        field: 'CREATED_DT',
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        field: 'UPDATED_DT',
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('banner');
  }
};
