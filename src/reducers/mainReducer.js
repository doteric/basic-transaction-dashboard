const initState = {
  transactions: [
    {id: '1', name: "Sample transaction", euro: 4.20},
    {id: '2', name: "Another One", euro: 9.20},
    {id: '3', name: "And more", euro: 4.20}
  ],
  transactionIterator: 4, // Amount of preset transactions+1
  eurToPlnRate: 4.2
}

const mainReducer = (state = initState, action) => {
  if (action.type === 'ADD_TRANSACTION') {
    return {
      ...state,
      transactions: [...state.transactions,
        {id: state.transactionIterator, ...action.transinfo}
      ],
      transactionIterator: state.transactionIterator+1
    }
  }
  else if (action.type === 'REMOVE_TRANSACTION') {
    const newTransactions = state.transactions.filter((object) => {
      return object.id !== action.transid;
    });
    return {
      ...state,
      transactions: newTransactions
    }
  }
  else if (action.type === 'CHANGE_RATE') {
    return {
      ...state,
      eurToPlnRate: action.rate
    }
  }
  else {
    return state;
  }
}

export default mainReducer