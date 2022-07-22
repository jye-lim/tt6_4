import sequelizePackage from "sequelize";
import allConfig from "../config/config.js";

import initCurrencysModel from "./CurrencysModel.mjs";
import initExchangeratesModel from "./ExchangeRatesModel.mjs";
import initTransactionsModel from "./TransactionsModel.mjs";
import initUsersModel from "./UsersModel.mjs";
import initWalletsModel from "./WalletsModel.mjs";

const { Sequelize } = sequelizePackage;
const env = "development";
const config = allConfig[env];

const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

db.Currency = initCurrencysModel(sequelize, Sequelize.DataTypes);
db.ExchangeRate = initExchangeratesModel(sequelize, Sequelize.DataTypes);
db.Transactions = initTransactionsModel(sequelize, Sequelize.DataTypes);
db.Users = initUsersModel(sequelize, Sequelize.DataTypes);
db.Wallets = initWalletsModel(sequelize, Sequelize.DataTypes);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
