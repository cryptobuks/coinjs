var bitcoin = require('bitcoinjs-lib')
var scripts = bitcoin.scripts
var Address = bitcoin.Address
var networks = bitcoin.networks
var util = require('util')

var pubkeys_hex =
  [ "02547194cd5dd237ea0c067e4f251b04b9243cd8bcf5997360d581fe6fc32381df",
    "03f3f26dc67491505083ced8e03fee1d27336b6a4d6fbd5a24efe04e95597c137e",
    "02b9e28ba8e285752cabaee82d99e0378cea9417801ca3fb499a6506caee480ca6" ]
var pubkeys = pubkeys_hex.map(bitcoin.ECPubKey.fromHex)
var redeemScript = scripts.multisigOutput(2, pubkeys)

var scriptPubKey = scripts.scriptHashOutput(redeemScript.getHash())
var multisigAddress = Address.fromOutputScript(scriptPubKey, networks.testnet).toString()

console.log("redeemscript = ", redeemScript.toHex())
console.log("multisigAddress = " + multisigAddress)

