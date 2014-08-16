var jsonrpc = require('./current')
var util = require('util')

var handleError = function (err) {
  if (err) {
    console.error(err)
    throw(err)
  }
}

var txid = process.argv[2]

jsonrpc.getrawtransaction(txid, function (err, rawtx) {
  handleError(err)
  console.log(rawtx)
})

