var jsonrpc = require('./current')
var util = require('util')

var rawtx = process.argv[2];

var pubkey1 = '03d4524af66b01acf36445eda7f44572227b4e31fb47b9cacc4f5e263ccb7f69fa';
var pubkey2 = '034db53de97b98424a8bf9f4d5f3058581bb0d7dae80b2cd09d30594d74956b48b';

var nRequired = 2;

var array_of_public_keys = [pubkey1, pubkey2];

jsonrpc.createmultisig(nRequired, array_of_public_keys, function (err, jsonObj) {
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
