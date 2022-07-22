import React, { useState } from "react";


import './transaction.css'

function Transaction(){


        //React States
        
    const currency_options =[
        {currency: 'SGD', value: 1},
        {currency: 'CAD', value: 0.9255},
        {currency: 'CNH', value: 4.7868},
        {currency: 'EUR', value: 0.7086},
    ]
    const [value, setValue] = React.useState('CAD');

    const handleChange = (event) => {
        setValue(event.target.value);
        console.log(event)
    }

    const calculate=(amt,a1, a2)=>
        {
            return amt * (a1/a2);
        }

// JSX code for currency conversion
    const renderForm = (
        <div className="form">
            <form>
                <div className="input-container">
                    <label>Debit Amount</label>
                    <input type="text" name="debit_amount" />
                </div>
                <div>
                    <label>
                        Debit Currency
                        <select debit_currency_value={value} onChange={handleChange}>
                            {currency_options.map((debit_option)=>
                            <option debit_currency = {debit_option.value}>{debit_option.currency}</option>)}
                        </select>
                    </label>
                </div>
                <div className="input-container">
                    <label>Credit Amount</label>
                    <input type="text" name="credit_amount" />
                </div>
                <div className="input-container">
                    <label>Credit Currency</label>
                    <select credit_currency_value={value} onChange={handleChange}>
                            {currency_options.map((credit_option)=>
                            <option credit_currency = {credit_option.value}>{credit_option.currency}</option>)}
                    </select>
                </div>
                <div className="button-container">
                    <input type="submit" value = "convert" />
                </div>
            </form>
        </div>
        );

    return (
        <div>
            {renderForm}
        </div>
    )

}

export default Transaction;