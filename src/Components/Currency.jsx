import { useState } from 'react';
import '../css/currency.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import axios from 'axios'
let baseURL = "https://api.freecurrencyapi.com/v1/latest";
let apiKey = "Your_API_KEY";

function Currency() {


  const [amount , setAmount] = useState();
  const [fromCurrency , setfromCurrency] = useState('USD');
  const [toCurrency , setToCurrency] = useState('TRY');
  const [result , setResult] = useState(0);


  const exchange = async () => {
    const response = await axios.get(`${baseURL}?apikey=${apiKey}&base_currency=${fromCurrency}`); //? api istegi
    const result = (response.data.data[toCurrency] * amount).toFixed(2); //* burada sunu yapmak istedik response ile gelen degerin icindeki axios dan kaynakalana ilk data yazisinin icindeki datanin icindeki bizim girmis oldugumuz para biriminin degerini almak icin "toCurrency" yazdik daha sonra bunu amount ile carptik ve daha sonra to fixed() ile sonunda kac adet basamagin gosterilecegini belirledik
    setResult(result);
  }



  return (
    <div className="currency-container">
      <div className='header-container'>
      <h4 className='header'>Güncel Döviz Kuru Hesaplayıcısı</h4>
      </div>

      <div>
        <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" className="amount"/>


        <select onChange={(e) => setfromCurrency(e.target.value)} className="from-currency-option">
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="TRY">TRY</option>
          <option value="RUB">RUB</option>
          <option value="AUD">AUD</option>
          <option value="CAD">CAD</option>
          <option value="CHF">CHF</option>
          <option value="CNY">CNY</option>
          <option value="CZK">CZK</option>
          <option value="DKK">DKK</option>
          <option value="GBP">GBP</option>
          <option value="KRW">KRW</option>
          <option value="NOK">NOK</option>
          <option value="PLN">PLN</option>
          <option value="PHP">PHP</option>
        </select>

        <FaLongArrowAltRight className='arrow-icon' />

        <select onChange={(e) => setToCurrency(e.target.value)}  className="to-currency-option">
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="TRY">TRY</option>
          <option value="RUB">RUB</option>
          <option value="AUD">AUD</option>
          <option value="CAD">CAD</option>
          <option value="CHF">CHF</option>
          <option value="CNY">CNY</option>
          <option value="CZK">CZK</option>
          <option value="DKK">DKK</option>
          <option value="GBP">GBP</option>
          <option value="KRW">KRW</option>
          <option value="NOK">NOK</option>
          <option value="PLN">PLN</option>
          <option value="PHP">PHP</option>
        </select>

        <input value={result} onChange={(e) => setResult(e.target.value)} type="number" className='amount'/>

        
      </div>

      <div className='button-container'>
      <button onClick={exchange} className='submit-button'>Çevir</button>
      </div>
    </div>
  )
}

export default Currency