import cookieParser from "cookie-parser";
import findAllWallets from "../models/findAllWallet.mjs";
import findSingleWallet from "../models/findSingleWallet.mjs";
// import deleteSingleWallet from "../models/deleteSingleWallet.mjs";




export default function walletController() {
    const getAllWallets = async (req, res) => {
        const Details = req.params;
        const userId = Details.user;
        res.send(findAllWallets(userId));
    };
    const getOneWallet = async (req, res) => {
        const Details = req.params;
        const walletDetails = findSingleWallet(Details.user, Details.walletId);
        res.send(walletDetails);
    };
    // const deleteWallet = async (req, res) => {
    //     const Details = req.params;
    //     const response = deleteWallet(Details.user, Details.walletId);
    //     res.send(response);
    // };

    return {
        getAllWallets,
        getOneWallet,
        // deleteWallet,
    };
}
