// const Agreement = artifacts.require('Agreement');

// module.exports = function(deployer) {
// 	deployer.deploy(Agreement);
// };
const fs = require('fs');
const Agreement = artifacts.require('Agreement');
const ContractImportBuilder = require('../abi-builder/main');
module.exports = async (deployer, network, accounts) => {
 // await deployer.deploy(WhitelistPaymaster);
 // const paymaster = await WhitelistPaymaster.deployed();
  // Ropsten Testnet
  await deployer.deploy(Agreement);
  const Agreements = await Agreement.deployed();
  // await documents.setTrustedForwarder('0xcc87aa60a6457d9606995c4e7e9c38a2b627da88');
  // await paymaster.setRelayHub('0xEF46DD512bCD36619a6531Ca84B188b47D85124b');
  // const relayHub = await RelayHub.at('0xEF46DD512bCD36619a6531Ca84B188b47D85124b');
  // /// const depositAmount = 1e18;
  // await relayHub.depositFor(paymaster.address, { value: 0.2*1e18 });
  const builder = new ContractImportBuilder();
  const path = `${__dirname}/../abi-export/agreement.js`;
  builder.setOutput(path);
  builder.onWrite = (output) => {
    fs.writeFileSync(path, output);
  };
  builder.addContract(
    'AgreementContract',
    Agreements,
    Agreements.address,
    network
  );
  // builder.addContract(
  //   'WhitelistPaymaster',
  //   paymaster,
  //   paymaster.address,
  //   network
  // );
  // builder.addContract(
  //   'TrustedForwarder',
  //   trustedFwd,
  //   trustedFwd.address,
  //   network
  // );
};