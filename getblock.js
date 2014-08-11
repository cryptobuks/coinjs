var coin = require('./coin')
var util = require('util')

var btc_testnet_opts = {
  port: coin.Projects.bitcoin.testnet.port,
  username: process.env.BITCOINRPC_USER,
  password: process.env.BITCOINRPC_PASS,
}
var btc_test_rpc = new coin.JSONRPC(btc_testnet_opts)

var blockno = +process.argv[2] || 0

btc_test_rpc.getblockhash(blockno, function (err, hash) {
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
