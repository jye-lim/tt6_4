"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("wallets", [
      {
        userId: 1,
        name: "Multi-Currency Account",
      },
      {
        userId: 1,
        name: "Travel Account",
      },
      {
        userId: 2,
        name: "Trading Account",
      },
      {
        userId: 3,
        name: "Multi-Currency Account",
      },
      {
        userId: 4,
        name: "Trip to Japan",
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
