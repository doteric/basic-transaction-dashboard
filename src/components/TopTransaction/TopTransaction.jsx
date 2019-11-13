import React, { Component } from 'react'
import { connect } from 'react-redux'
import './toptransaction.css'

export class TopTransaction extends Component {
  render() {
    const { transactions, eurToPlnRate } = this.props;
    const topTransaction = transactions.reduce((prev, cur) => {
      if (cur.euro > prev.euro) {
        return cur;
      }
      else {
        return prev;
      }
    }, {id: 0, name: "", euro: 0});
    return (
      <div className="sideholder">
        <h3>Top transaction</h3>
        <div><b>ID:</b> {topTransaction.id}</div>
        <div><b>Name:</b> {topTransaction.name}</div>
        <div><b>EUR:</b> {topTransaction.euro.toFixed(2)}</div>
        <div><b>PLN:</b> {(topTransaction.euro*eurToPlnRate).toFixed(2)}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions,
    eurToPlnRate: state.eurToPlnRate
  }
};

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(TopTransaction)

