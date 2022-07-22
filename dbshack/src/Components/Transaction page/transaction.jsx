import React from "react";
import { useState, useEffect } from "react";

import "./transaction.css";

const Transaction = () => {
  const [Info, setInfo] = useState();
  const [Render, setRender] = useState();
  const [TransactionForm, setTransactionForm] = useState({
    debit_amount: 0,
    debit_currency_value: "SGD",
    credit_currency_value: "SGD",
  });

  const currency_options = [
    { currency: "SGD", value: 1 },
    { currency: "CAD", value: 0.9255 },
    { currency: "CNH", value: 4.7868 },
    { currency: "EUR", value: 0.7086 },
  ];
  const [value, setValue] = React.useState("CAD");

  const calculate = (amt, a1, a2) => {
    return amt * (a1 / a2);
  };

  function details(e) {
    const { value, name } = e.target;
    setTransactionForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // JSX code for currency conversion

  useEffect(() => {
    console.log(TransactionForm);
    const debitCurrency = currency_options.filter((option) => {
      return option.currency == TransactionForm.debit_currency_value;
    })[0].value;

    const creditCurrency = currency_options.filter((option) => {
      return option.currency == TransactionForm.credit_currency_value;
    })[0].value;

    setRender(
      <div className="form">
        <form>
          <div className="input-container">
            <label>Debit Amount</label>
            <input
              type="text"
              name="debit_amount"
              value={TransactionForm.debit_amount}
              onInput={details}
            />
          </div>
          <div>
            <label>
              Debit Currency
              <select
                name="debit_currency_value"
                debit_currency_value={value}
                onChange={details}
              >
                {currency_options.map((debit_option) => (
                  <option debit_currency={debit_option.value}>
                    {debit_option.currency}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="input-container">
            <label>Credit Amount</label>
            <input
              type="text"
              name="credit_amount"
              value={calculate(
                TransactionForm.debit_amount,
                debitCurrency,
                creditCurrency,
              )}
            />
          </div>
          <div className="input-container">
            <label>Credit Currency</label>
            <select
              name="credit_currency_value"
              credit_currency_value={value}
              onChange={details}
            >
              {currency_options.map((credit_option) => (
                <option credit_currency={credit_option.value}>
                  {credit_option.currency}
                </option>
              ))}
            </select>
          </div>
          <div className="button-container">
            <input type="submit" value="convert" />
          </div>
        </form>
      </div>,
    );
  }, [TransactionForm]);

  return Render;
};

export default Transaction;
