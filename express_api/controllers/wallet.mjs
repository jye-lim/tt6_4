import cookieParser from "cookie-parser";
import WalletModels from "../models/findSingleWallet.mjs"




export default function walletController() {
    const getAllWallets = async (req, res) => {
        const Details = req.params;
        console.log(Details);
        res.json("hi");
    };
    const getOneWallet = async (req, res) => {
        const Details = req.params;
        const walletDetails = getWalletByID(Details.user, Details.walletId);
        res.send("walletDetails");
    };
    const createWallet = async (req, res) => {
        console.log("test1");
    };
    const deleteWallet = async (req, res) => {
        console.log("test1");
    };

    return {
        getAllWallets,
        getOneWallet,
        createWallet,
        deleteWallet,
    };
}
