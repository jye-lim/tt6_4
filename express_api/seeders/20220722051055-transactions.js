"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("transactions", [
      {
        walletId: 1,
        debitId: 4,
        debitCurrency: "EUR",
        debitAmount: 97.19,
        creditId: 8,
        creditCurrency: "NOK",
        creditAmount: 1000.0,
        description: "",
        created_at: "2021-11-04 16:00:00",
        created_by: "Jacky",
        updated_at: "2021-11-06 16:00:00",
        updated_by: "Jacky",
      },
      {
        walletId: 2,
        debitId: 13,
        debitCurrency: "SGD",
        debitAmount: 102.53,
        creditId: 18,
        creditCurrency: "JPY",
        creditAmount: 10000.0,
        description: "allowance for winter school",
        created_at: "2021-11-05 16:00:00",
        created_by: "Jane",
        updated_at: "2021-11-05 16:00:00",
        updated_by: null,
      },
      {
        walletId: 2,
        debitId: 20,
        debitCurrency: "NOK",
        debitAmount: 250.0,
        creditId: 15,
        creditCurrency: "CNH",
        creditAmount: 164.13,
        description: "trip to china",
        created_at: "2021-11-05 16:00:00",
        created_by: "Jane",
        updated_at: "2021-11-06 16:00:00",
        updated_by: "Jane",
      },
      {
        walletId: 1,
        debitId: 6,
        debitCurrency: "JPY",
        debitAmount: 685577.82,
        creditId: 12,
        creditCurrency: "USD",
        creditAmount: 5000.0,
        description: "to transfer to securities account wallet",
        created_at: "2021-11-06 16:00:00",
        created_by: "Jacky",
        updated_at: "2021-11-06 16:00:00",
        updated_by: null,
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