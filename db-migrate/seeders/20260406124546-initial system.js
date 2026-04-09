'use strict';
const dayjs = require('dayjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('roles',[{
      name: 'Admin',
      permission: JSON.stringify({users: {r: true, w: true}}),
      edit_by : 0
    }], {});

    await queryInterface.bulkInsert('users',[{
      username: 'admin1',
      birth_date: dayjs('1999-06-30').toDate(),
      email : 'admin1@dorimuri.com',
      password: '$2a$06$2UtQxOyj6nM08xk0U9RbOuScrIjFkgitT6u.X9XxWX71KW2ASHpRC',
      sex: 0,
      role_id: 1
    }], {});

    await queryInterface.bulkInsert('user_tokens',[{
      user_id: 1
    }], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('roles', {
      name: 'Admin'
    }, {});

    await queryInterface.bulkDelete('users', {
      username: 'admin1'
    }, {});

    await queryInterface.bulkDelete('user_tokens', {
      user_id: 1
    }, {});
  }
};
