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


    const allWalletController = walletController();
    app.get("/wallets", allWalletController.getAllWallets);

    app.get("/wallets/:walletId", allWalletController.getOneWallet);

    // app.post("/deleteWallet/:walletId", allWalletController.deleteWallet);

    const allExchangeRateController = ExchangeController();
    app.get("/exchange", allExchangeRateController.getAllExchangeRates);

    // app.get(
    //     "/exchange/:currency",
    //     CurrencyController.getExchangeRateByCurrency
    // );

    const allCurrencyController = CurrencyController();
    app.get("/currency", allCurrencyController.getAllCurrency);

}
