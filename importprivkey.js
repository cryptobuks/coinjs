var jsonrpc = require('./current')

var handleError = function (err) {
  if (err) {
    console.error(err)
    throw(err)
  }
}

var pk = process.argv[2]

jsonrpc.importprivkey(pk, '', false, function (err, data) {
  handleError(err)
  console.log(data)
})

