
import cookieParser from "cookie-parser";
import getExchangeRateByCurrency from "../models/findAllWallet.mjs";
import getAllExchangeRates from "../models/findSingleWallet.mjs";

export default function exchangeController() {
    const getExchangeRateByCurrency = async () => {
        console.log("test1");
    };
    const getAllExchangeRates = async () => {
        console.log("test1");
    };

    return {
        getExchangeRateByCurrency,
        getAllExchangeRates
    };
}