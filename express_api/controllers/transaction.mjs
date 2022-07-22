import cookieParser from "cookie-parser";
import findAllTransactions from "../services/findAllTrxns.mjs";
import findSingleTransactions from "../services/findSingleTrxn.mjs";

export default function trxnsController() {
    const getAllTrxns = async (req, res) => {
        res.send(findAllTransactions());
    };
    const getOneTrxn = async (req, res) => {
        const Details = req.params;
        res.send(findSingleTransactions(Details.trxnId));
    }

    return {
        getAllTrxns,
        getOneTrxn,
    };
}