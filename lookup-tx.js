var coin = require('./coin2')
var util = require('util')

var btc_testnet_opts = {
  port: coin.Projects.bitcoin.testnet.port,
  username: process.env.BITCOINRPC_USER,
  password: process.env.BITCOINRPC_PASS,
}
var btc_test_rpc = new coin.JSONRPC(btc_testnet_opts)

var handleError = function (err) {
  if (err) {
    console.error(err)
    throw(err)
  }
}

var txid = process.argv[2]
if (!txid) {
  var msg = "usage: node " + process.argv[1] + " <txid>"
  console.error(msg)
  throw new Error(msg)
}

btc_test_rpc.getrawtransaction(txid, function (err, rawtx) {
  handleError(err)
  btc_test_rpc.decoderawtransaction(rawtx, function (err, txObj) {
    handleError(err)
    console.log(util.inspect(txObj, false, null))
  })
})

// b0675a62139436f640ee5152a9b4427145fdabda2d3bd26c2927b80ea10891c3

