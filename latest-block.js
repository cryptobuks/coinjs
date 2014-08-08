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

btc_test_rpc.getblockcount(function (err, count) {
  handleError(err)
  btc_test_rpc.getblockhash(count, function (err, hash) {
    handleError(err)
    btc_test_rpc.getblock(hash, function (err, block) {
      handleError(err)
      console.log(block)
    })
  })
})

