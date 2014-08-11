var jsonrpc = require('./current')

var handleError = function (err) {
  if (err) {
    console.error(err)
    throw(err)
  }
}

jsonrpc.stop(function (err) {
  handleError(err)
  console.log("sent stop signal!")
})

