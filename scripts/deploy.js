// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const fs = require('fs');
const ContractImportBuilder = require('../abi-builder/main.js');
const AgreementAbi = require('../artifacts/contracts/Agreement.sol/Agreement.json')

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Agreement = await hre.ethers.getContractFactory("Agreement");
  const agreement = await Agreement.deploy();

  const Agreements = await agreement.deployed();

	const builder = new ContractImportBuilder();
  const path = `${__dirname}/../abi-export/agreement.js`;
	console.log("Path: ", path);
  builder.setOutput(path);
	builder.onWrite = (output) => {
    fs.writeFileSync(path, output);
  };
  builder.addContract(
    'AgreementContractHardHat',
    AgreementAbi,
    Agreements.address,
    'rinkeby'
  );

	console.log("Agreements deployed to:", Agreements.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });