import mainReducer from "./mainReducer.js";

const exampleState = {
  transactions: [
    {id: '1', name: "Sample transaction", euro: 4.20},
    {id: '2', name: "Another One", euro: 9.20},
    {id: '3', name: "And more", euro: 4.20}
  ],
  transactionIterator: 4, // Amount of preset transactions+1
  eurToPlnRate: 4.2
}


it('adds transaction', () => {
  const exampleTransaction = {name: 'Test', euro: 5.11};
  const action = {
    type: 'ADD_TRANSACTION',
    transinfo: exampleTransaction
  };
  expect(mainReducer(exampleState, action)).toEqual({
    ...exampleState,
    transactions: [
      {id: '1', name: "Sample transaction", euro: 4.20},
      {id: '2', name: "Another One", euro: 9.20},
      {id: '3', name: "And more", euro: 4.20},
      {id: exampleState.transactionIterator, ...exampleTransaction}
    ],
    transactionIterator: exampleState.transactionIterator+1
  });
});

it('removes transaction', () => {
  const action = {
    type: 'REMOVE_TRANSACTION',
    transid: '2'
  };
  expect(mainReducer(exampleState, action).transactions).toEqual([
    {id: '1', name: "Sample transaction", euro: 4.20},
    {id: '3', name: "And more", euro: 4.20}
  ]);
});

it('changes curreny exchange rate', () => {
  const newRate = 5.20;
  const action = {
    type: 'CHANGE_RATE',
    rate: newRate
  };
  expect(mainReducer(exampleState, action).eurToPlnRate).toEqual(newRate);
});