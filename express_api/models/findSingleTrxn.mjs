import { readFile } from "fs/promises";
const json = JSON.parse(
    await readFile(new URL("../test.json", import.meta.url))
);

const Transactions = json.Transactions;

export default function findSingleTransactions(trxnId) {
    const trxn = Transactions.filter(
        (trxn) => trxn.id == trxnId
    );

    return trxn;
}
