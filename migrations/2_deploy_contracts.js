let CustomToken = artifacts.require('CustomToken');

module.exports = function(deployer) {
  deployer.deploy(CustomToken, 100000000, 'Custom Token', 18, 'TKN');
};
