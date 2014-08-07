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
    args     = Array.prototype.slice.call(arguments)
    callback = args.pop()
    txid     = args.shift()
    verbose  = args.shift()

    if (undefined === verbose)
      verbose = 0

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

}
