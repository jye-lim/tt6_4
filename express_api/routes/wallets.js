const express = require("express");
const trxnsController = require("../controllers/wallet.js");

const router = express.Router();

router.get("/wallets", trxnsController.getAllWallets);

router.get("/wallets/:walletId", trxnsController.getOneWallet);

router.post("/createWallet", trxnsController.createWallet);

routes.post("/deleteWallet", trxnsController.deleteWallet);

module.exports = router;
