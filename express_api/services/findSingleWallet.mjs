// import db from "../models.inndex,mjs"

import { readFile } from "fs/promises";
const json = JSON.parse(
    await readFile(new URL("../test.json", import.meta.url))
);

const Wallets = json.Wallets;

export default function findSingleWallet(walletId) {
    const wallet = Wallets.filter(
        (wallet) => wallet.id == walletId
    );

    return wallet;
}