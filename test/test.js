var coin = require('../coin.js')
var assert = require('assert')

describe('Coin', function () {
  describe('Projects', function () {
    it('should have a Bitcoin project', function () {
      assert(coin.Projects.bitcoin)

      assert(coin.Projects.bitcoin.mainnet)
      assert(coin.Projects.bitcoin.mainnet.port)
      assert(typeof coin.Projects.bitcoin.mainnet.port, 'number')
      assert.equal(coin.Projects.bitcoin.mainnet.port, 8332)

      assert(coin.Projects.bitcoin.testnet)
      assert(coin.Projects.bitcoin.testnet.port)
      assert(typeof coin.Projects.bitcoin.testnet.port, 'number')
      assert.equal(coin.Projects.bitcoin.testnet.port, 18332)
    })

    it('should have a Litecoin project', function () {
      assert(coin.Projects.litecoin)

      assert(coin.Projects.litecoin.mainnet)
      assert(coin.Projects.litecoin.mainnet.port)
      assert(typeof coin.Projects.litecoin.mainnet.port, 'number')
      assert.equal(coin.Projects.litecoin.mainnet.port, 9332)

      assert(coin.Projects.litecoin.testnet)
      assert(coin.Projects.litecoin.testnet.port)
      assert(typeof coin.Projects.litecoin.testnet.port, 'number')
      assert.equal(coin.Projects.litecoin.testnet.port, 19332)
    })

  })

  describe('JSONRPC', function () {
    it('should have a JSONRPC() function', function () {
      assert(typeof coin.JSONRPC, 'function')
    })

    var jsonrpc = new coin.JSONRPC()

    it('should have getblockcount method', function () {
      assert(typeof jsonrpc.getblockcount, 'function')
    })

    it('should have getblockhash method', function () {
      assert(typeof jsonrpc.getblockhash, 'function')
    })

    it('should have getblock method', function () {
      assert(typeof jsonrpc.getblock, 'function')
    })

    it('should have getrawtransaction method', function () {
      assert(typeof jsonrpc.getrawtransaction, 'function')
    })

    it('should have decoderawtransaction method', function () {
      assert(typeof jsonrpc.decoderawtransaction, 'function')
    })

    it('should have getrawmempool method', function () {
      assert(typeof jsonrpc.getrawmempool, 'function')
    })

    it('should have getpeerinfo method', function () {
      assert(typeof jsonrpc.getpeerinfo, 'function')
    })

    it('should have signrawtransaction method', function () {
      assert(typeof jsonrpc.signrawtransaction, 'function')
    })

    it('should have gettxout method', function () {
      assert(typeof jsonrpc.gettxout, 'function')
    })

    it('should have importprivkey method', function () {
      assert(typeof jsonrpc.importprivkey, 'function')
    })

    it('should have sendrawtransaction method', function () {
      assert(typeof jsonrpc.sendrawtransaction, 'function')
    })

    it('should have gettxoutsetinfo method', function () {
      assert(typeof jsonrpc.gettxoutsetinfo, 'function')
    })

    it('should have getinfo method', function () {
      assert(typeof jsonrpc.getinfo, 'function')
    })

    it('should have getbestblockhash method', function () {
      assert(typeof jsonrpc.getbestblockhash, 'function')
    })

    it('should have getconnectioncount method', function () {
      assert(typeof jsonrpc.getconnectioncount, 'function')
    })

    it('should have getdifficulty method', function () {
      assert(typeof jsonrpc.getdifficulty, 'function')
    })

    it('should have stop method', function () {
      assert(typeof jsonrpc.stop, 'function')
    })

    it('should have dumpprivkey method', function () {
      assert(typeof jsonrpc.dumpprivkey, 'function')
    })

  })

})
