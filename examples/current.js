(function () {
  var coin = require('../lib/coin')

  var ltc_testnet_opts = {
    port: coin.Projects.litecoin.testnet.port,
    username: process.env.LITECOINRPC_USER,
    password: process.env.LITECOINRPC_PASS,
  }

  var btc_testnet_opts = {
    port: coin.Projects.bitcoin.testnet.port,
    username: process.env.BITCOINRPC_USER,
    password: process.env.BITCOINRPC_PASS,
  }

  var drk_testnet_opts = {
    port: coin.Projects.darkcoin.testnet.port,
    username: process.env.DARKCOINRPC_USER,
    password: process.env.DARKCOINRPC_PASS,
  }

  // var conn_opts = drk_testnet_opts
  var conn_opts = btc_testnet_opts

  module.exports = new coin.JSONRPC(conn_opts)

})()
