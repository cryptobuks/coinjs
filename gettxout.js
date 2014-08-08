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

var txid = '0ae0096056aaf80bb5b22c2624d7c278bbde9dfaf15fe3761b48d6b2edb41950'
var n    = 0

btc_test_rpc.gettxout(txid, n, function (err, info) {
  handleError(err)
  console.log(info)
})

