import cookieParser from "cookie-parser";
import findAllWallets from "../services/findAllWallet.mjs";
import findSingleWallet from "../services/findSingleWallet.mjs";
// import deleteWallet from "../models/Info.mjs";




export default function walletController() {
    const getAllWallets = async (req, res) => {
        res.send(findAllWallets());
    };
    const getOneWallet = async (req, res) => {
        const Details = req.params;
        const walletDetails = findSingleWallet(Details.walletId);
        res.send(walletDetails);
    };
    // const deleteSingleWallet = async (req, res) => {
    //     const Details = req.params;
    //     const response = deleteWallet(Details.walletId);
    //     res.send(response);
    // };

    return {
        getAllWallets,
        getOneWallet,
        // deleteSingleWallet,
    };
}
