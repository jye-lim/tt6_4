import { readFile } from "fs/promises";
const json = JSON.parse(
    await readFile(new URL("../test.json", import.meta.url))
);

const ExchangeRate = json.ExchangeRate;


export default function findAllExchange(currency) {
    return Exchange;
}

