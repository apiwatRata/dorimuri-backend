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
    await queryInterface.createTable('payments', {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
      },
      transaction_id:{
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      paid_price:{
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
      },
      status:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      ref1:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      ref2:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      image_ref:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      is_confirm:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      confirm_by:{
        type: Sequelize.BIGINT,
      },
      owner_id:{
        type: Sequelize.BIGINT,
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
      }
    });

    await queryInterface.addIndex('payments', ['owner_id'], {
      name: 'idx_payments_owner_id'
    });

    await queryInterface.addIndex('payments', ['transaction_id'], {
      name: 'idx_payments_transaction_id'
    });

    await queryInterface.addIndex('payments', ['confirm_by'], {
      name: 'idx_payments_confirm_by'
    });

    await queryInterface.addIndex('payments', ['is_confirm'], {
      name: 'idx_payments_is_confirm'
    });

    await queryInterface.addIndex('payments', ['owner_id','status'], {
      name: 'idx_payments_owner_status'
    });

    await queryInterface.addIndex('payments', ['status'], {
      name: 'idx_payments_status'
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropIndex('payments', 'idx_payments_owner_id');
    await queryInterface.dropIndex('payments', 'idx_payments_transaction_id');
    await queryInterface.dropIndex('payments', 'idx_payments_confirm_by');
    await queryInterface.dropIndex('payments', 'idx_payments_is_confirm');
    await queryInterface.dropIndex('payments', 'idx_payments_owner_status');
    await queryInterface.dropIndex('payments', 'idx_payments_status');
    await queryInterface.dropTable('payments');
  }
};
