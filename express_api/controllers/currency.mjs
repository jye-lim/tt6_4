import cookieParser from "cookie-parser";
import findAllCurrency from "../services/findAllCurrency.mjs";

export default function CurrencyController() {
    const getAllCurrency = async (req, res) => {
        const Currency = findAllCurrency();
        res.send(Currency);
    };

    return {
        getAllCurrency,
    };
}



