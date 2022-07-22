// import db from "../models.inndex,mjs"

import { readFile } from "fs/promises";
const json = JSON.parse(
    await readFile(new URL("../test.json", import.meta.url))
);

const Wallets = json.Wallets;

export default function WalletModels() {
    const getWallet = (id) => {
        for (var i = 0; i < Wallets.length; i++) {
            if (id === Wallets[i].id) {
                console.log(Wallets[i]);
            }
        }
    };
    return {
        getWallet,
    };
}
