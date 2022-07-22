import express from "express";
import trxnsController from "../controllers/transaction.mjs";
import walletController from "../controllers/wallet.mjs";
import ExchangeController from "../controllers/exchange.mjs";
import CurrencyController from "../controllers/currency.mjs";

const router = express.Router();

export default function routes(app) {
    const allTrxnsController = trxnsController();
    app.get("/trxns", allTrxnsController.getAllTrxns);

    app.get("/trxns/:trxnId", allTrxnsController.getOneTrxn);

    app.post("/createTrxn", allTrxnsController.createTrxn);


    const allWalletController = walletController();
    app.get("/:user/wallets", allWalletController.getAllWallets);

    app.get("/:user/wallets/:walletId", allWalletController.getOneWallet);

    app.post("/:user/createWallet", allWalletController.createWallet);

    app.post("/:user/deleteWallet", allWalletController.deleteWallet);

    const allExchangeRateController = ExchangeController();
    app.get("/exchange", allExchangeRate.getAllExchangeRates);

    app.get("/exchange/:currency", allExchangeRate.getExchangeRateByCurrency);

    const allCurrencyController = CurrencyController();
    app.get("/currency", allCurrencyController.getAllCurrency);

}
