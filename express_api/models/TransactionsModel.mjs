export default function initTransactionsModel(sequelize, DataTypes) {
  return sequelize.define("transactions", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      type: DataTypes.INTEGER,
    },
    walletId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "wallets",
        key: "id",
      },
    },
    debitId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },

    debitCurrency: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "exchangeRates",
        key: "id",
      },
    },

    debitAmount: {
      allowNull: false,
      type: DataTypes.FLOAT,
    },

    creditId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },

    creditCurrency: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "exchangeRates",
        key: "id",
      },
    },

    creditAmount: {
      allowNull: false,
      type: DataTypes.FLOAT,
    },

    description: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: "TIMESTAMP",
      defaultValue: DataTypes.literal("CURRENT_TIMESTAMP"),
    },
    createdBy: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    updatedAt: {
      type: "TIMESTAMP",
      defaultValue: DataTypes.literal("CURRENT_TIMESTAMP"),
    },
    updatedBy: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  });
}
