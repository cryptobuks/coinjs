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

btc_test_rpc.getrawmempool(function (err, txid_list) {
  handleError(err)
  txid_list.forEach(function(txid) {
    console.log("txid: " + txid)
    btc_test_rpc.getrawtransaction(txid, function (err, rawtx) {
      handleError(err)
      btc_test_rpc.decoderawtransaction(rawtx, function (err, txObj) {
        handleError(err)
        console.log(util.inspect(txObj, false, null))
      })
    })
  })
})

