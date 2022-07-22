export default function initCurrencysModel(sequelize, DataTypes) {
  return sequelize.define("currencys", {
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
    currency: {
      allowNull: false,
      type: DataTypes.STRING(3),
    },
    amount: {
      allowNull: false,
      type: DataTypes.FLOAT,
    },
    createdAt: {
      type: "TIMESTAMP",
    },
    createdBy: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    updatedAt: {
      type: "TIMESTAMP",
    },
    updatedBy: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  });
}
