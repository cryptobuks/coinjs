var bitcore = require('bitcore')
var Address = bitcore.Address
var Script = bitcore.Script

var network = 'testnet'

var pubkeys_hex =
  [ "02547194cd5dd237ea0c067e4f251b04b9243cd8bcf5997360d581fe6fc32381df",
    "03f3f26dc67491505083ced8e03fee1d27336b6a4d6fbd5a24efe04e95597c137e",
    "02b9e28ba8e285752cabaee82d99e0378cea9417801ca3fb499a6506caee480ca6" ].sort()
var pubkeys = pubkeys_hex.map(function (key){return new Buffer(key, 'hex') })

var nRequired = 2

// can get just the address this way:
//
// var multisigAddress = Address.fromPubKeys( nRequired, pubkeys, network )
// console.log(multisigAddress.toString())
// console.log(multisigAddress.getScriptPubKey())

// ... but to get the redeem script:
var redeemScript = Script.createMultisig(nRequired, pubkeys)
console.log( "redeemScript: " + redeemScript.serialize().toString('hex'))
console.log( "addr: " + Address.fromScript(redeemScript, network) )


