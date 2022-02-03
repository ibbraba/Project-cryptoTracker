import {Stock} from "./stock";

export const mockStock: Stock[] = [
  {id: 1, name: "Apple", symbol: "AAPL", url: "https://api.polygon.io/v2/aggs/ticker/AAPL/prev?adjusted=true&apiKey=6YF_nA5aOIv8qC4T83xCKuqVXeoh2RuQ"},
  /*{id: 2, name: "BitCoin", currentPrice:45000, symbol: "BTC", url:""},*/
  {id: 4, name: "Tesla", symbol: "TSLA", url: "https://api.polygon.io/v2/aggs/ticker/TSLA/prev?adjusted=true&apiKey=6YF_nA5aOIv8qC4T83xCKuqVXeoh2RuQ"},
  {id: 3, name: "Microsoft", symbol: "MSFT", url:"https://api.polygon.io/v2/aggs/ticker/MSFT/prev?adjusted=true&apiKey=6YF_nA5aOIv8qC4T83xCKuqVXeoh2RuQ"},
]
