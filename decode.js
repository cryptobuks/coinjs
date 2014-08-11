var jsonrpc = require('./current')
var util = require('util')

var rawtx = process.argv[2]

jsonrpc.decoderawtransaction(rawtx, function (err, txObj) {
  if (err) {
    console.error(err)
    throw(err)
  }
  else {
    console.log( util.inspect(txObj, false, null) )
  }
})

