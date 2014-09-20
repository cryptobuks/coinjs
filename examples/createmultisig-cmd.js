var jsonrpc = require('./current')
var util = require('util')

var nRequired = +process.argv[2];

var loop = true;
var pubkey_array = []

for (var i = 3; loop; ++i) {
  var arg = process.argv[i]
  if (arg === undefined) {
    loop = false;
  }
  else {
    pubkey_array.push(arg)
  }
}

jsonrpc.createmultisig(nRequired, pubkey_array.sort(), function (err, jsonObj) {
  if (err) {
    console.error(err)
    throw(err)
  }
  else {
    console.log( util.inspect(jsonObj, false, null) )
  }
})

// returns:
//
// { address: '2N5rx92fZXm9u4EUQskt25sUwtG2kN2Humf',
//   redeemScript: '522103d4524af66b01acf36445eda7f44572227b4e31fb47b9cacc4f5e263ccb7f69fa21034db53de97b98424a8bf9f4d5f3058581bb0d7dae80b2cd09d30594d74956b48b52ae' }
