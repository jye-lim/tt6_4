"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: Sequelize.INTEGER,
      },
      username: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(20),
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      createdAt: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });

    await queryInterface.createTable("wallets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        unique: true,
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
    await queryInterface.createTable("exchangeRates", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: Sequelize.INTEGER,
      },

      baseCurrency: {
        allowNull: false,
        type: Sequelize.STRING(3),
      },

      exhangeCurrency: {
        allowNull: false,
        type: Sequelize.STRING(3),
      },

      rate: {
        allowNull: false,
        type: Sequelize.FLOAT(3),
      },

      createdAt: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });

    await queryInterface.createTable("transactions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: Sequelize.INTEGER,
      },
      walletId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "wallets",
          key: "id",
        },
      },
      debitId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },

      debitCurrency: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "exchangeRates",
          key: "id",
        },
      },

      debitAmount: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },

      creditId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },

      creditCurrency: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "exchangeRates",
          key: "id",
        },
      },

      creditAmount: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },

      description: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      createdBy: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      updatedAt: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedBy: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
    await queryInterface.createTable("currencys", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: Sequelize.INTEGER,
      },
      walletId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "wallets",
          key: "id",
        },
      },
      currency: {
        allowNull: false,
        type: Sequelize.STRING(3),
      },
      amount: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      createdAt: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      createdBy: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      updatedAt: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedBy: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("currencys");
    await queryInterface.dropTable("transactions");
    await queryInterface.dropTable("exchangeRates");
    await queryInterface.dropTable("wallets");
    await queryInterface.dropTable("users");
  },
};
