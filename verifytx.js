var coin = require('./coin')

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

var rawtx = process.argv[2]

btc_test_rpc.signrawtransaction(rawtx, function (err, signed) {
  // handleError(err)
  console.log(signed)
})
