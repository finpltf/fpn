import {
  CHANGE_CRYPTO_TABLE_DATA,
  DELETE_CRYPTO_TABLE_DATA,
  LOAD_CRYPTO_TABLE_DATA
} from '../actions/cryptoTableActions';

const initialState = {
  items: [
    {
      name: 'ОПИФ РФИ «Арсагера - КР 1.55»',
      market_cap: '131 131 454 444₽',
      price: '6 432,23₽',
      volume: '6 432 323 455₽',
      supply: ' 6 432 323₽',
      change: '0,59%',
      chart: 'btc'
    },
    {
      name: 'ОПИФ РФИ «Солид - Индекс МосБиржи»',
      market_cap: '131 131 454 444₽',
      price: '6 432,23₽',
      volume: '6 432 323 455₽',
      supply: ' 6 432 323₽',
      change: '0,59%',
      chart: 'eth'
    },
    {
      name: 'ОПИФ РФИ «Солид – Глобус»',
      market_cap: '131 131 454 444₽',
      price: '6 432,23₽',
      volume: '6 432 323 455₽',
      supply: ' 6 432 323₽',
      change: '0,59%',
      chart: 'xrp'
    },
    {
      name: 'ОПИФ РФИ «Алёнка – Капитал»',
      market_cap: '131 131 454 444₽',
      price: '6 432,23₽',
      volume: '6 432 323 455₽',
      supply: ' 6 432 323₽',
      change: '0,59%',
      chart: 'bch'
    },
  ],
  data: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_CRYPTO_TABLE_DATA:
      const loadData = state.items[action.index];
      return {...state, data: loadData};
    case CHANGE_CRYPTO_TABLE_DATA:
      const updatedItems = [...state.items];
      updatedItems[action.index] = action.data;
      return {...state, items: updatedItems};
    case DELETE_CRYPTO_TABLE_DATA:
      return {...state, items: action.items};
    default:
      return state;
  }
}