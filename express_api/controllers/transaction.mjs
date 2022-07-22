import cookieParser from "cookie-parser";
import findAllWallets from "../models/findAllTrxns.mjs";
import findSingleWallet from "../models/findSingleTrxn.mjs";

export default function trxnsController() {
    const getAllTrxns = async (req, res) => {
        const Details = req.params;
        const userId = Details.user;
        res.send(findAllTransactions(userId));
    };
    const getOneTrxn = async (req, res) => {
        const Details = req.params;
        res.send(findSingleTransactions(Details.user, Details.trxnId));
    }

    return {
        getAllTrxns,
        getOneTrxn,
    };
}
