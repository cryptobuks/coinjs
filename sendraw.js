var jsonrpc = require('./current')
var util = require('util')

var handleError = function (err) {
  if (err) {
    console.error(err)
    throw(err)
  }
}

var rawtx = process.argv[2]

jsonrpc.sendrawtransaction(rawtx, function (err, data) {
  handleError(err)
  console.log(data)
})

