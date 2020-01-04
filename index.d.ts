type Callback = (err: Error, data: object) => void;

declare class BinanceRest {
  constructor({
    key,
    secret,
    recvWindow,
    timeout,
    disableBeautification,
    handleDrift
  }: {
    key: string,
    secret: string,
    recvWindow?: number,
    timeout?: number,
    disableBeautification?: boolean,
    handleDrift?: boolean
  });

  account: (query?: object | Callback, callback?: Callback) => Promise<object> | void;

  accountMargin: (query?: object | Callback, callback?: Callback) => Promise<object> | void;

  accountStatus: (callback?: Callback) => Promise<object> | void;

  aggTrades: (query: object | string, callback?: Callback) => Promise<object> | void;

  allBookTickers: (callback?: Callback) => Promise<object> | void;

  allOrders: (query: object | string, callback?: Callback) => Promise<object> | void;

  allPrices: (callback?: Callback) => Promise<object> | void;

  assetDetails: (callback?: Callback) => Promise<object> | void;

  bookTicker: (query?: object, callback?: Callback) => Promise<object> | void;

  cancelOrder: (query: object | Callback, callback?: Callback) => Promise<object> | void;

  closeUserDataStream: (query: object | Callback, callback?: Callback) => Promise<object> | void;

  depositAddress: (query: object | Callback, callback?: Callback) => Promise<object> | void;

  depositHistory: (query?: object | Callback, callback?: Callback) => Promise<object> | void;

  depth: (query: object | string, callback?: Callback) => Promise<object> | void;

  exchangeInfo: (callback?: Callback) => Promise<object> | void;

  historicalTrades: (query: object | string, callback?: Callback) => Promise<object> | void;

  keepAliveUserDataStream: (query: object | Callback, callback?: Callback) => Promise<object> | void;

  klines: (query: object, callback?: Callback) => Promise<object> | void;

  marginAsset: (query: object | Callback, callback?: Callback) => Promise<object> | void;

  marginBorrow: (query: object | Callback, callback?: Callback) => Promise<object> | void;

  marginRepay: (query: object | Callback, callback?: Callback) => Promise<object> | void;

  marginTransfer: (query: object | Callback, callback?: Callback) => Promise<object> | void;

  myTrades: (query: object | Callback, callback?: Callback) => Promise<object> | void;

  newOrder: (query: object | Callback, callback?: Callback) => Promise<object> | void;

  newOrderMargin: (query: object | Callback, callback?: Callback) => Promise<object> | void;

  openOrders: (query?: object | Callback, callback?: Callback) => Promise<object> | void;

  ping: (callback?: Callback) => Promise<object> | void;

  queryOrder: (query: object | Callback, callback?: Callback) => Promise<object> | void;

  startUserDataStream: (callback?: Callback) => Promise<object> | void;

  startUserDataStreamMargin: (callback?: Callback) => Promise<object> | void;

  systemStatus: (callback?: Callback) => Promise<object> | void;

  testOrder: (query: object | Callback, callback?: Callback) => Promise<object> | void;

  ticker24hr: (query?: object, callback?: Callback) => Promise<object> | void;

  tickerPrice: (query?: object, callback?: Callback) => Promise<object> | void;

  time: (callback?: Callback) => Promise<object> | void;

  trades: (query: object | string, callback?: Callback) => Promise<object> | void;

  withdraw: (query: object | Callback, callback?: Callback) => Promise<object> | void;

  withdrawHistory: (query?: object | Callback, callback?: Callback) => Promise<object> | void;

}

declare class BinanceWS {

}

declare class Beautifier {
  new(): Beautifier

  beautify(obj: object, type: object | string): object
}

export {
  BinanceRest,
  BinanceWS
}
