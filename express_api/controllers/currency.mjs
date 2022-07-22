import cookieParser from "cookie-parser";
import findAllWallets from "../models/findAllWallet.mjs";
import findSingleWallet from "../models/findSingleWallet.mjs";

export default function trxnsController() {
    const getAllCurrency = async () => {
        console.log("test1");
    };

    return {
        getAllCurrency
    };
}
