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
    await queryInterface.createTable('transactions', {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
      },
      total_price:{
        type: Sequelize.NUMBER,
        allowNull: false,
      },
      discount:{
        type: Sequelize.NUMBER,
        allowNull: false,
        defaultValue: 0
      },
      paid_price:{
        type: Sequelize.NUMBER,
        allowNull: false,
      },
      status:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      owner_id:{
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      address_id:{
        type: Sequelize.BIGINT,
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
      }
    });

    await queryInterface.addIndex('transactions', ['owner_id'], {
      name: 'idx_transactions_owner_id'
    });

    await queryInterface.addIndex('transactions', ['address_id'], {
      name: 'idx_transactions_address_id'
    });

    await queryInterface.addIndex('transactions', ['status'], {
      name: 'idx_transactions_status'
    });

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('transactions');
  }
};
