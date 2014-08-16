var jsonrpc = require('./current')

var handleError = function (err) {
  if (err) {
    console.error(err)
    throw(err)
  }
}

jsonrpc.getblockcount(function (err, count) {
  handleError(err)
  jsonrpc.getblockhash(count, function (err, hash) {
    handleError(err)
    jsonrpc.getblock(hash, function (err, block) {
      handleError(err)
      console.log(block)
    })
  })
})

