import db from "../models/index.mjs";

export const Info = async () => {
  return {
    Currency: await db.Currency.findAll(),
    ExchangeRate: await db.ExchangeRate.findAll(),
    Transactions: await db.Transactions.findAll(),
    Users: await db.Users.findAll(),
    Wallets: await db.Wallets.findAll(),
  };
};

export const deleteWallet = async (walletId) => {
  db.Wallets.destroy({
    where: {
      id: walletId,
    },
  });
};
