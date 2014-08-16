var jsonrpc = require('./current')
var util = require('util')

var handleError = function (err) {
  if (err) {
    console.error(err)
    throw(err)
  }
}

var blockno = +process.argv[2] || 0

jsonrpc.getblockhash(blockno, function (err, hash) {
  handleError(err)
  jsonrpc.getblock(hash, function (err, block) {
    handleError(err)
    console.log(util.inspect(block))
  })
})
