(function () {

var http = require('http')
var merge = require('merge')

var Projects = {
  bitcoin: {
    mainnet: {
      port: 8332,
    },
    testnet: {
      port: 18332,
    },
  },
  litecoin: {
    mainnet: {
      port: 9332,
    },
    testnet: {
      port: 19332,
    },
  },
  darkcoin: {
    mainnet: {
      port: 9998,
    },
    testnet: {
      port: 19998,
    },
  },
}
module.exports.Projects = Projects

module.exports.JSONRPC = function Coin (options) {
  var defaults = {
    hostname: 'localhost',
    port: Projects['bitcoin']['mainnet'].port,
  }
  options = options || defaults

  // merge in defaults with options, options will take precedence
  options = merge(true, defaults, options)

  // new_options
  this.hostname = options.hostname
  this.username = options.username
  this.password = options.password
  this.port = options.port

  var opts = {
    hostname: this.hostname,
    port: this.port,

    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Length': params.length,
    },

    auth: this.username + ':' + this.password,
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

        // Don't like using try-catch here, but JSON.parse needs to be handled
        //
        // 1. read article here:
        //     https://www.joyent.com/blog/best-practices-for-error-handling-in-node-js
        // 2. then update code below accordingly
        //
        var obj = null
        try {
          obj = JSON.parse(data)
        } catch (e) {
          callback(e)
        }
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

  this.getblockhash = function (id, callback) {
    return process_request('getblockhash', [ id ], callback)
  }

  this.getblock = function (hash, callback) {
    return process_request('getblock', [ hash ], callback)
  }

  this.getblockcount = function (callback) {
    return process_request('getblockcount', [], callback)
  }

  this.getrawtransaction = function () {
    var args     = Array.prototype.slice.call(arguments)
    var callback = args.pop()
    var txid     = args.shift()
    var verbose  = args.shift()

    verbose = verbose || 0

    return process_request('getrawtransaction', [ txid , verbose ], callback)
  }

  this.decoderawtransaction = function (rawtx, callback) {
    return process_request('decoderawtransaction', [ rawtx ], callback)
  }

  this.getrawmempool = function (callback) {
    return process_request('getrawmempool', [], callback)
  }

  this.getpeerinfo = function (callback) {
    return process_request('getpeerinfo', [], callback)
  }

  this.signrawtransaction = function () {
    var args     = Array.prototype.slice.call(arguments)

    var callback = args.pop()
    var rawtx    = args.shift()
    var tx_inputs    = args.shift()
    var private_keys = args.shift()

    // defaults
    tx_inputs = tx_inputs || []
    private_keys = private_keys || []

    return process_request('signrawtransaction', [ rawtx , tx_inputs, private_keys ], callback)
  }

  this.gettxout = function () {
    var args     = Array.prototype.slice.call(arguments)

    var callback = args.pop()
    var txid     = args.shift()
    var n        = args.shift()
    var includemempool = args.shift()

    // default
    includemempool = includemempool || true

    return process_request('gettxout', [txid, n, includemempool], callback)
  }

  this.importprivkey = function () {
    var args     = Array.prototype.slice.call(arguments)

    // <bitcoinprivkey> [label] [rescan=true]
    var callback = args.pop()
    var privkey  = args.shift()
    var label    = args.shift()
    var rescan   = args.shift()

    label  = label || ''
    if (undefined === rescan) {
      rescan = rescan || true
    }

    return process_request('importprivkey', [privkey, label, rescan], callback)
  }

  this.sendrawtransaction = function (rawtx, callback) {
    return process_request('sendrawtransaction', [rawtx], callback)
  }

  this.gettxoutsetinfo = function (callback) {
    return process_request('gettxoutsetinfo', [], callback)
  }

  this.getinfo = function (callback) {
    return process_request('getinfo', [], callback)
  }

  this.getbestblockhash = function (callback) {
    return process_request('getbestblockhash', [], callback)
  }

  this.getconnectioncount = function (callback) {
    return process_request('getconnectioncount', [], callback)
  }

  this.getdifficulty = function (callback) {
    return process_request('getdifficulty', [], callback)
  }

  this.stop = function (callback) {
    return process_request('stop', [], callback)
  }

  this.dumpprivkey = function (addr, callback) {
    return process_request('dumpprivkey', [addr], callback)
  }

}

})()
