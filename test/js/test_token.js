const utils = require('./utils')
var Web3 = require('web3');
var web3 = new Web3('ws://localhost:8545');

const CustomToken = artifacts.require('CustomToken');

contract('CustomToken', function(accounts) {
  let customToken;

  beforeEach(async () => {
    customToken = await CustomToken.new(100000000, 'Custom Token', 18, 'TKN');
  })

  /** publish() **/
  it("should initialize test", async () => {
      assert.equal(true, true, 'should initialize test');
  });


});
