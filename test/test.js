var coin = require('../coin.js')
var assert = require('assert')

describe('Coin', function () {
  describe('Projects', function () {
    it('should have a Bitcoin project', function () {
      assert.ok(coin.Projects.bitcoin)

      assert.ok(coin.Projects.bitcoin.mainnet)
      assert.ok(coin.Projects.bitcoin.mainnet.port)
      assert.equal(typeof coin.Projects.bitcoin.mainnet.port, 'number')
      assert.equal(coin.Projects.bitcoin.mainnet.port, 8332)

      assert.ok(coin.Projects.bitcoin.testnet)
      assert.ok(coin.Projects.bitcoin.testnet.port)
      assert.equal(typeof coin.Projects.bitcoin.testnet.port, 'number')
      assert.equal(coin.Projects.bitcoin.testnet.port, 18332)
    })

    it('should have a Litecoin project', function () {
      assert.ok(coin.Projects.litecoin)

      assert.ok(coin.Projects.litecoin.mainnet)
      assert.ok(coin.Projects.litecoin.mainnet.port)
      assert.equal(typeof coin.Projects.litecoin.mainnet.port, 'number')
      assert.equal(coin.Projects.litecoin.mainnet.port, 9332)

      assert.ok(coin.Projects.litecoin.testnet)
      assert.ok(coin.Projects.litecoin.testnet.port)
      assert.equal(typeof coin.Projects.litecoin.testnet.port, 'number')
      assert.equal(coin.Projects.litecoin.testnet.port, 19332)
    })

  })

  describe('JSONRPC', function () {
    it('should have a JSONRPC() function', function () {
      assert.ok(typeof coin.JSONRPC, 'function')
    })

    var jsonrpc = new coin.JSONRPC()

    it('should have getblockcount method', function () {
      assert.equal(typeof jsonrpc.getblockcount, 'function')
    })

    it('should have getblockhash method', function () {
      assert.equal(typeof jsonrpc.getblockhash, 'function')
    })

    it('should have getblock method', function () {
      assert.equal(typeof jsonrpc.getblock, 'function')
    })

    it('should have getrawtransaction method', function () {
      assert.equal(typeof jsonrpc.getrawtransaction, 'function')
    })

    it('should have decoderawtransaction method', function () {
      assert.equal(typeof jsonrpc.decoderawtransaction, 'function')
    })

    it('should have getrawmempool method', function () {
      assert.equal(typeof jsonrpc.getrawmempool, 'function')
    })

    it('should have getpeerinfo method', function () {
      assert.equal(typeof jsonrpc.getpeerinfo, 'function')
    })

    it('should have signrawtransaction method', function () {
      assert.equal(typeof jsonrpc.signrawtransaction, 'function')
    })

    it('should have gettxout method', function () {
      assert.equal(typeof jsonrpc.gettxout, 'function')
    })

    it('should have importprivkey method', function () {
      assert.equal(typeof jsonrpc.importprivkey, 'function')
    })

    it('should have sendrawtransaction method', function () {
      assert.equal(typeof jsonrpc.sendrawtransaction, 'function')
    })

    it('should have gettxoutsetinfo method', function () {
      assert.equal(typeof jsonrpc.gettxoutsetinfo, 'function')
    })

    it('should have getinfo method', function () {
      assert.equal(typeof jsonrpc.getinfo, 'function')
    })

    it('should have getbestblockhash method', function () {
      assert.equal(typeof jsonrpc.getbestblockhash, 'function')
    })

    it('should have getconnectioncount method', function () {
      assert.equal(typeof jsonrpc.getconnectioncount, 'function')
    })

    it('should have getdifficulty method', function () {
      assert.equal(typeof jsonrpc.getdifficulty, 'function')
    })

    it('should have stop method', function () {
      assert.equal(typeof jsonrpc.stop, 'function')
    })

    it('should have dumpprivkey method', function () {
      assert.equal(typeof jsonrpc.dumpprivkey, 'function')
    })

  })

})
