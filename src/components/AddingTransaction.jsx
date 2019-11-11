import React, { Component } from 'react'
import './css/addingtransaction.css'
import { connect } from "react-redux";

class AddingTransaction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      euro: 0,
      pln: 0
    }

    this.addNewTransaction = this.addNewTransaction.bind(this);
  }

  changeValue(where, value) {
    const curState = this.state;
    if (where === "euro") {
      value = parseFloat(value);
      if (isNaN(value)) {
        curState["pln"] = 0;
        value = '';
      }
      else {
        curState["pln"] = parseFloat(value*this.props.eurToPlnRate).toFixed(2);
      }
    }
    curState[where] = value;
    this.setState(curState);
  }

  addNewTransaction(event) {
    event.preventDefault();
    this.props.addTransaction(this.state.name, this.state.euro);
  }

  render() {
    return (
      <form className="newtransholder flex" onSubmit={this.addNewTransaction}>
        <div className="col">
          <p>Add new transaction:</p>
        </div>
        <div className="col">
          <label htmlFor="atransname">Name</label>
          <input type="text" id="atransname" value={this.state.name} onChange={e => this.changeValue('name', e.target.value)}/>
        </div>
        <div className="col">
          <label htmlFor="atranseuro">EUR</label>
          <input type="number" step=".01" id="atranseuro" value={this.state.euro} onChange={e => this.changeValue('euro', e.target.value)}/>
        </div>
        <div className="col">
          <label htmlFor="atranseuro">PLN</label>
          <input type="number" step=".01" id="atranspln" value={this.state.pln} disabled/>
        </div>
        <div className="col">
          <button>Add</button>
        </div>
      </form>
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
    addTransaction: (name, euro) => {
      dispatch({type: 'ADD_TRANSACTION', transinfo: {name: name, euro: euro}})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddingTransaction)