"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("exchangeRates", [
      {
        baseCurrency: "SGD",
        exhangeCurrency: "CAD",
        rate: 0.9255,
      },
      {
        baseCurrency: "SGD",
        exhangeCurrency: "CNH",
        rate: 4.7868,
      },
      {
        baseCurrency: "SGD",
        exhangeCurrency: "EUR",
        rate: 0.7086,
      },
      {
        baseCurrency: "SGD",
        exhangeCurrency: "HKD",
        rate: 5.583,
      },
      {
        baseCurrency: "SGD",
        exhangeCurrency: "JPY",
        rate: 97.5303,
      },
      {
        baseCurrency: "SGD",
        exhangeCurrency: "NZD",
        rate: 1.1612,
      },
      {
        baseCurrency: "SGD",
        exhangeCurrency: "NOK",
        rate: 7.2912,
      },
      {
        baseCurrency: "SGD",
        exhangeCurrency: "GBP",
        rate: 0.5974,
      },
      {
        baseCurrency: "SGD",
        exhangeCurrency: "SEK",
        rate: 7.5168,
      },
      {
        baseCurrency: "SGD",
        exhangeCurrency: "THB",
        rate: 25.7275,
      },
      {
        baseCurrency: "SGD",
        exhangeCurrency: "USD",
        rate: 0.7113,
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
