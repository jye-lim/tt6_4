import React from "react";
import moment from "moment";
import '../index.css'
import BackButton from "../components/BackButton";

function Wallet() {
    var created_at = "2021-11-04 16:00:00"
    var name = "Multi-Currency Account";
    var amount = 123
    var currency = "SGD"
    var debit_amount = 111
    var debit_currency = "EUR"
    var credit_amount = 222
    var credit_currency = "NOK"
    var mydata = JSON.parse(data);
    alert(mydata[0].name);
    alert(mydata[0].age);
    alert(mydata[1].name);
    alert(mydata[1].age);
    
    componentDidMount() {
        var url = "https://demo8192935.mockable.io/mockApi";
        fetch(url)
          .then(response => {
            return response.json();
          })
          .then(d => {
            this.setState({ currency: c });
            console.log("state", this.state.clouds)
          })
          .catch(error => console.log(error))
      }
    
  return (
    <div className="walletdashboard">
    <script type="text/javascript" src="javascript.js"></script>
        <BackButton/>
        <p>Name of wallet: {name}</p>
        <button className="convertcurrencybtn">Convert Currency</button>
        <button className="deletewallet">Delete Wallet</button>
        <div className="balandtrans">
            <div className="baldiv">
                <p className="baltitle">Balance</p>
                <div className="balcontent">
                    <div className="amtcontent">
                        <p>Amount</p>
                        <p>{amount}</p>
                    </div>
                    <div className="curcontent">
                        <p>Currency</p>
                        <p>{currency}</p>
                    </div>
                </div>
            </div>
            <div className="transdiv">
                <p className="transtitle">Transactions</p>
                <div className="transcontent">
                    <div className="transamtcontent">
                        <p>Amount</p>
                        <p>{debit_amount}</p>
                    </div>
                    <div className="transcurcontent">
                        <p>Currency</p>
                        <p>{debit_currency}</p>
                    </div>
                    <img src="../images/arrow.png"/>
                    <div className="transamtcontent">
                        <p>Amount</p>
                        <p>{credit_amount}</p>
                    </div>
                    <div className="transcurcontent">
                        <p>Currency</p>
                        <p>{credit_currency}</p>
                    </div>
                    <div className="datecontent">
                        <p>Date</p>
                        <p>{moment(created_at).format('D/MM/Y')}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Wallet;
