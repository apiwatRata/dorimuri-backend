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
    await queryInterface.createTable('orders', {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
      },
      stock_id:{
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      amount:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      discount:{
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
        defaultValue: 0
      },
      total_price:{
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
      },
      promotion_id:{
        type: Sequelize.BIGINT,
        allowNull: true,
      },
      transaction_id:{
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      owner_id:{
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      status:{
        type: Sequelize.STRING,
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

    await queryInterface.addIndex('orders', ['stock_id'], {
      name: 'idx_orders_stock_id'
    });

    await queryInterface.addIndex('orders', ['owner_id'], {
      name: 'idx_orders_owner_id'
    });

    await queryInterface.addIndex('orders', ['transaction_id'], {
      name: 'idx_orders_transaction_id'
    });

    await queryInterface.addIndex('orders', ['promotion_id'], {
      name: 'idx_orders_promotion_id'
    });

    await queryInterface.addIndex('orders', ['owner_id','status'], {
      name: 'idx_orders_owner_status'
    });

    await queryInterface.addIndex('orders', ['status'], {
      name: 'idx_orders_status'
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropIndex('orders', 'idx_orders_stock_id');
    await queryInterface.dropIndex('orders', 'idx_orders_owner_id');
    await queryInterface.dropIndex('orders', 'idx_orders_transaction_id');
    await queryInterface.dropIndex('orders', 'idx_orders_promotion_id');
    await queryInterface.dropIndex('orders', 'idx_orders_owner_status');
    await queryInterface.dropIndex('orders', 'idx_orders_status');
    await queryInterface.dropTable('orders');
  }
};
