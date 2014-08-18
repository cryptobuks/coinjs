var jsonrpc = require('./current')
var util = require('util')

var handleError = function (err) {
  if (err) {
    console.error(err)
    throw(err)
  }
}

var blockhash = process.argv[2]

jsonrpc.getblock(blockhash, function (err, block) {
  handleError(err)
  console.log(util.inspect(block))
})

