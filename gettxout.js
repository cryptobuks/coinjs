var jsonrpc = require('./current')
var util = require('util')


var handleError = function (err) {
  if (err) {
    console.error(err)
    throw(err)
  }
}

var txid = '0ae0096056aaf80bb5b22c2624d7c278bbde9dfaf15fe3761b48d6b2edb41950'
var n    = 0

jsonrpc.gettxout(txid, n, function (err, info) {
  handleError(err)
  console.log(info)
})

