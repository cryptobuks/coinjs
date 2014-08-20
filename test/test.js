var coin = require('../lib/coin.js')
var expect = require('chai').expect
var nock = require('nock')

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

    var jsonrpc = new coin.JSONRPC({
      username: process.env.BITCOINRPC_USER,
      password: process.env.BITCOINRPC_PASS,
      port: coin.Projects.bitcoin.testnet.port
    })

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


    // async

    it('#getblockcount() should return current block count', function (done) {

      nock(jsonrpc.hostname + ':' + jsonrpc.port)
        .post('/', {"jsonrpc":"2.0","method":"getblockcount","params":[]})
        .reply(200, {"result":276221,"error":null,"id":null}, { date: 'Wed, 20 Aug 2014 03:50:35 +0000',
        connection: 'keep-alive',
        'content-length': '41',
        'content-type': 'application/json',
        server: 'bitcoin-json-rpc/v0.9.2.1-g354c0f3-beta' });

      jsonrpc.getblockcount(function (err, count) {
        if (err)
          done(err)
        else {
          expect(typeof count).equal('number')
          done()
        }
      })
    })


    it('#getblockhash() should return block hash', function (done) {
      // nock.recorder.rec();

      nock(jsonrpc.hostname + ':' + jsonrpc.port)
        .post('/', {"jsonrpc":"2.0","method":"getblockhash","params":[0]})
        .reply(200, {"result":"000000000933ea01ad0ee984209779baaec3ced90fa3f408719526f8d77f4943","error":null,"id":null}, { date: 'Tue, 19 Aug 2014 19:56:56 +0000',
        connection: 'keep-alive',
        'content-length': '101',
        'content-type': 'application/json',
        server: 'bitcoin-json-rpc/v0.9.2.1-g354c0f3-beta' });

      jsonrpc.getblockhash(0, function (err, hash) {
        if (err)
          done(err)
        else {
          expect(hash).equal('000000000933ea01ad0ee984209779baaec3ced90fa3f408719526f8d77f4943')
          done()
        }
      })
    })


  })

})
