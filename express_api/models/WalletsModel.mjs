export default function initWalletsModel(sequelize, DataTypes) {
  return sequelize.define(
    "wallets",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        allowNull: false,
        unique: true,
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id",
        },
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING, 
      },
    },
    {
      timestamps: false,
    },
  );
}
