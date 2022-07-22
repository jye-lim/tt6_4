"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        username: "user101",
        password: "123456",
        name: "Jacky",
      },
      {
        username: "user102",
        password: "123456",
        name: "Jane",
      },
      {
        username: "user103",
        password: "123456",
        name: "Tom",
      },
      {
        username: "user104",
        password: "123456",
        name: "Helen",
      },
      {
        username: "user105",
        password: "123456",
        name: "Mark",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
