import cookieParser from "cookie-parser";
import findAllExchange from "../services/findAllExchange.mjs";
import findSingleExchange from "../services/findSingleWallet.mjs";

export default function exchangeController() {
    const getExchangeRateByCurrency = async (req, res) => {
        const Details = req.params;
        const ExchangeSingle = findSingleExchange(Details.userId);
        res.send(ExchangeSingle);
    };
    
    
    const getAllExchangeRates = async (req, res) => {
        const Exchange = findAllExchange();
        res.send(Exchange);
    };

    return {
        getExchangeRateByCurrency,
        getAllExchangeRates,
    };
}
