import cookieParser from "cookie-parser";
import findAllWallets from "../services/findAllWallet.mjs";
import findSingleWallet from "../services/findSingleWallet.mjs";

export default function trxnsController() {
    const getAllCurrency = async (req, res) => {
        const Details = req.params;
        res.send(findAllTransactions(Details.userId));
    };

    return {
        getAllCurrency,
    };
}



