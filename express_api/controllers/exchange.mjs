import cookieParser from "cookie-parser";
import findAllExchange from "../services/findAllExchange.mjs";
import findSingleExchange from "../services/findSingleWallet.mjs";

export default function exchangeController() {
    const getExchangeRateByCurrency = async (req, res) => {
        const Details = req.params;
        res.send(findSingleExchange(Details.userId));
    };
    const getAllExchangeRates = async (req, res) => {
        res.send(findAllExchange());
    };

    return {
        getExchangeRateByCurrency,
        getAllExchangeRates,
    };
}
