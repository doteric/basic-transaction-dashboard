import React, { Component } from 'react'
import './transactionslist.css'
import { connect } from 'react-redux'

class TransactionsList extends Component {
  removeTransaction(id) {
    this.props.removeTransaction(id);
  }

  render() {
    const { transactions, eurToPlnRate } = this.props;
    const transactionsSum = transactions.reduce((obj1, obj2) => {
      return {
        name: "Total",
        euro: obj1.euro + obj2.euro
      };
    }, {euro: 0.00}).euro.toFixed(2);
    return (
      <div>
        <div className="transactionrow transactionheader">
          <div className="tname">TOTAL</div>
          <div className="tlp">Amount: {transactions.length}</div>
          <div className="teuro">{transactionsSum}</div>
          <div className="tpln">{(transactionsSum*eurToPlnRate).toFixed(2)}</div>
        </div>
        {
          [...transactions].reverse().map((transaction, i, array) => {
            return (
              <div className="transactionrow" key={i}>
                <div className="tlp">{transaction.id}.</div>
                <div className="tname">{transaction.name}</div>
                <div className="teuro">{transaction.euro.toFixed(2)}</div>
                <div className="tpln">{(transaction.euro*eurToPlnRate).toFixed(2)}</div>
                <div className="toptions">
                  <button className="removebutton" onClick={() => this.removeTransaction(transaction.id)}>Remove</button>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions,
    eurToPlnRate: state.eurToPlnRate
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeTransaction: (id) => {
      dispatch({type: 'REMOVE_TRANSACTION', transid: id})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsList)