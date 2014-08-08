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

var rawtx = '01000000015019b4edb2d6481b76e35ff1fa9ddebb78c2d724262cb2b50bf8aa566009e00a0000000000ffffffff0280969800000000001976a9143f2d315f2042d9c148187954d7e697261aae997488ac0095ba0a000000001976a9149504cf766816548a416b880b15773bef7942a85c88ac00000000'
var len = rawtx.length

var tx_inputs = [
  {
    'txid': '0ae0096056aaf80bb5b22c2624d7c278bbde9dfaf15fe3761b48d6b2edb41950',
    'vout': 0,
    'scriptPubKey': '76a91465a48f43d847feeb2a14615129e618fa94f50db388ac',
  }
]

var private_keys = [
  '92KEQmqc41iqRnEPn6d1FmdJmNWNTV8t8qCivBiGeuogRXSTNkd'
]

btc_test_rpc.signrawtransaction(rawtx, tx_inputs, private_keys, function (err, signed) {
  handleError(err)
  console.log(signed)
})


