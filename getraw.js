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

var txid = '0ae0096056aaf80bb5b22c2624d7c278bbde9dfaf15fe3761b48d6b2edb41950'

btc_test_rpc.getrawtransaction(txid, function (err, rawtx) {
  handleError(err)
  console.log(rawtx)
})

