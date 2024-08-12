'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('banner', [{
      description: "hello world",
      timer: 36,
      link: "https://www.github.com/Agniva007"
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('banner', null, {});
  }
};