'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable('addresses', {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
      },
      user_id:{
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      firstname:{
        type: Sequelize.STRING(60),
        allowNull: false,
      },
      lastname:{
        type: Sequelize.STRING(60),
        allowNull: false,
      },
      address:{
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      district:{
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      sub_district:{
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      phone:{
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      postcode:{
        type: Sequelize.STRING(5),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('NOW()')
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('NOW()')
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      }
    });

    await queryInterface.addIndex('addresses', ['user_id'], {
      name: 'idx_addresses_user'
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('addresses');
  }
};
