var jsonrpc = require('./current')

var handleError = function (err) {
  if (err) {
    console.error(err)
    throw(err)
  }
}

var addr = process.argv[2]

jsonrpc.dumpprivkey(addr, function (err, pk) {
  handleError(err)
  console.log("pk: " + pk)
})
