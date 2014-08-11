var coin = require('./coin')

var ltc_testnet_opts = {
  port: 19332,
  username: process.env.LITECOINRPC_USER,
  password: process.env.LITECOINRPC_PASS,
}
var ltc_testnet = new coin.JSONRPC(ltc_testnet_opts)

var btc_testnet_opts = {
  port: 18332,
  username: process.env.BITCOINRPC_USER,
  password: process.env.BITCOINRPC_PASS,
}
var btc_testnet = new coin.JSONRPC(btc_testnet_opts)

var displayBlockCount = function (err, count) {
  if (err)
    throw err
  else {
    console.log("Count = " + count + " blocks.")
  }
}

btc_testnet.getblockcount(displayBlockCount)
ltc_testnet.getblockcount(displayBlockCount)
