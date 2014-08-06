var http = require('http')

// ok, this is the point where i really need to learn more javascript. I need
// to learn how to make a class, how to define a constructor, etc.
//
// module.exports.projects = { 'bitcoin', 'darkcoin' }
var opts = {
  // these should be abstracted out into the implementation
  hostname: 'localhost',
  port: 18332, // for Bitcoin, 8332 = mainnet, 18332 = testnet

  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },

  // this should be abstracted out into the implementation too
  auth: process.env.BITCOINRPC_USER + ':' + process.env.BITCOINRPC_PASS
}

var process_request = function(method, params, callback) {
  var params = JSON.stringify({
    'jsonrpc': '2.0',
    'method': method,
    'params': params
  })
  opts.headers['Content-Length'] = params.length

  var data = [];
  var req = http.request(opts, function (resp) {
    resp.on('data', function (chunk) {
      data.push(chunk)
    }).on('err', function(err) {
      callback(err)
    }).on('end', function() {
      obj = JSON.parse(data)
      if (null !== obj.error) {
        var e = new Error(obj.error.message)
        e.code = obj.error.code
        callback(e)
      }
      else
        callback(null, obj.result)
    })
  }).on('error', function (err) {
    if (err)
      callback(err)
  })

  req.write(params)
  req.end()
}


module.exports.getblockhash = function (id, callback) {
  return process_request('getblockhash', [ id ], callback)
}

module.exports.getblock = function (hash, callback) {
  return process_request('getblock', [ hash ], callback)
}

module.exports.getblockcount = function (callback) {
  return process_request('getblockcount', [], callback)
}

module.exports.getfakeblockcount = function (callback) {
  return function () { callback(null, 10) }()
}

module.exports.getrawtransaction = function () {
  args     = Array.prototype.slice.call(arguments)
  callback = args.pop()
  txid     = args.shift()
  verbose  = args.shift()

  if (undefined === verbose)
    verbose = 0

  return process_request('getrawtransaction', [ txid , verbose ], callback)
}

module.exports.decoderawtransaction = function (rawtx, callback) {
  return process_request('decoderawtransaction', [ rawtx ], callback)
}

module.exports.getrawmempool = function (callback) {
  return process_request('getrawmempool', [], callback)
}

module.exports.getpeerinfo = function (callback) {
  return process_request('getpeerinfo', [], callback)
}
