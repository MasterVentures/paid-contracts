require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require('hardhat-contract-sizer');
require("@nomiclabs/hardhat-ethers");
require("hardhat-typechain");
require("@typechain/ethers-v5");
require('dotenv').config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
	defaultNetwork: "localhost",
	networks: {
		localhost: {
      		url: "http://127.0.0.1:8545"
    	},
		mainnet: {
			chainId: 1,
			url: `https://mainnet.infura.io/v3/${process.env.INFURAKEY}`,
			gasPrice: 135000000000,
			accounts: {
				mnemonic:process.env.MNEMONIC
			}
		},
		ropsten: {
			chainId: 3,
			url: `https://ropsten.infura.io/v3/${process.env.INFURAKEY}`,
			gasPrice: 135000000000,
			accounts: {
				mnemonic:process.env.MNEMONIC
			}
		},
		rinkeby: {
			chainId: 4,
			url: `https://rinkeby.infura.io/v3/${process.env.INFURAKEY}`,
			gasPrice: 135000000000,
			accounts: {
				mnemonic:process.env.MNEMONIC
			}
		},
		bsc_mainnet: {
			chainId: 56,
			url: process.env.URL_BSC,
			gasPrice: 65000000000,
			accounts: {
				mnemonic:process.env.MNEMONIC
			}
		},
		bsc_testnet: {
			chainId: 97,
			url: process.env.URL_TESTNET_BSC,
			gasPrice: 50000000000,
			accounts: {
				mnemonic:process.env.MNEMONIC
			}
		},
		moonbase: {
			// Need to go to Dicord channel and get DEV (coin in Moonbase Alphanet)
			// 
			chainId: 1287,
			url: process.env.URL_MOONBEAM_TESTNET,
			gasPrice: 50000000000,
			accounts: {
				mnemonic:process.env.MNEMONIC
			}
		},
		hardhat: {
		}
	},
	solidity: {
		version: "0.8.0",
		settings: {
			optimizer: {
				enabled: true,
				runs: 200
			}
		}
	},
	paths: {
		sources: "./contracts",
		tests: "./test",
		cache: "./cache",
		artifacts: "./artifacts"
	},
	mocha: {
		timeout: 20000
	},
	gasReporter: {
		currency: 'USD',
		gasPrice: 150
	},
	contractSizer: {
		alphaSort: true,
		runOnCompile: true,
		disambiguatePaths: false,
	}
};

