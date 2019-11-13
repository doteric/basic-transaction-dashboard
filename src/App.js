import React from 'react';
import './App.css';
import CurrencyExchangeRate from "./components/CurrencyExchangeRate/CurrencyExchangeRate";
import AddingTransaction from "./components/AddingTransaction/AddingTransaction";
import TransactionsList from "./components/TransactionsList/TransactionsList";
import TopTransaction from "./components/TopTransaction/TopTransaction";

function App() {
  return (
    <div className="App">
      <div className="flex">
        <div>
          <CurrencyExchangeRate/>
          <AddingTransaction/>
          <TransactionsList/>
        </div>
        <TopTransaction/>
      </div>
    </div>
  );
}

export default App;
