var Bitcoin = require('bitcoinjs-lib')

// create a new transaction object
var tx = new Bitcoin.Transaction()

// reference an unspent output from a different tx as an input to this tx
tx.addInput('0ae0096056aaf80bb5b22c2624d7c278bbde9dfaf15fe3761b48d6b2edb41950', 0)

// recipient
tx.addOutput('mmH11CDMMcm9y8Q3sFmELTWKExTZY15JFY', 10000000)

// change
tx.addOutput('mu6tjsNNesrUkcUVi8y7kVGGxHtjXJoREt', 180000000)

// initialize a private key from WIF
var key = Bitcoin.ECKey.fromWIF('92KEQmqc41iqRnEPn6d1FmdJmNWNTV8t8qCivBiGeuogRXSTNkd')

// Sign the 1st (and only) input in the tx
tx.sign(0, key)

// print tx serialized as hex
console.log( tx.toHex() )
console.log( "tx len = " + tx.toHex().length )

