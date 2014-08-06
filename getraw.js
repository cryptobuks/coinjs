var coin = require('./coin')
var util = require('util')

var txid = '0ae0096056aaf80bb5b22c2624d7c278bbde9dfaf15fe3761b48d6b2edb41950'

coin.getrawtransaction(txid, function (err, rawtx) {
  if (err) {
    console.error(err)
    throw(err)
  }
  else {
    console.log("rawtx: " + rawtx)
    //console.log(rawtx)
    // console.log( util.inspect(rawtx, false, null) )
  }
})

