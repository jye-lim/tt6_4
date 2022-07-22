export default function initExchangeratesModel(sequelize, DataTypes) {
  return sequelize.define(
    "exchangeRates",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
      },

      baseCurrency: {
        allowNull: false,
        type: DataTypes.STRING(3),
      },

      exhangeCurrency: {
        allowNull: false,
        type: DataTypes.STRING(3),
      },

      rate: {
        allowNull: false,
        type: DataTypes.FLOAT(3),
      },
    },
    {
      timestamps: false,
    },
  );
}
