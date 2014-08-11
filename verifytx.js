var jsonrpc = require('./current')

var handleError = function (err) {
  if (err) {
    console.error(err)
    throw(err)
  }
}

var rawtx = process.argv[2]

jsonrpc.signrawtransaction(rawtx, function (err, signed) {
  // handleError(err)
  console.log(signed)
})
