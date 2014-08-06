var http = require('http')

// module.exports =
function Coin (project, network, hostname, user, pass) {
  // console.log(Array.prototype.slice.call(arguments))

  // still want to default project to 'bitcoin',
  //   network to 'mainnet', and
  //   hostname to 'localhost'
  // this.hostname = 'localhost'

  this.projects = {
    bitcoin: {
      mainnet: {
        // network details here
        port: 8332,
      },
      testnet: {
        // network details here
        port: 18332,
      },
    },
    litecoin: {
      mainnet: {
        // network details here
        port: 9332,
      },
      testnet: {
        // network details here
        port: 19332,
      },
    },
    darkcoin: {
      mainnet: {
        // network details here
        port: 9998,
      },
      testnet: {
        // network details here
        port: 19998,
      },
    },
  }

  // validate project
  if (!this.projects.hasOwnProperty(project)) {
    throw new Error("Project '" + project + "' not supported")
  }
  this.project = project

  // validate network
  if (!this.projects[project].hasOwnProperty(network)) {
    throw new Error("Network '" + network + "' not supported for project " + project)
  }
  this.network = network

  this.port = this.projects[project][network].port
  this.hostname = hostname
  this.user = user
  this.pass = pass


  // may remove this, just learning OO JS for now
  this.setProject = function (project) {
    this.project = project
  }

  var opts = {
    hostname: this.hostname,
    port: this.port,

    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Length': params.length,
    },

    auth: this.user + ':' + this.pass,
  }


  var process_request = function(method, params, callback) {
    var params = JSON.stringify({
      'jsonrpc': '2.0',
      'method': method,
      'params': params
    })
    opts.headers['Content-Length'] = params.length

    // console.log("opts = ...")
    // console.log(opts)

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

// project, network, host, user, pass
var btc_testnet = new Coin('bitcoin', 'testnet', 'localhost',
  process.env.BITCOINRPC_USER, process.env.BITCOINRPC_PASS)

var ltc_testnet = new Coin('litecoin', 'testnet', 'localhost',
  process.env.LITECOINRPC_USER, process.env.LITECOINRPC_PASS)


var displayBlockCount = function (err, count) {
  if (err)
    throw err
  else {
    console.log("Count = " + count + " blocks.")
  }
}

btc_testnet.getblockcount(displayBlockCount)
ltc_testnet.getblockcount(displayBlockCount)
