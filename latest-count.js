var coin = require('./coin2')

var btc_testnet_opts = {
  port: coin.Projects.bitcoin.testnet.port,
  username: process.env.BITCOINRPC_USER,
  password: process.env.BITCOINRPC_PASS,
}
var btc_test_rpc = new coin.JSONRPC(btc_testnet_opts)

btc_test_rpc.getblockcount(function (err, count) {
  if (err) {
    console.error(err)
    throw(err)
  }
  else {
    console.log("currently: " + count + " blocks")
  }
})

