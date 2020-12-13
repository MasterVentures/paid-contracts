const HDWalletProvider = require('truffle-hdwallet-provider');
require('dotenv').config();
module.exports = {
  compilers: {
    solc: {
      version: '0.6.10',
      settings: {
        // Optional: Optimizer settings
        optimizer: {
          // disabled by default
          enabled: true,
          // Optimize for how many times you intend to run the code.
          // Lower values will optimize more for initial deployment cost, higher
          // values will optimize more for high-frequency usage.
          runs: 200,
          // Switch optimizer components on or off in detail.
          // The "enabled" switch above provides two defaults which can be
          // tweaked here. If "details" is given, "enabled" can be omitted.
          details: {
            // The peephole optimizer is always on if no details are given,
            // use details to switch it off.
            peephole: true,
            // The unused jumpdest remover is always on if no details are given,
            // use details to switch it off.
            jumpdestRemover: true,
            // Sometimes re-orders literals in commutative operations.
            orderLiterals: false,
            // Removes duplicate code blocks
            deduplicate: false,
            // Common subexpression elimination, this is the most complicated step but
            // can also provide the largest gain.
            cse: false,
            // Optimize representation of literal numbers and strings in code.
            constantOptimizer: true,
            // The new Yul optimizer. Mostly operates on the code of ABIEncoderV2
          },
        },
      },
    },
  },
  mocha: {
    reporter: 'eth-gas-reporter',
    reporterOptions: {
      excludeContracts: ['Documents'],
      currency: 'USD',
    },
  },
  networks: {
    test: {
      from: '0xeF5A72FD0B636c46e0B8eF2215BbEdEA3e5Ff710',
      host: 'localhost',
      port: 7545,
      network_id: '*', // Match any network id
    },
    development: {
      from: '0xeF5A72FD0B636c46e0B8eF2215BbEdEA3e5Ff710',
      host: 'localhost',
      port: 7545,
      network_id: '*', // Match any network id
    },
    rinkeby: {
      provider: () =>
        new HDWalletProvider(process.env.MNEMONIC, process.env.RINKEBY_URL),
      network_id: 4,
      gas: 7000000,
      gasPrice: 10000000000,
    },
    mainnet: {
      provider: () =>
        new HDWalletProvider(process.env.MNEMONIC, process.env.URL),
      network_id: 1,
      gas: 2500000,
      gasPrice: 18000000000,
    },
    ropsten: {
      provider: () =>
        new HDWalletProvider(process.env.MNEMONIC, process.env.URL),
      network_id: 3,
      gas: 4500000,
      gasPrice: 10000000000,
    },
  },
};
