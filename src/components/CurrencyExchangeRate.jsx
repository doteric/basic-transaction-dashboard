import React, { Component } from 'react'
import { connect } from 'react-redux'
import './currencyexchangerate.css'

export class CurrencyExchangeRate extends Component {
  changeRate(value) {
    this.props.changeRate(value);
  }

  render() {
    const { eurToPlnRate } = this.props;
    return (
      <div className="exchangerateholder">
        <label htmlFor="exchangerate">Exchange rate (1 EUR = x PLN):</label>
        <input type="number" step=".01" id="exchangerate" value={eurToPlnRate} onChange={e => this.changeRate(e.target.value)}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    eurToPlnRate: state.eurToPlnRate
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeRate: (rate) => {
      dispatch({type: 'CHANGE_RATE', rate: rate})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyExchangeRate)
