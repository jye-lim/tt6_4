"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("currencys", [
      {
        id: 1,
        walletId: 1,
        currency: "SGD",
        amount: 4294.5,
      },
      {
        id: 2,
        walletId: 1,
        currency: "CAD",
        amount: 5687.65,
      },
      {
        id: 3,
        walletId: 1,
        currency: "CNH",
        amount: 6063.14,
      },
      {
        id: 4,
        walletId: 1,
        currency: "EUR",
        amount: 8089.82,
      },
      {
        id: 5,
        walletId: 1,
        currency: "HKD",
        amount: 7862.36,
      },
      {
        id: 6,
        walletId: 1,
        currency: "JPY",
        amount: 5759.15,
      },
      {
        id: 7,
        walletId: 1,
        currency: "NZD",
        amount: 6943.26,
      },
      {
        id: 8,
        walletId: 1,
        currency: "NOK",
        amount: 4038.1,
      },
      {
        id: 9,
        walletId: 1,
        currency: "GBP",
        amount: 8287.33,
      },
      {
        id: 10,
        walletId: 1,
        currency: "SEK",
        amount: 5126.4,
      },
      {
        id: 11,
        walletId: 1,
        currency: "THB",
        amount: 147.62,
      },
      {
        id: 12,
        walletId: 1,
        currency: "USD",
        amount: 7331.77,
      },
      {
        id: 13,
        walletId: 2,
        currency: "SGD",
        amount: 485.19,
      },
      {
        id: 14,
        walletId: 2,
        currency: "CAD",
        amount: 2634.58,
      },
      {
        id: 15,
        walletId: 2,
        currency: "CNH",
        amount: 3893.29,
      },
      {
        id: 16,
        walletId: 2,
        currency: "EUR",
        amount: 3887.15,
      },
      {
        id: 17,
        walletId: 2,
        currency: "HKD",
        amount: 4065.34,
      },
      {
        id: 18,
        walletId: 2,
        currency: "JPY",
        amount: 1702.47,
      },
      {
        id: 19,
        walletId: 2,
        currency: "NZD",
        amount: 3299.38,
      },
      {
        id: 20,
        walletId: 2,
        currency: "NOK",
        amount: 7681.32,
      },
      {
        id: 21,
        walletId: 2,
        currency: "GBP",
        amount: 3720.37,
      },
      {
        id: 22,
        walletId: 2,
        currency: "SEK",
        amount: 4511.5,
      },
      {
        id: 23,
        walletId: 2,
        currency: "THB",
        amount: 6216.6,
      },
      {
        id: 24,
        walletId: 2,
        currency: "USD",
        amount: 9103.66,
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
