var coin = require('./coin2')
var util = require('util')

var btc_testnet_opts = {
  port: coin.Projects.bitcoin.testnet.port,
  username: process.env.BITCOINRPC_USER,
  password: process.env.BITCOINRPC_PASS,
}
var btc_test_rpc = new coin.JSONRPC(btc_testnet_opts)

btc_test_rpc.getblockhash(0, function (err, hash) {
  if (err) {
    console.error(err)
    throw(err)
  }
  else {
    btc_test_rpc.getblock(hash, function (err, block) {
      console.log(util.inspect(block))
    })
  }
})
