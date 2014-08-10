var coin = require('./coin')
var util = require('util')

var btc_test_rpc = new coin.JSONRPC({
  port: coin.Projects['bitcoin']['testnet'].port,
  username: process.env.BITCOINRPC_USER,
  password: process.env.BITCOINRPC_PASS
})

var handleError = function (err) {
  if (err) {
    console.error(err)
    throw(err)
  }
}

btc_test_rpc.getpeerinfo(function (err, data) {
  handleError(err)
  console.log(data)
})
