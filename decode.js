var coin = require('./coin2')
var util = require('util')

// var rawtx = '01000000015019b4edb2d6481b76e35ff1fa9ddebb78c2d724262cb2b50bf8aa566009e00a0000000000ffffffff0280969800000000001976a9143f2d315f2042d9c148187954d7e697261aae997488ac0095ba0a000000001976a9149504cf766816548a416b880b15773bef7942a85c88ac00000000'
var rawtx = '010000000123623ad74d7b920e030fb8473ed0111fb3eb593986d9659e91ca0d68f22157f1010000006b483045022100e900c8fde82f2a20e94fe90de83a4ad90697d1252cdae6f7238c2985d1dba96002203644dec7f8a7b4656c7cc003aa5c6f4a5f372ad9e442170b1d8fe797407f94ac012102f0d38334d896417588fb48f02ddb889bbf486289a1b165aacfeb346d94161a45ffffffff02802b530b000000001976a91465a48f43d847feeb2a14615129e618fa94f50db388acb0ba8a0f000000001976a914d7c5177165bc9fb5b89798b81a2eb5f69df913c988ac00000000'

var btc_test_rpc = new coin.JSONRPC({
  port: coin.Projects['bitcoin']['testnet'].port,
  username: process.env.BITCOINRPC_USER,
  password: process.env.BITCOINRPC_PASS
})

btc_test_rpc.decoderawtransaction(rawtx, function (err, txObj) {
  if (err) {
    console.error(err)
    throw(err)
  }
  else {
    console.log( util.inspect(txObj, false, null) )
  }
})

