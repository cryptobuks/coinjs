var coin = require('../lib/coin.js')
var expect = require('chai').expect

describe('Coin', function () {
  describe('Projects', function () {
    it('should have a Bitcoin project', function () {
      expect(coin.Projects.bitcoin).exist

      expect(coin.Projects.bitcoin.mainnet).exist
      expect(coin.Projects.bitcoin.mainnet.port).exist
      expect(coin.Projects.bitcoin.mainnet.port).match(/\d+/)
      expect(coin.Projects.bitcoin.mainnet.port).equal(8332)

      expect(coin.Projects.bitcoin.testnet).exist
      expect(coin.Projects.bitcoin.testnet.port).exist
      expect(coin.Projects.bitcoin.testnet.port).match(/\d+/)
      expect(coin.Projects.bitcoin.testnet.port).equal(18332)
    })

    it('should have a Litecoin project', function () {
      expect(coin.Projects.litecoin).exist

      expect(coin.Projects.litecoin.mainnet).exist
      expect(coin.Projects.litecoin.mainnet.port).exist
      expect(coin.Projects.litecoin.mainnet.port).match(/\d+/)
      expect(coin.Projects.litecoin.mainnet.port).equal(9332)

      expect(coin.Projects.litecoin.testnet).exist
      expect(coin.Projects.litecoin.testnet.port).exist
      expect(coin.Projects.litecoin.testnet.port).match(/\d+/)
      expect(coin.Projects.litecoin.testnet.port).equal(19332)
    })

  })

  describe('JSONRPC', function () {
    it('should have a JSONRPC() function', function () {
      expect(coin.JSONRPC).instanceof(Function)
    })

    var jsonrpc = new coin.JSONRPC()

    it('should have getblockcount method', function () {
      expect(jsonrpc.getblockcount).instanceof(Function)
    })

    it('should have getblockhash method', function () {
      expect(jsonrpc.getblockhash).instanceof(Function)
    })

    it('should have getblock method', function () {
      expect(jsonrpc.getblock).instanceof(Function)
    })

    it('should have getrawtransaction method', function () {
      expect(jsonrpc.getrawtransaction).instanceof(Function)
    })

    it('should have decoderawtransaction method', function () {
      expect(jsonrpc.decoderawtransaction).instanceof(Function)
    })

    it('should have getrawmempool method', function () {
      expect(jsonrpc.getrawmempool).instanceof(Function)
    })

    it('should have getpeerinfo method', function () {
      expect(jsonrpc.getpeerinfo).instanceof(Function)
    })

    it('should have signrawtransaction method', function () {
      expect(jsonrpc.signrawtransaction).instanceof(Function)
    })

    it('should have gettxout method', function () {
      expect(jsonrpc.gettxout).instanceof(Function)
    })

    it('should have importprivkey method', function () {
      expect(jsonrpc.importprivkey).instanceof(Function)
    })

    it('should have sendrawtransaction method', function () {
      expect(jsonrpc.sendrawtransaction).instanceof(Function)
    })

    it('should have gettxoutsetinfo method', function () {
      expect(jsonrpc.gettxoutsetinfo).instanceof(Function)
    })

    it('should have getinfo method', function () {
      expect(jsonrpc.getinfo).instanceof(Function)
    })

    it('should have getbestblockhash method', function () {
      expect(jsonrpc.getbestblockhash).instanceof(Function)
    })

    it('should have getconnectioncount method', function () {
      expect(jsonrpc.getconnectioncount).instanceof(Function)
    })

    it('should have getdifficulty method', function () {
      expect(jsonrpc.getdifficulty).instanceof(Function)
    })

    it('should have stop method', function () {
      expect(jsonrpc.stop).instanceof(Function)
    })

    it('should have dumpprivkey method', function () {
      expect(jsonrpc.dumpprivkey).instanceof(Function)
    })

  })

})
