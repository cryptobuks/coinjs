// var Bitcoin = require('bitcoinjs-lib')
// requires bitcoinjs-lib > 1.0.2
var Bitcoin = require('/Users/nmarley/bitcoin/bitcoinjs-lib/src/index.js')

// create a new transaction object
var txBuilder = new Bitcoin.TransactionBuilder()

// reference an unspent output from a different tx as an input to this tx
txBuilder.addInput('9e5cf65505bc4b2d9e972599eb7baa47bb6d5644b8af9b69d32dfb497e92b5a7', 0)

// recipient
txBuilder.addOutput('mmH11CDMMcm9y8Q3sFmELTWKExTZY15JFY', 10000000)

// initialize a private key from WIF
var key1 = Bitcoin.ECKey.fromWIF('cQuhw6SvSsAUi4DzP5rrKd5pgteAV832SxsbJWFq7YwuBHzyW4ns')
var key2 = Bitcoin.ECKey.fromWIF('cVKF5oq5owDPDkw7YdvgVvmzWLGBmMUB5aGyBLCQuxYDMEB9vZ16')

// redeemScript
var redeemScript = Bitcoin.Script.fromHex('522103d4524af66b01acf36445eda7f44572227b4e31fb47b9cacc4f5e263ccb7f69fa21034db53de97b98424a8bf9f4d5f3058581bb0d7dae80b2cd09d30594d74956b48b52ae')

// Sign the input with the first key
txBuilder.sign(0, key1, redeemScript)

// Now sign the input with the second key
txBuilder.sign(0, key2, redeemScript)

// now make a transaction
var tx = txBuilder.build()

// print tx serialized as hex
console.log( tx.toHex() )
console.log( "tx len = " + tx.toHex().length )

