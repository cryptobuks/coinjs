var jsonrpc = require('./current')
var util = require('util')

var handleError = function (err) {
  if (err) {
    console.error(err)
    throw(err)
  }
}

var txid = process.argv[2]
if (!txid) {
  var msg = "usage: node " + process.argv[1] + " <txid>"
  console.error(msg)
  throw new Error(msg)
}

jsonrpc.getrawtransaction(txid, function (err, rawtx) {
  handleError(err)
  jsonrpc.decoderawtransaction(rawtx, function (err, txObj) {
    handleError(err)
    console.log(util.inspect(txObj, false, null))
  })
})

