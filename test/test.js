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
  })
})
