var jsonrpc = require('./current')

var handleError = function (err) {
  if (err) {
    console.error(err)
    throw(err)
  }
}

jsonrpc.getblockcount(function (err, count) {
  handleError(err)
  console.log("currently: " + count + " blocks")
})

