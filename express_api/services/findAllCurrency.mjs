import { readFile } from "fs/promises";
const json = JSON.parse(
    await readFile(new URL("../test.json", import.meta.url))
);

const Currency = json.Currency;



export default function findAllCurrency() {
    return Currency;
}

