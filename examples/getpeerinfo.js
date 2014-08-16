var jsonrpc = require('./current')
var util = require('util')

var handleError = function (err) {
  if (err) {
    console.error(err)
    throw(err)
  }
}

jsonrpc.getpeerinfo(function (err, data) {
  handleError(err)
  console.log(data)
})

