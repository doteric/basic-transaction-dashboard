import React from 'react';
import './App.css';
import CurrencyExchangeRate from "./components/CurrencyExchangeRate";
import AddingTransaction from "./components/AddingTransaction";
import TransactionsList from "./components/TransactionsList";
import TopTransaction from "./components/TopTransaction";

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
