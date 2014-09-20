// var Bitcoin = require('bitcoinjs-lib')
// requires bitcoinjs-lib > 1.0.2
var Bitcoin = require('/Users/nmarley/bitcoin/bitcoinjs-lib/src/index.js')

// create a new transaction object
var txBuilder = new Bitcoin.TransactionBuilder()

// reference an unspent output from a different tx as an input to this tx
txBuilder.addInput('9c2bbb15e55002bb6fc5a0ad03973cf3425e7cb11662f01937ec3909af1d1aaa', 1)

// recipient
txBuilder.addOutput('mm6XG3KwFxofN7nJcHq7e2z5zAC9iZKTNc', 20000000)
//txBuilder.addOutput('mm6XG3KwFxofN7nJcHq7e2z5zAC9iZKTNc', 19900000)

// initialize a private key from WIF
var key1 = Bitcoin.ECKey.fromWIF('cSusyrsVZo9xjg77btjs2S4CgX33Zaps2Tdk12d37KSjXm6uuzh5')
var key2 = Bitcoin.ECKey.fromWIF('cRQcfNPYSNgUL3KniYme1mFvMwRWeViL8TPuNoZS6J4n2FZkfADE')

// redeemScript
var redeemScript = Bitcoin.Script.fromHex('522102a0eaf19528a71005554d7686b9ca8bc326a6d91ccb0f7b6ddacea91ad1a8b91d2102eefbb10d7015c0483e14060b23e43dd802a6f7fe520390a6cf88e05cf60d062252ae')

// Sign the input with the first key
txBuilder.sign(0, key1, redeemScript)

// Now sign the input with the second key
txBuilder.sign(0, key2, redeemScript)

// now make a transaction
var tx = txBuilder.build()

// print tx serialized as hex
console.log( tx.toHex() )
console.log( "tx len = " + tx.toHex().length )

