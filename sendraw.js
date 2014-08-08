var coin = require('./coin2')
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

var rawtx = process.argv[2]

btc_test_rpc.sendrawtransaction(rawtx, function (err, data) {
  handleError(err)
  console.log(data)
})

