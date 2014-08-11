(function () {
  var coin = require('./coin')

  var conn_opts = {
    port: coin.Projects.litecoin.testnet.port,
    username: process.env.LITECOINRPC_USER,
    password: process.env.LITECOINRPC_PASS,
  }
  module.exports = new coin.JSONRPC(conn_opts)

})()
