const express = require("express");
const trxnsController = require("../controllers/transaction.js");

const router = express.Router();

router.get("/trxns", trxnsController.getAllTrxns);

router.get("/trxns/:trxnId", trxnsController.getOneTrxn);

router.post("/createTrxn", trxnsController.createTrxn);


module.exports = router;
