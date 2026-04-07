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
    await queryInterface.createTable('stocks', {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
      },
      product_id:{
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      size:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      actual_price:{
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
      },
      sell_price:{
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
      },
      total:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      edit_by:{
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

    await queryInterface.addIndex('stocks', ['product_id'], {
      name: 'idx_stocks_product_id'
    });

    await queryInterface.addIndex('stocks', ['edit_by'], {
      name: 'idx_stocks_edit_by'
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropIndex('stocks', 'idx_stocks_product_id');
    await queryInterface.dropIndex('stocks', 'idx_stocks_edit_by');
    await queryInterface.dropTable('stocks');
  }
};
