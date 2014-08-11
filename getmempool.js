var jsonrpc = require('./current')
var util = require('util')

var handleError = function (err) {
  if (err) {
    console.error(err)
    throw(err)
  }
}

jsonrpc.getrawmempool(function (err, txid_list) {
  handleError(err)
  txid_list.forEach(function(txid) {
    console.log("txid: " + txid)
    jsonrpc.getrawtransaction(txid, function (err, rawtx) {
      handleError(err)
      jsonrpc.decoderawtransaction(rawtx, function (err, txObj) {
        handleError(err)
        console.log(util.inspect(txObj, false, null))
      })
    })
  })
})

