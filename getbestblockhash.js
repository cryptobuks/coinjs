var jsonrpc = require('./current')
var util = require('util')

var handleError = function (err) {
  if (err) {
    console.error(err)
    throw(err)
  }
}

jsonrpc.getbestblockhash(function (err, hash) {
  handleError(err)
  console.log(hash)
})

